 
const path = require("path");
const dotenv = require('dotenv');
var HDWalletProvider = require("@truffle/hdwallet-provider");

// const dotenvResult = dotenv.config();

// if (dotenvResult.error) {
//   throw dotenvResult.error;
// }

// const { MNEMONIC, PROVIDER_URL, INFURA_KEY } = process.env;

// var infuraRinkebyProvider = `${PROVIDER_URL}${INFURA_KEY}`;

// var PROVIDER = new HDWalletProvider(MNEMONIC, infuraRinkebyProvider);

module.exports = {
  
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    networks: {
      develop: {
        host: '127.0.0.1',
        port: 8545,
        network_id: "*",
      },
      
      // rinkeby: {
      //   provider: PROVIDER,
      //   network_id: 4, // eslint-disable-line camelcase
  
      // }
  },

    compilers: {
      solc: {
        version: "^0.7.6", // A version or constraint - Ex. "^0.5.0"
        parser: "solcjs",  // Leverages solc-js purely for speedy parsing
        settings: {
          optimizer: {
            enabled: true,
          },
          evmVersion: "istanbul" // Default: "istanbul"
        },
        modelCheckerSettings: {
          // contains options for SMTChecker
        }
      }
    }
  }
}
