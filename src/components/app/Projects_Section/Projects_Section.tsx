import projects from "/src/data/json/projects.json"
import styles from './Projects_Section.module.css'

function ProjectsSection(){

    const projects_info: any[] = projects;

    return(
        <div className={styles.section} id="projects-section" >
            {projects_info.map((element, index) => (
                <Project
                    key={index}
                    name={element.name}
                    desc={element.description}
                    src={element.src}
                    tech={element.tech}
                    github={element.github}
                />
            ))}
        </div>
    );
}

interface ProjectsProp {
    src: string;
    name: string;
    desc: string;
    tech: string[];
    github: string;
}

function Project(props: ProjectsProp){
    return(
        <div className={styles.project} style={{ backgroundImage: `url(${props.src})`}}>
            <div className={styles.info}>
                <h3 className={styles.title}>{props.name}</h3>
                <p className={styles.description} >{props.desc}</p>

                <ul className={styles.list} >
                    {props.tech.map((techItem, index) => (
                        <li key={index}>{techItem}</li>
                    ))}
                </ul>
            </div>
            
            <a href={props.github} className={styles.link} target="__blank" >
                <img src="/assets/tech/github.svg" alt="github repo" />
            </a>
        </div>
    );
}

export default ProjectsSection;