import React, { useState } from 'react';
import Button from '@components/Button/Button';
import { useRouter } from 'next/router';
import { MdManageSearch } from 'react-icons/md';
export default function SearchInput() {
  const [purpose, setPurpose] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();
  const handleClick = (e) => {
    if (!purpose && !type) return;
    e.preventDefault();
    router.push(`/search?purpose=${purpose}&type=${type}&price=${price}`);
  };
  return (
    <div className=" mx-auto w-full py-2 px-4 rounded-t bg-white">
     <h2 className="font-semibold text-lg text-gray-600 my-1">
     Search Properties
     </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
        <div className="flex-1 w-full flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
          <input
            onChange={(e) => setPurpose(e.target.value)}
            type="text"
            placeholder="rent/sale"
            className=" py-3 flex-1 rounded bg-gray-100 px-2 w-full"
          />
          <input
            onChange={(e) => setType(e.target.value)}
            type="text"
            placeholder="house/villa/apartment"
            className=" py-3 flex-1 rounded bg-gray-100 px-2 w-full"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="price/leave it blank"
            className=" py-3 flex-1 rounded bg-gray-100 px-2 w-full"
          />
        </div>
        <Button
          onClick={handleClick}
          text="Search"
          type="submit"
          icon={<MdManageSearch />}
          styles="bg-indigo-600 hover:bg-indigo-700 text-center w-full md:w-auto text-green-50 hover:text-white"
        />
      </div>
    </div>
  );
}
