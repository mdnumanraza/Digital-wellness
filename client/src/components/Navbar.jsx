import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import "./Navbar.css";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const username = 'numan'

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }


  return (
    <nav className="navbar container">

        <div className="menu-icon" 
        onClick={handleShowNavbar}
        >
          <FiAlignJustify/>
        </div>

        <div className="logo">
          <Link to='/'>
          <h2 style={{color:'white', paddingBottom:'15px'}}>Digital Wellness</h2>
          </Link>
        </div>


        <div className={`nav-elements  
        ${showNavbar && "active"}`
      }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {!user && <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>}

          {!user && <li>
              <NavLink to="/login">Login</NavLink>
            </li>}

           {user && <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>}
           {user && <li>
              <NavLink to="/community">Community</NavLink>
            </li>}

           {user && <li>
              <NavLink to="/consult">Consult a Psychiatrist</NavLink>
            </li>}

           {user && <li>
              <NavLink to="/report">Report Cyber bullying</NavLink>
            </li>}

            {user && (
            <div>
              <button className="logout" onClick={handleClick}>Log out</button>
            </div>
            )}

 

          </ul>

      </div>

      <div className="usernav">

            {user && (
            <div className="navpic">
              <Link to='/profile'>
                
                <img src={user.image} height='40px' width='40px' style={{borderRadius:'50%'}} alt="" />
               <p className="navpicp"> {user.username} </p> 
              </Link>
            </div>
            )}

           
      </div>

     

    </nav>
  );
};

export default Navbar;
