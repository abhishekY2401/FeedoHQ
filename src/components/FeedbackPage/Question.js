import { useState } from "react";

const Question = (props) => {
  // making a boolean check value
  // const [checked, setChecked] = useState(false);

  // a state to hold all the checked answers
  const [value, setValue] = useState([
    { question1: "What soft-skills does the candidate possess ?", answer: [] },
    { question2: "Which tech-skills does the candidate has? ", answer: [] },
    {
      question3: "What are some points you think that the candidate lacks ?",
      answer: [],
    },
    { question4: "", answer: [] },
    { question5: "", answer: [] },
  ]);

  // a list to hold the id of each checkboxes
  const [slider, setSlider] = useState([
    { id: 0, checked: false },
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
  ]);

  const enableSlider = (id) => {
    for (let i = 0; i < slider.length; i++) {
      // if the checked is false show the slider
      if (id == slider[i].id && slider[i].checked == true) {
        setSlider(() => [...slider, (slider[i].checked = false)]);
        console.log(slider);
      }

      // if the checked is true hide the slider
      if (id == slider[i].id && slider[i].checked == false) {
        setSlider(() => [...slider, (slider[i].checked = true)]);
        console.log(slider);
      }
    }
  };

  const getValue = (e) => {
    const val = e.target.value;

    const parentText = e.target.parentNode;
    console.log(parentText.value);
    setValue(val);
  };

  return (
    <div className="quest">
      <h2 id="qns">{props.question}</h2>

      <ol>
        <input
          type="checkbox"
          value={props.value1}
          id="0"
          onChange={(e) => {
            enableSlider(0);
            getValue(e);
          }}
          required
        />
        <label>{props.value1}</label>
        {slider[0].checked && <input type="range" min="0" max="10" />}
      </ol>

      <ol>
        <input
          type="checkbox"
          value={props.value2}
          id="1"
          onChange={(e) => {
            enableSlider(1);
            getValue(e);
          }}
          required
        />
        <label>{props.value2}</label>
        {slider[1].checked && <input type="range" min="0" max="10" />}
      </ol>

      <ol>
        <input
          type="checkbox"
          value={props.value3}
          id="2"
          onChange={(e) => {
            enableSlider(2);
            getValue(e);
          }}
          required
        />
        <label>{props.value3}</label>
        {slider[2].checked && <input type="range" min="0" max="10" />}
      </ol>

      <ol>
        <input
          type="checkbox"
          value={props.value4}
          id="3"
          onChange={(e) => {
            enableSlider(3);
            getValue(e);
          }}
          required
        />
        <label>{props.value4}</label>
        {slider[3].checked && <input type="range" min="0" max="10" />}
      </ol>

      <br />
    </div>
  );
};

export default Question;
