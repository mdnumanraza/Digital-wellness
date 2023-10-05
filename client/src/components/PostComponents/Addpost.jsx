import React from 'react'
import './Addpost.css'

const Addpost = () => {
  return (

<div className="widget-post"    aria-labelledby="post-header-title">
  <div className="widget-post__header">
    <h2 className="widget-post__title" id="post-header-title">
       <i className="fa fa-pencil" aria-hidden="true"></i>
      Create Post
    </h2>
  </div>

  <form id="widget-form" className="widget-post__form" name="form" aria-label="post widget">

    <div className="widget-post__content">

       <input className='postinput' type="text" placeholder='Add title...' /> 

      <textarea 
      name="post" 
      id="post-content" 
      className="widget-post__textarea scroller" placeholder="Share your story..."
      ></textarea>

    </div>

   

    <div className="widget-post__actions post--actions">

      <div className="post-actions__attachments">
        
        <button type="button" className="btn post-actions__upload attachments--btn">
          <label for="upload-image" className="post-actions__label">
             
             <i className="fa fa-upload" aria-hidden="true"></i> 

            Add image
          </label>
        </button>

        <input type="file" id="upload-image" accept="image/*" multiple/>

      </div>

      <div className="post-actions__widget">
        <button className="btn post-actions__publish">Add Post</button>
      </div>

    </div>
  </form>
    
    </div>
    
  )
}

export default Addpost
