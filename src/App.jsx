import Navbar from "./components/Navbar/Navbar"
import Searchbar from "./components/Searchbar/Seachbar";
import styles from "./App.module.css"
import logoSVG from "/logo.svg";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <div className={styles.homepage_container}>
          <div className={styles.homepage_title_logo_container}>
            <object className={styles.homepage_header_logo} type="image/svg+xml" data={logoSVG}></object>
            <h1 className={styles.homepage_header_title}>Studying, simplified.</h1>
          </div>
          <img className={styles.homepage_header_image} src='https://www.sparknotes.com/images/banner-homepage.svg'/>
        </div>
        <Searchbar/>
      </div>
    </>
  )
}

export default App
