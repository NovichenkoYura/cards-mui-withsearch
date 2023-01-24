import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useCardInfo } from 'hooks/queries/useCardInfo';
import { NavLink } from 'react-router-dom';
import { locations } from 'constants/locations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CardItemProps {
  title: string;
  imgSource: string;
  description: string;
  id: string;
  key: string;
}

export const CardItem: React.FC<CardItemProps> = ({ title, imgSource, description, id }) => {
  return (
    <Grid item xs="12" md="4">
      <Card sx={{ width: 400, height: 530, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }}>
        <CardMedia sx={{ height: 217 }} image={imgSource} title="green iguana" component="img" />

        <CardContent sx={{ p: '25px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CalendarTodayOutlinedIcon sx={{ width: '13.33px', color: '#363636' }} />
            <Box sx={{ fontWeight: '400', fontSize: '14px', color: '#363636', ml: '9.33px' }}>
              June 29th, 2021
            </Box>
          </Box>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '24px' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px' }}>
            {description.length <= 100 ? description : description.substr(0, 100) + '...'}
          </Typography>
          <CardActions>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                alignItems: 'baseline'
              }}>
              <Button
                size="small"
                sx={{ fontWeight: '700px', color: '#363636', textTransform: 'none' }}>
                Read more
              </Button>
              <ArrowForwardIcon sx={{ width: '12px', height: '10px' }} />
            </Box>
          </CardActions>
        </CardContent>
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
