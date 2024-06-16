import HeartLogo from "@/shared/svg/heart-logo-svg";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <img src="" alt="" />
      <div className="flex font-semibold gap-2 flex-col text-DarkGray">
        <h1 className="text-xl">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h1>
        <p className="text-Blue text-2xl">$125.00</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex-row flex gap-2">
          <button className="font-medium bg-DarkGray text- w-full text-White rounded-md px-4 py-2">
            ADD TO CART
          </button>
          <button className="font-medium bg-DarkGray text- w-min text-White rounded-md px-4 py-2">
            <HeartLogo />
          </button>
        </div>
        <button className="font-medium bg-Blue text- w-full text-White rounded-md px-4 py-2">
          ADD TO CART
        </button>
      </div>
      <div>
        <h2>About the product</h2>
      </div>
    </div>
  );
};

export default HomePage;
