import { styled } from '@mui/material';

export const StyledFooterForm = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  marginTop: theme.spacing(15),
  borderTop: '1px solid rgba(0, 0, 0, 0.46)',
  paddingTop: theme.spacing(7),
}));

export const StyledSpan = styled('span')({
  fontWeight: 600,
});

export const StyledContainerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
});

export const StyledInputContainer = styled('form')({
  display: 'flex',
  flexDirection: 'row',
  border: '1px solid grey',
  backgroundColor: '#FFE6EB',
  padding: '1px',
  width: '430px',
});

export const StyledInput = styled('input')({
  flexGrow: 2,
  border: 'none',
  borderRadius: '40px',
  backgroundColor: '#FFE6EB',
  paddingLeft: '15px',
  fontSize: '16px',

  '&:focus': {
    outline: 'none',
    paddingLeft: '15px',
  },
});

export const StyledButton = styled('button')({
  background: '#FFCDCD',
  borderRadius: '0px 5px 5px 0px',
  width: '72px',
  border: 'none',
  height: '38px',
});

export const StyledFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderTop: '1px solid rgba(0, 0, 0, 0.46)',
  fontSize: '14px',
  marginTop: theme.spacing(10),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
}));
