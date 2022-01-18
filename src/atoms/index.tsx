import { atom } from "recoil"

const userWalletAtom = atom<string>({
    key: 'userWallet',
    default: ''
});

export { userWalletAtom };