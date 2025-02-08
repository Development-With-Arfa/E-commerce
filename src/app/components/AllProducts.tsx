"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Products } from "../../../typings.d";
import { addToCart } from "../actions/actions";
import { featuredProducts, ourProducts } from "@/sanity/lib/queries";
import AddToCartButton from "./addToCart";

const AllProducts = () => {
  const [product, setProduct] = useState<Products[]>([]);
  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Products[] = await client.fetch(ourProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  return (
    <>
      <h1 className="text-2xl lg:text-4xl font-bold text-left mt-10 mx-7">
        Our Products
      </h1>

      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center mx-auto">
        {product.map((product) => (
          <div
            key={product._id}
            className="h-[500px] w-auto min-w-[312px] bg-white pt-10 overflow-hidden "
          >
            <Link
              href={`/item/${product.slug?.current}`}
              className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
            >
              <div className="relative">
                <p className="text-white absolute left-5 top-3">
                  {product.badge}
                </p>
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  height={312}
                  width={312}
                  className="h-[312px] w-auto max-w-[1321px] min-w-[312px] mx-auto object-cover"
                />
              </div>
            </Link>
            <div className="h-[70px] my-3 flex gap-3 items-center justify-around mx-auto sm:mx-14">
              <div className="w-auto  my-3">
                <h1 className="text-justify text-4 font-normal flex flex-wrap justify-self-left text-[rgba(0,117,128,1)]">
                  {product.title}
                </h1>
                <div className="flex gap-2">
                  <p className="font-bold text-lg">${product.price}</p>
                  <p className="text-sm my-1 text-[rgba(154,156,170,1)] line-through">
                    {product.priceWithoutDiscount}
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
    </>
  );
};
export default AllProducts;


