import React, { Component } from "react";
import Person from "../Person";
class Peep extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("###PERSONS.JS ###GETDERIVEDSTATEFROMPROPS");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("###PERSONS.JS ###ShouldComponentUpdate");
    if (nextProps.people !== this.props.people) {
      return true;
    } else return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("###PERSONS.JS, ####GETSNAPSHOTBEFOREUPDATE");
    return { message: "Snapshotmebro" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("###PERSONS.JS, ###COMPONENTDIDUPATE");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("###PERSONS.JS, ###COMPONENTWILLUNMOUNT");
  }
  render() {
    console.log("### PERSONS.JS ###Rendering..");
    return (
      <div>
        {this.props.people.map((peep, index) => {
          return (
            <Person
              key={peep.id}
              name={peep.name}
              age={peep.age}
              click={() => this.props.click(index)}
              changed={(event) => this.props.changed(event, peep.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Peep;
