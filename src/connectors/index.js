import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import ARTION_LOGO_URL from '../assets/svgs/logo_blue.svg';

const RPC = {
  [ChainId.XDAI]: 'https://rpc.xdaichain.com/',
};

export const network = new NetworkConnector({
  defaultChainId: ChainId.XDAI,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: [100], // xDAI
});

export const walletlink = new WalletLinkConnector({
  url: 'https://rpc.xdaichain.com/',
  appName: 'NFTSquare',
  appLogoUrl: ARTION_LOGO_URL,
});
