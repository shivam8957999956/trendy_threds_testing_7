import Filter from "@/components/Filter";
import NewFeaturedProduct from "@/components/NewFeaturedProduct";
import NewProductList from "@/components/NewProductList";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div className="relative px-4 py-10 md:px-20 md:py-12">
      {/* CAMPAIGN */}
      {/* <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div> */}
      {/* FILTER */}
      {/* PRODUCTS */}

      
      <div className="mb-4 flex flex-row align-center items-center ">
        <div className="inline-block mr-4">
          <Image src="/logo2.png" alt="" width={12} height={12} />
        </div>
          <h1 className="uppercase text-sm font-sans text-black-600">
            now trending
          </h1>
        </div>
        <h1 className="text-3xl font-sans text-black-600">
        {cat?.collection?.name?.substring(0,6).toLowerCase()==="legacy"?cat?.collection?.name.substring(7):cat?.collection?.name}
        </h1>
      <Filter />
      {/* <h1 className="px-2 py-2 mt-12 text-xl font-semibold">{cat?.collection?.name?.substring(0,6).toLowerCase()==="legacy"?cat?.collection?.name.substring(7):cat?.collection?.name} For You!</h1> */}
      <Suspense fallback={<Skeleton/>}>
        <NewFeaturedProduct
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
