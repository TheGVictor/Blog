import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import FetchPost from '../../FetchPost'
import Footer from '../../components/Footer/Footer'
import "./Post.css"
import { useParams } from 'react-router-dom'
import { fetchAuthorDetails } from '../../../server'
import Loading from '../../components/Loading/Loading'

const Post = () => {

  const [posts, setPosts] = useState({})
  const [author, setAuthor] = useState({})
  const [loading, setLoading] = useState(true)
  const {slug} = useParams()

  
    const getPostData = async () => {
      const fetchedPosts = await FetchPost();
      console.log(fetchedPosts)
      const foundPost = fetchedPosts.base.find(posts => posts.
      fields.slug === slug);
      setPosts({
        title: foundPost.fields.title,
        desc: foundPost.fields.shortDescription,
        image: foundPost.fields.featuredImage.fields.file.url,
        subtitle: foundPost.fields.featuredImage.fields.description,
        updateAt: "Atualizado em: "+(foundPost.sys.updatedAt).slice(8,10)+ "/"+(foundPost.sys.updatedAt).slice(5,7)+ "/" +(foundPost.sys.updatedAt).slice(0,4),
        authorID: foundPost.fields.author.sys.id,
        p1: foundPost.fields.content.content[0].content[0].value,
        p2: foundPost.fields.content.content[1].content[0].value,
        p3: foundPost.fields.content.content[2].content[0].value,
      });
      return foundPost.fields.author.sys.id
    };
    const getAuthorDetails = async (authorID) => {
      try {
        const authorDetails = await fetchAuthorDetails(authorID)
        setAuthor({
          name: authorDetails.name,
          avatar: authorDetails.avatar.fields.file.url
        })
        console.log(authorDetails)
        // Aqui você pode definir o estado para exibir os detalhes do autor
      } catch (error) {
        console.error(error)
      }
  
    }
  
    useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const authorID = await getPostData()
      await getAuthorDetails(authorID)
      setLoading(false);
    };
    
      fetchData()

  }, []);


  return (
    
    <div>
       
      <Header/>
  {loading ? (<Loading/>) : (
   

      <div className="mainContainer">
      <div className="postContainer">
        
        <div className="titlePost"><h1>{posts.title}</h1></div>
        <h3 className='descriptionPost'>{posts.desc}</h3>
        
        <div className='updateInfo'>
          <img src={author.avatar} className='authorImg'/>
          <p>Por <span>{author.name}</span>. {posts.updateAt}</p>
          </div>
        <img src={posts.image} alt="" className='imgPost'/>
        <p className='imageSubtitle'>{posts.subtitle}</p>

        
        <section className="articleContent">
        <p className="contentPost">{posts.p1}</p>        
        <p className="contentPost">{posts.p2}</p>        
        <p className="contentPost">{posts.p3}</p>
        </section>
        </div>        
        </div>
    )}
        <Footer/>
      
    </div>

  )
  
}

export default Post
