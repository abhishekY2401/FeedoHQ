import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="box">
      <div className="box-area">
        <header className="header-navbar">
          <div className="wrapper">
            <nav className="nav-navbar">
              <Link to="/feedback">FEEDBACK</Link>
              <Link to="/signup">SIGN UP</Link>
              <Link to="/login">LOGIN</Link>
              <Link to="/about-us">ABOUT US</Link>
            </nav>
            <div className="span">
              <h5 className="h5-logo">F</h5>
            </div>
          </div>
        </header>
        <div className="px-5"></div>
        <br /> <br />
        <div className="container2">
          <div style={{ paddingRight: "1000px" }}>
            <span className="C2-span">SEND DETAILED FEEDBACK</span>
            <br />
            TO CANDIDATES
            <span>
              <img
                src="../images/undraw_Feedback_re_urmj (1).png"
                style={{
                  position: "absolute",
                  width: "533px",
                  height: "450px",
                  left: "1200px",
                  top: "169px",
                  paddingBottom: "20px",
                }}
              />
              <img src alt="" srcSet />
            </span>
          </div>
        </div>
        <div className="container3">
          <h2 id="h2">WHAT WE PROVIDE</h2>
        </div>
        <div className="container4">
          <span>
            {" "}
            <br /> <br /> <br />
            <p>
              Get a detailed
              <br />
              report for the
              <br /> candidate
            </p>
            <i className="bi bi-book" />
          </span>
        </div>
        <div>
          <div className="container6">
            <div className="span">
              <h5>F</h5>
            </div>
            <h3 className="H-Feedo">Feedo</h3>
          </div>
          <div className="container7">
            <div className="button">
              <div className="icon" style={{ paddingTop: "5px" }}>
                <a href="https://github.com/Jaidp/Feedo-HTL.git">
                  <i className="fab fa-github" />
                </a>
              </div>
              <span>GitHub</span>
            </div>
            <div className="button">
              <div className="icon" style={{ paddingTop: "5px" }}>
                <a href="index.html">
                  <i className="fab fa-twitter" />
                </a>
              </div>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
