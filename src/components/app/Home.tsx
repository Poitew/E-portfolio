import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { LinkProps } from "../../types/link";
import icons from "/src/data/json/home-icons.json";

const words = ["Software Developer", "DevOps environment"];
const typing_speed = 175;
const deleting_speed = 75;
const delay = 2000;

function Home() {
    const icons_json = icons;
    const [text, set_text] = useState("");
    const [index, set_index] = useState(0);
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
        <main className="min-h-screen background-gradient bg-[length:200%_200%]
        animate-[gradient_15s_ease_infinite] flex flex-col items-center px-5 xl:px-24 pt-24" id="home">
            <h1 className="w-full xl:w-3/6 min-h-72 xl:min-h-40 text-5xl/relaxed 
            text-center text-wrap">
                <span className="text-sky-400 xl:pr-16">Sickpoitew</span><br />
                <span className="contents xl:flex items-center" >{text} <Cursor /> </span>
            </h1>
            
            <ul className="flex flex-wrap gap-7 xl:gap-x-32 mt-5 mb-12">
                {icons_json.map((element: any, index: string) => (
                    <li key={index} className="flex items-center hover:scale-125 hover:-rotate-12 transition-all duration-200">
                        <img className="w-9" src={element.src} alt={element.alt} />
                    </li>
                ))}
            </ul>

            <p className="w-5/6 text-center leading-9 text-slate-400">
                I enjoy building websites, lower level programming, tasks automation, and in general anything tech-related!
                <br/>
                In my free time I like to create projects and publish them on my GitHub. 
                I also have a deep passion for reading books. Sometimes I write on my blog, check it out!
            </p>

            <div className="flex flex-col md:flex-row gap-x-10 gap-y-10 mt-10 pb-16">
                <Button
                    label="Projects"
                    route="#projects-section"
                />

                <Button
                    label="Posts"
                    route="/posts"
                />
            </div>
        </main>
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
    return <motion.div variants={cursor_variants} animate="blinking" className="w-0.5 h-14 inline-block bg-white ml-7" />;
}

function Button({label, route}: LinkProps) {
    return(
        <div className="w-48 h-12 rounded-xl bg-gray-900 border-zinc-700 border-1 hover:rotate-2 hover:scale-105 transition-all">
            <Link className="w-full h-full flex items-center justify-center" to={route} >{label}</Link>
        </div>
    );
}

export default Home;