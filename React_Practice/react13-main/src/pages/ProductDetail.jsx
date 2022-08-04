import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {id} = useParams();
  //const params = useParams();
  console.log('param는', id)

  return (
    <div>
      <h1>제품 상세 페이지{id}</h1>
      {/*<h1>제품 상세 페이지{params.id}</h1>*/}
    </div>
  );
};

export default ProductDetail;