import React from 'react'
import section from "../../assets/haley-phelps-di1AkYsGshw-unsplash.jpg"
import Image from "next/image"
import { Inter } from 'next/font/google'
const Picsection = () => {
  return (
    <div className='navbar flex fixed top-0 left-0 w-full bg-transparent '>
        <Image src={section} 
         alt="Your Alt Text"
         width={4000}  // Set the width of the image
         height={200}  // Set the height of the image
        />
       <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
        <h1 className=' mme text-White  '>Materials</h1>
      </div>

    </div>
  )
}

export default Picsection