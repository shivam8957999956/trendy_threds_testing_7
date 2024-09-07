import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";


const PRODUCT_PER_PAGE = 8;

const DealsModal = async () => {
  const wixClient = await wixClientServer();

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", "")
    .eq("collectionIds", "00000000-000000-000000-000000000001")
    .limit(PRODUCT_PER_PAGE);
  // .find();


  const res = await productQuery.find();
  // const filteredProducts = res.items.filter(product => 
  //   product.ribbon && product.ribbon.trim() !== ""
  // );
  return (
    <div className="m-5 md:m-15 flex  flex-col">
     
         <div className="mb-8 flex flex-row align-center items-center ">
        <div className="inline-block mr-4">
          <Image src="/logo2.png" alt="" width={12} height={12} />
        </div>
          <h1 className="uppercase text-sm font-sans text-black-600">
            Exclusive finds
          </h1>
        </div>
        <h1 className="mb-10 text-3xl font-sans text-black-600">Deals Of The Day</h1>
       {res.items.map((product: products.Product) => (
        <>{product.ribbon!=""?

          <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full">
            {product.ribbon && (
              <div className="font-sans text-xs absolute top-0 left-0 bg-black text-white px-2 py-1 rounded-tl-md  z-20">
                {product.ribbon}
              </div>
            )}
            <div className="relative w-full h-60">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="100vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image
                  src={
                    product.media?.items[1]?.image?.url || "/product.png"
                  }
                  alt=""
                  fill
                  sizes="100vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex font-sans flex-col mt-4">
              <span className="font-small">{product.name}</span>

              {/* <div className="h-[2px] bg-gray-100" /> */}
              {product.price?.price === product.price?.discountedPrice ? (
                <h2 className="font-small "> ₹{product.price?.price}</h2>
              ) : (
                <div className="flex items-center gap-4">
                  <h3 className="text-gray-500 line-through">
                    ₹{product.price?.price}
                  </h3>
                  <h2 className="font-small ">
                    ₹{product.price?.discountedPrice}
                  </h2>
                </div>
              )}
              {/* <div className="h-[2px] bg-gray-100" /> */}
              {/* <span className="font-semibold">₹{product.price?.price}</span> */}
            </div>
            {product.additionalInfoSections && (
              <div
                className="text-sm text-gray-500 mt-2"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections.find(
                      (section: any) => section.title === "shortDesc"
                    )?.description || ""
                  ),
                }}
              ></div>
            )}
          </div>

          <button className="rounded-2xl ring-1 ring-black text-black-600 w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
            Add to Cart
          </button>
        </Link>
    :""}</>
      ))}
      
    </div>
  );
};

export default DealsModal;
