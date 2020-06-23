import React, { useEffect } from "react";
import classes from "./cockpit.module.css";
const Cockpit = (props) => {
  useEffect(() => {
    console.log("###COCKPIT.JS, ###USEEFFECT");
    const timer = setTimeout(() => {
      alert("Saved data");
    }, 1000);
    return () => {
      console.log("###COCKPIT.JS ###CLEANUP Hook");
    };
  }, []);

  useEffect(() => {
    console.log("###COCKPIT.JS 2###USEEFFECT Hook");
    return () => {
      console.log("###COCKPIT.JS 2222 ###CLEANUP Hook");
    };
  });
  // const style = {
  //   backgroundColor: "white",
  //   font: "inherit",
  //   border: "1px solid blue",
  //   padding: "8px",
  //   cursor: "pointer",
  // };

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      {" "}
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is a test</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
