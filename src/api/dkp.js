import axios from 'axios';

export const DKP_GRAPHQL_URI =
  'https://api.thegraph.com/subgraphs/name/caosbad/dkpnftxdai';
export const DKP_STORE_URI =
  'https://daodkp.oss-ap-southeast-1.aliyuncs.com/dkp';
export const DKP_METADATA_PREFIX = 'metadata';

export const getUserNFT = async account => {
  const url = DKP_GRAPHQL_URI;
  const query = `{
            cardOwners(where:{owner:"${account.toLowerCase()}"}){
              amount
              cardId
            }
          }`;
  const res = await axios.post(url, { query, variables: {} });
  const data = res.data.data.cardOwners;
  return data;
};

export const getMetadata = async (cardId, uri = DKP_STORE_URI) => {
  try {
    const url = `${uri}/${DKP_METADATA_PREFIX}/${cardId}.json`;
    const req = await axios.get(url);
    const { data } = req;
    return {
      cardId,
      ...data,
    };
  } catch (error) {
    console.log('get metadata error: ', error);
    return {};
  }
};

export const getCardInfo = async card => {
  const { cardId } = card;
  const metadata = await getMetadata(cardId.toString());
  return {
    ...metadata,
    ...card,
  };
};

export const getOwnedCards = async account => {
  const cards = await getUserNFT(account);
  const cardsInfo = cards.map(card => {
    return getCardInfo(card);
  });
  const res = await Promise.all(cardsInfo);
  return res;
};
