import React from 'react';
import Image from 'next/image';
import { StyledStoreImage } from './styles';

const StoreItem = () => {
  return (
    <div>
      <div>
        <StyledStoreImage
          src={require('../../../../assets/pexels-mohammed-abubakr-11757389 1.png')}
          alt=''
        />
        <p>Puma</p>
      </div>
    </div>
  );
};

export default StoreItem;
