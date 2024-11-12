import React from "react";
import BannerImg from "./../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="ml-5 mr-5 pr-2 pl-2 border-b-1 border-l-1 border-r-1">
      <div className=" bg-customPurple text-center rounded-br-xl rounded-bl-xl">
        <h1 className="text-6xl text-white font-bold w-3/4 mx-auto pt-12">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-sm text-gray-200 w-1/2 mx-auto mt-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white px-4 py-2 rounded-full mt-6 mb-60">
          <a href="#shop">Shop Now</a>
        </button>
      </div>

      <div className="relative bottom-52 w-1/2 mx-auto bg-gray-50 p-1 rounded-xl bg-opacity-45 border border-white">
        <img className="rounded-xl p-1" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
