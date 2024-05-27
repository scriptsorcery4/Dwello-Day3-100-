import React from 'react'
import { FaStar } from "react-icons/fa6";


function AboutCard({img, author, con, rat}) {
  return (
    <div className='flex flex-col font-montserrat rounded-[18px] overflow-hidden shadow-sm select-none'>
        <img className='w-[382px]' src={img} alt="" />
        <div className='px-[24px] py-[28px] flex flex-col gap-[12px] bg-[#DDC7BB]'>
            <div className='flex justify-between items-end'>
                <div className='flex gap-[6px]'>
                    <img className='rounded-full w-[58px]' src={author.img} alt="" />
                    <div className='flex flex-col'>
                        <h4 className='font-bold text-[20px] text-[#2B1B12]'>{author.name}</h4>
                        <p className='font-semibold text-[16px] text-[#2B1B12]'>{author.city}</p>
                    </div>
                </div>
                <div className='mb-2 h-fit px-[5px] flex gap-[6px] items-center bg-white rounded-md'>
                    <FaStar className='text-[#FFC71E]'/>
                    <p className='font-semibold text-[16px]'>{rat}</p>
                </div>
            </div>
            <p className='w-[334px] text-[16px] leading-[130%] text-[#4F3527]'>{con}</p>
        </div>
    </div>
  )
}

export default AboutCard