"use client"; // Ensure this is a Client Component

import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";
import { LuShoppingCart } from "react-icons/lu";
import { Products } from "../../../typings.d";

export default function AddToCartButton({ product }: { product: Products }) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  return (
    <button onClick={handleAddToCart}>
      <LuShoppingCart />
    </button>
  );
}
