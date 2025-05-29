import { Link } from "react-router-dom";
import styles from "./posts.module.css";
import posts_json from "/src/data/json/posts.json";

function Posts(){
    const posts: any[] = posts_json;
    const reversed_posts = [...posts].reverse(); // reverse the posts to put the latest post on top

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.title} >Tech Journal</h1>
                <Link className={styles.link} to="/">return to home...</Link>
            </div>

            <main className={styles.main}>
                <section className={styles.posts} >
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
        <Link className={styles.post} to={props.to} >
            <h2 className={styles.post_title} >{props.title}</h2>
            <p className={styles.topic} >- {props.topic}</p>
            <p className={styles.date} >{props.date}</p>
        </Link>
    );
}

export default Posts;