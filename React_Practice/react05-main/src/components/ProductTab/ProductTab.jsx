import React from 'react';
import './css/style.css';
import ProductList from './ProductList';
// import productData from '../../db/productData.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTab = () => {
  const [tabData, setTabData] = useState([]);
  const [num, setNum] = useState(1);
  const tabDataUrl = 'http://localhost:3000/db/productData.json';
  // const tabData = productData;

  useEffect(() => {
    ( async () => {
      const les = await axios(tabDataUrl);
      setTabData(les.data);
    })()
  }, [])

  const code = tabData.filter((data, index) => index === num);
  const fncTab = (e, index) => {
    e.preventDefault();
    setNum(index);
  };

  return (
    <div className="product-tab">
      <div className="tab-btn">
        {
          tabData.map((data, index) => <button className={num === index ? "btn on" : "btn"} key={data.id} onClick={(e)=>{fncTab(e, index)}}>{data.brand}</button>)
        }
      </div>
      <div className="tab-content">
        {
          code.map((data, index) => <ProductList key={data.id} data={data} />)
        }
      </div>
    </div>
  );
};

export default ProductTab;