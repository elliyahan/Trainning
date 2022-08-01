import React from 'react';
import ContentBox from './ContentBox';
import '../css/Content.css';

const Main = () => {
  return (
    <main id="container">
      <div id="innerBox">
        <ContentBox />
      </div>
    </main>
  );
};

export default Main;