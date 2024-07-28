"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Service = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row p-10 items-center justify-between">
      <div className="flex flex-row items-center mt-4 md:mt-0 self-start">
        <div className="border rounded-full p-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 11.6664L20 18.333M35 11.6664L20 18.333M20 36.6664V18.333"
              stroke="black"
              stroke-linejoin="round"
            />
            <path
              d="M5 29.6101V12.0566C5 11.8195 5.13964 11.6046 5.35632 11.5083L19.7563 5.1083C19.9115 5.03935 20.0885 5.03935 20.2437 5.1083L34.6437 11.5083C34.8604 11.6046 35 11.8195 35 12.0566V29.6101C35 29.8472 34.8604 30.0621 34.6437 30.1584L20.2437 36.5584C20.0885 36.6273 19.9115 36.6273 19.7563 36.5584L5.35632 30.1584C5.13964 30.0621 5 29.8472 5 29.6101Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 8.33362L27.1437 14.8419C27.3604 14.9382 27.5 15.1531 27.5 15.3902V21.667"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className=" font-sans flex flex-col ml-4">
          <h1 className="font-sans tex-lg md:text-xl">Free Shipping</h1>
          <h1 className="text-xs">You will love at great low prices</h1>
        </div>
      </div>
      <div className="flex flex-row items-center mt-4 md:mt-0 self-start">
        <div className="border rounded-full p-2">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.4453 35.0007H7.44531C6.34074 35.0007 5.44531 34.1052 5.44531 33.0007V15.334C5.44531 14.2294 6.34074 13.334 7.44531 13.334H33.4453C34.5499 13.334 35.4453 14.2294 35.4453 15.334V33.0007C35.4453 34.1052 34.5499 35.0007 33.4453 35.0007Z"
              stroke="black"
            />
            <path
              d="M12.1113 13.3335V7.26681C12.1113 6.93544 12.38 6.66681 12.7113 6.66681H28.178C28.5094 6.66681 28.778 6.93544 28.778 7.26681V13.3335"
              stroke="black"
            />
            <path d="M17.1113 6.66681V13.3335" stroke="black" />
            <path d="M20.4453 6.66681V13.3335" stroke="black" />
            <path
              d="M27.946 25.0007C27.4857 25.0007 27.1126 24.6276 27.1126 24.1673C27.1126 23.7071 27.4857 23.334 27.946 23.334C28.4062 23.334 28.7793 23.7071 28.7793 24.1673C28.7793 24.6276 28.4062 25.0007 27.946 25.0007Z"
              fill="black"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className=" font-sans flex flex-col ml-4">
          <h1 className="font-sans tex-lg md:text-xl">Flexible Payment</h1>
          <h1 className="text-xs">Pay with Cards, UPI and COD available</h1>
        </div>
      </div>
      <div className="flex flex-row items-center mt-4 md:mt-0 self-start">
        <div className="border rounded-full p-2">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.888 31.6667C15.729 31.6667 17.2214 30.1743 17.2214 28.3333C17.2214 26.4924 15.729 25 13.888 25C12.0471 25 10.5547 26.4924 10.5547 28.3333C10.5547 30.1743 12.0471 31.6667 13.888 31.6667Z"
              stroke="black"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.554 31.6667C32.395 31.6667 33.8874 30.1743 33.8874 28.3333C33.8874 26.4924 32.395 25 30.554 25C28.7131 25 27.2207 26.4924 27.2207 28.3333C27.2207 30.1743 28.7131 31.6667 30.554 31.6667Z"
              stroke="black"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.304 28.3333H25.554V10.6C25.554 10.2686 25.2854 10 24.954 10H2.2207"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M9.97135 28.3346H6.15469C5.82332 28.3346 5.55469 28.066 5.55469 27.7346V19.168"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M3.88672 15L10.5534 15"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.5547 15H35.1648C35.4019 15 35.6168 15.1396 35.7131 15.3563L38.8363 22.3836C38.8704 22.4604 38.888 22.5434 38.888 22.6273V27.7333C38.888 28.0647 38.6194 28.3333 38.288 28.3333H34.7214"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M25.5547 28.332H27.2214"
              stroke="black"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className=" font-sans flex flex-col ml-4">
          <h1 className="font-sans tex-lg md:text-xl">Fast Delivery</h1>
          <h1 className="text-xs">Experience the joy of fast shipping</h1>
        </div>
      </div>
      <div className="flex flex-row items-center mt-4 md:mt-0 self-start">
        <div className="border rounded-full p-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.5599 9.22815V12.5615H31.2266H34.5599"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6445 17.8819C12.6445 16.5303 13.7412 15.4336 15.0929 15.4336C16.4445 15.4336 17.5412 16.5303 17.5412 17.8819C17.5412 20.9419 12.6462 20.9419 12.6462 24.5653H17.5412"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.49 20.0502L22.3033 20.0052C22.0667 20.0018 21.875 19.8102 21.875 19.5718V15.4352"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.4818 15.5336V24.5669"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.8336 12.5636C31.162 7.72698 25.9703 4.44531 20.0003 4.44531C11.4086 4.44531 4.44531 11.4103 4.44531 20.0003C4.44531 28.5903 11.4086 35.5553 20.0003 35.5553C28.592 35.5553 35.5553 28.5903 35.5553 20.0003"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className=" font-sans flex flex-col ml-4">
          <h1 className="font-sans tex-lg md:text-xl">Premium Support</h1>
          <h1 className="text-xs"> Outstanding premium support</h1>
        </div>
      </div>
    </div>
  );
};

export default Service;
