import React from "react";
import KicksLogo from "../svg/kicks-logo-svg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const Header = () => {
  const UserProducts = useSelector((state: RootState) => state.product);
  const router = useRouter();
  return (
    <div className="bg-WhiteMain flex w-full justify-between py-3 rounded-xl px-3 items-center lg:py-6">
      <div className="size-6"></div>
      <KicksLogo />
      <div
        onClick={() => {
          router.push("/cart");
        }}
        className="size-6 rounded-full bg-Yellow flex justify-center items-center text-sm font-bold cursor-pointer"
      >
        {UserProducts.length}
      </div>
    </div>
  );
};

export default Header;
