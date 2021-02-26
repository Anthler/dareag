var Dao = artifacts.require("Dao.sol");
var Abc = artifacts.require("Abc.sol");

module.exports = function(deployer, network, accounts) {
  const [acount1, acount2] = accounts;
  deployer.deploy(Abc);
  const abc = await Abc.deployed();
  deployer.deploy(Dao, abc.address);
  const dao = await Dao.deployed();
};
