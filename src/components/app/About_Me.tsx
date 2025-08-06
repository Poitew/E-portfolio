import data from "/src/data/json/skills.json"

interface skill_element {
    src: string;
    alt: string;
}

function AboutMe(){
    const skills = data;

    return(
        <div className="flex flex-col xl:flex-row items-baseline gap-x-24 mb-48 mt-10 xl:mt-0" id="about-me-ID" >
            <div className="flex w-full flex-col items-center xl:items-start">
                <h2 className="text-5xl text-center xl:text-left xl:ml-7 text-sky-400">About Me</h2>

                <p className="md:w-8/12 xl:w-xl text-center xl:text-left mt-5 text-sm/7 xl:pl-14 text-slate-400">
                    Hi! I'm sickpoitew, a 18-year-old student and IT enthusiast based in Italy with 5 years of 
                    experience in programming. I'm an aspiring Software Developer and DevOps Engineer.
                    <br />
                    <br />
                    Since I started programming I've always been interested in full stack development and a sort of lower level programming
                    (specifically with C++ and Rust). <br/>
                    Along the way I found interest in the DevOps environment, and closely related, in networking.
                    <br/>
                    <br />
                    In my free time I love studying anything tech-related, reading books and listening to music.
                    I also have a blog where I share tutorials, and informations for fun.
                </p>
            </div>

            <Skills
            title="Some of my skills..."
            skills_arr={skills}
            ></Skills>
        </div>
    );
}

interface SkillsProps {
    title: string,
    skills_arr: any[]
}

function Skills({title, skills_arr}: SkillsProps){
    return(
        <div className="w-full mt-36 text-center xl:text-left text-3xl">
            <p>{title}</p>

            <div className="mt-12 px-5 grid grid-cols-4 gap-y-7 gap-x-12 md:gap-x-20">
                {skills_arr.map((element: skill_element, index: number) => (
                    <img
                        key={index}
                        src={element.src}
                        alt={element.alt}
                        loading="lazy"
                        className="w-11 m-auto transition-all duration-500 hover:scale-150"
                    ></img>
                ))}
            </div>
        </div>
    );
}

export default AboutMe;