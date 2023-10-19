import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CatchesItem {
  dive_id: number;
  catch_id: number;
  gear_used: string;
  fish_species: string;
  weight: string;
  length: string;
  notes: string;
  caught_at: string;
}

const catchLogData: CatchesItem[] = [
  {
    dive_id: 1,catch_id: 1,gear_used: "Pathos 90 with Dynima",fish_species: "Gag Grouper",weight: "21lbs",length: '25in',notes: 'Stoned',caught_at: 'The Hyde'
  },
  {dive_id: 2,catch_id: 2,gear_used: "Pathos 90 with Dynima",fish_species: "Sheepshead",weight: "8lbs",length: '10in',notes: 'Bad Shot',caught_at: 'Frying Pan'
  },
  {dive_id: 2,catch_id: 2,gear_used: "Pathos 90 with Dynima",fish_species: "Sheepshead",weight: "8lbs",length: '10in',notes: 'Bad Shot',caught_at: 'Frying Pan'
  },
  {dive_id: 3,catch_id: 2,gear_used: "Pathos 90 with Dynima",fish_species: "Sheepshead",weight: "8lbs",length: '10in',notes: 'Bad Shot',caught_at: 'Frying Pan'
  },
  {dive_id: 3,catch_id: 2,gear_used: "Pathos 90 with Dynima",fish_species: "Sheepshead",weight: "8lbs",length: '10in',notes: 'Bad Shot',caught_at: 'Frying Pan'
  },
  {dive_id: 3,catch_id: 2,gear_used: "Pathos 90 with Dynima",fish_species: "Hogfish",weight: "8lbs",length: '10in',notes: 'Stoned',caught_at: 'Frying Pan'
  },
  {dive_id: 3,catch_id: 2,gear_used: "Pathos 90 with Dynima",fish_species: "Cubera Snapper",weight: "8lbs",length: '10in',notes: 'Bad Shot',caught_at: 'Frying Pan'
  },
  {dive_id: 3,catch_id: 2,gear_used: "Pathos 90 with Dynima",fish_species: "Hogfish",weight: "8lbs",length: '10in',notes: 'Bad Shot',caught_at: 'Frying Pan'
  }
];

const Catches = () => {
  const [catches, setCatches] = useState<CatchesItem[]>([]);

  useEffect(() => {
    // Fetch catch history data from the backend after logging in
    const fetchCatchHistory = async () => {
      try {
        const response = await axios.get('https://stampy.db.elephantsql.com/jerhdjbg'); // Replace with your backend API endpoint for catch history
        setCatches(response.data);
      } catch (error) {
        console.error('Error fetching catch history:', error);
      }
    };

    // Uncomment the line below to fetch data from the backend
    fetchCatchHistory();
  }, []);
  return (
        <div>
          <div className="relative overflow-x-auto">
            <h2 className="text-xl content-center font-semibold mb-4">Catch History</h2>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Dive Number</th>
            <th scope="col" className="px-6 py-3">Catch Id</th>
            <th scope="col" className="px-6 py-3">Gear Used</th>
            <th scope="col" className="px-6 py-3">Fish Species</th>
            <th scope="col" className="px-6 py-3">Weight (kg)</th>
            <th scope="col" className="px-6 py-3">Length (cm)</th>
            <th scope="col" className="px-6 py-3">Notes</th>
            <th scope="col" className="px-6 py-3">Caught At</th>
          </tr>
          </thead>
          <tbody>
            {catchLogData.map((catchData) => (
              <tr key={catchData.catch_id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{catchData.dive_id}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{catchData.catch_id}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{catchData.gear_used}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{catchData.fish_species}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{catchData.weight}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{catchData.length}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{catchData.notes}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{catchData.caught_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  };


export default Catches;
