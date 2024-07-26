import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 10;

const NewProductList = async ({
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
    <div className="px-2 py-2">
      <div className="h-full flex md:hidden">
        {" "}
        <div className="">
          <div className="mt-12 flex flex-wrap items-center justify-between">
            {res.items.map((product) =>
              productNameFilter.length === 0 ||
              isWordInSentence(product.name) ? (
                <Link
                  href={"/" + product.slug}
                  key={product._id}
                  className="w-36 m-1"
                >
                  <div className="relative w-36 h-24 overflow-hidden">
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
                  </div>
                  <h3 className="text-xs font-semibold">{product.name}</h3>
                  <div className="h-[1px] bg-gray-100" />
                  <div className="text-xs mt-2 mb-2 flex flex-col">
                    {product.price?.price === product.price?.discountedPrice ? (
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
                    <button className="rounded-xl mt-2 ring-1 ring-lama text-lama w-max py-0.5 px-1 text-xxs hover:bg-lama hover:text-white">
                      Add to Cart
                    </button>
                  </div>
                  <div className="h-[1px] bg-gray-100" />
                  {product.additionalInfoSections && (
                    <div
                      className="text-sm text-gray-500 mt-1"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          product.additionalInfoSections.find(
                            (section: any) => section.title === "shortDesc"
                          )?.description || ""
                        ),
                      }}
                    ></div>
                  )}
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
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex  w-full h-full">
        <div className="mt-12 gap-1 flex items-center justify-between flex-wrap ">
          {res.items.map((product: products.Product) => (
            <>
              {productNameFilter.length == 0 ||
              isWordInSentence(product.name) ? (
                <Link href={"/" + product.slug} key={product._id}>
                  <div className="relative w-72 h-64 overflow-hidden ">
                    {product.ribbon && (
                      <div className="absolute text-xs top-0 left-0 bg-green-800 text-white px-2 py-1 z-20">
                        {product.ribbon}
                      </div>
                    )}
                    <div className="relative w-full h-full">
                      <Image
                        src={
                          product.media?.mainMedia?.image?.url || "/product.png"
                        }
                        alt=""
                        layout="fill"
                        className="absolute inset-0 object-cover w-full h-full z-10 hover:opacity-0 transition-opacity ease duration-500"
                      />
                      {product.media?.items && (
                        <Image
                          src={
                            product.media?.items[1]?.image?.url ||
                            "/product.png"
                          }
                          alt=""
                          layout="fill"
                          className="absolute inset-0 object-cover w-full h-full"
                        />
                      )}
                    </div>

                    {/* <p className="text-md">${product.price}</p> */}
                  </div>
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                  <div className="h-[1px] bg-gray-100" />
                  <div className="mt-2 mb-2 flex flex-row justify-between">
                    {product.price?.price === product.price?.discountedPrice ? (
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
                    <button className="rounded-xl ring-1 ring-lama text-lama w-max mr-2 py-1 px-2 text-xs hover:bg-lama hover:text-white">
                      Add to Cart
                    </button>
                  </div>
                  <div className="h-[1px] bg-gray-100" />
                  {product.additionalInfoSections && (
                    <div
                      className="text-sm text-gray-500 mt-1"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          product.additionalInfoSections.find(
                            (section: any) => section.title === "shortDesc"
                          )?.description || ""
                        ),
                      }}
                    ></div>
                  )}
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
    </div>
  );
};

export default NewProductList;
