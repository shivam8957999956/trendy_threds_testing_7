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
    <div className="ml-20 mr-20 mt-12 flex gap-x-8 gap-y-16  flex-wrap">
       {res.items.map((product: products.Product) => (
        <>{product.ribbon!=""?

            <Link
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
        >
          <div className="relative w-full">
            {product.ribbon && (
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tl-lg  z-20">
                {product.ribbon}
              </div>
            )}
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex justify-between mt-4">
              <span className="font-medium">{product.name}</span>
              <div className="h-[2px] bg-gray-100" />
              {product.price?.price === product.price?.discountedPrice ? (
                  <h2 className="font-medium "> ₹{product.price?.price}</h2>
                ) : (
                    <div className="flex items-center gap-4">
                  <h3 className="text-gray-500 line-through">
                    ₹{product.price?.price}
                  </h3>
                  <h2 className="font-medium ">
                    ₹{product.price?.discountedPrice}
                  </h2>
                </div>
              )}
              <div className="h-[2px] bg-gray-100" />
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

          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
    :""}</>
      ))}
      
    </div>
  );
};

export default DealsModal;
