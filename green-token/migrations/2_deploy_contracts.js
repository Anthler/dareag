var Dao = artifacts.require("./Dao.sol");
var Abc = artifacts.require("./Abc.sol");

module.exports = async function(deployer, network, accounts) {
  const [account1, account2] = accounts;
  deployer.deploy(Abc);
  //const abc = await Abc.deployed();
  // await abc._mint(1000, account2)
  deployer.deploy(Dao, account1);
  // const dao = await DAO.deployed();
  // const YES = web3.utils.fromAscii("YES");
  // const NO = web3.utils.fromAscii("NO");

  // await dao.createNewBallot([YES,NO], 100000000);
  // await dao.vote(1,0), {from:account1};
  // await dao.vote(1,0), {from:account2};
  // console.log(await dao.getWinningProposal(1), {from:account1})
};
