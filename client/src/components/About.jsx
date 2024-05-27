import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import img1 from '../assets/a1.png';
import img2 from '../assets/a2.png';
import img3 from '../assets/a3.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import AboutCard from './custom/AboutCard';

const items = [
    {
        img: img1,
        rat: '5.0',
        author: {
            img: p1,
            name: 'Sarah Nguyen',
            city: 'San Francisco'
        },
        con: "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
    },
    {
        img: img2,
        rat: '4.5',
        author: {
            img: p2,
            name: 'Michael Rodriguez',
            city: 'San Diego'
        },
        con: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!"
    },
    {
        img: img3,
        rat: '3.5',
        author: {
            img: p3,
            name: 'Emily Johnson',
            city: 'Los Angeles'
        },
        con: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!"
    },
    {
        img: img1,
        rat: '5.0',
        author: {
            img: p1,
            name: 'Sarah Nguyen',
            city: 'San Francisco'
        },
        con: "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
    },
    {
        img: img2,
        rat: '4.5',
        author: {
            img: p2,
            name: 'Michael Rodriguez',
            city: 'San Diego'
        },
        con: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!"
    },
    {
        img: img3,
        rat: '3.5',
        author: {
            img: p3,
            name: 'Emily Johnson',
            city: 'Los Angeles'
        },
        con: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!"
    },
];

function About() {
    return (
        <div className='py-[100px] bg-[#FEF7F2]'>
            <div className='container flex flex-col gap-[50px] items-center'>
                <h2 className='font-extrabold text-[40px] leading-[140%] text-[#2B1B12] text-center'>
                    What People Say <br /> About Dwello
                </h2>
                <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent>
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <AboutCard img={item.img} author={item.author} rat={item.rat} con={item.con} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='mt-8 flex justify-center gap-2'>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>  
                </Carousel>
            </div>
        </div>
    );
}

export default About;
