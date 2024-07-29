import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const NewFeaturedProduct = async ({
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
    <div className="mt-8 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <>
          {productNameFilter.length == 0 || isWordInSentence(product.name) ? (
            <Link
              href={"/" + product.slug}
              className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
              key={product._id}
            >
              <div className="relative w-full">
                {product.ribbon && (
                  <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tl-md  z-20">
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
  );
};

export default NewFeaturedProduct;
