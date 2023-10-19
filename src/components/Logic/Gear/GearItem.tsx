import React from 'react';

interface GearItemProps {
  gear: {
    gear_name: string;
    brand?: string;
    category: string;
    purchase_date: string;
    notes: string;
  };
}

const GearItem: React.FC<GearItemProps> = ({ gear }) => (
  <li>
    {gear.gear_name} - Brand: {gear.brand}, Date Purchased: {gear.purchase_date}, Warranty: Y, Style: Euro, Shaft: 130m
  </li>
);

export default GearItem;

