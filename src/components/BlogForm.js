import blogService from '../services/blogs'
import { useState } from "react";

const BlogForm = ({showMessage}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")

    const addBlog = async (event) => {
        event.preventDefault()
        try {
            await blogService.create({
                title,
                author,
                url
            })
            showMessage(`a new blog ${title}! by ${author} added`, 'success')
        } catch(exception) {
            showMessage(exception.response.data.error, 'error')
        }

    }

    return (
        <form onSubmit={addBlog}>
            <div>
                title:<input value={title} onChange={(event) => { setTitle(event.target.value) }} />
            </div>

            <div>
                author:<input value={author} onChange={(event) => { setAuthor(event.target.value) }} />
            </div>

            <div>
                url:<input value={url} onChange={(event) => { setUrl(event.target.value) }} />
            </div>

            <button type="submit">create</button>
        </form>
    )
}

export default BlogForm