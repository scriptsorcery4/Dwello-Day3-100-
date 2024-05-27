import React from 'react'

function BenefitCard({title, des}) {
  return (
    <div className='flex flex-col text-[#4F3527] font-montserrat'>
        <h2 className='font-bold text-[40px]'>{title}</h2>
        <p className='font-semibold text-[15px] mt-[-10px]'>{des}</p>
    </div>
  )
}

export default BenefitCard