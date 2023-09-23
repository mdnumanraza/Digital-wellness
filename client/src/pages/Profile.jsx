import { useState } from "react";
import avatar from '../assets/profile.png'
import { useAuthContext } from "../hooks/useAuthContext"

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
    <form className="login" onSubmit={handleSubmit}>
    <div style={{color:'Black'}}>
      hello
      <div>
     <h2>Username : {user.username}</h2>
     <h2>Email : {user.email}</h2>
    </div>
    </div>
      <h3 className="center">Profile</h3>
      <img src={avatar} alt='img'/>
      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Username:</label>
      <input
        type="text"
      />
      <div className="submit">
        <button>Edit</button>
      </div>
    </form>
  );
};

export default ProfilePage;

