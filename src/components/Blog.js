import { useState } from 'react'

const Blog = ({ blog, addLike, removeBlog, canRemove }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const showWhenUserIsCreator = (blog) => {
    return {
      display: canRemove(blog) ? '' : 'none'
    }
  }
  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleLikeClick = (blog) => {
    addLike(blog)
  }

  const handleRemoveClick = (blog) => {
    removeBlog(blog)
  }

  return (
    <div style={blogStyle}>
      <div className='title-row'>
        {blog.title}{' '}
        <button style={hideWhenVisible} onClick={toggleVisibility}>view</button>
        <button style={showWhenVisible} onClick={toggleVisibility}>hide</button>
      </div>

      <div style={showWhenVisible} className="detail-rows">
        <div>{blog.url}</div>
        <div>likes {blog.likes}<button onClick={() => handleLikeClick(blog)}>like</button></div>
        <div>{blog.author}</div>
        <button style={showWhenUserIsCreator(blog)} onClick={() => handleRemoveClick(blog)}>remove</button>
      </div>
    </div>
  )
}

export default Blog