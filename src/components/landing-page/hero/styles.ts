import { styled } from '@mui/material';
import backgroundImage from '../../../../assets/raden-prasetya-EvjmSg1xurI-unsplash.jpeg';
import { Typography } from '@mui/material';

export const StyledHeroContainer = styled('div')({
  backgroundImage: `url(${backgroundImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: '600px',
});

export const StyledBoxContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export const StyledBoxContent = styled('div')({
  background: '#FFE6EB',
  opacity: 0.8,
  width: '926px',
  height: '409px',
  paddingTop: '2%',
});

export const StyledBoxHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h2.fontSize,
}));

export const StyledBoxText = styled(Typography)({
  color: '#666666',
});

export const StyledButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const StyledButton = styled('button')({
  background: '#005792',
  border: 'none',
  width: '150px',
  height: '37px',
  marginTop: '15px',
  cursor: 'pointer',
  color: '#ffff',
  opacity: '0.7',

  '&:hover': {
    opacity: '1',
  },
});
