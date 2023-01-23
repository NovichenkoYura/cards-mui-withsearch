import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { CardItem } from './CardItem';
import { useCardInfo } from 'hooks/queries/useCardInfo';
import { CardInfoTypes } from 'types/types';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import { getCardsInfo } from 'store/cardsSlice';
import { NavLink } from 'react-router-dom';
import { locations } from 'constants/locations';

export const CardList = () => {
  const querryCard = useCardInfo();
  const querryCardInfo = querryCard.data;

  const { cards } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  // For codereviewer: I use store  for satisfying the conditions of the task (use state management). Without it I would prefer to use React Querry

  useEffect(() => {
    dispatch(getCardsInfo(querryCardInfo));
  }, [querryCardInfo]);

  return (
    <Grid container spacing={4}>
      {cards?.map((item: CardInfoTypes) => (
        <NavLink to={`/articlepage/${item.id}`} key={item.id}>
          <CardItem
            key={item.id}
            title={item.title}
            imgSource={item.imageUrl}
            description={item.summary}
          />
        </NavLink>
      ))}
    </Grid>
  );
};
