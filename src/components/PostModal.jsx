import React from 'react'

const PostModal = ({title, description, image, category}) => {
  return (

    <div className="container">
        <div className="contentModal">
            <img src={image} className='postImage'/>
            <div className="postDetails">
            <p className="postCategory">{category}</p>
            <h1 className='postTitle'>{title}</h1>
            <h2 className='postDescription'>{description}</h2>
            </div>
        </div>
    </div>

  )
}

export default PostModal
