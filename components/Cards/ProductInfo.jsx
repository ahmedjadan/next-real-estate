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
  large,
}) {
  return (
    <div className="flex items-center justify-between w-full py-2 px-2">
      <div className="inline-flex items-center shrink-0 ">
        <BiArea
          className={`text-indigo-700 ${
            large ? 'lg:text-2xl' : 'lg:text-xl'
          } text-xl `}
        />

        <div className="ml-3 mt-1.5 sm:mt-0">
          <dt className="text-gray-500">
            {area} <sub>m</sub>{' '}
          </dt>

          <dd className="font-medium">Area (m)</dd>
        </div>
      </div>
      <div className="inline-flex items-center shrink-0">
        <GiPersonInBed
          className={`text-indigo-700 ${
            large ? 'lg:text-2xl' : 'lg:text-xl'
          }   text-xl`}
        />

        <div className="ml-3 mt-1.5 sm:mt-0">
          <dt className="text-gray-500">Rooms </dt>

          <dd className="font-medium"> {rooms} Rooms</dd>
        </div>
      </div>

      <div className="inline-flex items-center shrink-0 ">
        <GiBathtub
          className={`text-indigo-700 ${
            large ? 'lg:text-2xl' : 'lg:text-xl'
          }   text-xl`}
        />

        <div className="ml-3 mt-1.5 sm:mt-0">
          <dt className="text-gray-500">Bathrooms</dt>

          <dd className="font-medium">{baths} Rooms</dd>
        </div>
      </div>
    </div>
  );
}
