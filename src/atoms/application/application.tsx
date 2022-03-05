import { atom } from "recoil";

const isLoadingAtom = atom<boolean>({
    key: 'isLoading',
    default: false
})

export {isLoadingAtom};