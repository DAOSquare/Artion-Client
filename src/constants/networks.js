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
    auction: '0x19dC382b09Bb7f733a633aDa70af89f7C16F4f68',
    sales: '0xc6a29aFa00B668De4a11897b627F3011842A8948',
    bundleSales: '0x9C3682631Cf77aD54461e434819c444D427Ce429',
    factory: '0xA7dacD023F5d5e827cEC42255EA859A1544269Af', //FantomNFTFactory
    privateFactory: '0xC3d390628D8d7080197cA6a79a7ABa0430229C37', //FantomNFTFactoryPrivate
    artFactory: '0x864Acb6d06E24486730138245da3A612b74c1Ddf', //FantomArtFactory
    privateArtFactory: '0x8637DBB197768e8Ad0E5cc98f738B64C10452F72', //FantomArtFactoryPrivate
  },
  [ChainId.XDAI]: {
    auction: '0x551c75975DD2eFC53008E57769aF8Be0850faf5C',
    sales: '0x3eEDfB9445886f6260ECbf5fe3480fE4f2F15beC', // marketplace
    bundleSales: '0x8C5d6E5489A017e81f33dc15d58ACbAe0aAb97F9',
    factory: '0xAa0A501E6f1233A0a69De9aF91f04eF42F3abba3', //NFTFactory
    privateFactory: '0x42395763A088091E1eC1909049d3f52957feA38A', //NFTFactoryPrivate
    artFactory: '0x363FEc9616a55C913e209C2e2ff868E5278D229d', //ArtFactory
    privateArtFactory: '0x23bc98E5CBF5ec1e957536A77269EDEd1D56b4C9', //ArtFactoryPrivate
  },
};
