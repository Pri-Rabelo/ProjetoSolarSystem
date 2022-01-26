import React from 'react';
import Title from './Title'; // requisito 8

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
