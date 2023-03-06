import { styled } from '@mui/material';

export const StyledHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(3),
}));

export const StyledCartContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
}));
