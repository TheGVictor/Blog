import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import FetchPost from '../../FetchPost'
import "./Post.css"
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
      <div className="mainContainer">
      <div className="postContainer">
      
        <div className="titlePost"><h1>{posts.title}</h1></div>
        <h3 className='descriptionPost'>{posts.desc}</h3>
        <img src={posts.image} alt="" className='imgPost'/>
        <p className="contentPost">{posts.p1}</p>
        <hr />
        <p className="contentPost">{posts.p2}</p>
        <hr />
        <p className="contentPost">{posts.p3}</p>
        </div>
        </div>
    </div>
  )
}

export default Post
