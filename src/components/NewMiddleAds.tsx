"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";
const slides = [
  {
    id: 1,
    title: "Brand New Luxury Tees",
    description: "Sale! Up to 50% off!",
    img: "/salefirst1.png",
    imgMobile: "/salefirstmob.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "#KapdoKoBolneDo",
    description: "Shop the trends fits your inner vibe",
    img: "/salesecond.png",
    imgMobile: "/salesecondmob.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Check Out Trendy Collections",
    description: "Sale! Up to 50% off!",
    img: "/salethird.png",
    imgMobile: "/salethirdmob.png",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const NewMiddleAds = () => {
  //   const [current, setCurrent] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);
  // useEffect(() => {
  //     AOS.init({
  //       duration: 1000, // Duration of the animation
  //     });
  //   }, []);

  return (
    <div className="">
      <div className="p-2 m-2 mt-10 md:m-20 md:mt-32 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 h-[320px] md:h-[400px]">
          <Image
            src="/newslide2.png"
            alt=""
            width={500}
            height={400}
            sizes="200vw"
            className="w-full h-full object-cover rounded-3xl"
          ></Image>
        </div>
        <div className="font-sans mt-4 md:mt-0 md:ml-10 md:w-1/2 flex flex-col">
          <h1 className="text-3xl mb-4">Quality & Sustainability</h1>
          <h1 className="text-base mb-8">
            Our mission is to provide you with the latest trends and timeless
            styles that empower you to express your unique personality and make
            every look more perfect.
          </h1>
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col">
              <h1 className="text-xl mb-4">Trending Collections</h1>
              <h1 className="mb-8">
                Explore our curated selection of the latest fashion trends &
                timeless styles.
              </h1>
            </div>
            <div className="w-1/2 flex flex-col">
              <h1 className="text-xl mb-4">Customer Focus</h1>
              <h1 className="mb-8">
                Providing exceptional customer service and a seamless shopping
                experience.
              </h1>
            </div>
          </div>
          <Link href={`/list?cat=featured-products`}>
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black border-2 border-black hover:border-black transition duration-300 self-start">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div className="p-2 m-2 mt-10 md:m-20 md:mt-32 flex flex-col md:flex-row items-center">
        <div className="w-full md:order-2 md:w-1/2 h-[300px] md:h-[400px]">
          <Image
            src="/newslide3.png"
            alt=""
            width={500}
            height={400}
            sizes="200vw"
            className="w-full h-full object-cover rounded-3xl"
          ></Image>
        </div>
        <div className="font-sans mt-4 md:mt-0 md:mr-10 md:w-1/2 flex flex-col">
          <h1 className="text-3xl mb-4">
            Find the perfect finishing touches at Trendy Threds
          </h1>
          <h1 className="text-base mb-8">
            Our vision at Trendy Threds is to lead the fashion industry with
            innovative and sustainable practices. By expanding our reach and
            impact, we aim to make a positive difference in the world of fashion
            and beyond.
          </h1>
          <Link href={`/list`}>
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black border-2 border-black  hover:border-black transition duration-300 self-start">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-200 mt-10 md:mt-32 flex flex-col md:flex-row items-center">
        <div className="w-full md:order-2 md:w-1/2 h-[300px] md:h-[600px]">
          <Image
            src="/newslide44.jpg"
            alt=""
            width={500}
            height={400}
            sizes="200vw"
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="p-2 md:p-20 font-sans mt-4 md:mt-0 md:mr-10 md:w-1/2 flex flex-col">
          <h1 className="text-xs mb-6">SUSTAINABLE FASHION</h1>
          <h1 className="text-5xl md:text-7xl mb-8">
            Explore our most loved products
          </h1>
          <h1 className="text-base mb-8">
            Eco-friendly fashion that doesn&apos;t compromise on style.
          </h1>
          <button className="mb-10 md:mb-0 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-200 hover:text-black border-2 border-black  hover:border-black transition duration-300 self-start">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMiddleAds;
