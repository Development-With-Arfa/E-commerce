import Image from 'next/image'
import React from 'react'

const HeroSec = () => {
  return (
    <div className='md:h-[600px] lg:h-[700px] max-w-[1321px] max-h-[800px] bg-[rgba(240,242,243,1)] mx-10 py-5 md:py-0 md:px-7 lg:mx-auto rounded-3xl flex md:flex-row flex-col justify-center items-center'>
      
      <div className=' h-full flex flex-col justify-center items-center md:items-left'>
        <p className='text-[14px] text-[rgba(39,35,67,1) md:self-start'>WELCOME TO CHAIRY</p>
        <h1 className='w-auto max-w-[557px] md:h-[198px] font-semibold md:font-bold text-3xl md:text-6xl text-[rgba(39,35,67,1)] my-6 text-center md:text-left'>Best Furniture Collection For Your Interior</h1>
        <button className='text-white my-5 md:my-20 h-[52px] w-[172px] hover:bg-[#007580] bg-[rgba(2,159,174,1)] rounded-[8px] md:self-start flex justify-center items-center gap-5'>
          <p>Shop Now</p>
          <Image
            src="/arrow.png"
            alt="arrow"
            height={9}
            width={16}
            className=''
          />
        </button>
      </div>
      
      <div className=''>
        <Image
          src="/heroImg.png"
          alt=""
          height={550}
          width={434}
          className='mx-5 md:h-[550px] md:w-[434px] h-[350] w-[250] my-10 md:my-0'
        />
      </div>
    </div>
  )
}

export default HeroSec