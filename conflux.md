# Deploying on Conflux
AragonOS is built on truffle which makes deploying on Conflux much simpler through using Conflux Truffle which reimplements.

## Prerequisites
* [Conflux Truffle](https://www.npmjs.com/package/conflux-truffle) must be installed

Other potentially useful information:
* Conflux-Truffle v0.0.8 (core: 5.1.29)
* Solidity - 0.4.24 (solc-js)
* Node v14.15.4
* Web3.js v1.2.1


## File Changes
* `.gitignore` file modified to include `.env` files
* `package.json` file modified to add the dotenv package
* `truffle-config.js` file modified to include a new network called `cfx-testnet`
* `.env` file used to include `PRIVATE_KEY=0x...` which is used in the `truffle-config.js` file
* `scripts/deploy-apm.js` file modified to wait for contract return (line 61) and use the zero address (line 99)

## Testnet Deployment
Installation:
```
npm install
```

Compile:
```
cfxtruffle compile
```

Using a similar command specified in the [README](./readme.md)
```
cfxtruffle exec --network cfx-testnet scripts/deploy-apm.js
```

Deployment results (testnet):
```
Using network 'cfx-testnet'.

Deploying APM...
OWNER env variable not found, setting APM owner to the provider's first account
Owner: 0x15fd1E4F13502b1a8BE110F100EC001d0270552d
=========
Missing ENS! Deploying a custom ENS...
Deployed ENSFactory: 0x81F9841EC7646Ff6507d23c37E23679023bA8722
ENS: 0x8940ca51e1ACeF5E64a0FC0f706c7414781d3B33
TLD: eth (0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae)
Label: aragonpm (0x1542111b4698ac085139692eae7c6efb632a4ae2779f8686da94511ebbbff594)
=========
Deploying APM bases...
=========
# APMRegistry:
Address: 0x8E0b72783589DB3809311b5358B63aAC8EA3c089
Transaction hash: 0x9f8721a326959367216ba4ea6613af703b6f4cbf5c58f9b0c7aa361d5a949b8b
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2021-01-12T16:45:33.192Z
=========
=========
# Repo:
Address: 0x80de34e8769a6fAc5428f64512a9c3a9bE3f5FDC
Transaction hash: 0xee1ade95aade60949e0662fd8591b554bdfe4387501d5bf3f919997e4acb7a5a
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2021-01-12T16:45:33.195Z
=========
=========
# ENSSubdomainRegistrar:
Address: 0x8Dfd0a280168d00594c482B002E34401e5672B9F
Transaction hash: 0x8ff4f7749639cb721f3225ee7c3dd60bdd233171d077168ac4ebfd997c9da91d
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2021-01-12T16:45:33.212Z
=========
Deploying DAOFactory with EVMScripts...
Deployed Kernel: 0x807B2E858CF132E66D4e811B07852bd738617e66
Deployed ACL: 0x805d022480B77DfBB4DC07f942A64a3034A6edb2
Deployed EVMScriptRegistryFactory: 0x88f46C219F8Ed3B1d9cA57458be116A852982950
Deployed DAOFactory: 0x88D65f3C7De5999624548D5932fF0740A7457Be7
Deploying APMRegistryFactory...
=========
# APMRegistryFactory:
Address: 0x812c0E93A13Fa06B890a1C197575Ab4001b7632f
Transaction hash: 0x5dc861bc970fe032598f52a476494fbdeb8d8ecfc7008d772b1ce4c1bdd5009c
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2021-01-12T16:45:33.222Z
=========
Assigning ENS name (aragonpm.eth) to factory...
Creating subdomain and assigning it to APMRegistryFactory
Deploying APM...
=========
# APM:
Address: 0x8c1Eaee5a12a6719488B7aE0CbDd519EA92808a6
Transaction hash: 0x8886e831f6866cc7c5cfa729213a84d1c54284be537b6ad6837c0e9cbc429784
=========
```
