import './App.css';

import * as fcl from "@onflow/fcl";
import React, {useState, useEffect} from 'react';
import {getSaleNFTsScript} from "../scripts/get_sale_nfts";
import {purchaseTx} from "../transactions/purchase.js";

function SaleCollection(props) {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    getUserSaleNFTs();
  }, [])

  const getUserSaleNFTs = async () => {
      const result = await fcl.send([
          fcl.script(getSaleNFTsScript),
          fcl.args([
              fcl.arg(props.address, fcl.t.Address)
          ])
      ]).then(fcl.decode);

      console.log(result);
      setNFTs(result);
  }

  const purchase = async (id) => {
    const transactionId = await fcl.send([
        fcl.transaction(purchaseTx),
        fcl.args([
          fcl.arg(props.address, fcl.t.Address),
          fcl.arg(parseInt(id), fcl.t.UInt64)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
  
      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
  }
 
  return (
    <div className="w-100 p-3">
        <h6 style={{color: "white"}}>For Purchases</h6>
      {Object.keys(nfts).map(nftID => (
          <div style={{backgroundColor: 'lightblue'}} key={nftID}>
              <h1>Price: {nfts[nftID].price}</h1>
              <h1>TokenID: {nftID}</h1>
              <img style={{width: "100px"}} src={`https://ipfs.io/ipfs/${nfts[nftID].nftRef.ipfsHash}`} />
              <h1>Name: {nfts[nftID].nftRef.metadata.name}</h1>
              <button onClick={() => purchase(nftID)}>Purchase this NFT</button>
          </div>
      ))}
    </div>
  );
}

export default SaleCollection;
