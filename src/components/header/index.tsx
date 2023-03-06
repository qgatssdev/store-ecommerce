import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';
import { StyledHeader, StyledCartContainer } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <div>Logo</div>
      <div></div>
      <StyledCartContainer>
        <div>
          <ShoppingCartIcon />
        </div>
        <Typography>Help</Typography>
        <Typography>Contact Us</Typography>
      </StyledCartContainer>
    </StyledHeader>
  );
};

export default Header;
