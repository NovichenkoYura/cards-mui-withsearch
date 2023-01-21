import { useQuery } from 'react-query';

export const cardQuerry = async () => {
  try {
    return await (await fetch(`https://api.spaceflightnewsapi.net/v3/articles`)).json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const useCardInfo = () => {
  return useQuery(['cardinfo'], cardQuerry, {});
};

export const ExampleСard = () => {
  const fetchCard = useCardInfo();
  const sample = fetchCard.data;
  // const currentCurrency =
  //   fetchExampleCurrency.data && fetchExampleCurrency.data[31].rate.toFixed(2);
  // const actualCurrency = currentCurrency && currentCurrency[31].rate.toFixed(2);
  // console.log(currentCurrency && currentCurrency[31].rate.toFixed(2));
  console.log(sample);
  // return <div>ExampleСard</div>;
};
