import { ethers } from "hardhat";

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");

  const contract = await SimpleStorage.deploy(); 
  await contract.waitForDeployment();

  console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
