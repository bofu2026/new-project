window.APP_CONFIG = {
  "chainId": 11155111,
  "chainName": "Sepolia",
  "contractAddress": "0x50742A8EFA4Eae6a40a72AA60e49927Ea02A98eB",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initialMessage",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "previousMessage",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newMessage",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "updater",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newUpdateCount",
          "type": "uint256"
        }
      ],
      "name": "MessageUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getMessage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "updateCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "updateMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};
