import { atom } from "recoil"



const activeWalletAtom = atom<boolean>({
    key: 'isActiveWallet', 
    default: false
})

const activateWalletAtom = atom({
    key: 'activateWallet', 
    default: null
})



export { activeWalletAtom, activateWalletAtom };