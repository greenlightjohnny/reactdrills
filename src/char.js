import React from "react";

const Char = (props) => {
  return <p onClick={props.removeChar}>{props.text}</p>;
};

export default Char;
