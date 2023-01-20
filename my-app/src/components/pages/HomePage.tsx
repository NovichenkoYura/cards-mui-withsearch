import { StyledContainer } from 'components/common/Container/StyledContainer';
import { SearchField } from 'components/SearchField/SearchField';
import { Divider, Box } from '@mui/material';

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
            mt: '65px',
            justifyContent: 'left'
          }}>
          <Box component={'span'} sx={{ color: '#363636' }}>
            Results: 6
          </Box>
          <Divider orientation="horizontal" />
        </Box>
      </StyledContainer>
    </>
  );
};
