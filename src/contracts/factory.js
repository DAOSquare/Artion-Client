import { ChainId } from '@sushiswap/sdk';

import { getHigherGWEI } from 'utils';
import { Contracts } from 'constants/networks';
import useContract from 'hooks/useContract';

import { FACTORY_ABI } from './abi';

// eslint-disable-next-line no-undef
const CHAIN = ChainId.XDAI;

export const useFactoryContract = () => {
  const { getContract } = useContract();

  const getFactoryContract = async () =>
    await getContract(Contracts[CHAIN].factory, FACTORY_ABI);

  const getPrivateFactoryContract = async () =>
    await getContract(Contracts[CHAIN].privateFactory, FACTORY_ABI);

  const getArtFactoryContract = async () =>
    await getContract(Contracts[CHAIN].artFactory, FACTORY_ABI);

  const getPrivateArtFactoryContract = async () =>
    await getContract(Contracts[CHAIN].privateArtFactory, FACTORY_ABI);

  const createNFTContract = async (contract, name, symbol) => {
    const options = {
      gasPrice: getHigherGWEI(),
      gasLimit: 2500000,
    };

    return await contract.createNFTContract(name, symbol, options);
  };

  return {
    getFactoryContract,
    getPrivateFactoryContract,
    getArtFactoryContract,
    getPrivateArtFactoryContract,
    createNFTContract,
  };
};
