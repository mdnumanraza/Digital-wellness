import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

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
          <h2>logo</h2>
        </div>
        <div className="menu-icon" 
        onClick={handleShowNavbar}
        >
          click
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

            <li>
            {user && (
            <div>
              <span>{user.username}</span>
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
