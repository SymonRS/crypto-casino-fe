import { FC } from "react";
import { SvgProps } from "../components/Svg/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
  priority: number;
}

export interface IWalletInfo{
  alias: string,
  address: string,
  blockchainId: number
}