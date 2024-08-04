import { useEffect, useState } from 'react'


import './App.css'

import PostModal from './components/Modal/PostModal'
import Header from './components/Header/Header'
import FetchPost from './FetchPost'
import Post from './Router/Post/Post'



function App() {

  const [posts, setPosts] = useState({})
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const [hide, setHide] = useState(true);


 useEffect(()=>{
const getPost = async() =>{
  try{
    const post = await FetchPost()
    setPosts(post)
  } catch(error){
    console.error(error)
  }
}
getPost()
 }, [])



 const handlePost = (e) => {
  e.preventDefault()
 }

  return (

    <div className="container">
      <Header/>

      <main className="content">
        <marquee behavior="" direction="" className="economyInfo">           
            wee
        </marquee>
        
<ul className='singlePosts'>
        {posts.base?.map((post, i) => (
          <li key={post.fields.internalName}>
               <PostModal info={post}/>               
          </li>
        ))}
        </ul>

       </main>
      
    </div>
  )
}

export default App


