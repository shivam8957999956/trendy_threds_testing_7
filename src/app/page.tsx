// "use client";
import CategoryList from "@/components/CategoryList";
import FeaturedProduct from "@/components/FeaturedProduct";
import NewCategoryList from "@/components/NewCategoryList";
import NewFeaturedProduct from "@/components/NewFeaturedProduct";
import NewMiddleAds from "@/components/NewMiddleAds";
import NewSlider from "@/components/NewSlider";
import PopularProduct from "@/components/PopularProduct";
import ProductList from "@/components/ProductList";
import SearchByMood from "@/components/SearchByMood";
import Service from "@/components/Service";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense, useContext, useEffect, useState } from "react";

const HomePage = async () => {
  // TEST (FETCHING ON THE CLIENT COMPONENT)

  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res)
  //   };

  //   getProducts();
  // }, [wixClient]);

  // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div className="">
      <NewSlider />
      <div className="md:ml-20 md:mr-20 mt-8 flex flex-col justify-center align-center p-4">
        <div className="mb-4 flex flex-row align-center items-center ">
        <div className="inline-block mr-4">
          <Image src="/logo2.png" alt="" width={12} height={12} />
        </div>
          <h1 className="uppercase text-sm font-sans text-black-600">
            Exclusive finds
          </h1>
        </div>
        <h1 className="text-3xl font-sans text-black-600">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <NewFeaturedProduct
            categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="md:ml-20 md:mr-20 mt-24 flex flex-col justify-center align-center p-4">
      <div className="mb-4 flex flex-row align-center items-center ">
        <div className="inline-block mr-4">
          <Image src="/logo2.png" alt="" width={12} height={12} />
        </div>
          <h1 className="uppercase text-sm font-sans text-black-600">
            now trending
          </h1>
        </div>
        <h1 className="text-3xl font-sans text-black-600">
          Latest Popular Products
        </h1>
        <Suspense fallback={<Skeleton />}>
          <NewFeaturedProduct
            categoryId={process.env.POPULAR_PRODUCT_POPULAR_CATEGORY_ID!}
            limit={8}
            />
        </Suspense>
      </div>
      <NewMiddleAds/>
      <div className="md:ml-20 md:mr-20 mt-24 flex flex-col justify-center align-center p-4">
      <div className="mb-4 flex flex-row align-center items-center ">
        <div className="inline-block mr-4">
          <Image src="/logo2.png" alt="" width={12} height={12} />
        </div>
          <h1 className="uppercase text-sm font-sans text-black-600">
            Catergories
          </h1>
      </div>
        <h1 className="text-3xl font-sans text-black-600">
          Our Collection
        </h1>
        <Suspense fallback={<Skeleton />}>
          <NewCategoryList />
        </Suspense>
      </div>
      <Service/>
      {/* <div className="mt-20">
        <h1 className="text-4xl font-sans font-bold  text-slate-600 text-center">
          Shop The Legacy
        </h1>
        <Suspense fallback={<Skeleton />}>
          <SearchByMood />
        </Suspense>
      </div> */}
    </div>
  );
};

export default HomePage;

// FEATURED_PRODUCTS_NEW_CATEGORY_ID
