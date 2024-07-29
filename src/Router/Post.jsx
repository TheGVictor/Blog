import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import FetchPost from '../FetchPost'
const Post = () => {

  const [posts, setPosts] = useState({})

  useEffect(() => {

    const getInfo = async() => {
      try{
        const post = await FetchPost()
        setPosts(post)
      }catch(error){
        console.error(error)
      }
    
    }
    
    getInfo()
    },[])

  return (
    <div>
      <Header/>
        <h1>{posts.title}</h1>

        
    </div>
  )
}

export default Post
