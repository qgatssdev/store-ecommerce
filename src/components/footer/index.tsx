import { Typography } from '@mui/material';
import React from 'react';
import {
  StyledInputContainer,
  StyledInput,
  StyledButton,
  StyledContainerWrapper,
  StyledFooter,
  StyledFooterForm,
  StyledSpan,
} from './styles';

const Footer = () => {
  return (
    <div>
      <StyledFooterForm>
        <Typography align='center' fontSize={24}>
          <StyledSpan>Are you on </StyledSpan>the list ?
        </Typography>
        <Typography align='center'>
          Join to get exclusive deals and offers
        </Typography>
        <StyledContainerWrapper>
          <div>
            <label>*Enter your email here</label>
            <StyledInputContainer>
              <StyledInput />
              <StyledButton type='button'>Join</StyledButton>
            </StyledInputContainer>
          </div>
        </StyledContainerWrapper>
      </StyledFooterForm>

      <StyledFooter>
        © 2022 —MelonApp by Melon Data Services Ltd. All Rights Reserved
      </StyledFooter>
    </div>
  );
};

export default Footer;
