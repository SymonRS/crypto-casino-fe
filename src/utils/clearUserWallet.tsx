import { connectorLocalStorageKey } from "../wallet/config"
import { connectorsByName } from "./web3React"

export const clearUserWallet = () => {
    if (window.localStorage.getItem('walletconnect')) {
        connectorsByName.walletconnect.close()
        connectorsByName.walletconnect.walletConnectProvider = null
      }
      window.localStorage.removeItem(connectorLocalStorageKey)
  }