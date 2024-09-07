import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop(){
    const wallet=useWallet();
    const {connection}=useConnection();
    async function sendAirdrop(){
        await connection.requestAirdrop(wallet.publicKey,1000000000);
        alert("Airdropped sol");
    }
    return <div>
        <input type="text" placeholder="Amount"></input>
        <button onClick={sendAirdrop}>Send Airdrop</button>
    </div>
}