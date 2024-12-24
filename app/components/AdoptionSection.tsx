"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { data } from "../data/data";
import Card from "./Card";

const AdoptionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);
  return (
    <section className="container mb-28 relative">
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_2.5fr]">
        {/* Left Section */}
        <div className="self-start top-20 xl:sticky" >
          <h2 className="text-[28px]  lg:text-[32px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[38px]  text-white">
            Made for mass <br /> adoption.
          </h2>
        </div>

        {/* Right Section (Stats) */}
        <div
          className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-1  2xl:grid-cols-2 gap-x-7 gap-y-6"
          data-aos="zoom-in"
        >
          {data?.cardData?.map((item: any, index: any) => (
            <Card {...item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptionSection;
