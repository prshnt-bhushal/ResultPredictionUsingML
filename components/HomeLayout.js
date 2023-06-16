import Image from 'next/image';
import React from 'react';

export default function HomeLayout({
  title,
  sideImg,
  description,
  bgColor,
  direction,
}) {
  return (
    <div
      className={`flex flex-col w-full p-10 justify-center items-center ${bgColor} ${direction}`}
    >
      <div className="px-3 m-2 basis-[30%]">
        <Image
          src={sideImg}
          alt="Image on side of W5HH"
          width={500}
          height={300}
        />
      </div>
      {/* Introduction section*/}
      <div className="text-justify px-3 m-2 basis-[70%]">
        <h2 className="uppercase p-1 text-3xl mb-2 bg-slate-300">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
