"use client";

import React, { useEffect, useState } from "react";
import { Products } from "../../../typings.d";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    zipCode: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const total = Math.max(subTotal - discount, 0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
    };

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success!",
            "Your order has been successfully placed.",
            "success"
          );
        } else {
          Swal.fire(
            "Error!",
            "Please fill in all the required fields.",
            "error"
          );
        }
      }
    });

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.error("Error in creating order:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href={"/Cart"}
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <ChevronRight />
            <span>Checkout</span>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt="image"
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-600">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p>$ {item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p className="text-xs font-medium">No items in cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                SubTotal: <span className="font-medium">${subTotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${subTotal.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Billing Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your First Name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">First Name is required</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Phone No.</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter your Contact No"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm">
                    Contact Number is required
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your Address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your City"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="Enter your Zip Code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {formErrors.zipCode && (
                  <p className="text-red-500 text-sm">Zip Code is required</p>
                )}
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
