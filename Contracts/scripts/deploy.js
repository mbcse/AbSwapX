// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");
const abi = require("../artifacts/contracts/AbSwapXGnosis.sol/AbSwapXGnosis.json").abi;

// IConnext _connext,
//   ISwapRouter _swapRouter,
//     address payable _ops

const deployGoerli = async () => {
  const BulkSwap = await hre.ethers.getContractFactory("AbSwapX");
  const bulkSwap = await BulkSwap.deploy(
    "0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649",
    "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    "0xc1C6805B857Bef1f412519C4A842522431aFed39"
  )

  await bulkSwap.deployed();

  console.log(
    `Deployed to ${bulkSwap.address}`
  );


  await hre.run("verify:verify", {
    address: "0xc7C4419f52c38bfc39754FB8Bd903423c0ffE9f1",
    constructorArguments: [
      "0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649",
      "0xE592427A0AEce92De3Edee1F18E0157C05861564",
      "0xc1C6805B857Bef1f412519C4A842522431aFed39"
    ]
  });
}

const deployMumbai = async () => {
  const BulkSwap = await hre.ethers.getContractFactory("AbSwapX");
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
    address: bulkSwap.address,
    constructorArguments: [
      "0x2334937846Ab2A3FCE747b32587e1A1A2f6EEC5a",
      "0xE592427A0AEce92De3Edee1F18E0157C05861564",
      "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F"
    ],
    network: "polygonMumbai"
  });
}


const deployPolygon = async () => {
  const BulkSwap = await hre.ethers.getContractFactory("AbSwapX");
  const bulkSwap = await BulkSwap.deploy(
    "0x11984dc4465481512eb5b777E44061C158CF2259",
    "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    "0x527a819db1eb0e34426297b03bae11F2f8B3A19E"
  )

  await bulkSwap.deployed();

  console.log(
    `Deployed to ${bulkSwap.address}`
  );


  await hre.run("verify:verify", {
    address: "0xc082906F6744B3438c9eF78c738B225Af8e17021",
    constructorArguments: [
      "0x11984dc4465481512eb5b777E44061C158CF2259",
      "0xE592427A0AEce92De3Edee1F18E0157C05861564",
      "0x527a819db1eb0e34426297b03bae11F2f8B3A19E"
    ],
    network: "polygon"
  });
}

const deployGnosis = async () => {
  const BulkSwap = await hre.ethers.getContractFactory("AbSwapXGnosis");
  const bulkSwap = await BulkSwap.deploy(
    "0x5bB83e95f63217CDa6aE3D181BA580Ef377D2109",
    "0x1C232F01118CB8B424793ae03F870aa7D0ac7f77",
    "0x8aB6aDbC1fec4F18617C9B889F5cE7F28401B8dB"
  )

  await bulkSwap.deployed();

  console.log(
    `Deployed to ${bulkSwap.address}`
  );

  await hre.run("verify:verify", {
    address: bulkSwap.address,
    constructorArguments: [
      "0x5bB83e95f63217CDa6aE3D181BA580Ef377D2109",
      "0x1C232F01118CB8B424793ae03F870aa7D0ac7f77",
      "0x8aB6aDbC1fec4F18617C9B889F5cE7F28401B8dB"
    ],
    network: "gnosis"
  });
}



async function main() {
  // await deployGoerli();
  // await deployMumbai();
  // await deployPolygon();
  await deployGnosis();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


















