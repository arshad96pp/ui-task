import React from "react";

interface CardProps {
    title: string;
    desc: string;
    price: string | number; // Adjust type as needed
    content: string;
    index: number;
  }

const Card: React.FC<CardProps> = ({ title, desc, price, content,index }) => {
  return (
    <div className={`p-6 rounded-[25px] bg-[#0F091A] ${index === 0 ? 'mt-10':""}`}>
      <div className="relative mb-4">
        <h2 className="heading-with-vertical-line">
          <span className="ml-2  text-[24px] xl:text-[28px] 2xl:text-[18px] 3xl:text-[28px]">{title}</span>
        </h2>
      </div>

      <p className="mb-8 text-[16px]  2xl:text-[17px] 3xl:text-[18px]">{desc}</p>
      

      <p  className="text-[25px] xl:text-[26px]  2xl:text-[25px] 3xl:text-[26px]">{price}</p>
      <p className="text-[16px] ">{content}</p>
    </div>
  );
};

export default Card;
