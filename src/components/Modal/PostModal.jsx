import React from 'react'
import { Link } from 'react-router-dom'
import "./PostModal.css"


const PostModal = ({info}) => {
  return (

    <div className="modalContainer">
      
        <div className="contentModal">
        <Link to={`/post/${info.fields.slug}`} className='link'>        
            <img src={info.fields.featuredImage.fields.file.url} className='postImage'/>  
            <div className="postDetails">
            <p className="postCategory">{info.fields.internalName}</p>
            <h1 className='postTitle'>{info.fields.title}</h1>
            <h2 className='postDescription'>{info.fields.shortDescription}</h2>
            </div>
            </Link>
        </div>
        
    </div>

  )
}

export default PostModal
