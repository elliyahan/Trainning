import React from 'react';
import './css/style.css';

const FunItem = ({title, info, imgSrc}) => {
  return (
    <li className='fun-item'>
      <div className='item-imgbox'>
        <img src={imgSrc} alt="" />
      </div>
      <div className="item-infobox">
        <span className="info-title">{title}</span>
        <span className="info-company">{info}</span>
      </div>
    </li>
  );
};

export default FunItem;