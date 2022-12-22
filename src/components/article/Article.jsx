import React from 'react';
import './article.css';
import PropTypes from 'prop-types';

const Article = ({ imgUrl, date, text }) => (
  <div className='gpt3__blog-container_article'>
    <div className='gpt3__blog-container_article-image'>
      <img src={imgUrl} alt='blog_image' />
    </div>
    <div className='gpt3__blog-container_article-content'>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

Article.propTypes = {
  imgUrl: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
