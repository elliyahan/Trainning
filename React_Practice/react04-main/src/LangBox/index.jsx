import React from 'react';
import './css/style.css';

const LangBox = ({lang}) => {
  return (
    <div className='lang-lists'>
      <li>{lang}</li>
    </div>
  );
};

export default LangBox;