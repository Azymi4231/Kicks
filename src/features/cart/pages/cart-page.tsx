"use client";
import Image from "next/image";
import { checkout, description } from "./cart-page-constans";
import ThrashcanLogo from "@/shared/svg/thrashcan-logo-svg";
import HeartLogo2 from "@/shared/svg/heart-logo2-svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteProducts } from "@/redux/slices/user-product-slice";
const CartPage = () => {
  const UserProducts = useSelector((state: RootState) => state.product);

  const calculateTotalPrice = () => {
    const productTotal = UserProducts.reduce(
      (total, item) => total + item.price,
      0
    );
    const deliveryFee = 6.99;
    const salesTax = 5;
    return productTotal + deliveryFee + salesTax;
  };
  const disptach = useDispatch();
  return (
    <div className="flex flex-col gap-4 ">
      <div className=" text-DarkGray flex flex-col gap-2 font-semibold">
        <h1 className="text-2xl lg:text-4xl">Saving to celebrate </h1>
        <p className="text-xs lg:text-xl">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <p className="text-sm lg:text-lg">Join us or Sign-in</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-col bg-WhiteMain p-4 gap-3 rounded-md flex-grow">
          <div className="flex flex-col  gap-2 font-semibold lg:gap-6">
            <div>
              <h2 className="text-xl lg:text-3xl">Your Bag</h2>
              <p className="font-normal text-sm lg:text-base lg:max-w-72">
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {UserProducts.map((item, id) => (
                <div className="flex gap-4">
                  <div className="flex max-w-52 w-full">
                    <Image src={item.image} alt="Shoe1" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="font-semibold text-DarkGray flex flex-col gap-1 lg:gap-2">
                      <h3 className="text-lg lg:text-2xl">{item.text}</h3>
                      <p className="text-sm lg:text-lg max-w-40">{item.desc}</p>
                      <p className="text-lg text-Blue lg:text-2xl">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-White rounded-md font-semibold text-DarkGray p-4 flex flex-col flex-grow-[1] gap-4  lg:bg-transparent">
          <h3 className="text-xl">Order Summary</h3>
          {checkout.map((item, id) => (
            <div className="flex text-lg flex-col gap-4">
              <div className="flex felx-row justify-between">
                <p>ITEMS</p>
                <p>{UserProducts.length}</p>
              </div>
              <div className="flex felx-row justify-between">
                <p>Delivery </p>
                <p>6.99</p>
              </div>
              <div className="flex felx-row justify-between">
                <p>Sales Tax</p>
                <p>5</p>
              </div>
              <div className="flex felx-row justify-between text-xl">
                <p>Total</p>
                <p>${calculateTotalPrice()}</p>
              </div>
              <button className="bg-DarkGray text-White py-2 text-sm font-medium rounded-lg lg:py-4 lg:text-lg">
                CHECKOUT
              </button>
              <div className="flex flex-row gap-1">
                <button onClick={() => disptach(deleteProducts())}>
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
