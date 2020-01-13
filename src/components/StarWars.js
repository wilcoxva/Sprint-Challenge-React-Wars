import React from "react";

const StarWars = props => {
  return (
    <div>
        <h3>{props.name}</h3>
        <p>{props.gender}</p>
        <p>Birth Year: {props.birth_year}</p>
        <p>Home World: {props.homeworld}</p>
    </div>
  );
};
export default StarWars;