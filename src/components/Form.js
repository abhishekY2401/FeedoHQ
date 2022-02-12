import "./Form.css";
import Question from "./Question";
import Report from "./Report";

const Form = () => {
  // a form data handler to handle data
  const generateReport = () => {};

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

      <button type="submit" class="btn btn-primary" onClick={generateReport}>
        Generate
      </button>
    </div>
  );
};

export default Form;
