import { useState, useRef, useEffect } from "react"
import { motion, useSpring, useScroll } from "motion/react"
import { Link } from "react-router-dom";
import styles from './Header.module.css'

function HeaderFunc(){

    const [open_menu, set_open_menu] = useState<boolean>(false);

    const ham_btn = useRef<HTMLButtonElement | null>(null);
    const header = useRef<HTMLElement | null>(null);
    const headerImage = useRef<HTMLImageElement | null>(null);
    const width: number = window.innerWidth;

    useEffect(() => {
        const handleScroll = () => {
            const websitePosition = window.scrollY;

            // Change the logo size upon scrolling down
            if (window.innerWidth > 767) {
                if (header.current) {
                    header.current.style.background = websitePosition >= 50 ? "rgba(12, 7, 24, 1)" : "rgba(12, 7, 24, 0)";
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
            if (!open_menu) {
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
          (width > 600) ?
            <header ref={header} className={styles.header} >
                <Link to="#about-me-ID" className={styles.link}>
                    <img className={styles.img} src="/assets/icons/logo.svg" alt="Code Logo" ref={headerImage} />
                </Link>

	            <nav className={styles.nav} >
		            <div className={styles.div} style={{color: "#0ea5e9"}}>
                        <Link to="#home">Home</Link>
                    </div>
                
                    <div className={styles.div}>
                        <Link to="/posts">Posts</Link>
                    </div>
	            </nav>
              
                <ScrollIndicator/>
            </header>

            :

            <> 
            <button ref={ham_btn} onClick={handleMenu} className={styles.btn} ><img src="/assets/icons/ham_menu.svg" alt="Hamburger Menu" /></button>
            <header ref={header} className={styles.header} >
                <ul className={styles.list} >
                    <li className={styles.li} ><Link onClick={handleMenu} to="#home">Home</Link></li>
                    <li className={styles.li} ><Link onClick={handleMenu} to="#about-me-ID">About Me</Link></li>
                    <li className={styles.li} ><Link onClick={handleMenu} to="#projects-section">Projects Section</Link></li>
                    <li className={styles.li} ><Link onClick={handleMenu} to="/posts" >Posts</Link></li>
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
