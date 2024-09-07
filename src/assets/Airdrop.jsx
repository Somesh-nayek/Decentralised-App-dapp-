import { useConnection, useWallet  } from "@solana/wallet-adapter-react"
export function Airdrop(){
    const wallet=useWallet();
    const {connection}=useConnection();
    return <div>
        {wallet.publicKey.toString()}
        <input type="text" placeholder="Amount"></input>
        <button>Send Airdrop</button>
    </div>
}