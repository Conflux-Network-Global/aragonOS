require("dotenv").config();
const logDeploy = require("../helpers/deploy-logger");
const getAccounts = require("../helpers/get-accounts");
const log = require("./log");

const globalArtifacts = this.artifacts; // Not injected unless called directly via truffle
const globalWeb3 = this.web3; // Not injected unless called directly via truffle

const defaultOwner = process.env.OWNER;
const network = Number(process.env.NETWORK_ID || 1);

const deployENS = async (
	{
		artifacts = globalArtifacts,
		web3 = globalWeb3,
		owner = defaultOwner,
		verbose = true
	} = {}
) => {
	try { 	
		if (!web3) {
			log("Error: WEB3 or Artifacts is not defined - You must run the script inside Truffle");
			process.exit(1);
		}

		if (!owner) {
			log("owner is not defined, extracting account first account from web3");
			const accounts = await getAccounts(web3);
			owner = accounts[0];
			process.env.OWNER = owner;
		}
		console.log("IMTEST", process.env.OWNER);
		log(`Owner : ${owner}`);

		log("Requiring ENS artifact");
		const ENS = artifacts.require("ENS");
		log("Requiring ENSFactory artifact");
		const ENSFactory = artifacts.require("ENSFactory");

		log("Deploying ENSFactory...");
		const factory = await ENSFactory.new({ from: owner });
		await logDeploy(factory, { verbose });
		const receipt = await factory.newENS(owner, { from: owner });

		const ensAddrHex = receipt.logs.filter(l => l.event == "DeployENS")[0].args.ens;
		log(`ens hex address: ${ensAddrHex}`);
		const ensAddr = web3.cfxsdk.format.address(ensAddrHex, network);
		log("====================");
		log("Deployed ENS:", ensAddr);

		return {
			ens: await ENS.at(ensAddr),
			ensFactory: factory,
		}; 
	} catch(err){
		console.log("err",err);
		throw new Error(err);
	}
};

module.exports = deployENS;