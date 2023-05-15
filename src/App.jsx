import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Seachbar';
import Blocks from './components/Blocks/Blocks';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.homepage_container}>
        <div className={styles.homepage_title_logo_container}>
          <object className={styles.homepage_header_logo} type="image/svg+xml" data="/logo.svg" />
          <h1 className={styles.homepage_header_title}>Studying, simplified.</h1>
        </div>
        <img
          className={styles.homepage_header_image}
          src="https://www.sparknotes.com/images/banner-homepage.svg"
          alt="Banner img"
        />
      </div>
      <Searchbar />
      <Blocks />
    </div>
  );
}

export default App;
