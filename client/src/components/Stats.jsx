import React from 'react'
import StatsCard from './custom/StatsCard'
import img1 from '../assets/s1.png'
import img2 from '../assets/s2.png'
import img3 from '../assets/s3.png'
import img4 from '../assets/s4.png'

function Stats() {
  return (
    <div className='py-[30px]'>
        <div className='container flex flex-col gap-[40px] items-center font-montserrat'>
           <div  className='flex flex-col text-center gap-[10px]'>
                <h2 className='font-extrabold text-[40px] leading-[140%]'>Why Choose Us</h2>
                <p className='w-[590px] font-bold text-[16px] text-[#4F3527] leading-[160%]'>Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>
           </div>
           <div className='flex justify-between items-center w-full'>
                <StatsCard img={img1} title='Expert Guidance' des="Benefit from our team's seasoned expertise for a smooth buying experience" />
                <StatsCard img={img2} title='Personalized Service' des="Our services adapt to your unique needs, making your journey stress-free" />
                <StatsCard img={img3} title='Transparent Process' des='Stay informed with our clear and honest approach to buying your home' />
                <StatsCard img={img4} title='Exceptional Support' des='Providing peace of mind with our responsive and attentive customer service' />
           </div>
        </div>
    </div>
  )
}

export default Stats