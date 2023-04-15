// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");
const abi = require("../artifacts/contracts/BulkSwap.sol/BulkSwap.json").abi;

// IConnext _connext,
//   ISwapRouter _swapRouter,
//     address payable _ops

const deployGoerli = async () => {
  const BulkSwap = await hre.ethers.getContractFactory("BulkSwap");
  const bulkSwap = await BulkSwap.deploy(
    "0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649",
    "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    "0xc1C6805B857Bef1f412519C4A842522431aFed39"
  )

  await bulkSwap.deployed();

  console.log(
    `Deployed to ${bulkSwap.address}`
  );

  // const contract = new ethers.Contract(
  //   "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  //   abi,
  //   hre.ethers.provider
  // );

  // const tx = await contract.executeOrder(
  //   "0x6d4b5acFB1C08127e8553CC41A9aC8F06610eFc7",
  //   "0x6d4b5acFB1C08127e8553CC41A9aC8F06610eFc7",
  //   "100000000000000000000",
  //   "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
  //   "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  //   "80001",
  //   "9991",
  //   "",
  //   { value: ethers.utils.formatEther("0.1") }
  // )
  const res = await tx.wait();
  console.log(res, tx);



  await hre.run("verify:verify", {
    address: BulkSwap.address,
    constructorArguments: [
      "0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649",
      "0xE592427A0AEce92De3Edee1F18E0157C05861564",
      "0xc1C6805B857Bef1f412519C4A842522431aFed39"
    ],
  });
}

const deployMumbai = async () => {
  const BulkSwap = await hre.ethers.getContractFactory("BulkSwap");
  const bulkSwap = await BulkSwap.deploy(
    "0x2334937846Ab2A3FCE747b32587e1A1A2f6EEC5a",
    "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F"
  )

  await bulkSwap.deployed();

  console.log(
    `Deployed to ${bulkSwap.address}`
  );

  await hre.run("verify:verify", {
    address: BulkSwap.address,
    constructorArguments: [
      "0x2334937846Ab2A3FCE747b32587e1A1A2f6EEC5a",
      "0xE592427A0AEce92De3Edee1F18E0157C05861564",
      "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F"
    ],
  });
}




async function main() {
  await deployGoerli();
  await deployMumbai();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


















