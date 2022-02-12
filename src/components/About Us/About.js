import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <header>
        <h1 id="about"> About Us </h1>
      </header>
      <br />
      <div id="container1">
        <p id="para">
          The main motive of designing this tool was to provide a platform where
          the recruiters would get a chance to grade the candidates based on
          their performance during the interview. It usually happens that after
          the interview, the candidate is only told that he has been selected or
          rejected but the reason behind that decision is not mentioned. It
          could be because the recruiters don't have much time to express
          candidates performance. After all, they have to interview many other
          students too. <br /> <br />
          So, we thought to design a tool where the recruiter would grade the
          candidate based on the performance in the interview by just making a
          few clicks 🖱🖱 and not wasting much of their time behind it. ⏲ <br />
          <br />
          It will advantage the candidates because now they have feedback on
          their interview performance. While it would also help recruiters to
          keep a track of the amount and type of candidates that they've
          screened by the time. The recruiter will just have to make a few
          selections and the report would get generated and mailed to the
          respective candidate 📩📩. The candidate can use this report to
          prepare himself for the upcoming interviews. <br /> <br />
          In case, if you have any queries/problems regarding the tool please
          feel free to contact us and we would get back to you asap! Also, we
          would be pleased to hear suggestions from you! 🙂 <br /> <br />
          Hope that you would find the tool useful and productive.😃 <br />{" "}
          <br />
          Please feel free to drop your message to us through below given
          fields. 👇 <br /> <br />
          Cheers!👋 <br /> <br /> <br />
        </p>
        <div id="container2">
          <header id="newhead">
            <br />
            <h1 id="contact"> CONTACT US </h1>
          </header>
          <br /> <br />
          <span>
            <label className="C2-label">Name: </label>
            <input className="C2-input" type="text" name="thename" id="name" />
            <label className="C2-label">Mail-Id: </label>
            <input className="C2-input" type="text" name="themail" id="email" />
          </span>
          <br /> <br />
          <span>
            <label>Your message: </label>
            {/*<input type="text" name="themessage" id="message" rows="4" cols="50">*/}
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={15}
              defaultValue={""}
            />
          </span>
          <br /> <br />
          <button id="sendbtn" onclick="send()">
            {" "}
            SEND{" "}
          </button>
          <br />
          <p id="para1">
            We will get back to you ASAP 🤝! <br />
            Thank you for using Feedo! 😀👋
          </p>
        </div>
      </div>
      <br /> <br />
      <Link to="/home">Click here to go back to homepage</Link>
    </div>
  );
};

export default About;
