import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import "./Navbar.css";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  
    const { logout } = useLogout()
    const { user } = useAuthContext()
  const [showNavbar, setShowNavbar] = useState(false);

  const [coins, setCoins] = useState();


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // const coinsnum = parseInt(user.coin || 0);
  // if(coinsnum>=1000){
  //   const a = coinsnum/1000;
  //   a.toFixed(2);
  //   setCoins(a.toString());
  // }

  const handleClick = () => {
    logout()
  }




  return (
    <nav className="navbar container" onClick={handleShowNavbar}>

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
              <Link to='/profile' style={{textDecoration:'none'}}>
                <img src={user.image} height='40px' width='40px' style={{borderRadius:'50%'}} alt="" />
                <div className="coin">
                  {
                    user.coin>='1000'? parseInt(user.coin)/1000+'K':user.coin
                  }
                 
                </div>
               <p className="navpicp"> {user.username} </p> 
              </Link>
            </div>
            )}

           
      </div>

     

    </nav>
  );
};

export default Navbar;
