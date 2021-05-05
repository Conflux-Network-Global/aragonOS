const deployAPM = require("./local_deployment/deploy-apm-alt");
const deployENS = require("./local_deployment/deploy-ens");
const deployDAOFactory = require("./local_deployment/deploy-dao-factory-alt");

const network_id = Number(process.env.NETWORK_ID);

const deployer = async (truffleExecCallback) => {
	console.log("Deployer initialized");
	console.log("Deploying ENS");
	console.log("Using network Id:", network_id);
	const ensResult = await deployENS({web3: this.web3, artifacts: this.artifacts});
	const ensAddress = ensResult.ens.address;
	console.log("Deploying DAO Factory");
	const { daoFactory } = await deployDAOFactory({ artifacts: this.artifacts });
	console.log("Deploying APM");
	await deployAPM({
		web3: this.web3, 
		artifacts: this.artifacts,
		ensAddress,
		daoFactoryAddress: daoFactory.address,
		network: network_id
	});

	truffleExecCallback();
};

module.exports = deployer;
