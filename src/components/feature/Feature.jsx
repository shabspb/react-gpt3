import React from 'react';
import './feature.css';
import PropTypes from 'prop-types';

const Feature = ({ title, text }) => (
  <div className='gpt3__features-container__feature'>
    <div className='gpt3__features-container__feature-title'>
      <div />
      <h1>{title}</h1>
    </div>
    <div className='gpt3__features-container_feature-text'>
      <p>{text}</p>
    </div>
  </div>
);

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Feature;
