import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useSelector, useDispatch } from 'react-redux';
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import PageViewChart from '../components/PageViewChart';
import icon21 from "../assets/icon21.png"
import icon22 from "../assets/icon22.png"
import icon23 from "../assets/icon23.png"
import icon24 from "../assets/icon24.png"
import icon25 from "../assets/icon25.png"
import icon26 from "../assets/icon26.png"
import icon27 from "../assets/icon27.png"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Admin() {
  const navigate = useNavigate()
  const toggle = useSelector((state) => state.toggle.value);
  const token = localStorage.getItem("token");
  const [totalUsers, setTotalUsers] = useState("")
  const [totalBookings, setTotalBookings] = useState("")
  const [totalPrice, setTotalPrice] = useState("")

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/bookings/stats", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        const data = await res.json();

        setTotalUsers(data.totalUsers);
        setTotalBookings(data.totalBookings);
        setTotalPrice(parseInt(data.totalPrice));

      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();

  }, [token, toggle, navigate])
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={`${toggle == false ? "w-full" : "md:w-[80%] lg:w-[82%] xl:w-[85%] 2xl:w-[87%]"} duration-500  font-semibold ml-auto py-[20px] px-[30px] mt-[80px]`}>
        <p className='text-[32px]'>Dashboard</p>
        <p className='text-[16px] font-medium' >Discover Japan: Where Tradition Meets Adventure.</p>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 my-[20px] gap-[15px] 2xl:gap-[25px]  flex-wrap'>
          <div className='flex items-center justify-start gap-[10px] border py-[10px] pl-[10px] md:pl-[20px] lg:pl-[5px] xl:pl-[19px] w-full rounded-[5px] hover:scale-[1.03] duration-500 hover:cursor-pointer'>
            <img src={icon3} className='w-[54px]' />
            <div className='flex flex-col items-start justify-center '>
              <p className='text-[13px] sm:text-[16px] font-semibold'>Total Users</p>
              <p className='text-[17px] sm:text-[21px] font-bold h-[25px]'>{totalUsers}</p>
            </div>
          </div>
          <div className='flex items-center justify-start gap-[10px]  border py-[10px] pl-[10px] md:pl-[20px] lg:pl-[5px] xl:pl-[19px] w-full rounded-[5px] hover:scale-[1.03] duration-500 hover:cursor-pointer'>
            <img src={icon1} className='w-[54px]' />
            <div className='flex flex-col items-start justify-center '>
              <p className='text-[13px] sm:text-[16px] font-semibold '>Total Bookings</p>
              <p className='text-[17px] sm:text-[21px] font-bold h-[25px]'>{totalBookings}</p>
            </div>
          </div>

          <div className='flex items-center justify-start gap-[10px] border py-[10px] pl-[10px] md:pl-[20px] lg:pl-[5px] xl:pl-[19px] w-full rounded-[5px] hover:scale-[1.03] duration-500 hover:cursor-pointer'>
            <img src={icon4} className='w-[54px]' />
            <div className='flex flex-col items-start justify-center '>
              <p className='text-[13px] sm:text-[16px] font-semibold'>Total Price</p>
              <p className='text-[17px] sm:text-[21px] font-bold h-[25px]'>{totalPrice}</p>
            </div>
          </div>
          <div className='flex items-center justify-start gap-[10px] border py-[10px] pl-[10px] md:pl-[20px] lg:pl-[5px] xl:pl-[19px] w-full rounded-[5px] hover:scale-[1.03] duration-500 hover:cursor-pointer'>
            <img src={icon5} className='w-[54px]' />
            <div className='flex flex-col items-start justify-center '>
              <p className='text-[13px] sm:text-[16px] font-semibold'>Total Places</p>
              <p className='text-[17px] sm:text-[21px] font-bold h-[25px]'>4</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <div className='w-full md:w-[75%] '>
            <PageViewChart />
          </div>
          <div className="w-[100%] md:w-[25%] p-[20px] shadow-lg rounded-lg h-[440px] hover:scale-[1.03] duration-500 hover:cursor-pointer">
            <p className="text-[18px] mb-4 h-[7%]">What's New?</p>
            <div className="flex flex-col items-start w-full gap-4 h-[90%] overflow-y-auto">
              <div className="flex items-center gap-4 w-full">
                <img src={icon21} className="w-[24px] h-[24px] object-contain" />
                <p className="leading-[19px] text-[15px] text-[#868686]">
                  Congratulation! Your 23 Listings have been approved today.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img src={icon22} className="w-[24px] h-[24px] object-contain" />
                <p className="leading-[19px] text-[15px] text-[#868686]">
                  Someone has saved your listing.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img src={icon23} className="w-[24px] h-[24px] object-contain" />
                <p className="leading-[19px] text-[15px] text-[#868686]">
                  You have 21 unread messages.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img src={icon24} className="w-[24px] h-[24px] object-contain" />
                <p className="leading-[19px] text-[15px] text-[#868686]">
                  Congratulation! Your 22 Listings have been approved.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img src={icon25} className="w-[24px] h-[24px] object-contain" />
                <p className="leading-[19px] text-[15px] text-[#868686]">
                  Mehedii added your listing “Mercedes Benz 2.3” to favorites.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img src={icon26} className="w-[24px] h-[24px] object-contain" />
                <p className="leading-[19px] text-[15px] text-[#868686]">
                  You had 25 new visitors last week.
                </p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img src={icon27} className="w-[24px] h-[24px] object-contain relative left-[4px]" />
                <p className="leading-[19px] text-[15px] text-[#868686]">
                  200 foreign visitors liked and followed you.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
