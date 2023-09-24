import { Link } from "react-router-dom";
import "./Footer.css";
import { useAuthContext } from "../hooks/useAuthContext";


function Footer() {
    const { user } = useAuthContext()

  return (
    <footer className="footer">
      <div className="footer-container">

        <Link to='/profile' className="footer-logo">
          <img src={user.image} alt="user pic" />
          <h1>{user.username}</h1>
        </Link>


        <div className="footer-links">
          <ul>
            
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/doctor">Consult a Psychiatrist</Link>
            </li>
            <li>
              <Link to="/report">Report Cyber Bullying</Link>
            </li>
            <li>
              {
                  user.username ==='numan' &&
              <Link to="/admin">Admin Dashboard</Link>
              }
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Digital Wellness. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
