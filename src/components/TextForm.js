import React, { useState } from "react";
export default function TextForm(props) {
  const handleClick = () => {
    console.log("The button is pressed");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnclick = (event) => {
    console.log("button is pressed");
    setText(event.target.value);
  };
  const handleClick2 = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
  };
  const handleClear = () => {
    let newText3 = " ";
    setText(newText3);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div class="mb-3">
        {/* <h1>This is data in the variable: </h1><br></br> */}
        {/* <h1>{text}</h1> */}
        <h1 className="x">{props.heading}</h1>
        <label for="myBox" class="form-label"></label>
        <textarea
          placeholder="Enter Data Here"
          onChange={handleOnclick}
          class="form-control"
          id="myBox"
          rows="8"
          value={text}
        ></textarea>
        <br></br>
        <br></br>
        <button class="btn btn-primary" onClick={handleClick}>
          {" "}
          To UpperCase
        </button>
        <button class="btn btn-primary mx-5" onClick={handleClick2}>
          To LowerCase
        </button>
        <button class="btn btn-danger" onClick={handleClear}>
          Clear Data
        </button>
      </div>

      <div className="container my-20">
        {/* when we type below i.e., when the data is empty it is splited based on ' ', so when it
        is splitted it will make and word which is ' ', so the count will be 1, but we need to make 
        it to 0, os here let us use here an if else condition */}

            {/* <p>
                {text.split(" ").length} Words {text.length} Letters
            </p> */}
        
        {/* here (() => { ... })(): This is an immediately-invoked function expression (IIFE)
        that contains the if-else statement. The IIFE is used to execute the function immediately
        and store its return value directly in the JSX */}
        {(() => {
          if (text.trim() != "") {
            return (
              <p>
                {text.split(/\s+/).length} Words {text.length} Letters
              </p>
            );
          } else {
            return <p>0 Words 0 Characters</p>;
          }
        })()}

        {/* instead of using the if else statements we can also use ternary operator i.e., if the 
        given condition is true then a specific statement is executed if it is false then another
        statement will be executed. */}

        {/* <<--- TERNARY OPERATOR--->>> */}

        {/* {text.trim() !== "" ? (
            <p>
              {text.split(/\s+/).filter(Boolean).length} Words {text.length}{" "}
              Characters
            </p>
          ) : (
            <p>0 Words 0 Characters</p>
          )}
          <h4>Input Data</h4>
          <p>{text}</p> */}

        
        <h4>Input Data</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
