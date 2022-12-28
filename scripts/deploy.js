const main = async () => {
  const bankContractFactory = await hre.ethers.getContractFactory('VIP_Bank');
  const bankContract = await bankContractFactory.deploy();
  await bankContract.deployed();
  console.log("Contract deployed to:", bankContract.address);

  const attackContractFactory = await hre.ethers.getContractFactory('Hack');
  const attackContract = await attackContractFactory.deploy(bankContract.address);
  await attackContract.deployed();
  console.log("Contract deployed to:", attackContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();