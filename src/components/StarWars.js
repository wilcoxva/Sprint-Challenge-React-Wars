import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: white;
    opacity: .7;
    border-radius: 25px;
    height: 200px;
    width: 200px;
    margin: 15px;
    padding: 10px;
`;

const BY = styled.p`
    color: blue;
`;

const StarWars = props => {
  return (
    <Div>
        <h3>{props.name}</h3>
        <p>{props.gender}</p>
        <BY>Birth Year: {props.birth_year}</BY>
        <p>Home World: {props.homeworld}</p>
    </Div>
  );
};
export default StarWars;