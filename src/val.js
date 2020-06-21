import React from "react";

const Val = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} value={props.text} />
      <p>{props.text}</p>
      {props.text.length < 13 ? <p>Too short</p> : <p>Long enough!</p>}
    </div>
  );
};

export default Val;
