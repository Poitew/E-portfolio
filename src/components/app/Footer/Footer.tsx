import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sitemap}>
                <ul className={styles.list}>
                    <li className={styles.li} ><a href="#home">Home</a></li>
                    <li className={styles.li} ><a href="#about-me-ID">About Me</a></li>
                    <li className={styles.li} ><a href="#projects-section">Projects</a></li>
                </ul>

                <a 
                    href="https://github.com/Poitew"
                    rel="noopener noreferrer"
                    target="_blank"
                >  
                    <img className={styles.icon} src="/assets/tech/github.svg" alt="Github icon" />
                </a>

                <p className={styles.thanks} >Made with love by sickpoitew</p>
            </div>
        </footer>
    );
}

export default Footer;