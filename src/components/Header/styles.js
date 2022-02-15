import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const SearchBar = styled(TextField)({
  '& label.Mui-focused': {
    border: '1px solid rgba(200, 200, 200,0.9)',
  },
  '& .MuiInput-underline:after': {
    border: '1px solid rgba(200, 200, 200,0.9)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid rgba(200, 200, 200,0.9)',
      borderRadius: '3px',
    },
    '&:hover fieldset': {
      border: '1px solid rgba(200, 200, 200,0.9)',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid rgba(200, 200, 200,0.9)',
    },
  },
});
