import React from "react";

const Cockpit = (props) => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };
  return (
    <div>
      {" "}
      <h1>Testing</h1>
      <button style={style} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
