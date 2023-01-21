import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { CardItem } from './CardItem';
import { useCardInfo } from 'hooks/queries/useCardInfo';

export const CardList = () => {
  const querryCard = useCardInfo();
  const querryCardInfo = querryCard.data;
  console.log(querryCardInfo && querryCardInfo[0].title);

  return (
    <Grid container spacing={4}>
      {querryCardInfo?.map((item: any) => (
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
