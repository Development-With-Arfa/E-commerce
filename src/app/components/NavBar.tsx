import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-20 bg-[rgba(240,242,243,1)] w-auto max-w-[1920px] grid grid-cols-2  items-center">
      <div className="flex gap-2 mx-auto">
        <Image src="/logo.png" alt="logo" height={40} width={40} className="" />
        <h3 className="text-[26px] font-medium">Comforty</h3>
      </div>
      <Link href="/Cart">
        <div className="h-[44px] w-[120px] cursor-pointer bg-white rounded-lg mx-auto flex justify-center items-center gap-3">
          <Image src="/cart.png" alt="cart" height={22} width={22} />

          <h3 className="text-[12px] font-medium">Cart</h3>
          <p className="h-5 w-5 rounded-full flex items-center justify-center bg-[rgba(0,117,128,1)] text-[10px] font-medium text-[rgba(255,255,255,1)]">
            2
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
