import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [onMouseOverCode, setOnMouseOverCode] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleOnMouseOver() {
    setOnMouseOverCode(true);
  }

  function handleOneMouseOut() {
    setOnMouseOverCode(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          background: onMouseOverCode ? "black" : "white"
        }}
        onClick={handleClick}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOneMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
