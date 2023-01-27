import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { StyledContainer } from 'components/common/Container/StyledContainer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from 'app/hooks';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CardInfoTypes } from 'types/types';
import { locations } from 'constants/locations';
import { CustomTypograthy } from 'components/common/StyledTypography';

type Article = {
  title: string;
  summary: string;
  imageUrl: string;
};

export const ArticlePage: React.FC = () => {
  const { cards } = useAppSelector((state) => state.cards);
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [id]);

  return (
    <>
      <StyledContainer>
        {article && (
          <Card
            sx={{
              width: '1440px',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'visible',
              boxShadow: 'none !important'
            }}>
            <CardMedia
              sx={{ height: 217, position: 'absolute', top: 0, width: '100%' }}
              image={article.imageUrl}
              component="img"
            />

            <Box sx={{ width: '1290px', zIndex: 10, position: 'relative', top: 150 }}>
              <Box
                sx={{
                  width: '1290px',
                  border: '1px solid #EAEAEA',
                  borderRadius: '5px',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
                  pl: '75px',
                  pr: '75px',
                  pt: '35px',
                  pb: '50px',
                  // ml: '75px',
                  backgroundColor: '#FFFFFF'
                }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: '24px', textAlign: 'center', mb: '50px' }}>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '18px' }}>
                  {article.summary}
                </Typography>
              </Box>

              <CardActions sx={{ position: 'absolute', bottom: -55, p: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'left',
                    alignItems: 'baseline'
                  }}>
                  <ArrowBackIcon sx={{ width: '12px', height: '10px' }} />
                  <NavLink to={locations.homepage.path} className="back-to-homepage-button-link">
                    <Button
                      size="small"
                      sx={{
                        fontWeight: '700px',
                        color: '#363636',
                        textTransform: 'none'
                      }}>
                      <CustomTypograthy sx={{ fontWeight: '700' }}>
                        Back to homepage
                      </CustomTypograthy>
                    </Button>
                  </NavLink>
                </Box>
              </CardActions>
            </Box>
          </Card>
        )}
      </StyledContainer>
    </>
  );
};
