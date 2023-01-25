import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { StyledContainer } from 'components/common/Container/StyledContainer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ArticlePage = () => {
  return (
    <>
      <StyledContainer>
        <Card
          sx={{
            width: '1440px'
          }}>
          <CardMedia
            sx={{ height: 217 }}
            image="https://spacenews.com/wp-content/uploads/2023/01/aschbacher-davos.jpg"
            component="img"
          />

          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                width: '1140px',
                border: '1px solid #EAEAEA',
                borderRadius: '5px',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
                zIndex: 1,
                pl: '75px',
                pr: '75px',
                pt: '35px',
                pb: '50px',
                ml: '75px',
                position: 'relative',
                top: '-95px',
                right: 0,
                backgroundColor: '#FFFFFF'
              }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: '24px', textAlign: 'center', mb: '50px' }}>
                The 2020 Worlds Most Valuable Brands
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis
                non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id
                dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit. Porttitor
                facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum
                aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis
                amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor
                vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque
                eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel
                convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed.
                At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa
                amet, sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas massa vitae
                nibh. Nec ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed
                nibh. Euismod rutrum pellentesque semper mattis aliquet ornare. Cursus maecenas
                massa, arcu ac adipiscing odio facilisis ac eu. In eget ipsum, sed ultrices tempor
                consequat, elementum cras porta. Sagittis etiam dictumst at duis praesent a.
                Malesuada odio amet aenean diam. Tincidunt lorem faucibus neque aliquet lobortis
              </Typography>
            </Box>

            <CardActions sx={{ position: 'absolute', bottom: '35px', left: '150px', p: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'left',
                  alignItems: 'baseline'
                }}>
                <ArrowBackIcon sx={{ width: '12px', height: '10px' }} />
                <Button
                  size="small"
                  sx={{
                    fontWeight: '700px',
                    color: '#363636',
                    textTransform: 'none'
                  }}>
                  Back to homepage
                </Button>
              </Box>
            </CardActions>
          </Box>
        </Card>
      </StyledContainer>
    </>
  );
};
