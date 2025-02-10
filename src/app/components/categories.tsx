import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Products } from "../../../typings.d";
import Link from "next/link";

const Categories = async () => {
  const category: Products[] = await client.fetch(`*[_type=="categories"]{ 
    title,
    "slug": slug.current,
    image,
    products,
    category
  }`);

  return (
    <div className="px-4 md:px-10 lg:px-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[rgba(39,35,67,1)] mt-10">
        Top Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {category.map((category: Products, index: number) => (
          <div
            key={index}
            className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow"
          >
            <Link href={`/category/${category.slug}`}>
              <div>
                <Image
                  src={urlFor(category.image).url()}
                  alt={category.title}
                  height={424}
                  width={424}
                  className="h-auto w-full object-cover cursor-pointer group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                <div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
                  <h1 className="text-lg md:text-xl font-bold text-white">
                    {category.title}
                  </h1>
                  <p className="text-white/50 text-sm md:text-base mb-4">
                    {category.products} Products
                  </p>
                </div>
                <p className="text-sm md:text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-4 text-sm capitalize text-white">
                  See More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
