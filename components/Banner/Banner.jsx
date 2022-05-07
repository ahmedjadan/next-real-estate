import ImageCard from '@components/Cards/ImageCard';
import React from 'react';
import bannerImage from 'public/images/banner.jpg';
import Button from '@components/Button/Button';
import { MdManageSearch } from 'react-icons/md';

export default function Banner() {
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
          <div className=" mx-auto w-full py-2 px-4 rounded-t bg-white">
            Search Properties
            <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
              <div className="flex-1 w-full flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                <input
                  type="text"
                  placeholder="rent/sale"
                  className=" py-3 flex-1 rounded bg-gray-100 px-2 w-full"
                />
                <input
                  type="text"
                  placeholder="house/villa/apartment"
                  className=" py-3 flex-1 rounded bg-gray-100 px-2 w-full"
                />
                <input
                  type="text"
                  placeholder="price"
                  className=" py-3 flex-1 rounded bg-gray-100 px-2 w-full"
                />
              </div>
              <Button
                text="Search"
                icon={<MdManageSearch />}
                styles="bg-rose-600 hover:bg-rose-700 text-center w-full md:w-auto text-green-50 hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
