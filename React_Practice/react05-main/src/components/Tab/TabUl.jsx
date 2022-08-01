import React from 'react';
import TabLi from './TabLi';

const TabUl = ({data}) => {
  const dataLi = data;
  return (
    <div>
      <h2>{dataLi.brand}</h2>
      <ul className="tab-ul">
        {
          dataLi.images.map((imgUrl, index) => <TabLi key={index} img={imgUrl} />)
        }
        {/*<li><img src="https://dummyjson.com/image/i/products/2/1.jpg" alt="이미지" /></li>*/}
      </ul>
    </div>
  );
};

export default TabUl;