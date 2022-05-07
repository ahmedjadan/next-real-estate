import React from 'react';
import Feature from './Feature';
import { FaHome } from 'react-icons/fa';
import { MdVilla } from 'react-icons/md';
import { SiHomeadvisor } from 'react-icons/si';
export default function FeatureList() {
  return (
    <div className="max-w-6xl mx-auto my-8 md:my-16 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Feature
          title="Buy & Sell Homes"
          subTitle=" find homes/apartments to buy / sell in just minutes."
          icon={<FaHome />}
          bg="bg-indigo-300/30 text-indigo-500"
          link
        />
        <Feature
          title="Rent Villa / Apartment"
          subTitle=" find homes/apartments to buy / sell in just minutes."
          icon={<MdVilla />}
          bg="bg-rose-300/30 text-rose-500 "
          link
        /> 
        <Feature
          title="Find Your Property Advisor"
          subTitle=" find homes/apartments to buy / sell in just minutes."
          icon={<SiHomeadvisor />}
          link
          bg="bg-gray-300/30 text-gray-500"
        />
      </div>
    </div>
  );
}
