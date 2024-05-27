import React from 'react'

function StatsCard({img, title, des}) {
  return (
    <div className='py-[30px] px-[26px] bg-[#DDC7BB] rounded-[18px] font-montserrat shadow-lg'>
        <div className='bg-[#FBF5F1] rounded-[8px] p-[16px] fle items-center justify-center w-fit'>
            <img className='h-[52px]' src={img} alt="" />
        </div>
        <h2 className='mt-[21px] font-bold text-[18px] text-[#2B1B12]'>{title}</h2>
        <p className='leading-[130%] text-[#4F3527] w-[227px] mt-[10px]'>{des}</p>
    </div>
  )
}

export default StatsCard