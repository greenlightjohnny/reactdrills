import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("###PERSON.JS ###RENDERING...");
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          My name is {this.props.name} and I am {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
