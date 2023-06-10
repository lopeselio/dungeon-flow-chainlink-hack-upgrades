import './App.css';

import * as fcl from "@onflow/fcl";

import React, {useState, useEffect} from 'react';
import {getNFTsScript} from "../scripts/get_nfts";


function Collection(props) {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    getUserNFTs();
  }, [])

  const getUserNFTs = async () => {
      const result = await fcl.send([
          fcl.script(getNFTsScript),
          fcl.args([
              fcl.arg(props.address, fcl.t.Address)
          ])
      ]).then(fcl.decode);

      console.log(result);
      setNFTs(result);
  }
 
  return (
    <div className="w-100 p-3">
    <h6 style={{color: "white"}}>Owned Collectibles</h6>
      {nfts.map(nft => (
          <div style={{backgroundColor: 'lightgreen'}} key={nft.id}>
              <h1>{nft.id}</h1>
              <img style={{width: "100px"}} src={`https://ipfs.io/ipfs/${nft.ipfsHash}`} />
              <h1>{nft.metadata.name}</h1>
          </div>
      ))}
    </div>
  );
}

export default Collection;
