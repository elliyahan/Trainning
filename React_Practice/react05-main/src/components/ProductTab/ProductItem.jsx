import React from 'react';

const ProductItem = ({data}) => {
  return (
    <li>
      <img src={data} alt="이미지" />
    </li>
  );
};

export default ProductItem;