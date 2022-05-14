import React from 'react';
import Link from 'next/link';
import { getStrapiURL } from '@lib/api';
import ImageCard from './ImageCard';
import millify from 'millify';
import ProductInfo from './ProductInfo';
export default function PCard({
  attributes: {
    beds,
    agent,
    area,
    display,
    price,
    sale,
    slug,
    type,
    description,
    cover,
    bathrooms,
    rooms,
    name,
  },
}) {
  return (
    <div className="relative">
      <Link href={`/property/${slug}`}>
        <a className="block  rounded-lg shadow-sm shadow-indigo-100">
          <div className="relative h-64 w-full">
            <ImageCard
              src={cover.data.attributes.url}
              layout="fill"
              alt={name}
              objectFit="cover"
              styles="rounded-t  transition-transform ease-in-out  "
            />
          </div>
          <div className="mt-2 px-2">
            <dl>
              <div>
                <dt className="sr-only">Price</dt>

                <dd className="text-2xl font-bold text-gray-500">
                  {millify(price, {
                    precision: 4,
                    lowercase: true,
                    decimalSeparator: ',',
                  })}{' '}
                  $
                </dd>
              </div>

              <div>
                <dt className="sr-only">name</dt>
                <dd className="font-medium">{name}</dd>
              </div>
            </dl>
            <div className="absolute left-0 top-4 w-full  flex items-center justify-between px-2">
              <p className="bg-gray-100/90 px-3 text-gray-700 rounded ">
                {display}
              </p>
              <div className="flex itmes-center space-x-2">
                <p className="bg-indigo-100/90 px-3 text-indigo-600 rounded">
                  {sale}
                </p>
                <p className="bg-rose-100/90 px-3 text-rose-600 rounded hover:scale-1 ">
                  {type}
                </p>
              </div>
            </div>
            <dl className="flex items-center mt-6 space-x-2 text-xs">
              <ProductInfo
                rooms={rooms}
                baths={bathrooms}
                beds={beds}
                area={area}
                name={name}
              />
            </dl>
          </div>
        </a>
      </Link>
    </div>
  );
}
