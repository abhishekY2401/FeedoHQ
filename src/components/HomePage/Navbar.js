import "./Navbar.css";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="logo">
      <p className="letter">F</p>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="main-wrap">
      <div className="wrapper">
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to="/feedback">FEEDBACK</Link>
            </li>
            <li>
              <Link to="/signup">SIGN UP</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
