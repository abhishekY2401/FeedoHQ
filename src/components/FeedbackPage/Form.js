import { useState } from "react";

import "./Form.css";
import Question from "./Question";
import Report from "./Report";

const Form = () => {
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-box">
      <div className="head">
        <p id="aim">
          We aim to improvize the interviewed candidates by sharing a detailed
          report
          <br />
          which is based on the performance of the candidate in the interview
          that will
          <br />
          in turn help them to strategize and improve a better for the next.
        </p>
      </div>

      <div className="questions">
        <Question
          question="What soft-skills does the candidate possess ?"
          value1="Communication"
          value2="Story Teller"
          value3="Clear Thoughts"
          value4="Attitude"
        />

        <Question
          question="Which tech-skills does the candidate has?"
          value1="Java"
          value2="AWS"
          value3="NextJS"
          value4="React"
        />

        <Question
          question="What are some points you think that the candidate lacks ?"
          value1="Responsive"
          value2="Friendly Relation"
          value3="Problem Solving"
          value4="Confidence"
        />

        <Question
          question="How does the candidate acts in the challenging situation?"
          value1="fearing"
          value2="silent thinker"
          value3="confident answering"
          value4="give up"
        />

        <label>Do you have anything to say to the candidate?</label>
        <input type="text" placeholder="Any thoughts.." id="thoughts" />

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Form;
