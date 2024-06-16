import HeartLogo from "@/shared/svg/heart-logo-svg";
import React from "react";
import { advantages } from "./home-page-constans";
import Image from "next/image";
import Shoe1 from "../../../../public/Shoe-home1.png";
import Shoe2 from "../../../../public/Shoe-home2.png";
import Shoe3 from "../../../../public/Shoe-home3.png";
import Shoe4 from "../../../../public/Shoe-home4.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row ">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <Image src={Shoe1} alt="Shoe1" />
          <Image src={Shoe3} alt="Shoe2" />
        </div>
        <div className="flex flex-col gap-2">
          <Image src={Shoe2} alt="Shoe3" />
          <Image src={Shoe4} alt="Shoe4" />
        </div>
      </div>
      <div className="ml-auto flex gap-2 flex-col">
        <div className="flex font-semibold gap-2 flex-col text-DarkGray">
          <h1 className="text-xl">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h1>
          <p className="text-Blue text-2xl">$125.00</p>
        </div>
        <div className="flex flex-col gap-3">
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
        <div className="flex flex-col gap-2 text-DarkGray">
          <div className="flex gap-3 flex-col">
            <h2 className="font-semibold text-lg">About the product</h2>
            <div className="flex flex-col gap-2">
              <p>Shadow Navy / Army Green</p>
              <p>
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <ul className="flex flex-col list-disc text-sm px-4">
                {advantages.map((item, id) => (
                  <li key={id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
