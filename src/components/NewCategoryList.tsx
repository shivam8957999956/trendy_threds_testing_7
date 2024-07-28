import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const NewCategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();
  return (
    <div className="mt-10 flex flex-wrap text-center">
      <div className="mt-6 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {cats.items.map((item) => (
          <>
            {item.name?.substring(0, 6).toLowerCase() !== "legacy" ? (
              <Link
              href={`/list?cat=${item.slug}`}
              className="w-full mt-6 flex-shrink-0 sm:w-[45%] lg:w-[22%]"
              key={item._id}
            >
              <div className="relative bg-slate-100 w-full h-80 rounded-lg">
                <Image
                  src={item.media?.mainMedia?.image?.url || "cat.png"}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <h1 className="uppercase mt-4 font-light font-sans text-xl tracking-wide">
                {item.name}
              </h1>
            </Link>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default NewCategoryList;
