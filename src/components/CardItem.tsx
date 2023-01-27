import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { NavLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from 'moment';
import { useAppSelector } from 'app/hooks';
import { CustomTypograthy } from './common/StyledTypography';

interface CardItemProps {
  title: string;
  imgSource: string;
  description: string;
  date: string;
  id: string;
}

export const CardItem: React.FC<CardItemProps> = ({ title, imgSource, description, date, id }) => {
  const { search } = useAppSelector((state) => state.search);

  const highlightMatchingText = (text: any) => {
    return text.replace(new RegExp(search, 'gi'), (match: any) => {
      return `<span class="highlight">${match}</span>`;
    });
  };

  return (
    <Grid item={true}>
      <Card
        sx={{
          width: 400,
          height: '540px',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column'
        }}>
        <CardMedia sx={{ height: 217 }} image={imgSource} title="green iguana" component="img" />

        <CardContent sx={{ p: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CalendarTodayOutlinedIcon sx={{ width: '13.33px', color: '#363636', mb: '20px' }} />
            <Box
              sx={{
                fontWeight: '400',
                fontSize: '14px',
                color: '#363636',
                ml: '9.33px',
                mb: '20px'
              }}>
              {moment(date).format('MMMM Do, YYYY')}
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: '24px', mb: '20px' }}
            dangerouslySetInnerHTML={{ __html: highlightMatchingText(title) }}></Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: '16px' }}
            dangerouslySetInnerHTML={{
              __html: highlightMatchingText(
                description.length <= 100 ? description : description.substr(0, 100) + '...'
              )
            }}></Typography>
          <CardActions sx={{ p: 0, mt: '10px', flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                alignItems: 'baseline'
              }}>
              <NavLink to={`/articlepage/${id}`} className="card-button-link">
                <Button
                  size="small"
                  sx={{
                    fontWeight: '700px',
                    color: '#363636',
                    textTransform: 'none',
                    p: 0
                  }}>
                  <CustomTypograthy sx={{ fontWeight: '700' }}>Read more</CustomTypograthy>
                </Button>
              </NavLink>
              <ArrowForwardIcon sx={{ width: '12px', height: '10px' }} />
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};
