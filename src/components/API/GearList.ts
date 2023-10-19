// useGearList.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface GearItem {
  gear_id: number;
  gear_name: string;
  category: string;
  purchase_date: string;
  notes: string;
}

const useGearList = () => {
  const [gearList, setGearList] = useState<GearItem[]>([]);

  const fetchGearList = async () => {
    try {
      const response = await axios.get('postgres://jerhdjbg:nzIW7wp2pCOZCaioi3Umohs49zHRgmDT@stampy.db.elephantsql.com/jerhdjbg');
      setGearList(response.data);
    } catch (error) {
      console.error('Error fetching gear list:', error);
    }
  };

  useEffect(() => {
    fetchGearList();
  }, []);

  return { gearList, fetchGearList };
};

export default useGearList;
