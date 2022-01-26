import React from 'react';
import Header from './components/Header'; // requisito 1
import SolarSystem from './components/SolarSystem'; // Requisito 2

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
