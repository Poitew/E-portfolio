import { Link } from "react-router-dom";
import skills from "/src/data/json/skill.json"
import styles from './About_Me.module.css'

interface skill_element {
    src: string;
    alt: string;
}

function AboutMe(){

    const SoftwareDev_skills: any[] = skills.SoftwareDev;
    const DevOps_skills: any[] = skills.DevOps;

    return(
        <>
            <div className={styles.section} id="about-me-ID" >
                <div className={styles.skillsContainer}>
                    <Skills
                        skills_arr={SoftwareDev_skills}
                        title="Software Development"
                    ></Skills>

                    <Skills
                        skills_arr={DevOps_skills}
                        title="DevOps Engineering"
                    ></Skills>
                </div>

                <div className={styles.historyContainer}>
                    <SectionHeader
                        title="About Me & Projects"
                    >
                    </SectionHeader>
                    <p className={styles.history}>
                        Hi! I'm "sickpoitew", a 17-year-old student and IT enthusiast based in Italy with 4 years of 
                        experience in programming. I'm an aspiring Software Developer and DevOps Engineer constantly studying to enhance my
                        knowledge.
                        <br />
                        <br />
                        My expertise in software development is focused on full-stack development, and as such I have a strong
                        experience with languages such as HTML, CSS, JavaScript/TypeScript, ReactJS and VueJS for front-end, as well as
                        PHP and MySQL for the back-end.
                        I also have a deep interest in a lower level programming, particularly with C++.
                        As a DevOps enthusiast I have experience in using Linux-based operating systems, Bash/Python for automating tasks, 
                        Docker for both containerization and deployment, and Jenkins for CI/CD.
                        <br/>
                        <br />
                        In my free time I love studying anything tech-related, reading books and listening to music.
                        I also have a blog where I write my opinions, thoughts and share tutorials in hope that they will be useful;
                        link below. 
                    </p>
                </div>         
            </div>

            <Blog_btn/>
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
            <p className={styles.skillsTitle} >{props.title}</p>
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

interface SectionHeaderProps {
    title: string;
}

function SectionHeader(props: SectionHeaderProps){
    return(
        <div className={styles.title}>
            <hr className={styles.hr} />
            <h2 className={styles.h2} >{props.title}</h2>
        </div>
    );
}

function Blog_btn(){
    return(
        <div className={styles.blogBtnContainer} >
            <Link to="/posts" className={styles.blogBtn} >Browse posts...</Link>
        </div>
    );
}

export default AboutMe;