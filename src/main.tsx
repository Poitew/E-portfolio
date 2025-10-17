import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import App from "./views/app";
import Post from "./components/blog/post/post";
import Posts from "./components/blog/posts/posts";
import "./main.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<App />
				<ScrollRestoration />
			</>
		),
	},

	{
		path: "/posts",
		element: (
			<>
				<Posts />
				<ScrollRestoration />
			</>
		),
	},

	{
		path: "/posts/:n_post",
		element: (
			<>
				<Post />
				<ScrollRestoration />
			</>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
