import React from 'react';
import GearItem from './GearItem';

const GearLog = ({ gearLogData }) => {
  return (
    <div>
      <h2>Gear Log</h2>
      <ul>
        {gearLogData.map((gear) => (
          <GearItem key={gear.gear_id} gear={gear} />
        ))}
      </ul>
    </div>
  );
};

export default GearLog;

