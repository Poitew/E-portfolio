import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import App from './views/app'
import Post from './views/post/post'
import Blog_title from './components/blog/blog-title/Blog_Title'
import Posts from './components/blog/blog-posts/posts'
import './main.css'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <>
                    <App/>
                    <ScrollRestoration/>
                </>
            )
        },

        {
            path: "/posts",
            element: (
                <>
                    <Blog_title/>
                    <Posts/>
                    <ScrollRestoration/>
                </>
            )
        },

        {
            path: "/posts/:n_post",
            element: (
                <>
                    <Post/>
                    <ScrollRestoration/>
                </>
            )
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)