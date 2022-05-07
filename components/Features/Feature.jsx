export default function Feature({ title, subTitle, icon, link, bg }) {
  return (
    <div className=" p-2 shadow-[0_-0px_50px_-15px_#ad7df933] rounded">
      <div className="flex flex-col justify-center items-center w-full py-8 px-4 space-y-4 ">
        <span className={`w-16 h-16 rounded-full ${bg} flex items-center justify-center text-2xl text-gray-600`}>{icon}</span>
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-gray-600 ">{subTitle}</p>
        <a href={link}>Learn more</a>
      </div>
    </div>
  );
}
