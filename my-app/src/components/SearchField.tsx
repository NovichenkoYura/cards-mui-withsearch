import { SearchOutlined } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';

export const SearchField = () => {
  return (
    <TextField
      fullWidth
      id="seacrh"
      variant="standard"
      label="Filter by keywords"
      defaultValue="The most successful IT companies in 2020"
      InputProps={{
        startAdornment: (
          <IconButton>
            <SearchOutlined />
          </IconButton>
        )
      }}
      sx={{ mt: '50px' }}
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
