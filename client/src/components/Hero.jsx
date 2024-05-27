import React from 'react'
import { Button } from './ui/button'
import hero from '../assets/hero.png'
import { Input } from './ui/input'

function Hero() {
  return (
    <>
    <div className='w-full h-[100vh] relative font-montserrat flex flex-col justify-center'>
        <div className='container flex flex-col'>
            <h1 className='font-extrabold text-[74px] leading-[120%] text-[#2B1B12]'>Find Your <br /> Dream Home</h1>
            <p className='w-[413px] font-bold text-[18px] leading-[160%] text-[#4F3527] mt-[32px] mb-[48px]'>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
            <div><Button>Sing up</Button></div>
        </div>
        
        <div className='absolute  top-0 right-[-30px] z-[-1]'>
            <img src={hero}  alt="" />
        </div>
        </div>
        
        <div className='max-w-[1070px] mx-auto px-[30px] py-[41px] bg-[#DDC7BB] rounded-[18px] flex gap-[24px]'>
        <Input placeholder="Location" />
        <Input placeholder="Type" />
        <Input placeholder="Price range" />
        <div className='ml-[10px]'><Button>Search</Button></div>
        </div>
    
    </>
  )
}

export default Hero