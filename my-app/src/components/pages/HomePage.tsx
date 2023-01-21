import { StyledContainer } from 'components/common/Container/StyledContainer';
import { SearchField } from 'components/SearchField/SearchField';
import { Divider, Box } from '@mui/material';
import { CardList } from 'components/CardList';

export const HomePage = () => {
  return (
    <>
      <StyledContainer>
        <SearchField />
        <Box
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            mt: '65px',
            mb: '45px'
          }}>
          <Box component={'span'} sx={{ color: '#363636' }}>
            Results: 6
          </Box>
          <Divider orientation="horizontal" />
        </Box>
        <CardList />
      </StyledContainer>
    </>
  );
};
