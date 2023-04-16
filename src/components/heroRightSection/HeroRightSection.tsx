"use client";
import React from "react";
import Lottie from "lottie-react";
import booksAnim from "./../../assets/99349-girl-with-books.json";
const HeroRightSection = () => {
  return (
    <>
      <Lottie animationData={booksAnim} loop={true} className={"h-72"} />
    </>
  );
};

export default HeroRightSection;
