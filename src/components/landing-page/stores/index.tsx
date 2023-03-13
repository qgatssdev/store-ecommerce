import React from 'react';
import StoreItem from './store-item';
import {
  StyledStoreGrid,
  StyledStoreGridContainer,
  StyledStoreHeading,
} from './styles';
import { client } from '../../../../lib/client';

const Stores = ({ stores }: any) => {
  console.log(stores);

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

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const stores = await client.fetch(query);

  return {
    props: { stores },
  };
};

export default Stores;
