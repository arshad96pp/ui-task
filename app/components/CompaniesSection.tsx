import React from "react";

import Image from "next/image";
import { data } from "../data/data";

const CompaniesSection = () => {
  return (
    <section className="conatiner w-full text-center mb-28">
      <p className="text-[#618ADC] text-sm mb-6">
        Powering tools and integrations from companies all around the world
      </p>

      <div className="flex justify-center items-center flex-wrap gap-12">
        {data?.brandes?.map((item: any) => (
          <Image
            key={item?.id}
            src={item?.image}
            alt={item?.alt}
            className="w-20 sm:w-28"
          />
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
