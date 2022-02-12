import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="span">
        <h2>F</h2>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">LOGIN</Link>
          </li>
          <li>
            <Link to="/">SIGNUP</Link>
          </li>
          <li>
            <Link to="/">ABOUT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
