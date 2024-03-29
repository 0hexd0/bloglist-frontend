import { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = async (event) => {
    event.preventDefault()
    createBlog({
      title,
      author,
      url
    })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>create new</h2>

      <form onSubmit={addBlog}>
        <div>
          title:<input id='title' value={title} onChange={(event) => { setTitle(event.target.value) }} />
        </div>

        <div>
          author:<input id='author' value={author} onChange={(event) => { setAuthor(event.target.value) }} />
        </div>

        <div>
          url:<input id='url' value={url} onChange={(event) => { setUrl(event.target.value) }} />
        </div>

        <button type="submit" id='create-button'>create</button>
      </form>
    </div>
  )
}

export default BlogForm