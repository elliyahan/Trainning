import React from 'react';
import './css/index.css';
import FunItem from '../FunItem';
import entNews from './../db/entNews.json';

const FunList = () => {
    const newsData = entNews;
    return (
        <ul className='fun-list'>
            {
                newsData.map((news) => {
                    return(
                        <FunItem title={news.title} info={news.info} img={news.imgSrc} key={news.id} />
                    )
                })
            }
        </ul>
    );
};

export default FunList;