import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"
// import { FaGoogle } from "react-icons/fa";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import uploadimg from '../assets/uploadimg.png'

const Signup = () => {
  const loadicon = 'https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif'
  const avatar = 'https://firebasestorage.googleapis.com/v0/b/add-images-b4898.appspot.com/o/avatar.jpg?alt=media&token=ad8d7691-bfbd-4ae6-bb7a-5559f0cf363a'
  const [load, setLoad] = useState(false);
  
  const [image, setImg]= useState('');
  const [username, setUsername] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup()



  const handleupload = async(e)=>{
    setLoad(true);
    const selectedFile = e.target.files[0];


    if(selectedFile){
      const storageRef =  firebase.storage().ref()
      const fileRef = storageRef.child(selectedFile.name)

      await fileRef.put(selectedFile)
      .then((snapshot)=>{
        snapshot.ref.getDownloadURL()
        .then((downloadURL)=>{
          // console.log(downloadURL);
          setImg(downloadURL );
          setLoad(false);
          
        })
      })
    }else{
      console.log("Please select image to upload")
      setLoad(false);
    }
 }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username,email, password, image||avatar, desc)
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3 className="center">Register</h3>
      
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
     
      <div className=" flex justify-center py-4">
        <label htmlFor="profile">
          Add Pofile Image: <br />
          <img className='uploadimg' src={uploadimg} alt="upload image" width='40px' />
          { image &&
          <img className='uploadimg' src={image} alt="upload image" width='60px' />
          }
          <input
            type="file"
            name="image"  
            id="profile"
            onChange={handleupload}
            // onClick={()=>{setLoad(true)}}
            
          />
        </label>

        
      </div>
      <label>Description:</label>
      
      <textarea
        type="text"
        rows='6'
        cols='40'
        placeholder="Write about your self..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={load}>
      {load ? <img src={loadicon} height='30px' width='30px' alt="" /> : <div>Sign up </div> }
        
        </button>
      {error && <div className="error">{error}</div>}

      <p>
        <Link to="/login">Already have an account</Link>
      </p>
    </form>
  );
};

export default Signup;
