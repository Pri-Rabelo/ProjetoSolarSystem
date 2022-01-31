import React from 'react';
import Title from './Title'; // requisito 8
import missions from '../data/missions';
import MissionCard from './MissionCard'; // requisito 10

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missoes">
        <Title headline="Missões" className="title" />
        {missions.map(({ name, year, country, destination }) => (
          <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
