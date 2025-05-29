import { Link } from "react-router-dom";
import skills from "/src/data/json/skills.json"
import styles from './About_Me.module.css'

interface skill_element {
    src: string;
    alt: string;
}

function AboutMe(){

    const software_dev_skills: any[] = skills.SoftwareDev;
    const devops_skills: any[] = skills.DevOps;
    const others: any[] = skills.Others;

    return(
        <>
            <div className={styles.section} id="about-me-ID" >
                <div className={styles.skillsContainer}>
                    <Skills
                        title="Software Development"
                        skills_arr={software_dev_skills}
                    ></Skills>

                    <Skills
                        title="DevOps Engineering"
                        skills_arr={devops_skills}
                    ></Skills>

                    <Skills
                        title="Other Skills"
                        skills_arr={others}
                    ></Skills>
                </div>

                <div className={styles.historyContainer}>
                    <div className={styles.title}>
                        <hr className={styles.hr} />
                        <h2 className={styles.h2} >About Me & Projects</h2>
                    </div>
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
                        In my free time I love studying anything tech-related, reading books and listening to music.
                        I also have a blog where I write my opinions, thoughts, and share tutorials in hope that they will be useful.
                    </p>
                </div>         
            </div>
        </>
    );
}

interface SkillsProps {
    title: string,
    skills_arr: any[]
}

function Skills(props: SkillsProps){
    return(
        <div>
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