import React from 'react';
import styles from './Searchbar.module.css';

function Searchbar() {
  return (
    <div className={styles.searchbar_container}>
      <div className={styles.searchbar_wraper}>
        <input className={styles.searchbar_input} type="text" placeholder="Search title, author, subject, and more" />
        <img className={styles.small_icon} src="/search_icon_dark.png" alt="Icono de busqueda" />
      </div>
    </div>
  );
}

export default Searchbar;
