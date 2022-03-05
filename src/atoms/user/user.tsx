import { atom } from "recoil";
import { IWalletInfo } from "../../wallet/types";


const userStateAtom = atom<boolean>({
    key: 'isLoggedIn',
    default: false
});

const userInfoAtom = atom<IUserInfo>({
    key: 'userInfo',
    default: null
});

export interface IUserInfo{
    id: number,
    username: string,
    email: string
};



export { userStateAtom, userInfoAtom };