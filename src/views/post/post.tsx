import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import styles from "./post.module.css"

function Post() {
    const { n_post }: any = useParams();
    const [content, setContent] = useState<string>("");
    // Get all the posts from /src/data/posts/ and save them in a record: key (path) -> value (content)
    const posts = import.meta.glob("/src/data/posts/*.md", { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

    useEffect(() => {
        // Create path to post based on the url
        const postKey = `/src/data/posts/${n_post}.md`;
        
        // If the new path is a correct key, we save it's content into content state
        if (posts[postKey]) {
            setContent(posts[postKey]);
        }
        else {
            setContent("Post not found");
        }
    }, [n_post]);

    return (
        <main className={styles.post} id="post">
            <Link className={styles.staticLink} to="/posts">Return to posts</Link>
            <div className={styles.content} >
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props}) => <h1 className={styles.h1} {...props} />,
                        h2: ({ node, ...props }) => <h2 className={styles.h2} {...props} />,
                        h3: ({ node, ...props}) => <h3 className={styles.h3} {...props} />,
                        p: ({ node, ...props }) => <p className={styles.p} {...props} />,
                        code: ({ node, ...props }) => <code className={styles.code} {...props} />
                    }}
                >{content}</ReactMarkdown>
            </div>

            <Link className={styles.link} to="/posts">Return to posts</Link> <br/>
        </main>
    );
}

export default Post;