import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const FeaturedProduct = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  const productQuery = wixClient.products
    .queryProducts()
    // .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();
  const red = wixClient.products
    .queryProducts()
    .exists("name", searchParams?.name || "");

  const productNameFilter = searchParams?.name || "";
  function isWordInSentence(sentence: any) {
    const lowerCaseWord = productNameFilter.toLowerCase();
    const lowerCaseSentence = sentence.toLowerCase();
    const words = lowerCaseSentence.split(/\s+/);
    return words.includes(lowerCaseWord);
  }

  // console.log(filteredProducts);
  // console.log(await searchFilter.find())
  return (
    <>
      <div className="uppercase h-full flex items-center justify-between md:hidden">
        <div className="">
          <div className="mt-12 flex flex-wrap justify-center items-center">
            {res.items.map((product) =>
              productNameFilter.length === 0 ||
              isWordInSentence(product.name) ? (
                <Link
                  href={"/" + product.slug}
                  key={product._id}
                  className="w-36 m-1"
                >
                  <div className="relative w-36 h-44 overflow-hidden">
                    <Image
                      src={
                        product.media?.mainMedia?.image?.url || "/product.png"
                      }
                      alt=""
                      fill
                      sizes="25vw"
                      className="absolute object-cover z-10 hover:opacity-0 transition-opacity ease duration-500"
                    />
                    {product.media?.items && (
                      <Image
                        src={
                          product.media?.items[1]?.image?.url || "/product.png"
                        }
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-70 text-center text-white">
                      <h3 className="text-xs font-semibold">{product.name}</h3>
                    </div>
                  </div>
                </Link>
              ) : null
            )}
            {searchParams?.cat || searchParams?.name ? (
              <Pagination
                currentPage={res.currentPage || 0}
                hasPrev={res.hasPrev()}
                hasNext={res.hasNext()}
              />
            ) : null}
          </div>
        </div>
        {/* 
        <div className="mt-8 flex gap-x-4 gap-y-8 justify-between flex-wrap">
          {res.items.map((product: products.Product) => (
            <>
              {productNameFilter.length === 0 ||
              isWordInSentence(product.name) ? (
                <Link
                  href={"/" + product.slug}
                  className="flex-shrink-0 w-40 sm:w-1/2 lg:w-1/4 xl:w-1/6"
                  key={product._id}
                >
                  <div className="relative w-full">
                    {product.ribbon && (
                      <div className="absolute top-0 left-0 bg-red-500 text-white px-1 py-0.5 rounded-tl-md z-20">
                        {product.ribbon}
                      </div>
                    )}
                    <div className="relative w-full h-60">
                      <Image
                        src={
                          product.media?.mainMedia?.image?.url || "/product.png"
                        }
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                      />
                      {product.media?.items && (
                        <Image
                          src={
                            product.media?.items[1]?.image?.url ||
                            "/product.png"
                          }
                          alt=""
                          fill
                          sizes="25vw"
                          className="absolute object-cover rounded-md"
                        />
                      )}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs">{product.name}</span>
                      <div className="h-[1px] bg-gray-100" />
                      {product.price?.price ===
                      product.price?.discountedPrice ? (
                        <h2 className="font-medium">₹{product.price?.price}</h2>
                      ) : (
                        <div className="flex items-center gap-2">
                          <h3 className="text-gray-500 line-through">
                            ₹{product.price?.price}
                          </h3>
                          <h2 className="font-medium">
                            ₹{product.price?.discountedPrice}
                          </h2>
                        </div>
                      )}
                      <div className="h-[1px] bg-gray-100" />
                    </div>
                    {product.additionalInfoSections && (
                      <div
                        className="text-xs text-gray mt-1"
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
                  <button className="rounded-xl ring-1 ring-lama text-lama w-max py-1 px-2 text-xs hover:bg-lama hover:text-white">
                    Add to Cart
                  </button>
                </Link>
              ) : (
                ""
              )}
            </>
          ))}
          {searchParams?.cat || searchParams?.name ? (
            <Pagination
              currentPage={res.currentPage || 0}
              hasPrev={res.hasPrev()}
              hasNext={res.hasNext()}
            />
          ) : null}
        </div>
         */}
      </div>
      {/* BIGGER SCREENS */}
      <div className="uppercase hidden md:flex items-center h-full">
        <div className="mt-12  gap-1  flex flex-wrap justify-center items-center">
          {res.items.map((product: products.Product) => (
            <>
              {productNameFilter.length == 0 ||
              isWordInSentence(product.name) ? (
                <Link href={"/" + product.slug} className="" key={product._id}>
                  <div className="relative w-72 h-80 overflow-hidden ">
                    {product.ribbon && (
                      <div className="absolute text-xs top-0 left-0 bg-green-800 text-white px-2 py-1   z-20">
                        {product.ribbon}
                      </div>
                    )}
                    <Image
                      src={
                        product.media?.mainMedia?.image?.url || "/product.png"
                      }
                      alt=""
                      fill
                      sizes="25vw"
                      className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    {product.media?.items && (
                      <Image
                        src={
                          product.media?.items[1]?.image?.url || "/product.png"
                        }
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover "
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-center text-white">
                      <h3 className="text-sm font-semibold">{product.name}</h3>
                      {/* <p className="text-md">${product.price}</p> */}
                    </div>
                    {/* <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      {product.price?.price ===
                      product.price?.discountedPrice ? (
                        <h2 className="font-medium ">
                          {" "}
                          ₹{product.price?.price}
                        </h2>
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
                    </div> */}
                  </div>
                </Link>
              ) : (
                ""
              )}
            </>
          ))}
          {searchParams?.cat || searchParams?.name ? (
            <Pagination
              currentPage={res.currentPage || 0}
              hasPrev={res.hasPrev()}
              hasNext={res.hasNext()}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
