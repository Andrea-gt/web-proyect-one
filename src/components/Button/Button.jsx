import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';

function Button({ type = 'default', size = 'medium', label }) {
  const buttonClass = `${styles.button} ${styles[type]} ${styles[size]}`;
  return (
    <button className={buttonClass} type="button">
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
