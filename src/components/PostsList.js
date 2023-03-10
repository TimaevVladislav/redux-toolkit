import React from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {PostAuthor} from "./PostAuthor"
import TimeAgo from "./TimeAgo"


// .substring(0, 100)

export default function PostsList(){
    const posts = useSelector(state => state.posts)

    const renderPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <div>
               <PostAuthor />
               <TimeAgo />
            </div>
            <p className="post-content">{post.content}</p>
            <Link to={`/posts/${post.id}`} className="button muted-button">
              View post
            </Link>
        </article>
    ))
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}