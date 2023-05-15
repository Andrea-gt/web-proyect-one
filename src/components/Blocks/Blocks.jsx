import styles from './Blocks.module.css';
import Button from '../Button/Button';

function Blocks() {
    return(
        <>
          <div className={styles.popular_titles}>
            <h2>Top titles</h2>
            <ul>
                <li><a className={styles.popular_titles_link} href="https://www.sparknotes.com/shakespeare/macbeth/">
                <h2>Macbeth</h2><span>William Shakespeare</span></a></li>
                <li><a className={styles.popular_titles_link} href="https://www.sparknotes.com//shakespeare/hamlet/">
                <h2>Hamlet</h2><span>William Shakespeare</span></a></li>
                <li><a className={styles.popular_titles_link} href="https://www.sparknotes.com//shakespeare/romeojuliet/">
                <h2>Romeo and Juliet</h2><span>William Shakespeare</span></a></li>
                <li><a className={styles.popular_titles_link} href="https://www.sparknotes.com/lit/gatsby/">
                <h2>The Great Gatsby</h2><span>F. Scott Fitzgerald</span></a></li>
                <li><a className={styles.popular_titles_link} href="https://www.sparknotes.com/lit/mocking/">
                <h2>To Kill a Mockingbird</h2><span>Harper Lee</span></a></li>
            </ul>
            </div>
          <div className={styles.blocks_container}>
            <div className={styles.sparknotes_plus}>
                <div className={styles.new_text}>
                  <img src="https://www.sparknotes.com/images/icon-newtext-homepage.svg"/>
                </div>
                <img src="https://img.sparknotes.com/promotions/icon-promoad-homepage.png"/>
                <div className={styles.sparknotes_plus_text}>
                    <img src = 'https://www.sparknotes.com/images/homepage-plus-logo.svg'/>
                    <h1>Introducing the latest help with SparkNotes PLUS</h1>
                    <p>With PLUS, you get instant access to features like Flashcards, 
                        AP® English Test Prep, Mastery Quizzes, and modern-day Shakespeare translations, now with audio!</p>
                    <div className={styles.sparknotes_plus_buttons}>
                      <Button type="primary" size="large" label="Start Your FREE trial" />
                      <Button type="seconday" size="large" label="Explore PLUS Features" />
                    </div>
                    <p>Already have an account? <b>Login</b></p>
                </div>
            </div>
            <div className= {styles.guides_stories_container}>
                <div className={styles.study_guides}>
                  <h1>New Study Guides</h1>
                  <p>Each guide features chapter summaries, character analyses, important quotes, & much more!</p>
                  <ul>
                    <li><a href="https://www.sparknotes.com/lit/shadow-and-bone/">Shadow & Bone</a></li>
                    <li><a href="https://www.sparknotes.com/lit/six-of-crows/">Six of Crows</a></li>
                    <li><a href="https://www.sparknotes.com/lit/red-white-and-royal-blue/">Red, White & Royal Blue</a></li>
                    <li><a href="https://www.sparknotes.com/lit/a-court-of-thorns-and-roses/">A Court of Thorns and Roses</a></li>
                    <li><a href="https://www.sparknotes.com/lit/evelyn-hugo/">The Seven Husbands of Evelyn Hugo</a></li>
                    <li><a href="https://www.sparknotes.com/lit/come-up/">On the Come Up</a></li>
                    <li><a href="https://www.sparknotes.com/lit/circle/">Circle</a></li>
                    <li><a href="https://www.sparknotes.com/lit/night-circus/">The Night Circus</a></li>
                  </ul>
                </div>
                <div className={styles.short_stories}>
                  <h1>Short Stories</h1>
                  <p>Explore our newest short story guides!</p>
                  <ul>
                    <li><a href="https://www.sparknotes.com/short-stories/the-lesson/">The Lesson</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/dead-mens-path/">Dead Men's Path</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/the-oval-portrait/">The Oval Portrait</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/the-curious-case-of-benjamin-button/">The Curious Case of Benjamin Button</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/the-library-of-babel/">The Library of Babel</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/eleven/">Eleven</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/story-of-your-life/">Story of Your Life</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/the-ones-who-walk-away/">The Ones Who Walk Away from Omelas</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/a-scandal-in-bohemia/">A Scandal in Bohemia</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/house-taken-over/">House Taken Over</a></li>
                    <li><a href="https://www.sparknotes.com/short-stories/salvatore/">Salvatore</a></li>
                  </ul>
                </div>
            </div>
            <div className={styles.william_information}>
                <div className={styles.information}>
                    <h1>William Shakespeare's Life & Times</h1>
                    <p>Our comprehensive guide includes a detailed biography, social and historical context, 
                        quotes, and more to help you write your essay on Shakespeare or understand his plays and poems.</p>
                    <button>Read the guide<img src='/right-arrow.png'/></button>
                </div>
                <div className={styles.image}>
                    <img src ='/william_image.png'/>
                </div>
            </div>
          </div>
        </>
    )
}

export default Blocks;