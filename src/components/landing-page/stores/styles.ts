import { styled, Typography } from '@mui/material';
import Image from 'next/image';

export const StyledStoreGridContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(10),
}));

export const StyledStoreHeading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontSize: theme.typography.h4.fontSize,
  textDecoration: 'underline',
}));

export const StyledStoreGrid = styled('div')(({ theme }) => ({
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

export const StyledStoreImage = styled(Image)({
  borderRadius: '10px',
  minWidth: '300px',
  width: '100%',
  maxHeight: '400px',
  height: '100%',
});
