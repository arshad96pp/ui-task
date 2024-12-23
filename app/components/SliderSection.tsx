"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "../assets/sliderImages/IMAGE (2).png";
import Image2 from "../assets/sliderImages/IMAGE (3).png";
import Image3 from "../assets/sliderImages/IMAGE (4).png";
import Image4 from "../assets/sliderImages/IMAGE (5).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const SliderSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const resizeHandlere = () => {
    setIsMobile(window.innerWidth <= 1200);
  };

  const imagesArray = [
    {
      mainImage: Image2,
      title: "48,000",
      subImage1: Image4,
      subtitle: "Open source projects",
      order: 0,
      colorItme: "text-[#19FB9B]",
    },
    {
      mainImage: Image2,
      title: "48,000",
      subImage1: Image4,
      subtitle: "Open source projects",
      order: 1,
      colorItme: "text-[#F087FF]",
    },
    {
      mainImage: Image2,
      title: "48,000",
      subImage1: Image4,
      subtitle: "Open source projects",
      order: 0,
      colorItme: "text-[#19FB9B]",
    },
    {
      mainImage: Image2,
      title: "48,000",
      subImage1: Image4,
      subtitle: "Open source projects",
      order: 0,
      colorItme: "text-[#19FB9B]",
    },
    {
      mainImage: Image2,
      title: "48,000",
      subImage1: Image4,
      subtitle: "Open source projects",
      order: 0,
      colorItme: "text-[#19FB9B]",
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", resizeHandlere);

    return () => window.removeEventListener("resize", resizeHandlere);
  }, []);

  return (
    <section className="container mb-28">
      <div className="bg-black text-white py-10">
        <h2 className="text-2xl font-semibold mb-10">
          Join a thriving community.
        </h2>

        {/* Swiper Container */}

        {!isMobile ? (
          <>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1} // Show 1 slide at a time (full width)
              loop={false} // No infinite loop
              centeredSlides={true} // Centers active slide
              navigation={{ enabled: true }} // Navigation arrows
              pagination={{ clickable: true }} // Pagination bullets
              freeMode={true} // Enables free mode scrolling (no snapping)
              breakpoints={{
                320: { slidesPerView: 1 }, // Small screens show 1 slide
                768: { slidesPerView: 1 }, // Medium screens show 1 slide
                1024: { slidesPerView: 1 }, // Large screens show 1 slide
              }}
              className="mySwiper"
            >
              {imagesArray.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-4 gap-4 min-w-[1000px] h-[510px]">
                      {/* Second Column (Wider) */}
                      <div className="bg-gray-800 text-center flex items-center justify-center col-span-2">
                        <Image
                          src={slide?.mainImage}
                          alt="Community"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* First Column */}
                      <div className="flex flex-col gap-4">
                        <div
                          className={`bg-gray-800 text-center flex-1 ${
                            slide?.order === 0 ? "order-1" : "order-2"
                          } `}
                        >
                          <Image
                            src={slide?.mainImage}
                            alt="Community"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className={`bg-gray-800 text-center flex-1 flex flex-col justify-center items-center order-1`}
                        >
                          <div className="text-center">
                            <h3
                              className={`${slide.colorItme} text-3xl font-semibold`}
                            >
                              {slide.title}
                            </h3>

                            <p className="text-gray-300">{slide.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      {/* Third Column */}
                      <div className="space-y-4 flex flex-col">
                        <div className="bg-gray-800 text-center flex-1">
                          <Image
                            src={slide?.subImage1}
                            alt="Community"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <>
            <div className="flex overflow-x-auto scrollbar-hidden">
              {imagesArray.map((slide, index) => (
                <div className="flex justify-center items-center">
                  <div className="grid grid-cols-4 gap-4 min-w-[1000px] h-[510px]">
                    {/* Second Column (Wider) */}
                    <div className="bg-gray-800 text-center flex items-center justify-center col-span-2">
                      <Image
                        src={slide?.mainImage}
                        alt="Community"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* First Column */}
                    <div className="flex flex-col gap-4">
                      <div
                        className={`bg-gray-800 text-center flex-1 ${
                          slide?.order === 0 ? "order-1" : "order-2"
                        } `}
                      >
                        <Image
                          src={slide?.mainImage}
                          alt="Community"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`bg-gray-800 text-center flex-1 flex flex-col justify-center items-center order-1`}
                      >
                        <div className="text-center">
                          <h3
                            className={`${slide.colorItme} text-3xl font-semibold`}
                          >
                            {slide.title}
                          </h3>

                          <p className="text-gray-300">{slide.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Third Column */}
                    <div className="space-y-4 flex flex-col">
                      <div className="bg-gray-800 text-center flex-1">
                        <Image
                          src={slide?.subImage1}
                          alt="Community"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SliderSection;
