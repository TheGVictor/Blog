import React from 'react'
import { Link } from 'react-router-dom'

const PostModal = ({title, description, image, category, slug}) => {
  return (

    <div className="modalContainer">
      
        <div className="contentModal">
        <Link to={`/${slug}`} className='link' >
            <img src={image} className='postImage'/>
            <div className="postDetails">
            <p className="postCategory">{category}</p>
            <h1 className='postTitle'>{title}</h1>
            <h2 className='postDescription'>{description}</h2>
            </div>
            </Link>
        </div>
        
    </div>

  )
}

export default PostModal
