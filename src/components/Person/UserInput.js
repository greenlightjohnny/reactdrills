import React from "react";

function Myinput(props) {
  return (
    <div>
      <input type="text" onChange={props.change} value={props.uname} />
    </div>
  );
}

export default Myinput;
