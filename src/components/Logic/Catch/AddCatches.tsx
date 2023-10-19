import React, { useState } from 'react';

const NewCatchForm = () => {
    const [dive_id, setDiveId] = useState('');
    const [catch_id, setCatchId] = useState('');
    const [gear_used, setGearUsed] = useState('');
    const [fish_species, setSpecies] = useState('');
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [depth, setDepth] = useState('');
    const [notes, setNotes] = useState('');
    const [caught_at, setCaughtAt] = useState('');

    const handleAddCatch = async () => {
      try {
        const newCatch = {
          dive_id: dive_id,
          catch_id: catch_id,
          gear_used: gear_used,
          fish_species: fish_species,
          weight: parseInt(weight),
          length: parseInt(length),
          depth: parseInt(depth),
          notes: notes,
          caught_at: caught_at,
        };

        await fetch('https://stampy.db.elephantsql.com/jerhdjbg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCatch),
        });

        // Reset form fields
        setDiveId('');
        setCatchId('');
        setGearUsed('');
        setSpecies('');
        setWeight('');
        setLength('');
        setDepth('');
        setNotes('');
        // You can also show a success message or redirect the user to a relevant page
      } catch (error) {
        console.error('Error adding new dive:', error);
        // You can show an error message here if needed
      }
    };

    return (
      <div>
        <div className="new-dive-form bg-zinc-700 p-6 rounded-lg shadow-md">
      <h2 className="text-gray-300 text-xl font-semibold mb-4">Add New Catch</h2>
      <div className="form-fields text-sm font-medium mb-4">
        <input
          type="text"
          placeholder="Species"
          value={dive_id}
          onChange={(e) => setSpecies(e.target.value)}
          className="input-field"/>
        <input
          type="text"
          placeholder="Gear"
          value={gear_used}
          onChange={(e) => setGearUsed(e.target.value)}
          className="input-field"/>
          <input
          type="text"
          placeholder="Weight"
          value={fish_species}
          onChange={(e) => setWeight(e.target.value)}
          className="input-field"
          />
        <input
          type="text"
          placeholder="Length"
         value={length}
          onChange={(e) => setLength(e.target.value)}
          className="input-field"/>
        <input
          type="text"
          placeholder="Depth"
          value={notes}
          onChange={(e) => setDepth(e.target.value)}
          className="input-field"   />
        <input
          type="text"
          placeholder="Notes"
          value={caught_at}
          onChange={(e) => setCaughtAt(e.target.value)}
          className="input-field"/>
        </div>
        <button
        onClick={handleAddCatch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Add Fish</button>
    </div>
      </div>
    );
};

export default NewCatchForm;
