import { Grid } from '@mui/material';
import { CardItem } from './CardItem';
import { useCardInfo } from 'hooks/queries/useCardInfo';
import { CardInfoTypes } from 'types/types';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import { getCardsInfo } from 'store/cardsSlice';

export const CardList = () => {
  const querryCard = useCardInfo(); //an example of a custom hook (condition of the task)
  const querryCardInfo = querryCard.data;

  const { cards } = useAppSelector((state) => state.cards);
  const { search } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const filteredCards = cards
    ?.filter((card) => {
      return (
        card.title.toLowerCase().includes(search.toLowerCase()) ||
        card.summary.toLowerCase().includes(search.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (a.title.toLowerCase().includes(search.toLowerCase())) {
        return -1;
      }
      if (b.title.toLowerCase().includes(search.toLowerCase())) {
        return 1;
      }
      if (a.summary.toLowerCase().includes(search.toLowerCase())) {
        return -1;
      }
      if (b.summary.toLowerCase().includes(search.toLowerCase())) {
        return 1;
      }
      return 0;
    });

  useEffect(() => {
    dispatch(getCardsInfo(querryCardInfo)); //an example of the state management's using (condition of the task)
  }, [querryCardInfo]);

  return (
    <Grid container spacing={5} mb="63px">
      {filteredCards?.map((item: CardInfoTypes) => (
        <CardItem
          key={item.id}
          title={item.title}
          imgSource={item.imageUrl}
          description={item.summary}
          date={item.publishedAt}
          id={item.id}
        />
      ))}
    </Grid>
  );
};
