import { Link } from "react-router-dom";
import posts_json from "/src/data/json/posts.json";

function Posts() {
	const posts: any[] = posts_json;
	const reversed_posts = [...posts].reverse();

	return (
		<>
			<div className="flex flex-col items-center mb-16">
				<h1 className="text-5xl">Tech Log</h1>

				<Link className="text-sky-400" to="/">
					return to home...
				</Link>
			</div>

			<main className="flex justify-center">
				<section
					className="
							min-w-4/5 xl:min-w-3/5 min-h-3/6 p-6 bg-blue-950 border-8 
							border-slate-900 rounded-4xl flex flex-col gap-y-12
						"
				>
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

function BlogCard(props: BlogCardProps) {
	return (
		<Link
			className="gap-y-0.1 cursor-pointer border-l-2 pl-2 hover:bg-slate-900 duration-100"
			to={props.to}
		>
			<h2>{props.title}</h2>
			<p>{props.topic}</p>
			<p>{props.date}</p>
		</Link>
	);
}

export default Posts;
