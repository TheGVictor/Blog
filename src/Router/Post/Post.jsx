import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import FetchPost from '../../FetchPost'
import Footer from '../../components/Footer/Footer'
import "./Post.css"
import { useParams } from 'react-router-dom'

const Post = ({info}) => {

  const [posts, setPosts] = useState({})
  const {slug} = useParams()

  useEffect(() => {
    const getPostData = async () => {
      const fetchedPosts = await FetchPost();
      const foundPost = fetchedPosts.base.find(posts => posts.
      fields.slug === slug);
      setPosts({
        title: foundPost.fields.title,
        desc: foundPost.fields.shortDescription,
        image: foundPost.fields.featuredImage.fields.file.url,
        subtitle: foundPost.fields.subtitle,
        p1: foundPost.fields.content.content[0].content[0].value,
        p2: foundPost.fields.content.content[1].content[0].value,
        p3: foundPost.fields.content.content[2].content[0].value,
      });
    };
    getPostData();
  }, []);


  return (
    <div>
      <Header/>
      <div className="mainContainer">
      <div className="postContainer">
        
        <div className="titlePost"><h1>{posts.title}</h1></div>
        <h3 className='descriptionPost'>{posts.desc}</h3>

        <img src={posts.image} alt="" className='imgPost'/>
        <p className='imageSubtitle'>{posts.subtitle}</p>

        <p className="contentPost">{posts.p1}</p>
        <hr />
        <p className="contentPost">{posts.p2}</p>
        <hr />
        <p className="contentPost">{posts.p3}</p>
        </div>        
        </div>
        <Footer/>
    </div>
  )
}

export default Post
