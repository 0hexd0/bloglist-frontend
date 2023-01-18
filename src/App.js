import { useState, useEffect } from 'react'
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogList";
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const showMessage = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const onLogout = () => {
    window.localStorage.clear()
    setUser(null)
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={message} type={messageType} />
        <LoginForm setUser={setUser} showMessage={showMessage} />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} type={messageType} />
      <div>{user.name} logged in<button onClick={onLogout}>logout</button></div>
      <h2>create new</h2>
      <BlogForm showMessage={showMessage} />
      <BlogList blogs={blogs} />
    </div>
  )
}

export default App
