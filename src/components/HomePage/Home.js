import "./Home.css";
import Navbar from "./Navbar";
import boy from "../assets/boy.svg";
import { Logo } from "./Navbar";

const Home = () => {
  return (
    <div className="box">
      <div className="box-area">
        <Navbar />
      </div>
      <header id="img-header">
        <h3 className="text">
          send detailed feedback <br />
          to candidates
        </h3>
        <img src={boy} alt="feedback" id="boy"></img>
      </header>
      <section>
        <h2 className="provide">what we provide</h2>
        <div id="line"></div>
        <div className="container">
          <i class="bi bi-book"></i>
          <p className="candidate">a detailed report for the candidate</p>
        </div>
      </section>

      <footer>
        <div className="log-feed">
          <Logo />
          <p className="feedo">Feedo</p>
        </div>

        <hr />
        <p className="love">Made with ❤️ by github</p>
      </footer>
    </div>
  );
};

export default Home;
