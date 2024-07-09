import React, { useState } from 'react';
import Styled from 'styled-components';
import App from "./App"

export default function Char({ name, homeWorld }) {
    const [showPlanet, setShowPlanet] = useState(false);
  
    const togglePlanet = () => {
      setShowPlanet(!showPlanet);
    };
  
    return (
      <div className='character-card' onClick={togglePlanet}>
        <h3 className='character-name'>{name}</h3>
        {showPlanet && <p className='character-planet'>planet: {homeWorld}</p>}
      </div>
    );
}