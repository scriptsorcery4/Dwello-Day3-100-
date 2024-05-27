import React from 'react'
import ResidencesCard from './custom/ResidencesCard'
import img1 from '../assets/r1.png'
import img2 from '../assets/r2.png'
import img3 from '../assets/r3.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Residences() {
  return (
    <div className='py-[100px] font-montserrat'>
        <div className='container flex flex-col gap-[50px] items-center'>
            <h2 className='font-extrabold text-[40px] leading-[140%] text-[#2B1B12]'>Our Popular Residences</h2>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <ResidencesCard img={item.img} loc={item.loc} bed={item.bed} cub={item.cub} price={item.price} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
        </div>
    </div>
  )
}

export default Residences


const items = [
  {'img': img1, loc: 'San Francisco, California', bed:'4 Rooms', cub:'3,500 sq ft', price:'$2,500,000'  },
  {'img': img2, loc: 'Beverly Hills, California', bed:'3 Rooms', cub:'1,500 sq ft', price:'$850,000'  },
  {'img': img3, loc: 'Palo Alto, California', bed:'6 Rooms', cub:'3,500 sq ft', price:'$3,700,000'  },
  {'img': img1, loc: 'San Francisco, California', bed:'4 Rooms', cub:'3,500 sq ft', price:'$2,500,000'  },
  {'img': img2, loc: 'Beverly Hills, California', bed:'3 Rooms', cub:'1,500 sq ft', price:'$850,000'  },
  {'img': img3, loc: 'Palo Alto, California', bed:'6 Rooms', cub:'3,500 sq ft', price:'$3,700,000'  },
]