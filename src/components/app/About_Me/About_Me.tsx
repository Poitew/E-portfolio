import { Link } from "react-router-dom";
import data from "/src/data/json/skills.json"
import styles from './About_Me.module.css'

interface skill_element {
    src: string;
    alt: string;
}

function AboutMe(){

    const skills = data;

    return(
        <div className={styles.section} id="about-me-ID" >
            <div className={styles.historyContainer}>
                <h2 className={styles.h2} >About Me</h2>

                <p className={styles.history}>
                    Hi! I'm "sickpoitew", a 17-year-old student and IT enthusiast based in Italy with 4 years of 
                    experience in programming. I'm an aspiring Software Developer and DevOps Engineer constanly trying to improve.
                    <br />
                    <br />
                    My expertise in software development is focused on full-stack development, and as such I have a strong
                    experience with languages and frameworks such as HTML, CSS, JavaScript/TypeScript, ReactJS for front-end, as well as
                    PHP, Node.js and MySQL for the back-end.
                    I also have a deep interest in a lower level programming, particularly with C++.
                    As a DevOps enthusiast I have experience in using Linux-based operating systems, Bash/Python for automating tasks, 
                    Docker for both containerization and deployment, and Jenkins for CI/CD.
                    <br/>
                    <br />
                    In my free time I love studying anything tech-related, reading books and listening to music.                        I also have a blog where I write my opinions, thoughts, and share tutorials in hope that they will be useful.
                </p>
            </div>

            <Skills
            title="Main Stack"
            skills_arr={skills}
            ></Skills>
        </div>
    );
}

interface SkillsProps {
    title: string,
    skills_arr: any[]
}

function Skills(props: SkillsProps){
    return(
        <div className={styles.skillsContainer}>
            <p>{props.title}</p>
            <div className={styles.grid}>
                {props.skills_arr.map((element: skill_element, index: number) => (
                    <img
                        key={index}
                        src={element.src}
                        alt={element.alt}
                        loading="lazy"
                        className={styles.skills}
                    ></img>
                ))}
            </div>
        </div>
    );
}

export default AboutMe;