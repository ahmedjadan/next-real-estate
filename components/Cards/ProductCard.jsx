import { getStrapiURL } from '@lib/api';
import millify from 'millify';

import Link from 'next/link';
import ImageCard from './ImageCard';

import ProductInfo from './ProductInfo';
export default function ProductCard({
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
    <div className="relative bg-gray-100 hover:shadow-xl duration-200 ">
      <Link href={`/property/${slug}`}>
        <a>
          <div className="relative h-64 w-full ">
            <ImageCard
              src={getStrapiURL(cover.data.attributes.url)}
              layout="fill"
              alt={name}
              objectFit="cover"
              styles="rounded-t  transition-transform ease-in-out  "
            />
            <div className="absolute px-2  bottom-0 left-0 font-bold text-gray-100  w-fullf">
              <h2 className="text-3xl  font-bold text-gray-50 ">
                {millify(price, {
                  precision: 4,
                  lowercase: true,
                  decimalSeparator: ',',
                  // units: ['', 'KB', 'MB', 'GB', 'TB'],
                })}{' '}
                $
              </h2>
              <h2 className="py-1 text-2xl">{name}</h2>
            </div>
          </div>
          <div className="absolute top-4 w-full  flex items-center justify-between px-2">
            <p className="bg-yellow-500/90 px-3 text-gray-50 rounded">
              {display}
            </p>
            <div className="flex itmes-center space-x-2">
              <p className="bg-indigo-400/90 px-3 text-gray-50 rounded">
                {sale}
              </p>
              <p className="bg-red-400/90 px-3 text-gray-50 rounded hover:scale-1 ">
                {type}
              </p>
            </div>
          </div>

          <ProductInfo
            rooms={rooms}
            baths={bathrooms}
            beds={beds}
            area={area}
            name={name}
          />
        </a>
      </Link>
    </div>
  );
}
