import { styled, Typography } from '@mui/material';

export const StyledProductContainer = styled('section')(({ theme }) => ({
  marginTop: theme.spacing(10),
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  color: '#005792',
  marginBottom: theme.spacing(4),
}));

export const StyledProductGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'center',
  gap: `${theme.spacing(5)} 0`,

  '@media (min-width: 768px) and (max-width: 992px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (max-width: 767px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));
