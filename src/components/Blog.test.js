import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const user = {
    name: 'Superuser',
    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpZCI6IjYzYzdiMTA2M2FlODk3OGZmYjM1MDZlZSIsImlhdCI6MTY3NDA0NDE4NCwiZXhwIjoxNjc0MjE2OTg0fQ.bqEcB1Ntt2jwHk86jMlVo-UsLdcFkhpE1tch3VzJoy0',
    username: 'test'
  }

  const blog = {
    title: 'My Book',
    author: 'AAA',
    url: '111',
    user: {
      username: 'test',
      name: 'Superuser',
      blogs: [
        '63c7c2523ae8978ffb350764'
      ],
      id: '63c7b1063ae8978ffb3506ee'
    },
    likes: 9,
    id: '63c7c2523ae8978ffb350764'
  }

  const canRemove = (blog) => blog.user && blog.user.username === user.username


  render(<Blog blog={blog} canRemove={canRemove} />)

  const element = screen.getByText('My Book')
  expect(element).toBeDefined()
})