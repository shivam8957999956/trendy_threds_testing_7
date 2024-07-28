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
  <button className="py-2 px-4 rounded-xl bg-black text-white">
    Shop Now
  </button>
</div>

        <div className="px-2 py-10 md:px-20 md:py-20 w-full  overflow-hidden rounded-3xl">
          <Image
            src={"/newslide.png"}
            alt=""
            width={400}
            height={500}
            sizes="250vw"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NewSlider;
