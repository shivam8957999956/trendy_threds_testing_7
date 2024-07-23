import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const SearchByMood = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <>
      <div className="h-full flex items-center justify-between md:hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 p-4 w-max">
          {cats.items.map((item) => (
          <>
            {item.name?.substring(0, 6).toLowerCase() === "legacy" ? (
              <Link href={`/list?cat=${item.slug}`} className="" key={item._id}>
                <div className="relative w-40 h-60 overflow-hidden shadow-lg">
                  <Image
                    src={item.media?.mainMedia?.image?.url || "cat.png"}
                    alt={"item.name"}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4">
                    <h3 className="text-3xl font-semibold text-center text-white">
                      {item.name.substring(7)}
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
      <div className="hidden md:flex items-center justify-center gap-8 h-full">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 p-4">
          {cats.items.map((item) => (
          <>
            {item.name?.substring(0, 6).toLowerCase() === "legacy" ? (
              <Link href={`/list?cat=${item.slug}`} className="" key={item._id}>
                <div className="relative w-64 h-80 overflow-hidden shadow-lg">
                  <Image
                    src={item.media?.mainMedia?.image?.url || "cat.png"}
                    alt={"item.name"}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4">
                    <h3 className="text-3xl font-semibold text-center text-white">
                      {item.name.substring(7)}
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
      {/* <div className="mt-10 flex flex-wrap justify-center items-center gap-3 p-4">
        {cats.items.map((item) => (
          <>
            {item.name?.substring(0, 6).toLowerCase() === "legacy" ? (
              <Link href={`/list?cat=${item.slug}`} className="" key={item._id}>
                <div className="relative w-64 h-80 overflow-hidden shadow-lg">
                  <Image
                    src={item.media?.mainMedia?.image?.url || "cat.png"}
                    alt={"item.name"}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4">
                    <h3 className="text-3xl font-semibold text-center text-white">
                      {item.name.substring(7)}
                    </h3>
                  </div>
                </div>
              </Link>
            ) : (
              ""
            )}
          </>
        ))}
      </div> */}
    </>
   
  );
};

export default SearchByMood;
