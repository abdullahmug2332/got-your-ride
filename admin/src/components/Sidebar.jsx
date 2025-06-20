import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import img1 from "../assets/logo.svg"
import dashboard from "../assets/dashboardicon.png"
import booking from "../assets/bookingicon.png"
import listing from "../assets/listingicon.png"
import tour from "../assets/touricon.png"
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";

export default function Sidebar() {
  const toggle = useSelector((state) => state.toggle.value);
  return (
    <section className={`${toggle == true ? "translate-x-[0px]" : "-translate-x-[100%]"} w-[40%]  sm:w-[30%] md:w-[20%] lg:w-[18%]  xl:w-[15%] 2xl:w-[13%]  h-[100vh] duration-500  bg-[#f0582a] fixed top-0 z-[20]`}>
      <img src={img1} className='w-[70px] ml-[30px] mt-[10px] hover:scale-[1.06] duration-300 cursor-pointer' />
      <div className='flex flex-col ml-[30px] gap-[20px] mt-[90px]'>
        <Link to={"/dashboard"} className='flex items-center gap-[10px] hover:scale-[1.06] duration-300 cursor-pointer'>
          <img src={dashboard} className='w-[17px]' />
          <div className='text-white text-[16px] font-semibold '>Dashboard</div>
        </Link>
        <Link to={"/booking"} className='flex items-center gap-[10px] hover:scale-[1.06] duration-300 cursor-pointer'>
          <img src={booking} className='w-[17px]' />
          <div className='text-white text-[16px] font-semibold '>My Booking</div>
        </Link>
        <Link to={"/edithome"} className='flex items-center gap-[10px] hover:scale-[1.06] duration-300 cursor-pointer'>
          <IoHome className='w-[17px] text-white' />
          <div className='text-white text-[16px] font-semibold '>Home</div>
        </Link>
        <Link to={"/editabout"} className='flex items-center gap-[10px] hover:scale-[1.06] duration-300 cursor-pointer'>
          <FaInfoCircle className='w-[17px] text-white' />
          <div className='text-white text-[16px] font-semibold '>About</div>
        </Link>
        <Link to={"/editcontact"} className='flex items-center gap-[10px] hover:scale-[1.06] duration-300 cursor-pointer'>
          <MdContactPhone className='w-[17px] text-white' />
          <div className='text-white text-[16px] font-semibold '>Contact</div>
        </Link>
        <Link to={"/editdestinations"} className='flex items-center gap-[10px] hover:scale-[1.06] duration-300 cursor-pointer'>
          <FaMountainSun className='w-[17px] text-white' />
          <div className='text-white text-[16px] font-semibold '>Destinations</div>
        </Link>
      </div>
    </section>
  )
}
