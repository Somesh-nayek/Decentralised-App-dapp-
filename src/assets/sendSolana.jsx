import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTokens(){
    const wallet=useWallet();
    const {connection} =useConnection();

    async function sendTokens() {
        let to=document.getElementById("to").value;
        let amount=document.getElementById("amount").value;
        const transaction=new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey:wallet.publicKey,
            toPubkey:to,
            lamports:amount* LAMPORTS_PER_SOL
            })
        );
        await wallet.sendTransaction(transaction,connection);
        alert("send "+amount+" SOL to "+to);
    }
    return (
        <div>
            <input type="text" id="to" placeholder="To"/>
            <input type="text" id="amount" placeholder="Amount"/>
            <button onClick={sendTokens}>Send</button>
        </div>
    );
}