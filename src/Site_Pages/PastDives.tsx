// PastDivesPage.tsx
import React from 'react';
import DiveLog from '../components/Logic/Dives/Dive_logs';

const PastDivesPage = () => {
  return (
    <div>
      <h1>Past Dives</h1>
      {/* Render the DiveLog component */}
      <DiveLog />
    </div>
  );
};

export default PastDivesPage;

