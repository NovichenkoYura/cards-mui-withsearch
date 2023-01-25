import { StyledContainer } from 'components/common/Container/StyledContainer';
import { SearchField } from 'components/SearchField/SearchField';
import { Divider, Box } from '@mui/material';
import { CardList } from 'components/CardList';
import { useAppSelector } from 'app/hooks';

export const HomePage = () => {
  const { cards } = useAppSelector((state) => state.cards);
  const { search } = useAppSelector((state) => state.search);

  const filteredCards = cards?.filter((card) => {
    return (
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.summary.toLowerCase().includes(search.toLowerCase())
    );
  });

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
            Results: {filteredCards && filteredCards.length}
          </Box>
          <Divider orientation="horizontal" />
        </Box>
        <CardList />
      </StyledContainer>
    </>
  );
};
