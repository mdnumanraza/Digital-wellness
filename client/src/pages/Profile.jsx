// import { useState } from "react";
import avatar from '../assets/profile.png'
import { useAuthContext } from "../hooks/useAuthContext"
import './Profile.css'
import coingif from '../assets/coin.gif'
import Badges from '../components/Badges/Badges';
import badgeinfo from '../assets/badgesinfo.jpg'

const ProfilePage = () => {
  const {user} = useAuthContext()
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [file, setFile] = useState();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Your signup logic here
  // };

  return (
    <>
    
    <div className="profile">
      <div className='right'>
        <img className='pro-img' src={user.image || avatar} alt="" />
        <p>{user.username}</p>

        <div className="coins">
          <img src={coingif} width='40px' alt="" />
          <p>{user.coin}</p>
        </div>
      </div>
      <div className="left">
        <h4>Email id </h4>
        <p>{user.email}</p>
        <h4>Description</h4>
        <p> {user.desc}</p>
    
        
      </div>

    </div>
    <div className="badges">
      <h2>Your Badges</h2>
      <Badges/>
    </div>

    <div className="badgeinfo">
    <h2>Badge List</h2>
    <img src={badgeinfo} alt="badgeinfo" width='400px' />

    </div>
    </>
)};

export default ProfilePage;

