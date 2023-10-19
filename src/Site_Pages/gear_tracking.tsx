import React, { useState } from 'react';
import useGearList from '../components/API/GearList';
import GearLog from '../components/Logic/Gear/Gear_log';
import GearItem from '../components/Logic/Gear/GearItem'; // Import the GearLog component

const GearTracking = () => {
  const { gearList, fetchGearList } = useGearList();
  const [gear_name, setgear_name] = useState('');
  const [brand, setbrand] = useState('');
  const [category, setcategory] = useState('');
  const [purchase_date, setpurchase_date] = useState('');
  const [notes, setnotes] = useState('');

  const handleAddGear = async () => {
    try {
      const newGear = {
        gear_name: gear_name,
        brand: brand,
        category: category,
        purchase_date: purchase_date,
        notes: notes,
      };

      // Define the function to add gear

      fetchGearList();
      setgear_name('');
      setcategory('');
      setpurchase_date('');
      setnotes('');
    } catch (error) {
      console.error('Error adding gear:', error);
    }
  };

  return (
    <div>
      <div className="new-dive-form bg-white p-4 rounded-lg shadow-md">
        {/* ... */}<h2 className='text-black text-xl font-bold'>Add New Dive</h2>
      <div className="form-fields text-l font-semibold mb-4 text-black">
        <input
          type="text"
          placeholder="Brand-Model"
          value={gear_name}
          onChange={(e) => setgear_name(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Purchase Date"
          value={purchase_date}
          onChange={(e) => setpurchase_date(e.target.value)}
        />
        <input
          type="text"
          placeholder="Notes"
          value={notes}
          onChange={(e) => setnotes(e.target.value)}
        />
      </div>
      <button onClick={handleAddGear}>Add Gear</button>
    </div>
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Gear Log</h2>
      <ul>
        {gearList.map((gear) => (
          <GearItem key={gear.gear_id} gear={gear}  />
        ))}
      </ul>
      </div>
      <GearLog gearLogData={gearList} />
    </div>
  );
};

export default GearTracking;



