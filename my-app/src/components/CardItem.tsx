import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useCardInfo } from 'hooks/queries/useCardInfo';

interface CardItemProps {
  title: string;
  imgSource: string;
  description: string;
}

export const CardItem: React.FC<CardItemProps> = ({ title, imgSource, description }) => {
  return (
    <Grid item xs="12" md="4">
      <Card sx={{ width: 400 }}>
        <CardMedia sx={{ height: 217 }} image={imgSource} title="green iguana" component="img" />

        <CardContent>
          <Box>
            <CalendarTodayOutlinedIcon />
            <Box>June 29th, 2021</Box>
          </Box>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

// const querryCard = useCardInfo();
// const infoCardTitle = querryCard.data && querryCard.data[0].title;
// const infoCardImg = querryCard.data && querryCard.data[0].imageUrl;
// const infoCardDescription = querryCard.data && querryCard.data[0].summary;
// const infoCardDate = querryCard.data && querryCard.data[0].updatedAt;

// const timeMs = Date.parse(infoCardDate);
// const d = new Date(timeMs);
// const year = d.getFullYear();
// const month = d.getMonth() + 1;
// console.log(month);
// const day = d.getDay();
// console.log(month + '' + day + '' + ',' + year);

// console.log(d.toDateString());

// console.log(querryCard.data && querryCard.data[0]);
