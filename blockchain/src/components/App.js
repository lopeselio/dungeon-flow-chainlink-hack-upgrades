import React, {useState}  from 'react';
import * as fcl from '@onflow/fcl'
import './App.css';
import { Image } from 'react-bootstrap'
import {getNFT} from "../cadence/scripts/getNFT.js"
import {TotalSupply} from "../cadence/scripts/getTotalSupply.js"
import {createNFT} from "../cadence/transactions/createNFT.js"
import FlowLogo from '../assets/flow.png'

fcl.config()
 .put("app.detail.title", "My Flow NFT DApp")
 .put("app.detail.icon", "https://raw.githubusercontent.com/ThisIsCodeXpert/Flow-NFT-DApp-Tutorial-Series/main/cats/cat5.svg")
 .put("accessNode.api", "https://rest-testnet.onflow.org")
 .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")

function App() {

    const [user, setUser] = useState()
    const [totalsupply, setTotalSupply] = useState();
    const [NFTURL, setNFTURL] = useState([]);


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
  
      setNFTURL(result[1])
      console.log(result[1])
      console.log(NFTURL)
  
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

    return (
      <div className="screen">
        
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
              <button onClick={() => logIn()}>LogIn</button>
              <small className='text-white'><span id='account' className='text-header1'>      {user && user.addr ? user.addr : ''}</span></small>
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
                    onClick={() => CreateNFT()}
                    >
                    Mint NFT
                </button>

                }
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
                      <div className="giftBox">
                        <img src={NFTURL} style={{ height: 100, width: 100, alignSelf: 'center', justifyContent: 'center' }} />
                      </div>
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
      </div >
    );
}
export default App