import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from 'react-router-dom'
import Post from './Router/Post/Post.jsx'
import ErrorPage from './Router/ErrorPage.jsx'





const router = createBrowserRouter([

  {
    path: "/Blog",
    element: <App/>,
    errorElement: <ErrorPage/>,
  
  },

  {
    path: "post/:slug",
    element: <Post/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
