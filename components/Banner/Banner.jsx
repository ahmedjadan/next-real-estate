import ImageCard from '@components/Cards/ImageCard';
import React from 'react';
import bannerImage from 'public/images/banner.jpg';

import SearchInput from './SearchInput';

export default function Banner({properties}) {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className=" relative">
        <div className="relative aspect-w-16 md:aspect-h-7 aspect-h-14 ">
          <ImageCard
            src={bannerImage}
            //height={700}
            layout="fill"
            objectFit="cover"
            alt="banner"
            styles=" rounded"
          />
        </div>
        <div className="absolute bottom-0  max-w-3xl inset-x-0 mx-auto  px-4 ">
          <SearchInput properties={properties}/>
        </div>
      </div>
    </div>
  );
}
