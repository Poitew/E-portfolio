import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import icons from "/src/data/json/home-icons.json";

const words = ["Software Developer", "DevOps Engineer"];
const typing_speed = 175; // Bigger = slower -> rule apply for all the properties below
const deleting_speed = 75;
const delay = 2000;

function Home() {
    const icons_json = icons;
    const [text, set_text] = useState("");  // Text to visualize
    const [index, set_index] = useState(0); // Index for single char in text
    const [is_deleting, set_is_deleting] = useState(false);

    useEffect(() => {
        const current_word = words[index];

        if (!is_deleting && text === current_word) {
            setTimeout(() => set_is_deleting(true), delay);
        }
        else if (is_deleting && text === "") {
            set_is_deleting(false);
            set_index((prev) => (prev + 1) % words.length);
        }

        const timeout = setTimeout(() => {
            set_text((prev_text) =>
                is_deleting ? prev_text.slice(0, -1) : current_word.slice(0, prev_text.length + 1)
            );
        }, is_deleting ? deleting_speed : typing_speed);

        return () => clearTimeout(timeout);
    }, [text, is_deleting, index]);

    return (
        <>
        <main className={styles.home} id="home">
            <h1 className={styles.presentation}>
                <span className={styles.span}>SickPoitew</span> - <br />
                <span className={styles.typewriter} >{text}<Cursor /></span>
            </h1>

            <div className={styles.glow}></div>
            
            <ul className={styles.list}>
                {icons_json.map((element: any, index: string) => (
                    <li key={index} className={styles.li}>
                        <img className={styles.img} src={element.src} alt={element.alt} />
                        {element.content}
                    </li>
                ))}
            </ul>

            <p className={styles.description}>
                I enjoy building websites, lower level programming, tasks automation, and in general anything tech-related!<br />
                <span className={styles.spanDesc}>
                    In my free time I like to create projects and publish them on my GitHub, I also like to study, read books and write all my thoughts in here. Bye!
                </span>
            </p>

            <div className={`${styles.btn} ${styles.btn2}`}>
                <Link className={styles.btnContent} to="#about-me-ID">Know More!</Link>
            </div>

            <div className={styles.btn}>
                <Link className={styles.btnContent} to="#projects-section">Projects</Link>
            </div>
        </main>
        <img className={styles.wave} src="/assets/bottom.svg" alt="Bottom wave" />
        </>
    );
}

const cursor_variants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

function Cursor() {
    return <motion.div variants={cursor_variants} animate="blinking" className={styles.cursor} />;
}

export default Home;