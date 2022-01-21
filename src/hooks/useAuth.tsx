import { useCallback } from 'react'
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
/* import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
    WalletConnectConnector
} from '@web3-react/walletconnect-connector'; */
import { useTranslation } from 'react-i18next';
import { connectorLocalStorageKey } from '../wallet/config'
import { ConnectorNames } from '../wallet/types';
import { connectorsByName } from '../utils/web3React'
import { setupNetwork } from '../utils/wallet';
/* import useToast from 'hooks/useToast' *//* 
import { useAppDispatch } from 'state' */
import { clearUserWallet } from '../utils/clearUserWallet'

const useAuth = () => {
  const { t } = useTranslation()/* 
  const dispatch = useAppDispatch() */
  const { chainId, activate, deactivate } = useWeb3React()
  /* const { toastError } = useToast() */

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork()
            if (hasSetup) {
              activate(connector)
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              console.log('No provider was found');
              /* toastError(t('Provider Error'), t('No provider was found')) */
            } else if (
              error instanceof UserRejectedRequestErrorInjected /* ||
              error instanceof UserRejectedRequestErrorWalletConnect */
            ) {
              /* if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector
                walletConnector.walletConnectProvider = null
              } */
              /* toastError(t('Authorization Error'), t('Please authorize to access your account')) */
              console.log('Please authorize to access your network')
            } else {
              /* toastError(error.name, error.message) */
              console.log('Error name: ', error.name);
              console.log('Error message: ', error.message);
            }
          }
        })
      } else {
        /* toastError(t('Unable to find connector'), t('The connector config is wrong')) */
      }
    },
    [/* t,  */activate, /* toastError */],
  )

  const logout = useCallback(() => {
    deactivate()
    clearUserWallet()
  }, [deactivate, /* dispatch, */ chainId])

  return { login, logout }
}

export default useAuth