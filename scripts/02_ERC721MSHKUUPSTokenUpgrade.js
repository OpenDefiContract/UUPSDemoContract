const {
    ethers,
    upgrades
} = require("hardhat");

const PROXY = '0xBD4990906De0B724124359898DAD9152134AB48B';//代理合约的地址

async function main() {
    const mV2 = await ethers.getContractFactory("ERC721MSHKUUPSTokenV2");
    console.log("Upgrading ERC721MSHKUUPSTokenV2...");
    var m = await upgrades.upgradeProxy(PROXY, mV2);
    console.log("ERC721MSHKUUPSTokenV2 upgraded successfully", m.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
