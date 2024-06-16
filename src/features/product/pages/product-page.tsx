import Image from "next/image";
import Shoe from "../../../../public/big-shoe-product-page.png";
import { products, reviews } from "./product-constans";
import StarsLogo from "@/shared/svg/stars-logo-svg";
import NewLogo from "@/shared/svg/new-logo";

const ProductPage = () => {
  return (
    <div className="flex-col flex gap-6">
      <div className="font-bold text-5xl flex flex-row w-full justify-center gap-6">
        <div className="text-DarkGray ">DO IT </div>
        <div className="text-Blue px-3">RIGHT</div>
      </div>
      <div>
        <div
          className="flex flex-col justify-end w-full h-[500px] bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url(${Shoe.src})` }}
        >
          <div className="p-5 mr-20 flex-col flex gap-1">
            <h1 className=" flex text-2xl text-white font-semibold">
              NIKE AIR MAX
            </h1>
            <p className="text-white flex">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="flex font-medium bg-Blue text-White rounded-lg w-max px-4 py-2">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="flex font-semibold text-2xl sm:text-6xl">
          Don’t miss out new drops
        </p>
        <button className="font-medium bg-Blue w-max text-White rounded-lg px-4 py-2 text-sm ">
          SHOP NOW DROPS
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col ">
            <div className="rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={`Shoe ${index + 3}`}
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
            <p className="font-semibold text-DarkGray text-center">
              {product.text}
            </p>
            <button className="bg-DarkGray flex flex-row rounded-lg px-4 py-2 font-medium text-xs">
              <p className="text-white flex mx-auto">
                View Product <span className="text-Yellow px-1">$125</span>
              </p>
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-4 flex-col">
        <h1 className="font-semibold text-3xl sm:text-7xl">Reviews</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map((product, index) => (
            <div key={index} className="flex flex-col bg-WhiteMain rounded-xl">
              <div className="flex flex-col gap-2 p-8">
                <div className="flex flex-row-reverse justify-between">
                  <div className="rounded-xl overflow- sm:text-base font-normal ml-4">
                    <Image
                      src={product.image2}
                      alt={`review ${index}`}
                      width={50}
                      height={50}
                    />
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
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
