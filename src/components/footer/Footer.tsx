"use client";
import React, { useState } from "react";

const Footer = () => {
  const this_year = new Date().getFullYear();
  const [thisYear] = useState(this_year);
  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-12 py-3">
      <p className="text-white text-center">
        &copy; {thisYear} Copyrights claimed by{" "}
        <a
          href="https://portfolio-v2-abuhurairah127.vercel.app/"
          className="font-bold italic"
          target="_blank"
        >
          Abu Hurairah.
        </a>{" "}
      </p>
      <p className="text-center font-thin text-white/40">
        App developed using an API providing dummy data.
      </p>
    </div>
  );
};

export default Footer;
