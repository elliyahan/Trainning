import React from 'react';
import { useState } from 'react'
import productData from '../../db/productData.json';
import TabUl from './TabUl';
import './css/style.css';

const Tab = (props) => {
  const tabData = productData;
  const [dataIndex, setDataIndex] = useState(0);
  const handleTab = (e, index) => {
    e.preventDefault();
    setDataIndex(index);
  }
  const dataUl = tabData.filter((data, index) => index === dataIndex);
  return (
    <div className="tab">
      <div className="tab-title">
        {
          tabData.map((dataItem, idx) => <button className={(dataIndex === idx) ? "btn active" : "btn"} key={dataItem.id} onClick={(e) => {handleTab(e, idx)}}>{dataItem.title}</button>)
        }
      </div>
      <div className="tab-body">
        {
          dataUl.map((data, idx) => <TabUl key={data.id} data={data} />)
        }
        {/*<ul>
          <li><img src="https://dummyjson.com/image/i/products/2/1.jpg" alt="이미지" /></li>
          <li><img src="https://dummyjson.com/image/i/products/2/1.jpg" alt="이미지" /></li>
          <li><img src="https://dummyjson.com/image/i/products/2/1.jpg" alt="이미지" /></li>
        </ul>*/}
      </div>
    </div>
  );
};

export default Tab;