import React from 'react'
import { Image, Button } from 'react-bootstrap'
import { BsHeart } from "react-icons/bs";
import {FiThumbsUp} from 'react-icons/fi';

export default function Box({name,img,level, price}) {

  // const IPFS=require(‘ipfs-http-client’);
// const client = IPFS({host:‘ipfs.infura.io’,port:5001,protocol:‘https’});
// const client = create({ host: 'ipfs.infura.io', port: '5001', apiPath: '/ipfs/api/v0' })
// const auth =
//     'Basic ' + Buffer.from(INFURA_ID + ':' + INFURA_SECRET_KEY).toString('base64');
// const client = ipfsClient.create({
//     host: 'ipfs.infura.io',
//     port: 5001,
//     protocol: 'https',
//     headers: {
//         authorization: auth,
//     },
// });

  // function handleUpvote(){
  //       const requestOptions = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ title: "React POST Request Example" }),
  //       };
  //       fetch("https://reqres.in/invalid-url", requestOptions)
  //         .then(async (response) => {
  //           const isJson = response.headers
  //             .get("content-type")
  //             ?.includes("application/json");
  //           const data = isJson && (await response.json());

  //           // check for error response
  //           if (!response.ok) {
  //             // get error message from body or default to response status
  //             const error = (data && data.message) || response.status;
  //             return Promise.reject(error);
  //           }

  //           this.setState({ postId: data.id });
  //         })
  //         .catch((error) => {
  //           this.setState({ errorMessage: error.toString() });
  //           console.error("There was an error!", error);
  //         });
  // }
      //  const handleUpvote = async () => {
      //    const response = await fetch(
      //      `https://dungeon-crawler-1.herokuapp.com/v1/character/vote/?characName=${name}&walletAddress=0x1234556`
      //    );
      //    const data = await response.json();
      //    console.log(data);
      //  };
    return (
      <div className="action-cards">
        <div className="card-owner-like">
          <div className="text-header1">
            {" "}
            Item: <span className="name-artist">{name}</span>{" "}
          </div>
          <div className="text-header1">
            {" "}
            Level: <span className="name-artist">{level}</span>{" "}
          </div>
          <img src="https://ipfs.io/ipfs/QmWV3Z5fgJyQSTh4ibe3p6V2nydyL6pjeqAZTU4ZDL4f1t?filename=like-outlined.svg"
           className="like-button" alt="like" />
        </div>
        <div className="imageBox">
          <Image
            src={img}
            roundedCircle
            style={{
              height: 150,
              width: 150,
              alignSelf: "center",
              justifyContent: "center",
            }}
          />
        </div>
        <div className="imageDetails">
          
          <div className="upvote">
            <a href="#">
              {price}
              {/* <img src="https://ipfs.io/ipfs/Qmbvgv6YqyTeopjdutCKohrEMxL4Dmd3xpbjpUDAN4Axdj?filename=upvote.svg" 
              alt="Upvote Button" /> */}
            </a>
          </div>
        </div>
      </div>
    );
}
