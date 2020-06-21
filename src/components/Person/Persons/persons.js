import React from "react";
import Person from "../Person";
const Peep = (props) => {
  return (
    <div>
      {props.people.map((peep, index) => {
        return (
          <Person
            key={peep.id}
            name={peep.name}
            age={peep.age}
            click={() => props.click(index)}
            changed={(event) => props.changed(event, peep.id)}
          />
        );
      })}
    </div>
  );
};

export default Peep;
