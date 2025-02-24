import { Link } from "react-router-dom";
import styles from "./Blog_Title.module.css"

function Blog_title(){
    return(
        <div className={styles.titleContainer}>
            <h1 className={styles.title} >Tech journal</h1>
            <Link className={styles.link} to="/">return to home...</Link>
        </div>
    );
}

export default Blog_title;