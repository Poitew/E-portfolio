import { useState, useRef, useEffect } from "react"
import { motion, useSpring, useScroll } from "motion/react"
import { Link } from "react-router-dom";
import styles from './Header.module.css'

function HeaderFunc(){

    const [open_menu, set_open_menu] = useState<boolean>(false);

    const ham_btn = useRef<HTMLButtonElement | null>(null);
    const header = useRef<HTMLElement | null>(null);
    const headerImage = useRef<HTMLImageElement | null>(null);
    const homeP = useRef<HTMLParagraphElement | null>(null);
    const aboutMeP = useRef<HTMLParagraphElement | null>(null);
    const projectsP = useRef<HTMLParagraphElement | null>(null);

    const width: number = window.innerWidth;
    const color: string = "#0ea5e9"; // Color for the header links

    useEffect(() => {
        if (homeP.current) homeP.current.style.color = color;
        if (aboutMeP.current) aboutMeP.current.style.color = "white";
        if (projectsP.current) projectsP.current.style.color = "white";

        const handleScroll = () => {
            const websitePosition = window.scrollY;
            // Changes the logo size
            if (window.innerWidth > 767) {
                if (header.current) {
                    header.current.style.background = websitePosition >= 50 ? "rgba(12, 7, 24, 1)" : "rgba(12, 7, 24, 0)";
                }
                if (headerImage.current) {
                    headerImage.current.style.width = websitePosition >= 50 ? "4vw" : "12vw";
                }
            }
            
            // Changes the header links color depending on which section of the page you are
            if (homeP.current && aboutMeP.current && projectsP.current) {
                if (websitePosition <= 350) {
                    homeP.current.style.color = color;
                    aboutMeP.current.style.color = "white";
                    projectsP.current.style.color = "white";
                } else if (websitePosition <= 1500) {
                    homeP.current.style.color = "white";
                    aboutMeP.current.style.color = color;
                    projectsP.current.style.color = "white";
                } else {
                    homeP.current.style.color = "white";
                    aboutMeP.current.style.color = "white";
                    projectsP.current.style.color = color;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [width]);

    function handleMenu() {
        if(header.current){
            if(open_menu) {
                header.current.style.transform = "translateY(0)";
                header.current.style.transition = "all 0.5s ease-in-out";
            }
            else {
                header.current.style.transform = "translateY(-200%)";
            }
            set_open_menu(!open_menu);
        }
    }

    return(
        <>
            {
                (width > 600) &&
                <>
                    <header ref={header} className={styles.header} >
                        <div className={styles.logo}>
                            <Link to="#about-me-ID" className={styles.link}>
                                <img className={styles.img} src="/assets/icons/logo.webp" alt="Code Logo" ref={headerImage} />
                                SICKPOITEW
                            </Link>
                        </div>
                
                        <div ref={homeP} className={styles.div}>
                            <Link to="#home">HOME</Link>
                        </div>
                
                        <div ref={aboutMeP} className={styles.div}>
                            <Link to="#about-me-ID">ABOUT ME</Link>
                        </div>
                
                        <div ref={projectsP} className={styles.div}>
                            <Link to="#projects-section">PROJECTS</Link>
                        </div>
                        
                        <ScrollIndicator/>
                    </header>
                </>
            }

            {
                (width <= 600) &&
                <> 
                    <button ref={ham_btn} onClick={handleMenu} className={styles.btn} ><img src="/assets/icons/ham_menu.svg" alt="Hamburger Menu" /></button>
                    <header ref={header} className={styles.header} >
                        <ul className={styles.list} >
                            <li className={styles.li} ><a onClick={handleMenu} href="#home">Home</a></li>
                            <li className={styles.li} ><a onClick={handleMenu} href="#about-me-ID">About Me</a></li>
                            <li className={styles.li} ><Link onClick={handleMenu} to="/posts" >Posts</Link></li>
                            <li className={styles.li} ><a onClick={handleMenu} href="#projects-section">Projects Section</a></li>
                        </ul>
                        <button onClick={handleMenu} className={styles.close}><img className={styles.closeImg} src="assets/icons/x.svg" alt="close Hamburger Menu" /></button>
                    </header>
                </>
            }
        </>
    );
}

function ScrollIndicator(){
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
        style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            originX: 0,
            backgroundColor: "var(--green)",
        }}
        />
    );
}

export default HeaderFunc;