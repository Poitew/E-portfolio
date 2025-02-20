import { Link } from "react-router-dom";
import styles from "./posts.module.css";
import posts_json from "/src/data/json/posts.json";

function Posts(){
    const posts: any[] = posts_json;

    return(
        <main className={styles.posts} >
            {posts.map((element, index) => (
                <Blog_Card
                    title={element.title}
                    date={element.date}
                    topic={element.topic}
                    to={element.to}
                    key={index}
                />
            ))}
        </main>
    );
}

interface BlogCardProps {
    title: string;
    date: string;
    topic: string;
    to: string;
}

function Blog_Card(props: BlogCardProps){
    return(
        <Link className={styles.post} to={props.to} >
            <p className={styles.date} >{props.date}</p>
            <h2 className={styles.title} >{props.title}</h2>
            <p className={styles.topic} >- {props.topic}</p>
        </Link>
    );
}

export default Posts;