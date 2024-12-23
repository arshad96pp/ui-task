import React from "react";
import FooterIcon from "../assets/footerIcon/Frame.png";
import Image from "next/image";

import YoutubeIcon from "../assets/footerIcon/youtube.png";
import GitIcon from "../assets/footerIcon/git.png";
import TwitterIcon from "../assets/footerIcon/twitter.png";
import TelegramIcon from "../assets/footerIcon/telagram.png";
import Fram2Icon from "../assets/footerIcon/Frame-2.png";
import Fram3Icon from "../assets/footerIcon/Frame-3.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

const Footer = () => {
  const images: StaticImport[] = [
    YoutubeIcon,
    TwitterIcon,
    Fram2Icon,
    Fram3Icon,
    GitIcon,
    TelegramIcon,
  ];

  return (
    <section className="bg-[#000508] py-28">
      <div className="container flex flex-col lg:flex-row justify-between items-start">
        {/* Left section */}
        <div className="mb-9 lg:mb-0">
          <Image src={FooterIcon} alt="footer logo" className="w-[30px] mb-4" />
          <p className="mb-4 max-w-44 sm:max-w-60">
            Managed by Solana Foundation
          </p>

          <div className="flex justify-start items-center gap-2 cursor-pointer w-16 mb-5">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`footer icon ${index}`}
                width={30}
                height={30}
              />
            ))}
          </div>
          <p className="text-gray-600">
            ©2023 Solana Foundation. All rights reserved.
          </p>
        </div>

       {/* Right section with 3 rows of list items */}
<div className="text-white grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2 lg:10">
  <div className="mb-6">
    <h4 className="font-medium text-lg mb-4">Solana</h4>
    <ul>
      <li className="mb-2 text-sm text-gray-700 cursor-pointer hover:text-[#1FCFF1] transition-colors duration-300">
        Grants
      </li>
      <li className="mb-2 text-sm text-gray-700 cursor-pointer hover:text-[#1FCFF1] transition-colors duration-300">
        Break Solana
      </li>
      <li className="mb-2 text-sm text-gray-700 cursor-pointer hover:text-[#1FCFF1] transition-colors duration-300">
        Media Kit
      </li>
      <li className="mb-2 text-sm text-gray-700 cursor-pointer hover:text-[#1FCFF1] transition-colors duration-300">
        Careers
      </li>
      <li className="mb-2 text-sm text-gray-700 cursor-pointer hover:text-[#1FCFF1] transition-colors duration-300">
        Disclaimer
      </li>
    </ul>
  </div>

  <div className="mb-6">
    <h4 className="font-medium text-lg mb-4">Get Connected</h4>
    <ul>
      <li className="mb-2 text-sm text-gray-700 cursor-pointer hover:text-[#1FCFF1] transition-colors duration-300">
        Ecosystem
      </li>
      <li className="mb-2 text-sm text-gray-700 cursor-pointer hover:text-[#1FCFF1] transition-colors duration-300">
        Blog
      </li>
      <li className="mb-2 text-sm text-gray-700 cursor-pointer hover:text-[#1FCFF1] transition-colors duration-300">
        Newsletter
      </li>
    </ul>
  </div>

  <div className="mb-6">
    <h4 className="font-medium text-lg mb-4 flex justify-start items-center ml-0 lg:ml-7 ">
      <span className="m-0">
        <LanguageRoundedIcon  style={{fontSize:"23px"}}/>
      </span>
      <span className="m-0">EN</span>
    </h4>
  </div>
</div>

      </div>
    </section>
  );
};

export default Footer;
