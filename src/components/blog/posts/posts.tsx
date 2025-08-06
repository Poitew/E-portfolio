import { Link } from "react-router-dom";
import posts_json from "/src/data/json/posts.json";

function Posts(){
    const posts: any[] = posts_json;
    const reversed_posts = [...posts].reverse(); 

    return(
        <>
            <div className="flex flex-col items-center mb-16">
                <h1 className="text-5xl" >Tech Journal</h1>
                <Link className="text-sky-400" to="/">return to home...</Link>
            </div>

            <main className="flex justify-center">
                <section className="min-w-4/5 xl:min-w-3/5 min-h-3/6 p-6 rounded-lg bg-slate-800 flex flex-col gap-y-12" >
                    {reversed_posts.map((element, index) => (
                        <BlogCard
                            title={element.title}
                            date={element.date}
                            topic={element.topic}
                            to={element.to}
                            key={index}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}

interface BlogCardProps {
    title: string;
    date: string;
    topic: string;
    to: string;
}

function BlogCard(props: BlogCardProps){
    return(
        <Link className="w-fit gap-y-0.1" to={props.to} >
            <h2>{props.title}</h2>
            <p>{props.topic}</p>
            <p>{props.date}</p>
        </Link>
    );
}

export default Posts;