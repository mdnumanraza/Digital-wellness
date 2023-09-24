import { useState } from "react"
import { usePostsContext } from "../hooks/usePostContext"
import { useAuthContext } from '../hooks/useAuthContext'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import './PostForm.css'
import addNotification from 'react-push-notification'

const PostForm = () => {
  // const apiurl = 'http://localhost:8002'
  const apiurl = 'https://digital-wellness-brown.vercel.app'
  const { dispatch } = usePostsContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  // const [uname, setName] = useState('')
  // const [profile, setProfile] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const uname = user.username;
  const profile = user.image;
  const handleupload = async(e)=>{
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
          console.log(downloadURL);
          setImg(downloadURL);
          console.log({uname,profile})
          
        })
      })
    }else{
      toast.error("Please select image to upload")
     
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
      addNotification({
        title:`new post from ${uname}`,
        message:title,
        duration:5000,
        native:true,
        onClick: ()=>{console.log('Notification')}        
      })
      setTitle('')
      setDescription('')
      setImg('')
      // setName('')
      // setProfile('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_POST', payload: json})
    }
  }

  return (
    <form className="create formpost" onSubmit={handleSubmit}>
      <h3>Add a New Post</h3>

      <label className="white">Title:</label>
      <input 
      className="tinput"
        type="text"
        onChange={
            (e) => setTitle(e.target.value)
        }
        value={title}
        
      />
       <label className="white">
          Image:
          <input
          style={{maxWidth:'200px'}}
            type="file"
            name="image"  
            text='muted' 
            onChange={handleupload}
          />
        </label>

      <label className="white">Description:</label>
      <textarea
        rows="10" cols="65"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        
      />

       
<br />
      <button>Add Post</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default PostForm