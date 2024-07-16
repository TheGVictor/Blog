import { useEffect, useState } from 'react'
import { fetchPosts } from '../server'

import './App.css'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async() => {
      const postData = await fetchPosts()
      setPosts(postData)
    }
    getPosts()
  })

  return (
    <div className="container">
      <header className="header">
      <h1 className='logoTitle'>Daily DevSpoon</h1>
        <ul className="headerMenu">
          <li className="menuItem">Home</li>
          <li className="menuItem">Contato</li>
          <li className="menuItem">Inscreva-se!</li>
        </ul>
      </header>

      <main className="content">

    <ul>
      {posts.map((post) => (
        <li key = {post.id}>
          <h2>{post.properties.Name.title[0].text.content}</h2>
          <p>{post.properties.Content.rich_text[0].text.content}</p>
        </li>
      ))}
    </ul>
       
       </main>
      
    </div>
  )
}

export default App
