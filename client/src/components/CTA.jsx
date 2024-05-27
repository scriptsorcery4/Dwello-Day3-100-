import React from 'react'
import icon from '../assets/icon.png'
import { Input } from './ui/input'
import { Button } from './ui/button'

function CTA() {
  return (
    <div className='py-[100px]'>
        <div className='container flex flex-col items-center gap-[40px]'>
            <h2 className='font-extrabold text-[40px] leading-[140%] text-[#2B1B12] text-center'>Do You Have Any Questions? <br /> Get Help From Us</h2>
            <div className='flex gap-[65px]'>
                <div className='flex gap-[10px]'>
                    <img className='w-[26px]' src={icon} alt="" />
                    <p className='font-bold text-[18px] text-[#543E32]'>Chat live with our support team</p>
                </div>
                <div className='flex gap-[10px]'>
                    <img className='w-[26px]' src={icon} alt="" />
                    <p className='font-bold text-[18px] text-[#543E32]'>Browse our FAQ</p>
                </div>
            </div>
            <div className='flex gap-[10px] justify-center items-stretch'>
                <Input placeholder='Enter your email address...' className='w-[505px] ' />
                <Button>Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default CTA