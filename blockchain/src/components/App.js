import React, {useEffect, useState}  from 'react';
import './App.css';
import * as fcl from "@onflow/fcl";
import {create} from 'ipfs-http-client';
import Collection from './Collection';
import SaleCollection from './SaleCollection';
import { Image } from 'react-bootstrap'
import {getNFT} from "../cadence/scripts/getNFT.js"
import {TotalSupply} from "../cadence/scripts/getTotalSupply.js"
import {createNFT} from "../cadence/transactions/createNFT.js"
import FlowLogo from '../assets/flow.png'
import { mintNFT } from '../transactions/mint_nft'
import { setupUserTx } from '../transactions/setup_user'
import {listForSaleTx} from "../transactions/list_for_sale";
import {unlistFromSaleTx} from "../transactions/unlist_from_sale"
import { Buffer } from "buffer";


const projectId = "2Qyc535fPXIPfXiPK3u43iOjopV";
const projectSecret = "e27e74b5ceb212494d4c4b1d071583b4";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString(
  "base64"
)}`;

const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  apiPath: "/api/v0",
  headers: {
    authorization: auth,
  },
});

// const client = create({ host: 'localhost', port: '5001', protocol: 'http' })

fcl.config()
 .put("app.detail.title", "My Flow NFT DApp")
 .put("app.detail.icon", "https://raw.githubusercontent.com/ThisIsCodeXpert/Flow-NFT-DApp-Tutorial-Series/main/cats/cat5.svg")
 .put("accessNode.api", "https://rest-testnet.onflow.org")
 .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")

function App() {

    const [user, setUser] = useState()
    const [totalsupply, setTotalSupply] = useState();
    const [NFTURL, setNFTURL] = useState([]);
    const [nameOfNFT, setNameOfNFT] = useState('');
    const [file, setFile] = useState();
    const [id, setID] = useState();
    const [price, setPrice] = useState();
    const [address, setAddress] = useState();
    const [officialAddress, setOfficialAddress] = useState('');

    useEffect(() => {
      // sets the user variable to th person that is logged in through Blocto
      fcl.currentUser().subscribe(setUser);
    }, [])

    // new login function
    const login = () => {
      fcl.authenticate();
      GetTotalSupply();
    }


    // const ImageURLS = ["https://cdn-icons-png.flaticon.com/512/5219/5219258.png","https://raw.githubusercontent.com/IntoTheVerse/Dungeon-Hunt-Celo/main/blockchain/src/assets/chest.gif?token=GHSAT0AAAAAABYWXWB2NAHEQC7OZE3PYTQSY76VOEQ", "https://raw.githubusercontent.com/IntoTheVerse/Dungeon-Hunt-Celo/main/blockchain/src/assets/nft.gif?token=GHSAT0AAAAAABYWXWB2X4BP4Y2VCXUR2JWOY76VP7A", "https://thumbs.gfycat.com/AlarmingSereneGerenuk.webp", "https://raw.githubusercontent.com/ThisIsCodeXpert/Flow-NFT-DApp-Tutorial-Series/main/cats/cat4.svg", "https://raw.githubusercontent.com/ThisIsCodeXpert/Flow-NFT-DApp-Tutorial-Series/main/cats/cat5.svg", "https://raw.githubusercontent.com/ThisIsCodeXpert/Flow-NFT-DApp-Tutorial-Series/main/cats/cat6.svg", "https://raw.githubusercontent.com/ThisIsCodeXpert/Flow-NFT-DApp-Tutorial-Series/main/cats/cat7.svg"]
    const ImageURLS = ["https://raw.githubusercontent.com/lopeselio/img-dumps/main/trophy-18.png","https://raw.githubusercontent.com/lopeselio/img-dumps/main/trophy-18.png","https://raw.githubusercontent.com/lopeselio/img-dumps/main/trophy-18.png"]


    const logIn =  () => {
      fcl.authenticate();
      fcl.currentUser().subscribe(setUser);
      GetTotalSupply();
      // GetMyNFT();
    }

    // 0e184ba16cbd47cb

    const GetMyNFT = async () =>{

      const result = await fcl.send([
        fcl.script(getNFT), fcl.args([fcl.arg(user.addr, fcl.t.Address)])
      ]).then(fcl.decode)
  
      setNFTURL(result)
      console.log(result)
  
    }
  
    const GetTotalSupply = async () =>{
      const result = await fcl.send([
        fcl.script(TotalSupply)
      ]).then(fcl.decode)
  
      setTotalSupply(result)
      console.log(result)
    }
  
    const CreateNFT = async () =>{
      const transactionID = await fcl.send([
        fcl.transaction(createNFT),
        fcl.args([fcl.arg(ImageURLS[parseInt(totalsupply)], fcl.t.String)]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode)
  
      console.log(transactionID)
    }

    const mint = async () => {

      try {
        const added = await client.add(file)
        const hash = added.path;
  
        const transactionId = await fcl.send([
          fcl.transaction(mintNFT),
          fcl.args([
            fcl.arg(hash, fcl.t.String),
            fcl.arg(nameOfNFT, fcl.t.String)
          ]),
          fcl.payer(fcl.authz),
          fcl.proposer(fcl.authz),
          fcl.authorizations([fcl.authz]),
          fcl.limit(9999)
        ]).then(fcl.decode);
    
        console.log(transactionId);
        return fcl.tx(transactionId).onceSealed();
      } catch(error) {
        console.log('Error uploading file: ', error);
      }
    }

    const setupUser = async () => {
      const transactionId = await fcl.send([
        fcl.transaction(setupUserTx),
        fcl.args([]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
  
      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    }

    const listForSale = async () => {
      const transactionId = await fcl.send([
        fcl.transaction(listForSaleTx),
        fcl.args([
          fcl.arg(parseInt(id), fcl.t.UInt64),
          fcl.arg(price, fcl.t.UFix64)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);
  
      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    }
  
    const unlistFromSale = async () => {
      const transactionId = await fcl.send([
        fcl.transaction(unlistFromSaleTx),
        fcl.args([
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
      <div className="screen">
        <div>
        
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-header"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Dungeon Flow
          </a>
          <ul className='navbar-nav px-3'>
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <button onClick={() => login()}>LogIn</button>
              <small className='text-white'><span id='account' className='text-header1'>      {user && user.addr ? user.addr : ''}</span></small>
              <button onClick={() => fcl.unauthenticate()}>Logout</button>
              <button onClick={() => setupUser()}>Setup User</button>
            </li>
          </ul>
        </nav>
        
        <div className='nft-sec container-fluid mt-5'>
          <div className='row'>
            <main role='main' className='col-lg-12 d-flex text-center'>
              <div className="trophy-section-header">
                <h5 className="trophy-title"><span>  </span>Your Trophy Cabinet <span> </span></h5>
                <h5 className="text-header1 white">Powered by <img src={FlowLogo} className='chainlink' /><span className="hovero">Flow Blockchain</span>  </h5>
                {
                  <button
                    type="submit"
                    className="btn btn-link btn-block btn-sm mint-btn dispToken"
                    onClick={() => GetMyNFT()}
                    >
                    Get NFT
                </button>

                }
              </div>
            </main>
            <p>
            <div className='gift'>
              <h3>Trophies collected after successful victories</h3>
            {NFTURL.map(nft => (
          <div className="gift" key={nft.id}>
              <h1>{nft.id}</h1>
              <img style={{ height: 100, width: 100, alignSelf: 'center', justifyContent: 'center' }} src={`https://raw.githubusercontent.com/lopeselio/img-dumps/main/trophy-18.png`} />
          </div>
      ))}
                      {/* <div className="giftBox">
                        <img src={NFTURL} style={{ height: 100, width: 100, alignSelf: 'center', justifyContent: 'center' }} />
                      </div> */}
            </div>
            {/* {NFTURL.map((e,key) => {
                  return (
                    <div className='gift'>
                      <div className="giftBox">
                        <Image src={NFTURL} roundedCircle style={{ height: 100, width: 100, alignSelf: 'center', justifyContent: 'center' }} />
                      </div>
                    </div>
                  )
                })} */}
            </p>
          </div>
          <hr /><hr />

          
        </div >
        </div>
        
        <div>
        <div className='giftbox nft-sec container-fluid mt-5 btncont giftbox'>
          <input type="text" className='field' onChange={(e) => setNameOfNFT(e.target.value)} />
          <input style={{color: "white", textColor: "white"}} type="file" className='minter' onChange={(e) => setFile(e.target.files[0])} />
          <button className='minter1 btn btn-link btn-sm mint-btn dispToken' onClick={() => mint()}>Mint</button>
        </div>

        <div className='giftbox nft-sec container-fluid mt-5 btncont1 giftbox'>
          <h3 style={{color: "white", textColor: "white"}}>Search NFTs using Player address</h3>
          <label style={{color: "white", textColor: "white"}} for="fname">Search User's Adress</label>
          <input style={{marginRight: "20px"}} type="text" onChange={(e) => setAddress(e.target.value)} />
          <button className='btn btn-link btn-sm mint-btn dispToken' onClick={() => setOfficialAddress(address)}>Search</button>
        </div>

        <div className='giftbox'>
          <h3 style={{color: "white", textColor: "white"}}>List/Unlist collectibles for/off purchase</h3>
          <label style={{color: "white", textColor: "white"}} for="fname">Collectible ID:</label>
          <input style={{marginRight: "30px"}} type="text" onChange={(e) => setID(e.target.value)} />
          <label style={{color: "white", textColor: "white"}} for="fname">Collectible Price:</label>
          <input style={{marginRight: "30px"}} type="text" onChange={(e) => setPrice(e.target.value)} />
          <button className='btn btn-link btn-block btn-sm mint-btn dispToken' onClick={() => listForSale()}>List NFT for Sale</button>
          <button className='btn btn-link btn-block btn-sm mint-btn dispToken' onClick={() => unlistFromSale()}>Unlist an NFT from Sale</button> 
        </div>

        { user && user.addr && officialAddress && officialAddress !== ''
          ?
          <Collection address={officialAddress}></Collection>
          :
          null
        }

        { user && user.addr && officialAddress && officialAddress !== ''
          ?
          <SaleCollection address={officialAddress}></SaleCollection>
          :
          null
        }
      </div> 



      </div >
    );
}
export default App
