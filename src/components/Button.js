import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const STYLES = [styles['primary'], styles['secondary']];

const SIZES = [styles['small'], styles['medium'], styles['large']];

const Button = ({
  children,
  type = 'button',
  onClick,
  className = 'primary',
  size = 'medium',
}) => {
  const checkStyles = STYLES.includes(className)
    ? styles[className]
    : STYLES[0];
  const checkSize = SIZES.includes(size) ? styles[size] : SIZES[0];

  return (
    <button
      type={type}
      className={[styles.base, checkStyles, checkSize].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
