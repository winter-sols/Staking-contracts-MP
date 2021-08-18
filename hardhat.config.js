const { bscscanAPIKey } = require("./.secrets");

require("@nomiclabs/hardhat-waffle");

require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");

require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');


const {  
  infuraProjectId,
  accountPrivateKey,
  account2PrivateKey,
  alchemyApi,
  etherscanAPIKey
} = require(__dirname+'/.secrets.js');


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  networks: {
    hardhat: {
      accounts: [
        {privateKey: `0x${accountPrivateKey}`, balance: "99991229544000000000000"},
        {privateKey: `0x${account2PrivateKey}`, balance: "99991229544000000000000"}
      ],
      forking: {
          url: "https://eth-kovan.alchemyapi.io/v2/"+alchemyApi
      },

      chainId: 31337,
      loggingEnabled: false,
      mining: {
        auto: true,
        interval: [1000, 5000]
      },
      
      allowUnlimitedContractSize: true
    },

    kovan: {
      url: `https://kovan.infura.io/v3/${infuraProjectId}`,
      chainId: 42,
      //gasPrice: 20000000000,
      accounts: [`0x${accountPrivateKey}`]
    },  

    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraProjectId}`,
      chainId: 3,
      //gasPrice: 20000000000,
      accounts: [`0x${accountPrivateKey}`]
    },  

    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
      chainId: 4,
      //gasPrice: 20000000000,
      accounts: [`0x${accountPrivateKey}`]
    },  

    eth_mainnet: {
      url:  `https://mainnet.infura.io/v3/${infuraProjectId}`,
      chainId: 1,
      ///gasPrice: 20000000000,
      accounts: [`0x${accountPrivateKey}`]
    },    

    bsc_mainnet: {
      url:  `https://bsc-dataseed.binance.org/`,
      chainId: 56,
      ///gasPrice: 20000000000,
      accounts: [`0x${accountPrivateKey}`]
    }, 
    
    bsc_testnet: {
       //0xD99D1c33F9fC3444f8101754aBC46c52416550D1 
         url:  `https://data-seed-prebsc-2-s3.binance.org:8545/`,
        chainId: 97,
        ///gasPrice: 20000000000,
        accounts: [`0x${accountPrivateKey}`]
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: bscscanAPIKey//etherscanAPIKey
  },

  solidity: {
    compilers: [
      {
        version: '0.5.16'
      },
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100
          }
        }
      },
    ]
  }

}

