import React from "react";
import "../styles/App.css";
import history from "../history";
import Carousel from "./Carousel";
import FlowLogo from '../assets/flow.png'

export default function App() {
  return (
    <div className="main screen">
      <Carousel />
      <div className="carousel-padding header"><img src={FlowLogo} className='chainlink1' />  Welcome to the Dungeon Flow <img src={FlowLogo} className='chainlink1' /></div>
      <div className="selection">
        <div
          className="select-story"
          onClick={() => {
            history.push("/store");
            history.go(0);
          }}
        >
          <h4 className="text-header">Shop Items</h4>
          <img className="dashboard-card-image" src="https://ipfs.io/ipfs/QmemTF7ziTVBFFpZzqYvSF3hdK5q6J2bZ85FYUr4mG2CUw?filename=Castle.png" 
          alt="Castel"  />
        </div>
        <div
          className="select-story"
          onClick={() => {
            history.push("/trophy");
            history.go(0);
          }}
        >
          <h4 className="text-header">Go to NFT Inventory</h4>
          <img className="dashboard-card-image" src="https://ipfs.io/ipfs/QmccVpftx3x3W7GxTQGkJjXS6VyJCpgDgHagkAoJCsLnXM?filename=home.png"
            alt="home" />
        </div>
      </div>
    </div>
  );
}