const main = async () => {

  const attackContractFactory = await hre.ethers.getContractFactory('Hack');
  const attackContract = await attackContractFactory.deploy("0xf0337Cde99638F8087c670c80a57d470134C3AAE");
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