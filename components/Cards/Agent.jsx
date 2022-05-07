import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { getStrapiURL } from '@lib/api';
import ImageCard from './ImageCard';
import Button from '@components/Button/Button';

export default function Agent({
  data: {
    attributes: { name, phone, bio, avatar },
  },
}) {
  return (
    <div className="tween border h-fit p-1 rounded sticky top-16">
      <div className="flex p-4 items-center justify-between w-full ">
        <ImageCard
          src={getStrapiURL(avatar.data.attributes.url)}
          width={59}
          height={59}
          objectFit="cover"
          styles="rounded"
        />
        <h1 className=" font-semibold text-gray-600">{name}</h1>
      </div>
      <div className="bg-gray-200/60 rounded my-2 p-4 text-gray-600">
        <h1>{phone}</h1>
        <p>{bio}</p>
      </div>
      <div className="flex justify-between gap-4">
        <Button
          text="Call"
          href="#_"
          styles="bg-indigo-400 hover:bg-indigo-500 w-full text-gray-50 hover:text-white"
          icon={<BsFillTelephoneFill />}
        />
        <Button
          text="whatsApp"
          href="https://api.whatsapp.com/send?phone=+12234556778&text=helo"
          styles="bg-green-500 hover:bg-green-600 w-full text-green-50 hover:text-white"
          icon={<FaWhatsapp />}
        />
      </div>
    </div>
  );
}
