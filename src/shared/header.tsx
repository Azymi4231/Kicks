import React from "react";
import KicksLogo from "./svg/kicks-logo-svg";

const Header = () => {
  return (
    <div className="bg-WhiteMain flex w-full py-3 rounded-xl">
      <div className="w-full flex justify-center">
        <KicksLogo />
      </div>
    </div>
  );
};

export default Header;
