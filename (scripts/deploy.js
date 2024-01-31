// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying MyToken...");
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();
  await myToken.deployed();
  console.log("MyToken deployed to:", myToken.address);

  console.log("Deploying FuelDex...");
  const FuelDex = await ethers.getContractFactory("FuelDex");
  const fuelDex = await FuelDex.deploy();
  await fuelDex.deployed();
  console.log("FuelDex deployed to:", fuelDex.address);

  console.log("Deployment complete.");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
