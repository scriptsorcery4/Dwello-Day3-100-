import React from 'react'
import { FaBed, FaLocationDot, FaPenRuler } from "react-icons/fa6";
import { Button } from '../ui/button';


function ResidencesCard({img, loc, price, bed, cub}) {
  return (
    <div className='rounded-[18px] flex flex-col overflow-hidden shadow-md select-none'>
        <img src={img} alt="" />
        <div className='bg-[#DDC7BB] py-[18px] px-[20px] flex flex-col'>
            <div className='flex gap-[5px] items-center'>
            <FaLocationDot />
            <p className='font-bold text-[20px] text-[#2B1B12]'>{loc}</p> 
            </div>
            <div className=' mt-3 flex gap-[55px] items-center'>
                <div className='flex gap-[5px] items-center'>
                    <div className='w-[25px] h-[25px] flex justify-center items-center bg-white rounded-sm'>
                        <FaBed size={18} className='text-[#4F3527]' />
                    </div>
                    <p className='font-semibold text-[18px] text-[#4F3527]'>{bed}</p>
                </div>
                <div className='flex gap-[5px] items-center'>
                    <div className='w-[25px] h-[25px] flex justify-center items-center bg-white rounded-sm'>
                        <FaPenRuler size={18} className='text-[#4F3527]' />
                    </div>
                    <p className='font-semibold text-[18px] text-[#4F3527]'>{cub}</p>
                </div>
            </div>
            <div className='flex justify-between items-end mt-6'>
                <Button>See More</Button>
                <p className='font-bold text-[22px] text-[#4F3527]'>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default ResidencesCard