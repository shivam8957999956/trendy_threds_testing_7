"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const texts = [
  "PERFECT BLEND OF FASHION AND COMFORTABLE CLOTHS",
  "EXPERIENCE THE LUXURY OF PURE COTTON",
  "STYLISH DESIGNS FOR EVERY OCCASION",
  "QUALITY AND COMFORT IN EVERY THREAD",
];

const NewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="">
      <div className="flex flex-col justify-center">
        <div className="mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-black-600 text-center">
          UPGRADE YOUR
        </div>
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-black-600 text-center">
          WARDROBE <span className="text-gray-300">TODAY</span>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center text-center">
          <div className="mb-4 sm:mb-0 sm:mr-20 text-base sm:text-lg md:text-xl font-sans">
            PERFECT BLEND OF FASHION AND COMFORTABLE CLOTHES
          </div>
          <Link href={`/list?cat=all-products`}>
            <button className="rounded-xl bg-black text-white mb-10 md:mb-0 bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black border-2 border-black  hover:border-black transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="bg-gray-100 md:m-20 m-4 rounded-3xl md:mt-32 flex flex-col md:flex-row items-center">
          <div className="w-full md:order-2 md:w-1/2 h-[300px] md:h-[600px]">
            <Image
              src="/tshirt.png"
              alt=""
              width={500}
              height={400}
              sizes="200vw"
              className="w-full h-full object-contain"
            ></Image>
          </div>
          <div className="p-2 md:p-20 font-sans mt-4 md:mt-0 md:mr-10 md:w-1/2 flex flex-col">
            <h1 className="text-base md:text-lg mb-8">
              INDULGE IN PURE COMFORT WITH OUR T-SHIRTS. SOFT, BREATHABLE
              FABRICS GUARANTEE AN UNMATCHED COZY FIT FOR YOUR EVERYDAY
              RELAXATION.
            </h1>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NewSlider;
