import React from 'react';
import { GiBathtub, GiPersonInBed } from 'react-icons/gi';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { BiArea } from 'react-icons/bi';
export default function ProductInfo({
  sale,
  area,
  type,
  display,
  price,
  beds,
  rooms,
  baths,
}) {
  return (
    <div className=" w-full  flex items-center justify-between px-2 py-4">
      <div className="flex items-center justify-center flex-col">
        <GiBathtub className="text-gray-600 text-xl " />
        <p className=" px-3 text-gray-500 rounded">{baths} Baths</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <GiPersonInBed className="text-gray-600 text-xl " />
        <p className=" px-3 text-gray-500 rounded">{beds} Beds</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <MdOutlineBedroomChild className="text-gray-600 text-xl " />
        <p className=" px-3 text-gray-500 rounded">{rooms} Rooms</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <BiArea className="text-gray-600 text-xl " />
        <p className=" px-3 text-gray-500 rounded">{area} Area</p>
      </div>
    </div>
  );
}
