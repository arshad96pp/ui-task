"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import BgImage from "../assets/bg.png";
import Image from "next/image";

const CommunitySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <section className="container mb-28 relative">
      <div
        className={`grid lg:grid-cols-[2fr_2.5fr]`}
      >

        <Image src={BgImage } alt="image" className="absolute left-0 right-0 hidden sm:flex"/>
        {/* Left Section */}
        <div className="self-start top-20 xl:sticky" >
          <h2 className="text-[28px] lg:text-[32px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[38px]">
            Join a community <br /> of millions
          </h2>
        </div>

        {/* Right Section (Stats) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-b border-gray-800 pb-2" data-aos="zoom-in">
            <h3 className="text-[64px] lg:text-[64px] xl:text-[64px] 2xl:text-[88px] 3xl:text-[101px] font-medium bg-gradient-to-r from-[#8C01FA] to-[#8C01FA] bg-clip-text text-transparent">
              11.5M+
            </h3>
            <p className="text-[16px] lg:text-[16px]">ACTIVE ACCOUNTS</p>
          </div>

          <div className="border-b border-gray-800 pb-2" data-aos="zoom-in">
            <h3 className="text-[64px] lg:text-[64px] xl:text-[64px] 2xl:text-[88px] 3xl:text-[101px] font-medium bg-gradient-to-r from-[#8C01FA] to-[#8C01FA] bg-clip-text text-transparent">
              21.9M
            </h3>
            <p className="text-[16px] lg:text-[16px]">NFTS MINTED</p>
          </div>

          <div className="border-b border-gray-800 pb-2" data-aos="zoom-in">
            <h3 className="text-[64px] lg:text-[64px] xl:text-[64px] 2xl:text-[88px] 3xl:text-[101px] font-medium bg-gradient-to-r from-[#8C01FA] to-[#8C01FA] bg-clip-text text-transparent">
              $0.0025
            </h3>
            <p className="text-[16px] lg:text-[16px]">
              AVERAGE COST PER TRANSACTION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
