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
  //   gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'center',
  gap: `${theme.spacing(5)} 0`,
}));

export const StyledStoreImage = styled(Image)({
  borderRadius: '10px',
  maxWidth: '350px',
  width: '100%',
  maxHeight: '350px',
  height: '100%',
});
