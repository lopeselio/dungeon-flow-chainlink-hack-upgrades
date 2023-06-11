# The Dungeon Flow - Chainlink Hack Upgrades


<p align="center">
   <a href="/">
    <img src="https://user-images.githubusercontent.com/43913734/222053622-56ce8493-5e31-4b8e-93c7-4a513a1865c3.png" alt="Logo" width="240" height="240">
  </a> 

  <h6>Initiated during Flow Hackathon Devfolio 2023 & Improved during Chainlink Spring Hackathon 2023</h6>


  <img width="340" alt="image" src="https://user-images.githubusercontent.com/43913734/222052581-327dc84c-3ffa-4363-a295-53c9364750ed.png">
<img width="1432" alt="image" src="https://github.com/lopeselio/dungeon-flow-chainlink-hack-upgrades/assets/43913734/46754009-fbd9-422a-8c7a-5d0a9e5b67de">

  </p>

  <p>View the project demo on <a href="https://youtu.be/4-_f8R6n8Sw">YouTube</a></p>
</p>



<h1 align="center">Preview</h1>
- An RPG game built on the Flow Blockchain, check the youtube video to view the demo. 

- Signup using Blockto Wallet using your email to obtain an addresss

- Story based gameplay, Player has to collect loot from the chests, and kill the guarding monsters who have different hit points.

- Player has to unlock the locked token gates to reach the Flow NFT collectible found at the End of the gameplay.


- For achieving this, he has to break open the walls to unlock and find the mysterious wizard who is held captive and fetch the key to the gate.


- In the end, after killing the evil angel, the player finally gets the key to the ultimate gate to get to the Flow NFT.


- Player has three lives and is minted 4 coins and an NFT for every every Chest collected, and also mints a non-fungible token to his Blockto custodial wallet

- Players can also view their game collectibles in the Player Dashboard on the game UI


## Contract address 
Game NFT Contract deployed on Flow Testnet : `0x9f690718478ff417`
- [Verify on Flow Testnet](https://testnet.flowscan.org/account/0x9f690718478ff417)
- [Verify testnet deployment on Flow-view-source](https://flow-view-source.com/testnet/account/0x9f690718478ff417)
![image](https://github.com/lopeselio/dungeon-flow-chainlink-hack-upgrades/assets/43913734/cf3a7e76-cc40-4c4f-b28c-eb4851c497a6)
<img width="837" alt="image" src="https://github.com/lopeselio/dungeon-flow-chainlink-hack-upgrades/assets/43913734/5e7cfa16-8eb4-46cd-b307-968c20224ce4">

  

## Proposed Design
![image](https://user-images.githubusercontent.com/43913734/222055156-b4c22ca4-02a0-4ce3-9aae-c4deebc72536.png)



# Tech Stack
![image](https://user-images.githubusercontent.com/43913734/222055680-96a9a470-e5d2-4215-b357-d08f1dddf082.png)
- PhaserJS
- React
- Flow fcl
- Blockto Wallet
- Aseprite 

# Future Plan
- Introduce Game Token
- Introduce Native Maketplace and multi-character feature
- Allow players to create and uplaod their own storylines and characters to the platform with DAO token incentives
- Stake and Battle modes
- In game DEX on Flow Blockchain

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
Dashboard
![image](https://user-images.githubusercontent.com/43913734/222063091-326c60d5-dbd4-41f1-bfe7-dc71f732696d.png)



![Screenshot 2023-03-01 at 12 01 28 PM](https://user-images.githubusercontent.com/43913734/222063225-1e25ef5c-8c1b-45d6-beb0-4729bd871abd.png)

<img width="1435" alt="Screenshot 2023-06-12 at 1 13 21 AM" src="https://github.com/lopeselio/dungeon-flow-chainlink-hack-upgrades/assets/43913734/6aa7e51b-85cc-4c8d-b431-1ce41859a5ac">

<img width="1438" alt="Screenshot 2023-06-12 at 1 13 40 AM" src="https://github.com/lopeselio/dungeon-flow-chainlink-hack-upgrades/assets/43913734/0fa051b6-ee03-4b51-b523-a56ea0db5748">

<img width="537" alt="Screenshot 2023-06-12 at 1 13 57 AM" src="https://github.com/lopeselio/dungeon-flow-chainlink-hack-upgrades/assets/43913734/5eb471bc-434a-4fcd-b1dc-0ade68a610e9">

![Uploading Screenshot 2023-06-12 at 1.15.07 AM.png…]()


![image](https://user-images.githubusercontent.com/43913734/222063299-3de62ca9-bb72-473c-a661-e94b47433a5e.png)

![image](https://user-images.githubusercontent.com/43913734/222063360-9cdabff4-8ad6-428a-883e-6b2d5859adc6.png)

![image](https://user-images.githubusercontent.com/43913734/222063456-8e2ca907-ff9f-48c2-9d1b-3f3e5a653a84.png)

![image](https://user-images.githubusercontent.com/43913734/222063480-1aaae622-978b-464d-b3f6-77084b6a0ea4.png)
   
![image](https://user-images.githubusercontent.com/43913734/222063519-6480b0bf-6dd1-48b5-ba83-9c5af23a873b.png)

![image](https://user-images.githubusercontent.com/43913734/222063674-c1104182-6563-4012-a031-79f8fc75360e.png)

![image](https://user-images.githubusercontent.com/43913734/222063722-b61a67e3-c7fc-4b51-8d5c-c8f1f71deecd.png)

![image](https://user-images.githubusercontent.com/43913734/222063751-19a0839f-6f01-4a4f-8b1a-e1ce94afcb10.png)

![image](https://user-images.githubusercontent.com/43913734/222063787-9cf6554b-6f74-4808-85a6-4d8c0d82b3b2.png)

![Screenshot 2023-03-01 at 12 05 41 PM](https://user-images.githubusercontent.com/43913734/222063818-a89e14dc-9d6c-4fe4-8f23-8ba509741c09.png)

![image](https://user-images.githubusercontent.com/43913734/222063966-5831a4c0-cf5d-424e-b89b-21d2e6a6e20c.png)






