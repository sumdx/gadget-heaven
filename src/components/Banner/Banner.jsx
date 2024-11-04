import React from "react";
import BannerImg from "./../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="ml-7 mr-7 pl-4 pr-2 border-b-2 border-l-2 border-r-2 bg-customPurple text-center rounded-br-xl rounded-bl-xl">
        <h1 className="text-6xl text-white font-bold w-3/4 mx-auto pt-12">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-sm text-gray-200 w-1/2 mx-auto mt-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white px-4 py-2 rounded-full mt-6 mb-60">
          Shop Now
        </button>
      </div>

      <div className="relative bottom-52 mb-20 w-1/2 mx-auto bg-gray-50 p-1 rounded-xl bg-opacity-45 border border-white">
        <img className="rounded-xl p-1" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
