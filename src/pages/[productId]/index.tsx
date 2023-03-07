import Footer from '@/components/footer';
import Header from '@/components/header';
import StoreItem from '@landingPage/stores/store-item';
import React from 'react';
import bg from '../../../assets/background_image.png';
import {
  StyledHeading,
  StyledProductContainer,
  StyledProductGrid,
} from './styles';

const ProductId = () => {
  const products = [
    {
      data: '1',
    },
    {
      data: '2',
    },
    {
      data: '2',
    },
    {
      data: '2',
    },
    {
      data: '2',
    },
    {
      data: '2',
    },
  ];
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          width: '100%',
          height: '600px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <StyledProductContainer>
        <StyledHeading align='center'>Featured Products</StyledHeading>
        <StyledProductGrid>
          {products.map((product, index) => (
            <StoreItem key={index}></StoreItem>
          ))}
        </StyledProductGrid>
      </StyledProductContainer>
      <Footer />
    </div>
  );
};

export default ProductId;
