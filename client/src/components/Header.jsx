import React from 'react'
import logo from '../assets/logo.png'
import { LuSearch, LuUser } from "react-icons/lu";
import { Button } from './ui/button';

const links = ['Home', 'Service', 'Agents', 'Contact']

function Header() {
  return (
    <div className='h-20 flex items-center font-montserrat fixed z-30 w-full bg-white shadow-sm'>
        <div className='container flex justify-between items-center'>
            <img  className="h-[29px]" src={logo} alt="" />
            <ul className='flex gap-[45px] font-bold text-[#2B1B12] items-center '>
                {links.map((link, i)=>(
                    <li key={i} className='hover:text-zinc-800 hover:bg-gray-100 px-2 py-0.5 rounded-md cursor-pointer transition-colors'>{link}</li>
                ))}
            </ul>
            <div className='flex gap-[45px] items-center'>
                <div className='flex gap-[32px] items-center'>
                    <LuSearch size={24} />
                    <LuUser  size={24} />
                </div>
                <Button>Sing up</Button>
            </div>
        </div>
    </div>
  )
}

export default Header