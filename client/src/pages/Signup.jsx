import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"
import { FaGoogle } from "react-icons/fa";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup, error, isLoading} = useSignup()
  const [file,setFile] = useState();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username,email, password)
  };

  return (
    <form className="login" onSubmit={handleSubmit}>

      <h3>Signup</h3>

      <label>Username:</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <h3 className="center">Register</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Username:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="profile flex justify-center py-4">
        <label htmlFor="profile">
          Pofile Image:
          <input
            type="file"
            id="profile"
            onChange={(e) => setFile(e.target.value)}
            name="profile"
          />
        </label>
      </div>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="submit">
        <button>Register</button>
        <button>
          <FaGoogle /> Register with Google
        </button>
      </div>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}

      <p>
        <Link to="/login">Already have an account</Link>
      </p>
    </form>
  );
};

export default Signup;
