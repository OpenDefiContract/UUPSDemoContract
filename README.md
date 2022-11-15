# UUPSDemoContract
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/OpenDefiContract/UUPSDemoContract)

learn uups upgrade 

mod .env `PRIVATE_KEY`
### step:
```
yarn 
hardhat run scripts/01_ERC721MSHKUUPSToken.js --network gw_testnet_v1
// mod 02_ERC721MSHKUUPSTokenUpgrade.js:6 contract address 
hardhat run scripts/02_ERC721MSHKUUPSTokenUpgrade.js --network gw_testnet_v1
```
