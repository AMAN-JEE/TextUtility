import React from "react";
import { useState } from "react"; //for changing the state

export default function Textarea(props) {
  const [text, setText] = useState(""); //dimaag mai baitha lo isko
  let changes = (event) => {
    setText(event.target.value); //to listen the state and update
  };
  let toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  let toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  let copyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied successfully");
    });
  };
  let clear = () => {
    let newText = "";
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className="m-3">
          <h2 className="my-3">{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={changes}
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary margin" onClick={toUpper}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary margin" onClick={toLower}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary margin" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-warning margin" onClick={clear}>
          Clear Text
        </button>
        <button className="btn btn-primary margin" onClick={speak}>
          Listen
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className="m-3">
          <h3>The text preview: </h3>
          <p>
            {text.split(" ").length - 1} Words and {text.length} Characters
          </p>
        </div>
      </div>
    </>
  );
}

//onChange -- is used to detect the change in textarea
//onClick -- eventListner is used to change the state of button on clicking
