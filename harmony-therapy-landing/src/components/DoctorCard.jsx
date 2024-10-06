import React from 'react';
import Image from 'next/image';

const DoctorCard = ({ name = "Unknown", role, imageUrl }) => {
  const truncatedName = (name && typeof name === 'string' && name.length > 20)
    ? `${name.slice(0, 20)}...`
    : name || "Unknown";

  return (
    <div className="rounded-3xl p-3 m-2 w-[160px] md:w-[300px] h-[200px] md:h-[320px] shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between bg-white">
      <div className="relative w-full h-[80%] rounded-3xl">
        <Image
          src={imageUrl}
          alt={name}
          fill
          objectFit='cover'
        />
      </div>
      <div className="text-center mt-3">
        <h3 className="text-sm md:text-xl font-bold text-gray-800">
          {truncatedName}
        </h3>
        <p className="text-sm text-gray-600">
          {role}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
