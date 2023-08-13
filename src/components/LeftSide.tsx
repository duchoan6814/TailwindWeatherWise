import { Icon } from '@iconify/react';
import { assetURL, image } from 'assets';
import React from 'react';

const LeftSide: React.FC = () => {
  return (
    <div className="px-10 py-7">
      <div className="flex items-center gap-x-3">
        <Icon className="w-5 h-5" icon="iconoir:search" />
        <input
          className="grow focus:outline-none"
          placeholder="Search for places..."
        />
        <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
          <Icon icon="solar:target-linear" />
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <img className="w-10/12" src={assetURL(image.sunny)} />
      </div>

      <p className="text-6xl font-light mb-5">12℃</p>
      <p>
        Monday, <span className="text-gray-400">16:00</span>
      </p>

      <div className="h-0.5 border-t-0 bg-gray-100 my-5" />

      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-3">
          <img className="w-5 h-5 " src={assetURL(image.sunny)} />
          <span className="text-xs">Mostly cloudy</span>
        </div>

        <div className="flex items-center gap-x-3">
          <img className="w-5 h-5 " src={assetURL(image.sunny)} />
          <span className="text-xs">Rain - 30%</span>
        </div>
      </div>

      <div
        className="w-full overflow-hidden relative aspect-21/9 rounded-lg mt-10 bg-cover"
        style={{ backgroundImage: `url(${assetURL(image.city)})` }}
      >
        <div className="absolute w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <p className="text-white">New York, NY, USA</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
