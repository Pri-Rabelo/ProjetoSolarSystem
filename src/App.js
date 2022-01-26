import React from 'react';
import Header from './components/Header'; // requisito 1
import SolarSystem from './components/SolarSystem'; // Requisito 2
import Title from './components/Title'; // requisito 3

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title />
      </div>
    );
  }
}

export default App;
