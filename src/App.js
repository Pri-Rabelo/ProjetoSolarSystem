import React from 'react';
import Header from './components/Header'; // requisito 1
import SolarSystem from './components/SolarSystem'; // Requisito 2
// import Title from './components/Title';  alterado no requisito 4 pro arquivo SolarSystem.js
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <PlanetCard />
      </div>
    );
  }
}

export default App;
