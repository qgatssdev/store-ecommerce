import React from 'react';
import {
  StyledHeroContainer,
  StyledBoxContainer,
  StyledBoxContent,
  StyledBoxHeading,
  StyledBoxText,
  StyledButtonContainer,
  StyledButton,
} from './styles';

const Hero = () => {
  return (
    <StyledHeroContainer>
      <StyledBoxContainer>
        <StyledBoxContent>
          <StyledBoxHeading align='center'>
            Shopping is never <br /> a bad idea
          </StyledBoxHeading>
          <StyledBoxText textTransform={'capitalize'} align='center'>
            The best website for shipping with the best <br /> global brands at
            your fingertips.
          </StyledBoxText>
          <StyledButtonContainer>
            <StyledButton>Shop Now</StyledButton>
          </StyledButtonContainer>
        </StyledBoxContent>
      </StyledBoxContainer>
    </StyledHeroContainer>
  );
};

export default Hero;
