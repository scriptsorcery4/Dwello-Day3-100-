import React from 'react'
import img from '../assets/bef.png'
import BenefitCard from './custom/BenefitCard'

function Benefit() {
  return (
    <div className='py-[130px]'>
        <div className='container flex justify-between items-center'>
            <img className='w-[48%] shadow-xl rounded-[18px]' src={img} alt="" />
        
        <div className='flex flex-col '>
            <h2 className='w-[514px] font-extrabold leading-[140%] text-[40px]'>We Help You To Find Your Dream Home</h2>
            <p className='text-[18px] font-bold leading-[160%] text-[#4F3527] mt-[32px] mb-[42px] w-[514px]'>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
            <div className='flex justify-between'>
                <BenefitCard title='8K+' des='Houses Available'/>
                <BenefitCard title='6K+' des='Houses Solde'/>
                <BenefitCard title='2K+' des='Trusted Agents'/>
            </div>
        </div>
 
        </div>
    </div>
  )
}

export default Benefit