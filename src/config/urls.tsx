import { ChainId } from "./constants";

export const BASE_BSC_SCAN_URLS = {
    [ChainId.MAINNET]: 'https://bscscan.com',
    [ChainId.TESTNET]: 'https://testnet.bscscan.com',
}

export const BASE_URL = "https://fichesandcrypto.com";

export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET]