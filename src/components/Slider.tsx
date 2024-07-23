"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Brand New Luxury Tees",
    description: "Sale! Up to 50% off!",
    img: "/salefirst.png",
    imgMobile:"/salefirstmob.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "#KapdoKoBolneDo",
    description: "Shop the trends fits your inner vibe",
    img: "/salesecond.png",
    imgMobile:"/salesecondmob.png",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Check Out Trendy Collections",
    description: "Sale! Up to 50% off!",
    img: "/salethird.png",
    imgMobile:"/salethirdmob.png",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(60vh-50px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-screen relative`}
            key={slide.id}
          >
            {/* IMAGE CONTAINER */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="hidden md:flex items-center justify-between gap-8 h-full">
                <Image
                  src={slide.img}
                  alt=""
                  layout="fill"
                  sizes="100%"
                  className="object-cover filter"
                />
              </div>

              <div className="h-full flex items-center justify-between md:hidden">
              <Image
                  src={slide.imgMobile}
                  alt=""
                  layout="fill"
                  sizes="100%"
                  className="object-cover filter "
                />
              </div>
            </div>

            {/* TEXT CONTAINER */}
            <div className="bg-black bg-opacity-25 md:hidden relative z-10 h-full flex flex-col gap-16 xl:flex-row items-center justify-center">
             <div className="pb-10 h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
               <h2 className="text-xl lg:text-3xl 2xl:text-5xl text-white">
                 {slide.description}
               </h2>
               <h1 className="text-2xl lg:text-6xl 2xl:text-8xl font-semibold text-white">
                 {slide.title}
               </h1>
               <Link href={slide.url}>
                 <h1 className="rounded-md bg-black text-white py-3 px-4 hover:bg-gray-700">
                   SHOP NOW
                 </h1>
               </Link>
             </div>
           </div>
          </div>
          // <div
          //   className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          //   key={slide.id}
          // >
          // {/* TEXT CONTAINER */}
          // <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
          //   <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
          //     {slide.description}
          //   </h2>
          //   <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
          //     {slide.title}
          //   </h1>
          //   <Link href={slide.url}>
          //     <button className="rounded-md bg-black text-white py-3 px-4 ">
          //       SHOP NOW
          //     </button>
          //   </Link>
          // </div>
          // {/* IMAGE CONTAINER */}
          //   <div className="h-1/2 xl:w-1/2 xl:h-full relative">
          //     <Image
          //       src={slide.img}
          //       alt=""
          //       fill
          //       sizes="100%"
          //       className="object-cover"
          //     />
          //   </div>
          // </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 flex gap-4 p-4">
        {slides.map((slide, index) => (
          <div
            className={`w-2 h-2  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[8px] h-[8px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
