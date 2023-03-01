import React,{useState, useEffect} from 'react'
import '../styles/booth.css'
import Header from './StoryHeader'
import Box from './Box'





export default function App() {
    
  return (
    <div className="main screen">
      <Header title={"Shop Items and Upgrade"} />
      <div className="body">
        <div class="flex-container">
            <Box
                  img="https://ipfs.io/ipfs/QmQaK4v8vJNGqQsGW2SgQBMoWBkgH6xKEdcUiDNnUxFC92?filename=dagger1.jpg"
                  name="Dagger"
                  level="1"
                  price="BUY 200 FLOW"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmPW8c7YkxPXd1vfxN3gQweqNE9ZrJfCm71QY6UTbGXkBZ?filename=axe.png"
                  name="Power Axe"
                  level="3"
                  price="BUY 400 FLOW"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmbWoyozndwSU6XSVKSqZTNoXJ5asprJsQ1x1KvDn9dXvN?filename=chestasset.png"
                  name="Epic Chest"
                  level="2"
                  price="BUY 300 FLOW"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmZyz8xdnEr61Le1AAht9Vs9qRWbw96rZbx3y9944vAom8?filename=shield.png"
                  name="Power Shield"
                  level="3"
                  price="BUY 600 FLOW"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmZ8caFHAyDfEt2JwjQm812jZ37Z2NTmHhKqxhwVmXkdiG?filename=hammer.jpg"
                  name="Power Hammer"
                  level="4"
                  price="BUY 800 FLOW"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmZgYzvCZ4GujsnpDpA2LEdybZKWrzJ23nrtEdEigbhLcS?filename=arrow.jpeg"
                  name="Power Hammer"
                  level="2"
                  price="BUY 250 FLOW"
            />
        </div>
      </div>
    </div>
  );
}