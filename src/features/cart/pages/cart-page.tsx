"use client";
import Image from "next/image";
import Shoe1 from "../../../../public/Shoe-cart1.png";
import { checkout, description } from "./cart-page-constans";
import ThrashcanLogo from "@/shared/svg/thrashcan-logo-svg";
import HeartLogo2 from "@/shared/svg/heart-logo2-svg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const CartPage = () => {
  const UserProducts = useSelector((state: RootState) => state.product);
  return (
    <div className="flex flex-col gap-4 ">
      <div className=" text-DarkGray flex flex-col gap-2 font-semibold">
        <h1 className="text-2xl">Saving to celebrate </h1>
        <p className="text-xs">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <p className="text-sm">Join us or Sign-in</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col bg-WhiteMain p-4 gap-2 rounded-md">
          <div className="flex flex-col  gap-2 font-semibold">
            <h2 className="text-xl">Your Bag</h2>
            <p className="font-normal text-sm">
              Items in your bag not reserved- check out now to make them yours.
            </p>
            <div className="flex flex-col gap-4">
              {UserProducts.map((item, id) => (
                <div className="flex gap-4">
                  <Image src={item.image} alt="Shoe1" />
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold text-DarkGray">
                      <h3 className="text-2xl">{item.name}</h3>
                      <p className="text-sm">desc1</p>
                      <p className="text-sm">desc2</p>
                    </div>
                    <p key={id} className="text-Blue font-semibold text-2xl">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-White rounded-md font-semibold text-DarkGray p-4 flex flex-col grow gap-4">
          <h3 className="text-xl">Order Summary</h3>
          {checkout.map((item, id) => (
            <div className="flex flex-col gap-4">
              <div className="flex felx-row justify-between">
                <p>ITEM</p>
                <p key={id}>{item.amount}</p>
              </div>
              <div className="flex felx-row justify-between">
                <p>Delivery </p>
                <p key={id}>{item.delivery}</p>
              </div>
              <div className="flex felx-row justify-between">
                <p>Sales Tax</p>
                <p key={id}>{item.tax}</p>
              </div>
              <div className="flex felx-row justify-between text-xl">
                <p>Total</p>
                <p key={id}>{item.total}</p>
              </div>
              <button className="bg-DarkGray text-White px-4 py-2 text-sm font-medium rounded-lg">
                CHECKOUT
              </button>
              <div className="flex flex-row gap-1">
                <button>
                  <ThrashcanLogo />
                </button>
                <button>
                  <HeartLogo2 />
                </button>
              </div>

              <p>Use a promo code</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;