import React from 'react';
//import PropTypes from 'prop-types';
import styles from './GifGridItem.module.scss';

const GifGridItem = ({ title, url }) => {
  return (
    <div className={styles.container}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

//GifGridItem.propTypes = {};

export default GifGridItem;
