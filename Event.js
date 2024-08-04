const {ethers} = require("ethers");
const transfer = require("./transfer.json");

const RPC = 'https://sepolia.infura.io/v3/bd8639b04f404de09a9bb5eb4c2aba3b';

const provider = new ethers.JsonRpcProvider(
    RPC
)

const contractAddress = "0x194Ff6A285e455f434B8271Ebf0C080E821C12bB";
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    );
    
    // const block = await provider.getBlockNumber();          //Used to get block number
    const filter = contract.filters.TransferLog(null, '000000000000001234');
    const transaction = await contract.queryFilter(filter);  //(from, from block till last, block upto)

    transaction.map((item) => {
        console.log(item.args.to, " : ", ethers.formatEther(item.args.value));
        // console.log(transaction);
    })
}

call();