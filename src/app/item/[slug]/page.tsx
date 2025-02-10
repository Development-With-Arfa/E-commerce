import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";
import AddToCartButton from "@/app/components/addToCart";

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type=='products' && slug.current == "${slug}"]{
        title, description, inventory, tags, image, price, priceWithoutDiscount, badge
  }[0]`;
  const products = await client.fetch(query);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${products.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(products);
  };

  return (
    <div className="flex">
      <div className="my-8">
        <Image
          src={urlFor(products.image).url()}
          alt={products.title}
          height={500}
          width={600}
          className="h-[500px] w-[600px] object-cover rounded-lg mx-10"
        />
      </div>
      <div className="md:w-1/2 w-full my-10">
        <h2 className="h-auto w-[541px] text-6xl font-bold text-[rgba(39,35,67,1)]">
          {products.title}
        </h2>
        <p className="w-[543px] h-auto font-normal rounded-full text-[rgba(39,35,67,1)] text-[22px]">
          {products.description}
        </p>
        <div className="flex gap-5 items-center justify-start my-5 ">
          {/* plus */}
          <button className="h-10 w-14 rounded-full bg-[rgba(2,159,174,1)] flex items-center justify-center ">
            <FaPlus className="text-white" />
          </button>
          <p>1</p>
          {/* Minus */}
          <button className="h-10 w-14 rounded-full bg-[rgba(2,159,174,1)] flex items-center justify-center ">
            <FaMinus className="text-white" />
          </button>
        </div>
        <div className="h-[1px] w-[521px] mx-auto my-8 bg-[rgba(217,217,217,1)]"></div>
        <div className="h-[44px] w-full flex gap-12 items-center justify-start">
          <p className="my-1 font-bold line-through">
            {products.priceWithoutDiscount}.00 USD
          </p>
          <h4 className="font-bold my-7">${products.price}.00 USD</h4>
          <div className="h-[40px] w-[190px] mx-auto bg-[rgba(2,159,174,1)] flex items-center justify-center gap-4 text-white rounded-lg my-8">
            <AddToCartButton product={products} />
            <p>Add to Cart</p>
          </div>
        </div>
        <button className="h-[40px] w-[600px] mx-auto bg-[rgba(2,159,174,1)] flex items-center justify-center gap-4 text-white rounded-lg my-14">
          <FaHeart className="text-white" />
          <p>Buy Now</p>
        </button>
      </div>
    </div>
  );
}
