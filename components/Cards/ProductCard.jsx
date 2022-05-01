import { getStrapiURL } from '@lib/api';
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
  },
}) {
  return (
    <div className="relative bg-gray-100 ">
      <Link href={`/property/${slug}`}>
        <a>
          <div className="relative h-64 w-full ">
            <ImageCard
              src={getStrapiURL(cover.data[0].attributes.url)}
              layout="fill"
              objectFit="cover"
              styles="rounded-t hover:scale-105 duration-400 transition "
            />
          </div>
          <div className="absolute top-4 w-full  flex items-center justify-between px-2">
            <p className="bg-yellow-500/90 px-3 text-gray-50 rounded">
              {display}
            </p>
            <div className="flex itmes-center space-x-2">
              <p className="bg-indigo-400/90 px-3 text-gray-50 rounded">
                {sale}
              </p>
              <p className="bg-red-400/90 px-3 text-gray-50 rounded hover:scale-1 ">{type}</p>
            </div>
          </div>
          <ProductInfo
            rooms={rooms}
            baths={bathrooms}
            beds={beds}
            area={area}
          />
        </a>
      </Link>
    </div>
  );
}
