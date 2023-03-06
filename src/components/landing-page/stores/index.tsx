import { Typography } from '@mui/material';
import React from 'react';
import StoreItem from './store-item';
import {
  StyledStoreGrid,
  StyledStoreGridContainer,
  StyledStoreHeading,
} from './styles';

const Stores = () => {
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
    <StyledStoreGridContainer>
      <StyledStoreHeading align='center'>Stores</StyledStoreHeading>
      <StyledStoreGrid>
        {products.map((product, index) => (
          <StoreItem key={index}></StoreItem>
        ))}
      </StyledStoreGrid>
    </StyledStoreGridContainer>
  );
};

export default Stores;
