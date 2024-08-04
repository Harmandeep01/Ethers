const {ethers} = require("ethers");
const transfer = require("./transfer.json");
const { Contract } = require("ethers");

const RPC = 'https://sepolia.infura.io/v3/bd8639b04f404de09a9bb5eb4c2aba3b';
const account = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';
const privateKey = 'a946b02598da70534970983f0c20a5184f6a52d42610f4b03a8eaa9be75198fa';

const provider = new ethers.JsonRpcProvider(
    RPC
)

const wallet = new ethers.Wallet(privateKey, provider);

const contractAddress = "0x08A142AdfD611fbfB4bFAEA147E6081137874952";
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        wallet                                         //Waller for writing and Provider for Reading only
    );
    console.log("Before Trasfer Transaction");
    console.log(`Address : ${account} Balance : ${ethers.formatEther(await provider.getBalance(account))}`);
    console.log(`Address : ${await wallet.getAddress()} Balance : ${ethers.formatEther(await provider.getBalance(wallet))}`)

    const tx = await contract._transfer(account, {
        value : ethers.parseEther('0.0001')
    })

    await tx.wait();

    console.log("After Trasfer Transaction");
    console.log(`Address : ${account} Balance : ${ethers.formatEther(await provider.getBalance(account))}`);
    console.log(`Address : ${await wallet.getAddress()} Balance : ${ethers.formatEther(await provider.getBalance(wallet))}`)

    console.log(tx);

}

call();