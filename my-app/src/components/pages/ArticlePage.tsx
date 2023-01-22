import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { StyledContainer } from 'components/common/Container/StyledContainer';

export const ArticlePage = () => {
  return (
    <>
      <StyledContainer>
        <Card sx={{ width: 400, height: 530, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }}>
          <CardMedia sx={{ height: 217 }} image={imgSource} title="green iguana" component="img" />

          <CardContent sx={{ p: '25px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}></Box>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '24px' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px' }}>
              {description.length <= 100 ? description : description.substr(0, 100) + '...'}
            </Typography>
            <CardActions>
              <Button
                size="small"
                sx={{ fontWeight: '700px', color: '#363636', textTransform: 'none' }}>
                Read more
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </StyledContainer>
    </>
  );
};
