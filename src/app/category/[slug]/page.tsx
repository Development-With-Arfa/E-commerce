import AddToCartButton from "@/app/components/addToCart";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Products } from "../../../../typings.d";
import Link from "next/link";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "products" && category->slug.current == '${slug}']{
        title, image, price, "slug": slug.current, priceWithoutDiscount
  }`;

  const products = await client.fetch(query);

  // If no products are found, show a message
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-red-500">
        No products found for this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center mx-auto">
      {products.map((product: Products, index: number) => (
        <div
          key={index}
          className="h-[500px] w-auto min-w-[312px] bg-white pt-10 overflow-hidden"
        >
          {product.image ? (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              height={312}
              width={312}
              className="h-[312px] w-auto max-w-[1321px] min-w-[312px] mx-auto object-cover"
            />
          ) : (
            <div className="h-[312px] w-[312px] bg-gray-200 flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}

          <div className="h-[70px] my-3 flex gap-3 items-center justify-around mx-auto sm:mx-14">
            <div className="w-auto my-3">
              <h1 className="text-justify text-4 font-normal text-[rgba(0,117,128,1)]">
                {product.title}
              </h1>
              <div className="flex gap-2">
                <p className="font-bold text-lg">${product.price}</p>
                <p className="text-sm my-1 text-[rgba(154,156,170,1)] line-through">
                  ${product.priceWithoutDiscount}
                </p>
              </div>
            </div>
            <div className="h-[44px] w-[44px] bg-[rgba(240,242,243,1)] rounded-lg flex items-center justify-center hover:bg-[rgba(2,159,174,1)] cursor-pointer">
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
