import { SearchOutlined } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { CustomTypograthy } from './labelStyle';
import { StyledSearchedField } from './StyledSearchField';

export const SearchField = () => {
  return (
    <StyledSearchedField
      fullWidth
      id="seacrh"
      variant="standard"
      // label="Filter by keywords"
      label={<CustomTypograthy> Filter by keywords</CustomTypograthy>}
      // defaultValue={<CustomTypograthy>The most successful IT companies in 2020</CustomTypograthy>}
      defaultValue="The most successful IT companies in 2020"
      InputProps={{
        startAdornment: (
          <IconButton>
            <SearchOutlined />
          </IconButton>
        )
      }}
      // sx={{ mt: '50px', width: '600px', height: '50px', borderRadius: '5px' }}
    />
  );
};

// <TextField
// fullWidth
// id="standard-bare"
// variant="outlined"
// defaultValue="How can we help"
// InputProps={{
//   endAdornment: (
//     <IconButton>
//       <SearchOutlined />
//     </IconButton>
//   ),
// }}
// />

// <TextField
//   label="With normal TextField"
//   InputProps={{
//     endAdornment: (
//       <InputAdornment>
//         <IconButton>
//           <SearchIcon />
//         </IconButton>
//       </InputAdornment>
//     )
//   }}
// />;
