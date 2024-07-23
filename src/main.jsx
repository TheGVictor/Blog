import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Post from './Router/Post.jsx'
import ErrorPage from './Router/ErrorPage.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },

  {
    path: "Blog",
    element: <App/>
  },

  {
    path: "teste",
    element: <Post/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
