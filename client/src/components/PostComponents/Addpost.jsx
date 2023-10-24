import React from 'react'
import './Addpost.css'
import { useState } from "react"
import { usePostsContext } from "../../hooks/usePostContext"
import { useAuthContext } from '../../hooks/useAuthContext'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useUpdate} from '../../hooks/useupdate';

const Addpost = () => {

  const loadicon = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831'
     // const apiurl = 'http://localhost:8002'
  const apiurl = 'https://digital-wellness-brown.vercel.app'
  const { dispatch } = usePostsContext()
  const { user } = useAuthContext()
  const {update} = useUpdate();

  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  // const [uname, setName] = useState('')
  // const [profile, setProfile] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  const [load, setLoad] = useState(false);

  const uname = user.username;
  const profile = user.image;
  const userid = user._id;

  const handleupload = async(e)=>{
    setLoad(true)
    const selectedFile = e.target.files[0];
    if(selectedFile){
      const storageRef =  firebase.storage().ref()
      const fileRef = storageRef.child(selectedFile.name)

      await fileRef.put(selectedFile)
      .then((snapshot)=>{
        snapshot.ref.getDownloadURL()
        .then((downloadURL)=>{
          // setName(user.username);
          // setProfile(user.image);
          // console.log(downloadURL);
          setImg(downloadURL);
          setLoad(false);
          // console.log({uname,profile})

          
        })
      })
    }else{
      toast.error("Please select image to upload")
      setLoad(false);
     
    }
 }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
    console.log({uname,profile})

    const posts = {img, title, description,uname,profile}


    const response = await fetch(apiurl +'/api/posts', {
      method: 'POST',
      body: JSON.stringify(posts),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      update(user.coin+100,user._id)
     toast.done(`${title} post is added`)
      setTitle('')
      setDescription('')
      setImg('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_POST', payload: json})
    }
  }



  return (

<div className="widget-post"    aria-labelledby="post-header-title">
    <ToastContainer/>
  <div className="widget-post__header">
    <h2 className="widget-post__title" id="post-header-title">
       <i className="fa fa-pencil" aria-hidden="true"></i>
      Create Post
    </h2>
  </div>

  <form id="widget-form" className="widget-post__form" name="form" aria-label="post widget" onSubmit={()=>handleSubmit(e,user._id)}>

    <div className="widget-post__content">

       <input 
       className='postinput' 
       type="text"
        placeholder='Add title...'
        onChange={
            (e) => setTitle(e.target.value)
        }
        value={title}
        /> 

      <textarea 
      name="post" 
      id="post-content" 
      className="widget-post__textarea scroller" 
      placeholder="Share your story..."
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      ></textarea>

    </div>

   

    <div className="widget-post__actions post--actions">

      <div className="post-actions__attachments">
        
        <div className="btn post-actions__upload attachments--btn">
          <label for="upload-image" className="post-actions__label">
             
             <i className="fa fa-upload" aria-hidden="true"></i> 

            Add image
          </label>
        </div>

        <input 
        type="file" 
        id="upload-image" 
        accept="image/*" 
        onChange={handleupload}
        // onClick={()=>{setLoad(true)}}
        />

      </div>

      <div className="post-actions__widget">
        <button disabled={load} className="btn post-actions__publish">
           {load ? <img src={loadicon} height='30px' width='30px' alt="" /> : <div>Add Post </div> }
            </button>
      </div>
        {error && <div className="error"> {error} </div>}
    </div>
  </form>
    
    </div>
    
  )
}

export default Addpost
