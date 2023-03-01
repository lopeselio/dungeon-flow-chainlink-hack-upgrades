export const getNFT = `
import BasicNFT from 0x7da523a18f7eb2c4
pub fun main(account: Address): AnyStruct {
  let publicReference = getAccount(account).getCapability(/public/BasicNFTPath)
                                    .borrow<&BasicNFT.NFT{BasicNFT.NFTPublic}>()
                                    ?? panic("No NFT reference found here!")
  return [publicReference.getID(), publicReference.getURL()]
}
`