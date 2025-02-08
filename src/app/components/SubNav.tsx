"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";


const SubNav = () => {
  return (
    <div className="border-b-2 w-auto max-w-[1920px] h-[74px] grid grid-cols-2 mx-4">
      <div className="sm:flex md:hidden justify-center items-center">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/hamburger.png"
              alt=""
              height={40}
              width={40}
              className="my-5"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <ul className="h-full flex flex-col justify-center items-center gap-12 my-12 text-[rgba(99,98,112,1)] text-[14px]">
                  <Link href={"/"}>
                    <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer mx-auto">
                      Home
                    </li>
                  </Link>
                  <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer mx-auto">
                    Shop
                  </li>
                  <Link href="/EveryProduct">
                    <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer mx-auto">
                      Product
                    </li>
                  </Link>
                  <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer mx-auto">
                    Pages
                  </li>
                  <li>
                    <link href="/About" className="hover:text-[rgba(0,117,128,1)] cursor-pointer mx-auto">About</link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="md:flex justify-center items-center hidden">
        <ul className="flex gap-4 text-[rgba(99,98,112,1)] text-[14px] ">
          <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer">
            Home
          </li>
          <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer">
            Shop
          </li>
          <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer">
            Product
          </li>
          <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer">
            Pages
          </li>
          <li className="hover:text-[rgba(0,117,128,1)] cursor-pointer">
            About
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-[rgba(99,98,112,1)] text-[14px]">
          Contact:{" "}
          <span className="text-[rgba(39,35,67,1)] text-[14px]">
            (808) 555-0111
          </span>
        </p>
      </div>
    </div>
  );
};

export default SubNav;
