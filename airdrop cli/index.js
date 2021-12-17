const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    Account,
   } = require("@solana/web3.js");

   const newPair = new Keypair(); //give a secret and public key json
   const publicKey = new PublicKey(newPair._keypair.publicKey).toString(); //extract public key from keypair
   const secretKey = newPair._keypair.secretKey //extract secrect key from keypair
   console.log("this is working")
   console.log(newPair);

   const getWalletBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed"); //gives devnet,testnet,mainnet info using the clusterApiUrl class
        const myWallet = await Keypair.fromSecretKey(secretKey); //create wallet object from the secretkey
        const walletBalance = await connection.getBalance(
            new PublicKey(myWallet.publicKey) //get waller balance for public key
        );
        console.log(`Wallet balance: ${walletBalance}`);  //print wallet balance       
        console.log(`=> For wallet address ${publicKey}`); //public key
        console.log(`Wallet balance: ${parseInt(walletBalance)/LAMPORTS_PER_SOL}SOL`); //
    } catch (err) {
        console.log(err);
    }
};
const airDropSol = async () => { //create airdrop function
    try {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed"); //create connection
        const walletKeyPair = await Keypair.fromSecretKey(secretKey); // create wallet object from the same secret key
        console.log(`-- Airdropping 5 SOL --`)
        const fromAirDropSignature = await connection.requestAirdrop( // send 5 SOL to the public key of the specified wallet
            new PublicKey(walletKeyPair.publicKey),
            5 * LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(fromAirDropSignature); //confirm the transaction from the network

    } catch (err) {
        console.log(err);
    }
};
const driverFunction = async () => {
    await getWalletBalance();
    await airDropSol();
    await getWalletBalance();
    }
    driverFunction();