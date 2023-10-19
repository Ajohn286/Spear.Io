import React, { useState } from 'react';
import axios from 'axios';
import NewCatchForm from '../components/Logic/Catch/AddCatches';

const NewDiveForm = () => {
  const [siteName, setSiteName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [depth, setDepth] = useState('');
  const [weather, setWeather] = useState('')
  const [notes, setNotes] = useState('')

  const handleAddDive = async () => {
    try {
      const newDive = {
        site_name: siteName,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        depth: parseInt(depth),
        weather: weather,
        Notes: notes
      };

      await axios.post('https://stampy.db.elephantsql.com/jerhdjbg', newDive); 
      setSiteName('');
      setLatitude('');
      setLongitude('');
      setDepth('');
      setWeather('');
      // You can also show a success message or redirect the user to a relevant page
    } catch (error) {
      console.error('Error adding new dive:', error);
      // You can show an error message here if needed
    }
  };

  return (
    <div className="new-dive-form bg-zinc-700 p-6 rounded-lg shadow-md">
  <h2 className="text-gray-300 text-xl font-semibold mb-4">Add Dive</h2>
  <div className="form-fields text-sm font-medium mb-4">
    <input
      type="text"
      placeholder="Site Name"
      value={siteName}
      onChange={(e) => setSiteName(e.target.value)}
      className="input-field"
    />
    <input
      type="text"
      placeholder="Latitude"
      value={latitude}
      onChange={(e) => setLatitude(e.target.value)}
      className="input-field"
    />
    <input
      type="text"
      placeholder="Longitude"
      value={longitude}
      onChange={(e) => setLongitude(e.target.value)}
      className="input-field"
    />
    <input
      type="text"
      placeholder="Depth"
      value={depth}
      onChange={(e) => setDepth(e.target.value)}
      className="input-field"
    />
    <input
      type="text"
      placeholder="Weather"
      value={weather}
      onChange={(e) => setWeather(e.target.value)}
      className="input-field"
    />
    <input
      type="text"
      placeholder="Notes"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      className="input-field"
    />
  </div>
  <button
    onClick={handleAddDive}
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    Add Dive
  </button>
  <div>
    <NewCatchForm />
  </div>
</div>

  );
};

export default NewDiveForm;

