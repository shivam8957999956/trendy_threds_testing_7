// "use client";

import CategoryList from "@/components/CategoryList";
import FeaturedProduct from "@/components/FeaturedProduct";
import PopularProduct from "@/components/PopularProduct";
import ProductList from "@/components/ProductList";
import SearchByMood from "@/components/SearchByMood";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
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
      <Slider />
      <div className="mt-20">
        <h1 className="text-4xl font-sans font-bold  text-slate-600 text-center">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className=" mt-16 flex flex-col justify-center align-center p-4">
        <h1 className="text-4xl font-sans font-bold  text-slate-600 text-center">
          Featured Products
        </h1>
        <Suspense fallback={<Skeleton />}>
          <FeaturedProduct
            categoryId={process.env.FEATURED_PRODUCTS_FEATURED_CATEGORY_ID!}
            limit={8}
          />
        </Suspense>
      </div>
      <div className="mt-20">
        <h1 className="text-4xl font-sans font-bold  text-slate-600 text-center">
          Shop The Legacy
        </h1>
        <Suspense fallback={<Skeleton />}>
          <SearchByMood />
        </Suspense>
      </div>
      <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-4xl font-sans font-bold  text-slate-600 text-center">
          Popular
        </h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.POPULAR_PRODUCT_POPULAR_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;

// FEATURED_PRODUCTS_NEW_CATEGORY_ID
