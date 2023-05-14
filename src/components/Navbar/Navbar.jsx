import styles from './Navbar.module.css'
import Button from '../Button/Button';

function Navbar() {
    return(
      <>
      <div className={styles.header_container}>
        <nav>
          <ul className={styles.navbar_ul}>
            <li>
              <a href ="https://www.sparknotes.com/shakespeare/">Shakespeare</a>
            </li>
            <li>
              <a href ="https://www.sparknotes.com/lit/">Literature Study</a>
            </li>
            <li>
              <a href ="https://www.sparknotes.com/othersubjects/">Other Subjects</a>
            </li>
            <li>
              <a href ="https://www.sparknotes.com/test-prep/">Test Prep Plus</a>
            </li>
            <li>
              <a href ="https://www.sparknotes.com/teacher/">Teacher</a>
            </li>
            <li>
              <a href ="https://www.sparknotes.com/blog/">Blog</a>
            </li>
          </ul>
        </nav>
        <div className={styles.account_container}>
          <img className = {styles.small_icon} src ="/search_icon.png"/>
          <Button type="secondary" size="small" label="Login" />
          <Button type="special" size="medium" label="Sign Up for PLUS" />
        </div>
        </div>
      </>
    )
}
export default Navbar;
