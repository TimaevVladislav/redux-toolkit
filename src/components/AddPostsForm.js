import React from "react"
import {useDispatch, useSelector} from "react-redux"

import {postAdded} from "../features/posts/postsSlice"

export default function AddPostsForm(){
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    const [userId, setUserId] = React.useState("")

    const onChangeTitle = event => setTitle(event.target.value)
    const onChangeContent = event => setContent(event.target.value)
    const onChangeAuthor = event => setUserId(event.target.value)

    // Access to store redux
    const dispatch = useDispatch()

    const users = useSelector(state => state.users)

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(postAdded({title, content, userId}))
            setTitle("")
            setContent("")
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = () => users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onChangeTitle}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onChangeAuthor}>
                  <option value=""></option>
                  {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                type="text"
                id="postContent"
                name="postContent"
                value={content}
                onChange={onChangeContent}
                />
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    Save Post
                </button>
            </form>
        </section>
    )
}