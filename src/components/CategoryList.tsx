import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <>
      <div className="h-full flex items-center justify-between md:hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 p-4 w-max">
            {cats.items.map(
              (item) =>
                item.name?.substring(0, 6).toLowerCase() !== "legacy" && (
                  <Link
                    href={`/list?cat=${item.slug}`}
                    key={item._id}
                    className=""
                  >
                    <div className="relative w-40 h-60 overflow-hidden shadow-lg">
                      <Image
                        src={item.media?.mainMedia?.image?.url || "cat.png"}
                        alt={`${item.name}`}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black opacity-10"></div>
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-2">
                        <h3 className="text-lg font-semibold text-center text-white">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-8 h-full">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 p-4">
          {cats.items.map((item) => (
            <>
              {item.name?.substring(0, 6).toLowerCase() !== "legacy" ? (
                <Link
                  href={`/list?cat=${item.slug}`}
                  className=""
                  key={item._id}
                >
                  <div className="relative w-64 h-80 overflow-hidden shadow-lg">
                    <Image
                      src={item.media?.mainMedia?.image?.url || "cat.png"}
                      alt={`${item.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4">
                      <h3 className="text-2xl font-semibold text-center text-white">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
      </div>
    </>
    // <div className=" px-4 overflow-x-scroll scrollbar-hide text-center">
    //   <div className="flex gap-4 md:gap-8">
    //     {cats.items.map((item) => (
    //       <Link
    //         href={`/list?cat=${item.slug}`}
    //         className="flex-shrink-0 w-40 sm:w-1/2 lg:w-1/4 xl:w-1/6"
    //         key={item._id}
    //       >
    //         {/* <div className="relative bg-slate-100 w-full h-40 rounded-lg">
    //           <Image
    //             src={item.media?.mainMedia?.image?.url || "cat.png"}
    //             alt=""
    //             fill
    //             sizes="20vw"
    //             className="object-cover rounded-lg"
    //           />
    //         </div> */}
    //         <h1 className="mt-8 font-light text-xl tracking-wide">
    //           {item.name}
    //         </h1>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  );
};

export default CategoryList;
