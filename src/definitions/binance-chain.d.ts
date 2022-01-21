export declare global {
    interface Window { 
        BinanceChain: any; 
        ethereum: any
    }
}

window.BinanceChain = window.BinanceChain || {};
window.ethereum = window.ethereum || {};