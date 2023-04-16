import Image from "next/image";
import React from "react";
import logo from "./../../assets/logoipsum.svg";
const Header = () => {
  return (
    <div className="h-16 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-between px-5">
      <Image src={logo} alt={"Brand logo"} />
      <p className="text-white text-xl font-thin tracking-widest">Book Store</p>
      <button
        type="button"
        className="bg-red-600 text-white px-5 py-1.5 rounded"
      >
        Delete Account
      </button>
    </div>
  );
};

export default Header;
