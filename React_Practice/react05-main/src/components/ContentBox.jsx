import React from 'react';
import './../css/Content.css';
import { useState } from 'react';
import {MdFavorite} from 'react-icons/md';

const ContentBox = () => {
  const favList = ['SoSo', 'Love'];
  const colorList = [{color :'#ddd', fontSize:'1.5rem'}, {color : '#f00', fontSize:'1.5rem'}];
  let [fav, setFav] = useState(0);
  const fncFav = () => {
    setFav((fav === 0) ? 1 : 0);
  }

  let [num, setNum] = useState(0);
  const fncIncrement = () => {
    setNum((num<3) ? (num+1) : (num = 3));
  }
  const fncDecrement = () => {
    setNum((num>0) ? (num-1) : (num = 0));
  }

  return (
    <div id="contentBox">
      <h2>상품리스트</h2>
      <div className="productCard">
        <div className="img">상품이미지</div>
        <dl>
          <dt>아이템 1</dt>
          <dd>아이템 설명 아이템 설명입니다</dd>
        </dl>
        <div className="btn-area">
          <button type="button" onClick={fncFav}>좋아요</button>
          <span style={colorList[fav]}>{favList[fav]}<MdFavorite /></span>
        </div>
        <div className='btn-area'>{num}
          <button type="button" onClick={fncIncrement}>+1</button>
          <button type="button" onClick={fncDecrement}>+1</button>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;