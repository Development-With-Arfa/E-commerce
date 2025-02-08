"use client";

import React, { useEffect, useState } from "react";
import { Products } from "../../../typings.d";
import { getCartItems, removeFromCart, UpdateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            removeFromCart(id);
            setCartItems(getCartItems())
            Swal.fire("Removed!", "Your Item has been removed.", "success");
        }
    })
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    UpdateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  }

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product)
        handleQuantityChange(id, product.inventory + 1)
  }

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1)
        handleQuantityChange(id, product.inventory - 1)
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) =>  total + item.price * item.inventory, 0)
  }

  const router = useRouter();

  const handleCheckout = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before proceeding to checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed",
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire("Success!", "Your order has been placed.", "success");
        router.push("/checkout")
        setCartItems([])
      }
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your Cart is empty.</p>
      ): (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4"  
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt="image"
                    className="w-16 h-16 object-cover rounded-lg"
                    width={500}
                    height={500}
                  />
                )}
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    > - </button>
                    <span>{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    > + </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >Remove</button>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 texr-white py-2 mt-4 rounded hover:bg-blue-700"
            >Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
