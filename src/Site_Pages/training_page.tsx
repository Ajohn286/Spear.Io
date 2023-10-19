// TrainingPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrainingPage = () => {
  const navigate = useNavigate();
  const [breathHoldTime, setBreathHoldTime] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBreathHoldTime(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform calculations based on the CO2 and O2 freediving tables using the breathHoldTime
    // Save the training data to the database using the database connection

    // After saving the data, you can redirect the user to the Past Dives page or any other page
    //navigate.call('/past-dives');
  };

  return (
    <div>
      <h2>Training Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Longest Breath-Hold (in seconds):
          <input type="number" value={breathHoldTime} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TrainingPage;
