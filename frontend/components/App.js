import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import Char from './Char'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
    const [planets, setPlanets] = useState([]);
    const [people, setPeople] = useState([]);
  
    useEffect(() => {
      // Fetch planets data
      axios.get(urlPlanets)
        .then(response => {
          setPlanets(response.data);
        })
        .catch(error => {
          console.log('Error fetching planets data: ', error);
        })
      
      // Fetch people 
      axios.get(urlPeople)
        .then(response => {
          setPeople(response.data);
        })
        .catch(error => {
          console.log('Error fetching people data: ', error);
        });
    }, []); 
  
    return (
      //Pass data
      <div className='App'>
        { data.map((character, index) => (
          <Char name = {data[index].name} homeWorld = {data[index].homeWorld} Character key={index} character={character} />
        ))}
      </div>
    );
  }
  
  export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
