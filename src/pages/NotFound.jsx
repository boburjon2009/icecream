import React from 'react'
import { ArrowBigLeft, ArrowLeft, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className='w-[100%]  bg-gradient-to-r from-pink-100 via-white to-blue-100 h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-6xl font-bold'>    404</h1>
      <h1 className='text-2xl'>Sorry! The Page Not Found ;( </h1>
      <p className='text-[#646464] text-center p-3'>Lorem ipsum dolor sit amet, consec tse tur adipiscing elit, sed do eiusmod <br />
        tempor incididunt ut labore</p>
      
        <Link to={'/'}>
          <button  className='bg-[#F83D8E] w-[100%] rounded-full flex py-3 px-3'><ArrowLeft />
        Back to Home</button>
        </Link>                 
    </div>
  )
}

export default NotFound