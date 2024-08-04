const { Transaction } = require("ethers");
const {ethers} = require("ethers");

const RPC = 'https://sepolia.infura.io/v3/bd8639b04f404de09a9bb5eb4c2aba3b';
const account = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';
const privateKey = 'a946b02598da70534970983f0c20a5184f6a52d42610f4b03a8eaa9be75198fa';

const provider = new ethers.JsonRpcProvider(
    RPC
)

const wallet = new ethers.Wallet(privateKey, provider);

async function callFunc(){
    const bal = await provider.getBalance(account);
    console.log(account + " : "  + ethers.formatEther(bal));
    console.log(await wallet.getAddress() + " : " +  ethers.formatEther(await provider.getBalance(wallet)));

    const transaction = await wallet.sendTransaction({
        to : account,
        value : ethers.parseEther("0.05") 
    });

    await transaction.wait();

    console.log(account + " : "  + ethers.formatEther(bal));
    console.log(await wallet.getAddress() + " : " +  ethers.formatEther(await provider.getBalance(wallet)));

    console.log(transaction)

}

callFunc();