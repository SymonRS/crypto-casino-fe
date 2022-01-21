import { atom } from "recoil"

const userWalletAtom = atom<string>({
    key: 'userWallet',
    default: ''
});

const walletConnectedAtom = atom<boolean>({
    key: 'isWalletConnected',
    default: false
})

export { userWalletAtom, walletConnectedAtom};