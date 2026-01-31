"use client";
import Image from "next/image";

import { products, reviews } from "./home-constans";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Shoe from "@/../public/big-shoe-product-page.png";
import { changeActiveWebsite } from "@/redux/slices/active-website-slice";
import StarsLogo from "@/shared/svg/stars-logo-svg";

const HomePage = () => {
  const disptach = useDispatch();
  const router = useRouter();
  return (
    <>
      <div className="flex-col flex gap-6 lg:gap-12">
        <div className="font-bold text-5xl flex flex-row w-full justify-center gap-6 lg:text-9xl">
          <div className="text-DarkGray ">
            <h1> DO IT</h1>
          </div>
          <div className="text-Blue px-3">RIGHT</div>
        </div>
        <div>
          <div
            className="flex flex-col justify-end w-full h-[500px] bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${Shoe.src})` }}
          >
            <div className="p-5 mr-20 flex-col flex gap-1">
              <button className="flex font-medium bg-Blue text-White rounded-lg w-max px-4 py-2 lg:text-lg">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="flex font-semibold text-2xl sm:text-6xl">
            Don’t miss out new drops
          </p>
          <button className="font-medium bg-Blue w-max text-White rounded-lg px-4 py-2 text-sm lg:text-lg">
            SHOP NOW DROPS
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col ">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={`Shoe ${index + 3}`}
                  layout="responsive"
                />
              </div>
              <p className="py-1 font-semibold text-DarkGray text-left lg:text-lg lg:py-3 xl:text-xl">
                {product.text}
              </p>
              <button
                onClick={() => {
                  disptach(changeActiveWebsite(product));
                  router.push(`shop/product/${product.id}`);
                }}
                className="bg-DarkGray flex flex-row rounded-lg px-4 py-2 font-medium text-xs lg:text-lg"
              >
                <p className="text-white flex mx-auto">
                  View Product{" "}
                  <span className="text-Yellow px-1">${product.price}</span>
                </p>
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="font-semibold text-3xl sm:text-7xl">Reviews</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reviews.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-WhiteMain rounded-xl"
              >
                <div className="flex flex-col gap-2 p-8">
                  <div className="flex flex-row-reverse justify-between">
                    <div className="rounded-xl overflow- sm:text-base font-normal ml-4">
                      <Image src={product.image2} alt={`review ${index}`} />
                    </div>
                    <p className="text-DarkGray justify-between text-left text-lg font-semibold sm:text-2xl">
                      {product.text2}
                    </p>
                  </div>
                  <p className="text-DarkGray text-left">{product.text1}</p>
                  <div className="flex flex-row">
                    <StarsLogo />
                    <p>5.0</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden sm:text-base font-normal">
                  <Image
                    src={product.image}
                    alt={`review ${index}`}
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
