import React from 'react';
import './App.css';
import Header from './components/Header'; // requisito 1
import SolarSystem from './components/SolarSystem'; // Requisito 2
// import Title from './components/Title';  alterado no requisito 4 pro arquivo SolarSystem.js
// import PlanetCard from './components/PlanetCard'; alterado no requisito 6 pro arquivo SolarSystem.js
import Missions from './components/Missions'; // requisito 7
// import MissionCard from './components/MissionCard'; // alterado no requisito 10 pro arquivo Missions.js

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
