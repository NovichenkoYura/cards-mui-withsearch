import { SearchOutlined } from '@mui/icons-material';
import { Box, IconButton, Input, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { setSearchValue } from '../../store/searhSlice';

export const SearchField = () => {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ marginTop: '50px' }}>
      <Typography className="search-label">Filter by keywords</Typography>
      <Input
        sx={{
          marginTop: '0px',
          width: '600px',
          height: '50px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          border: '1px solid #EAEAEA',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)'
        }}
        disableUnderline
        fullWidth
        startAdornment={
          <IconButton>
            <SearchOutlined />
          </IconButton>
        }
        onChange={(e: any) => {
          dispatch(setSearchValue(e.target.value));
        }}
      />
    </Box>
  );
};
