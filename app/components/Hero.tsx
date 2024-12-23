'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import LeftImage from "../assets/HeroLeft.png";
import RighetImage from "../assets/HeroRight.png";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {

   useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with a duration
    }, []);
  return (
    <section className=" mt-[67px] h-[calc(100vh-67px)] relative w-full flex flex-col justify-center items-center">
      <Image
        src={LeftImage}
        alt="icon"
        className="w-[40%] absolute top-0 left-0 z-[-1] hidden lg:flex"
      />
      <Image
        src={RighetImage}
        alt="icon"
        className="w-[60%] lg:w-[40%] absolute top-0 right-0  z-[-1]"
      />

      <div className="text-center">
        <h1 className="text-[35px] sm:text-[42px] lg:text-[48px] xl:text-[52px] 2xl:text-[64px] 3xl:text-[68px]  mb-5 " data-aos="zoom-in">
          Powerful for developers.
          <br />
          Fast for everyone.
        </h1>

        <p className="text-[16px] 2xl:text-[18px] 3xl:text-[20px]  max-w-[500px] mb-9 " data-aos="zoom-in">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4" data-aos="zoom-in">
          <Button title="Start building" active />
          <Button title="Read docs" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
