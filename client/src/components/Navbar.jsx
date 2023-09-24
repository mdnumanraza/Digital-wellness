import { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <div className="logo">
          <h2>Digital Wellness</h2>
        </div>
        <div className="menu-icon" 
        onClick={handleShowNavbar}
        >
          <FiAlignJustify/>
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
              <NavLink to="/report">Report Cyber bullying</NavLink>
            </li>}

           {/* {user && 
           <li>
              <NavLink to="/admin">Admin Dashboard</NavLink>
            </li>
           }  */}

          <div style={{color:'white'}}>
            {/* {user.username} */}
            </div>
            <li>
            {user && (
            <div>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
            </li>
          </ul>

      </div>
    </nav>
  );
};

export default Navbar;
