import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="overflow-x-hidden mx-5">
      {/* Cards */}
      <div className="my-10 h-auto w-full flex flex-col  xl:flex-row justify-center items-center gap-5">
        {/* card-1 */}
        <div className="w-auto h-auto md:h-[478px] md:w-[650px] bg-[#007580] text-[#FFFFFF] px-10 py-5 mx-auto flex flex-col items-center justify-center">
          <div className="">
            <div className="">
              <h2 className="text-[32px] font-bold my-4">
                About Us - Comforty
              </h2>
              <p className="text-lg">
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort. Specializing in ergonomic
                design, premium materials, and modern aesthetics, we craft
                chairs that seamlessly blend style with functionality.
              </p>
            </div>
            <button className="h-[56px] w-[179px] bg-[rgba(249,249,249,0.15)] mt-20">
              View collection
            </button>
          </div>
        </div>
        {/* card-2 */}
        <div className="w-auto h-auto md:h-[478px] md:w-[650px]">
          <Image
            src="/about.png"
            alt="image"
            height={400}
            width={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* About */}
      <div className="my-20">
        <h2 className="text-[#272343] text-[32px] font-semibold text-center">
          What makes our Brand Different
        </h2>
        {/* Cards */}
        <div className="w-[1320px] h-[244px] text-[#007580] flex items-center justify-evenly my-10">
          {/* Card-1 */}
          <div className="w-[310px] h-[244px] bg-[#F9F9F9] flex items-center justify-center">
            <div className="h-[148px] w-[213px]  flex flex-col items-start justify-between">
              <Image src="/Delivery.png" alt="icon" height={24} width={24} />
              <h3 className="text-xl">Next day as standard</h3>
              <p className="text-base">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>

          {/* Card-2 */}
          <div className="w-[310px] h-[244px] bg-[#F9F9F9] flex items-center justify-center">
            <div className="h-[148px] w-[213px]  flex flex-col items-start justify-between">
              <Image src="/Delivery.png" alt="icon" height={24} width={24} />
              <h3 className="text-xl">Next day as standard</h3>
              <p className="text-base">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>

          {/* Card-3 */}
          <div className="w-[310px] h-[244px] bg-[#F9F9F9] flex items-center justify-center">
            <div className="h-[148px] w-[213px]  flex flex-col items-start justify-between">
              <Image src="/Delivery.png" alt="icon" height={24} width={24} />
              <h3 className="text-xl">Next day as standard</h3>
              <p className="text-base">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>

          {/* Card-4 */}
          <div className="w-[310px] h-[244px] bg-[#F9F9F9] flex items-center justify-center">
            <div className="h-[148px] w-[213px]  flex flex-col items-start justify-between">
              <Image src="/Delivery.png" alt="icon" height={24} width={24} />
              <h3 className="text-xl">Next day as standard</h3>
              <p className="text-base">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="">
        <h2 className="text-[32px] font-semibold text-[#272343]">
          Our Popular Products
        </h2>
        <div className="grid grid-1 sm:grid-3 xl:grid-cols-4 gap-4 my-8 text-[#2A254B]">
          <div className="col-span-1 sm:col-span-2 h-auto w-full">
            <Image
              src="/about-product-1.png"
              alt="image"
              height={370}
              width={600}
              className="xl:w-[630px] sm:w-3/4 md:w-2/3 lg:w-1/2  xl:h-[375px] object-cover mx-auto"
            />
            <h3 className="text-xl mt-5 text-center">The Poplar suede sofa</h3>
            <p className="text-lg text-center">$99.00</p>
          </div>

          <div className="w-full xl:w-[620px] grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto xl:mx-0">
            <div className="h-auto w-full max-w-[305px] mx-auto">
              <Image
                src="/about-product-2.png"
                alt="image"
                height={370}
                width={300}
                className="w-full h-auto xl:h-[375px] xl:w-[305px] object-cover"
              />
              <h3 className="text-xl mt-5 text-center">The Dandy Chair</h3>
              <p className="text-lg text-center">$99.00</p>
            </div>

            <div className="h-auto w-full max-w-[305px] mx-auto">
              <Image
                src="/about-product-3.png"
                alt="image"
                height={370}
                width={300}
                className="w-full h-auto  xl:h-[375px] xl:w-[305px] object-cover"
              />
              <h3 className="text-xl mt-5 text-center">The Dandy Chair</h3>
              <p className="text-lg text-center">$99.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
