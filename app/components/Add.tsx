import React from "react";
import LeftImage from "../assets/HeroLeft.png";
import RighetImage from "../assets/HeroRight.png";
import Image from "next/image";
import Button from "./Button";

const Add = () => {
  return (
    <section className="container mb-28">
      <div className=" border border-white rounded-lg h-[400px] relative overflow-hidden flex flex-col justify-center items-center">
        <Image
          src={LeftImage}
          alt="icon"
          className="w-[38%] absolute top-0 left-[-100px] z-[-1]  hidden lg:flex"
        />
        <Image
          src={RighetImage}
          alt="icon"
          className=" w-[80%]  lg:w-[38%] absolute top-0 right-[-30px] lg:right-[-100px] z-[-1]"
        />

        <div className="text-center">
          <h1 className="p-7 mb-3 lg:p-0 text-[28px] sm:text-[28px] lg:text-[32px] 2xl:text-[36px] 3xl:text-[38px] lg:mb-12">
            {" "}
            It's time to join the thousands of creators, artists,
            <br /> and developers using Solana.
          </h1>

          <Button title="Start building" active />
        </div>
      </div>
    </section>
  );
};

export default Add;
