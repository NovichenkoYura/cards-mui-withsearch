import { useQuery } from 'react-query';
import { cardQuerry } from 'api/cardQuerry';

export const useCardInfo = () => {
  return useQuery(['cardinfo'], cardQuerry, {});
};
