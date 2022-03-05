import { useCallback } from 'react'
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { useTranslation } from 'react-i18next';
import { connectorLocalStorageKey } from '../wallet/config'
import { ConnectorNames } from '../wallet/types';
import { connectorsByName } from '../utils/web3React'
import {toast, ToastOptions} from "react-toastify";
import { clearUserWallet } from '../utils/clearUserWallet'
import { globalToastTheme } from '../config';

const useAuth = () => {
  const { t } = useTranslation()/* 
  const dispatch = useAppDispatch() */
  const { chainId, activate, deactivate, active } = useWeb3React();

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError && !active) {
            toast(t("walletError.unsupportedChainError"), { type: 'warning', theme: globalToastTheme } as ToastOptions)
            
            /* const hasSetup = await setupNetwork()
            if (hasSetup) {
              activate(connector)
            } */
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              console.log('No provider was found');
              toast(t("walletError.noProviderFound", { type: 'error', theme: globalToastTheme }))
            } else if (
              error instanceof UserRejectedRequestErrorInjected /* ||
              error instanceof UserRejectedRequestErrorWalletConnect */
            ) {
              /* if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector
                walletConnector.walletConnectProvider = null
              } */
              toast(t("walletError.authorizationError"), { type: 'error', theme: globalToastTheme } as ToastOptions)
              console.log('Please authorize to access your network')
            } else {
              toast(t("walletError.unknownError"), { type: 'error', theme: globalToastTheme})
              console.log('Error name: ', error.name);
              console.log('Error message: ', error.message);
            }
          }
        })
        toast(t("walletMessage.walletConnected"), { type: 'success' })
      } else {
        toast(t("walletError.connectorError"));
        console.log('Unable to find connector');
      }
    },
    [t, activate, chainId],
  )

  const logout = useCallback(() => {
    deactivate()
    clearUserWallet()
  }, [deactivate, /* dispatch, */ chainId])

  return { login, logout, active }
}

export default useAuth