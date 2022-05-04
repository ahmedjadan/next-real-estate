import millify from 'millify';
import dayjs from 'dayjs'; // ES 2015

import React from 'react';
import ImageCard from '@components/Cards/ImageCard';
import { getStrapiURL } from '@lib/api';
import ProductInfo from '@components/Cards/ProductInfo';
import { MdLocationOn } from 'react-icons/md';
export default function ProductDetails({
  attributes: {
    name,
    type,
    agent,
    bathrooms,
    cover,
    images,
    area,
    rooms,
    sale,
    address,
    beds,
    price,
    createdAt,
    updatedAt,
  },
}) {
  return (
    <>
      <div className="relative h-[30rem]">
        <ImageCard
          src={getStrapiURL(cover.data.attributes.url)}
          layout="fill"
          objectFit="cover"
          objectPosition="50% 60%"
        />
      </div>
      <div className="max-w-6xl mx-auto px-2 lg:px-0 ">
        <div className="my-4 flex justify-between w-full">
          <div>
            <div className="flex itmes-center space-x-2">
              <p className="bg-red-400/90 px-3 text-gray-50 rounded hover:scale-1 ">
                {type}
              </p>
              <p className="bg-indigo-400/90 px-3 text-gray-50 rounded">
                {sale}
              </p>
            </div>

            <h1 className="text-3xl font-bold text-gray-700 py-2">{name}</h1>
            <div className="flex items-center text-gray-600">
              <MdLocationOn />
              <p>{address}</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 py-2">
              {millify(price, {
                precision: 4,
                lowercase: true,
                decimalSeparator: ',',
                // units: ['', 'KB', 'MB', 'GB', 'TB'],
              })}{' '}
              $
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="col-span-2 space-x-4 flex items-center  p-4 rounded">
            <div className="flex flex-col">
              <p>Published: {dayjs(createdAt).format('d MMM, YYYY')}</p>
              <p> Updated: {dayjs(updatedAt).format('dd, MM, YYYY')}</p>
            </div>
            <div className="flex-1 bg-gray-50">
              <ProductInfo
                baths={bathrooms}
                area={area}
                rooms={rooms}
                beds={beds}
              />
            </div>
          </div>
          <div className="bg-indigo-100 p-2">
            <h1>{agent.data.attributes.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
