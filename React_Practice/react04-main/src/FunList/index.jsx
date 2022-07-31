import React from 'react';
import './css/style.css';
import FunItem from '../FunItem';
import entNews from '../db/entNews.json';

const FunList = () => {
  const newsData = entNews;
  return (
    <ul className='fun-list'>
      {
        newsData.map((news) => {
          return (
            <FunItem title={news.title} info={news.info} imgSrc={news.imgSrc} key={news.id}/>
            )
          })
      }

      {
        newsData.map((news) => {
          return (
            <FunItem title={news.title} info={news.info} imgSrc={news.imgSrc} key={news.id}/>
            )
          })
      }
    </ul>
  );
};

export default FunList;