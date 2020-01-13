import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWars from './components/StarWars';
import styled from "styled-components";
import './App.css';
import { filterLimit } from 'async';

const Div = styled.div`
  display: flex;
`;

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then((res) => {
      setPeople(res.data.results)
    });
  }, []);
  console.log(people);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Div>
        {people.map(person => {
        return (
          <StarWars 
            key={person.url}
            name={person.name}
            gender={person.gender}
            birth_year={person.birth_year}
            homeworld={person.homeworld}
          />
        )
      })}
      </Div>
      
    </div>
  );
}

export default App;
