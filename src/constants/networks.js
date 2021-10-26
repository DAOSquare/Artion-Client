import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.FANTOM]: {
    auction: '0x951Cc69504d39b3eDb155CA99f555E47E044c2F1',
    sales: '0xa06aecbb8CD9328667f8E05f288e5b3ac1CFf852',
    bundleSales: '0x56aD389A02Ea9d63f13106cB0c161342f537a92e',
    factory: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
    privateFactory: '0xe5841838Dd7e522f217DfFBCEaef82F04EC649Cd', //FantomNFTFactoryPrivate
    artFactory: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
    privateArtFactory: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  },
  [ChainId.FANTOM_TESTNET]: {
    auction: '0xc40AE55E423256E3Ad570cA17402A6613FE20608',
    sales: '0x9a4642Cc182ac038258f5B47be7c5538dB6f8399',
    bundleSales: '0x1779D9B53098a275d8d71429f0336fdDf4944d86',
    factory: '0x6F124f6DABA769Eb351a1EeC4C0224F9A0a524cE', //FantomNFTFactory
    privateFactory: '0x49191888c75134E60889c5407A87Cf07F836f677', //FantomNFTFactoryPrivate
    artFactory: '0x56059938534AD39616b0b57B7F3c3FE074C3ab39', //FantomArtFactory
    privateArtFactory: '0xC6A8025f10F87620A165E9A53844eBa6217D5406', //FantomArtFactoryPrivate
  },
  [ChainId.XDAI]: {
    auction: '0xE063A2234806cb3524B676b5D70a166e107EC0d7',
    sales: '0x5422211B89696b2275f8AF3A05Cf33715dc0225D', // FantomMarketPlace
    bundleSales: '0x8C5d6E5489A017e81f33dc15d58ACbAe0aAb97F9',
    factory: '0xA5fC8e841CCF2a0B7663640cFe63158d27084756', //FantomNFTFactory
    privateFactory: '0x42395763A088091E1eC1909049d3f52957feA38A', //FantomNFTFactoryPrivate
    artFactory: '0x363FEc9616a55C913e209C2e2ff868E5278D229d', //FantomArtFactory
    privateArtFactory: '0x23bc98E5CBF5ec1e957536A77269EDEd1D56b4C9', //FantomArtFactoryPrivate
  },
};
