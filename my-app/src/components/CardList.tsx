import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { CardItem } from './CardItem';
import { useCardInfo } from 'hooks/queries/useCardInfo';
import { CardInfoTypes } from 'types/types';
import { useAppDispatch } from 'app/hooks';
import React, { useEffect } from 'react';

export const CardList = () => {
  const querryCard = useCardInfo();
  const querryCardInfo = querryCard.data;
  console.log(querryCardInfo && querryCardInfo[0].title);

  const dispatch = useAppDispatch();
  const edititemOnClick = (id) => dispatch(onCurrentItemInfo(id));
  const DeleteOnNote = (id) => dispatch(delNotesThunk(id));

  useEffect(() => {
    dispatch(getNotesThunk());
  }, [dispatch]);

  return (
    <Grid container spacing={4}>
      {querryCardInfo?.map((item: CardInfoTypes) => (
        <CardItem
          key={item.id}
          title={item.title}
          imgSource={item.imageUrl}
          description={item.summary}
        />
      ))}
    </Grid>
  );
};
