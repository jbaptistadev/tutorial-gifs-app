import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import styles from './GifGrid.module.scss';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">loading...</p>
      )}
      <div className={`${styles.container} animate__animated animate__fadeIn`}>
        {images.map(({ title, id, url }) => (
          <GifGridItem title={title} url={url} key={id} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  categorie: PropTypes.string,
};

export default GifGrid;
