import React, { useState, useEffect } from 'react';

const DiveLog = () => {
  const [diveLogData, setDiveLogData] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://stampy.db.elephantsql.com/jerhdjbg'; // Replace with your actual API endpoint

    // Fetch dive log data from the API endpoint
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic amVyaGRqYmc6bnpJVzdwMnBDT1pDYWlvazNVbW9oczQ5ekhSZ21EVF8=' // Replace with your actual Basic Authorization header
      }
    })
      .then((response) => response.json())
      .then((data) => setDiveLogData(data))
      .catch((error) => console.error('Error fetching dive log data:', error));
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-black">Dive Log</h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead>
          <tr className="border-b">
            <th scope="col" className="px-6 py-3">Dive Number</th>
            <th scope="col" className="px-6 py-3">Location</th>
            <th scope="col" className="px-6 py-3">Depth</th>
            <th scope="col" className="px-6 py-3">Notes</th>
            <th scope="col" className="px-6 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {diveLogData.map((dive) => (
            <tr key={dive.diveNumber} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td scope="col" className="px-6 py-3">{dive.diveNumber}</td>
              <td scope="col" className="px-6 py-3">{dive.location}</td>
              <td scope="col" className="px-6 py-3">{dive.depth}</td>
              <td scope="col" className="px-6 py-3">{dive.notes}</td>
              <td scope="col" className="px-6 py-3">{dive.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiveLog;

