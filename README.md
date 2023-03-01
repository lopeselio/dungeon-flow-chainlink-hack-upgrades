# The Dungeon Flow


<p align="center">
   <a href="/">
    <img src="https://user-images.githubusercontent.com/43913734/222053622-56ce8493-5e31-4b8e-93c7-4a513a1865c3.png" alt="Logo" width="240" height="240">
  </a> 

  <h6>Built at Flow HAckathon Devfolio 2023</h6>


  <img width="340" alt="image" src="https://user-images.githubusercontent.com/43913734/222052581-327dc84c-3ffa-4363-a295-53c9364750ed.png">

  </p>

  <p>View the project demo on <a href="">YouTube</a></p>
</p>



<h1 align="center">Preview</h1>
- Story based gameplay, Player has to collect loot from the chests, and kill the guarding monsters.

- Player has to unlock the locked token gates to reach the Mantle NFT collectible found at the End of the gameplay.


- For achieving this, he has to break open the walls to unlock and find the mysterious wizard who is held captive and fetch the key to the gate.


- In the end, after killing the evil angel, the player finally gets the key to the ultimate gate to get to the Mantle NFT.


- Player has three lives and is minted 4 DGN tokens for every Chest collected.

## Contract address 
Game NFT Contract deployed on Flow Testnet : `0x7da523a18f7eb2c4`
[Verify on Flow Testnet](https://testnet.flowscan.org/account/0x7da523a18f7eb2c4)

  

## Proposed Design
![image](https://user-images.githubusercontent.com/43913734/222055156-b4c22ca4-02a0-4ce3-9aae-c4deebc72536.png)



# Tech Stack
![image](https://user-images.githubusercontent.com/43913734/222055680-96a9a470-e5d2-4215-b357-d08f1dddf082.png)


# How to run ?

In the project root:
`yarn && yarn start`


In `blockchain/src/components/App.js`, please verify the flow client library config
`
fcl.config()
 .put("app.detail.title", "My Flow NFT DApp")
 .put("accessNode.api", "https://rest-testnet.onflow.org")
 .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
`


Block explorer: `https://testnet.flowscan.org/`

# To deploy contract
-  `flow init`
- `flow accounts create`
- Added the new account to flow.json.
- Saved the private key to test.pkey.
- Added test.pkey to .gitignore.
Fund Wallet with TEST FLOW Tokens: [https://testnet-faucet.onflow.org/fund-account](https://testnet-faucet.onflow.org/fund-account)
- flow accounts add-contract <CONTRACT-NAME> <CONTRACT-NAME>.cdc -n testnet --signer <ACCOUNTNAME> 



# Screenshots 

