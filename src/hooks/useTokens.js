import { ChainId } from '@sushiswap/sdk';

// import iconFTM from 'assets/imgs/ftm.png';
import iconWFTM from 'assets/imgs/wftm.png';
import iconUSDT from 'assets/imgs/usdt.png';
import iconUSDC from 'assets/imgs/usdc.png';
import iconDAI from 'assets/imgs/dai.png';
import iconXDAI from 'assets/imgs/xdai.svg';

const Tokens = {
  [ChainId.FANTOM]: [
    // {
    //   address: '',
    //   name: 'Fantom',
    //   symbol: 'FTM',
    //   decimals: 18,
    //   icon: iconFTM,
    // },
    {
      address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      name: 'Wrapped Fantom',
      symbol: 'WFTM',
      decimals: 18,
      icon: iconWFTM,
    },
    {
      address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
      name: 'Tether USD',
      symbol: 'fUSDT',
      decimals: 6,
      icon: iconUSDT,
    },
    {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: iconUSDC,
    },
    {
      address: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      icon: iconDAI,
    },
  ],
  [ChainId.FANTOM_TESTNET]: [
    // {
    //   address: '',
    //   name: 'Fantom',
    //   symbol: 'FTM',
    //   decimals: 18,
    //   icon: iconFTM,
    // },
    {
      address: '0xf1277d1ed8ad466beddf92ef448a132661956621',
      name: 'Wrapped Fantom',
      symbol: 'WFTM',
      decimals: 18,
      icon: iconWFTM,
    },
  ],
  [ChainId.XDAI]: [
    {
      address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      name: 'Wrapped XDAI',
      symbol: 'WXDAI',
      decimals: 18,
      icon: iconXDAI,
    },
    {
      address: '0x0e523901De365a9145c9822943F313b899540dF5',
      name: 'Another Test Token',
      symbol: 'ATT',
      decimals: 18,
      icon: iconDAI,
    },
  ],
};

export default function useTokens() {
  const chain = ChainId.XDAI;

  const tokens = Tokens[chain];

  const getTokenByAddress = addr => {
    const address =
      !addr ||
      addr === '0x0000000000000000000000000000000000000000' ||
      addr === 'ftm'
        ? ''
        : addr;
    return (tokens || []).find(
      tk => tk.address.toLowerCase() === address.toLowerCase()
    );
  };

  return { getTokenByAddress, tokens };
}
