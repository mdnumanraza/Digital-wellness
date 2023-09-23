import { useState } from "react";
import avatar from '../assets/profile.png'
import { useAuthContext } from "../hooks/useAuthContext"
import './Profile.css'

const ProfilePage = () => {
  const {user} = useAuthContext()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your signup logic here
  };

  return (
    <div className="profile">
      <div className='right'>
        <img className='pro-img' src={user.image || avatar} alt="" />
        <p>{user.username}</p>
      </div>
      <div className="left">
        <h4>Email id </h4>
        <p>{user.email}</p>
        <h4>Description</h4>
        <p> {user.desc}</p>
      </div>
    </div>
)};

export default ProfilePage;

