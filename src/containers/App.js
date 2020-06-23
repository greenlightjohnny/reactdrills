import React, { Component } from "react";
import Persons from "../components/Person/Persons/persons";
import "./App.css";
import Person from "../components/Person/Person";
import Cockpit from "../components/cockpit/cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("#### APP.JS ###CONSTRUCTOR");
  }
  state = {
    persons: [
      { id: 1, name: "Max", age: 27 },
      { id: 2, name: "Manu", age: 39 },
      { id: 3, name: "Steph", age: 26 },
    ],
    showPerson: false,
    textLength: "",
    currentText: "",
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("#### APP.jS ###GETDERIVEDSTATEFROMPROPS", props);
    return state;
  }

  componentDidMount() {
    console.log("### APP.JS ###COMPONENTDIDMOUNT");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("###PERSONS.JS ###ShouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("###APP.JS, ###COMPONENTDIDUPDATE");
  }
  deletePersonHandler = (peepindex) => {
    console.log("working#######");
    const currentpeeps = this.state.persons.slice();
    currentpeeps.splice(peepindex, 1);
    this.setState({ persons: currentpeeps });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  handleUsername = () => {
    this.setState({
      persons: [
        { name: "Max", age: 27 },
        { name: "Manu", age: 39 },
        { name: "Steph", age: 26 },
      ],
    });
  };

  togglePersonHandler = () => {
    const currentItem = this.state.showPerson;
    this.setState({
      showPerson: !currentItem,
    });
  };

  // updateText = (event) => {
  //   const newItem =
  //     event.target.value.length < 12 ? "Too short" : "Long enough";

  //   this.setState({ currentText: event.target.value });
  //   this.setState({ textLength: newItem });
  // };

  // removeChar = (index) => {

  //   const currentState = this.state.currentText.slice();
  //   const newArg = Array.from(currentState);

  //   newArg.splice(index, 1);

  //   let stringy = newArg.join("");
  //   this.setState({
  //     currentText: stringy,
  //   });
  // };

  removeCockpit = () => {
    const currentState = this.state.showCockpit;
    this.setState({
      showCockpit: !currentState,
    });
  };

  render() {
    console.log("### APP.JS ###RENDER");
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons
          people={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    let cockpit = null;
    if (this.state.showCockpit) {
      cockpit = (
        <Cockpit
          showPerson={this.state.showPerson}
          personsLength={this.state.persons.length}
          title={this.props.appTitle}
          clicked={this.togglePersonHandler}
        />
      );
    }
    return (
      <div className="App">
        <button onClick={this.removeCockpit}>Remove Cockpit</button>
        {cockpit}
        {persons}
        {/* <Val
          update={(event) => this.updateText(event)}
          currentMessage={this.state.textLength}
          text={this.state.currentText}
        />
        <div>
          {Array.from(this.state.currentText).map((item, index) => {
            return (
              <Char
                key={index}
                text={item}
                removeChar={() => this.removeChar(index)}
              />
            );
          })}
        </div> */}
        {/* <Output username={this.state.persons[3].username} />
        <UserInput
          change={this.handleUsername}
          uname={this.state.persons[3].username}
        /> */}
      </div>
    );
  }
}

export default App;
