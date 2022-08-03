import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  let params = useParams();

  return (
    <div>
      <h1>상품상세페이지</h1>
      <h2>제품 아이디는 {params.id}</h2>
    </div>
  );
};

export default Detail;