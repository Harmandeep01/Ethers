const {ethers} = require("ethers");
const transfer = require("./transfer.json");

const RPC = 'https://sepolia.infura.io/v3/bd8639b04f404de09a9bb5eb4c2aba3b';

const provider = new ethers.JsonRpcProvider(
    RPC
)

const contractAddress = "0x08A142AdfD611fbfB4bFAEA147E6081137874952";
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    );
    
    console.log(`The Address of Owner is  : ${await contract.owner()}`);
}

call();