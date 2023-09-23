import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"
// import { FaGoogle } from "react-icons/fa";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const Signup = () => {
  const [image, setImg]= useState('');
  const [username, setUsername] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup()



  const handleupload = async(e)=>{
    const selectedFile = e.target.files[0];
    if(selectedFile){
      const storageRef =  firebase.storage().ref()
      const fileRef = storageRef.child(selectedFile.name)

      await fileRef.put(selectedFile)
      .then((snapshot)=>{
        snapshot.ref.getDownloadURL()
        .then((downloadURL)=>{
          console.log(downloadURL);
          setImg(downloadURL);
          
        })
      })
    }else{
      toast.error("Please select image to upload")
     
    }
 }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username,email, password, image, desc)
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
          Pofile Image:
          <input
            type="file"
            name="image"  
            text='muted' 
            id="profile"
            onChange={handleupload}
            
          />
        </label>

        
      </div>
      <label>Description:</label>
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}

      <p>
        <Link to="/login">Already have an account</Link>
      </p>
    </form>
  );
};

export default Signup;
