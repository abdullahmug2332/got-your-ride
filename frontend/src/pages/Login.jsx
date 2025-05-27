import React, { useEffect } from 'react'
import img1 from "../assets/svg.jpg"
import img2 from "../assets/logo.svg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiSmileySad } from "react-icons/pi";



export default function Login() {
  const [toogle, setToogle] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (password.length >= 8) {
      setToogle(false)
    }
    }, [password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setToogle(true)
    } else {
      try {
        const res = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          console.log("Login Successful", data);
          localStorage.setItem("token", data.token);
          alert("Login Successful");
          navigate("/dashboard")
        } else {
          alert(data.error || "Login Failed");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Something went wrong");
      }
    }
  };

  return (
    <section className='bg-orange-100 min-h-[100vh] py-[60px]'>
      <div className='w-[95%] md:w-[80%] min-h-[600px] bg-white mx-auto border p-[30px] flex  items-center '>
        <div className='w-[45%] ld hidden md:block'>
          <div className='relative'>
            <img src={img1} className='w-full' />
            <img src={img2} className='bg-[#f0582a] w-[100px] absolute -top-[70px] left-2 p-[20px] rounded-[20px]' />
          </div>
        </div>
        <div className='w-[100%] md:w-[55%]  px-[20px] md:pl-[50px] relative'>
          <p className='p mt-[20px]'>You can get your ride with</p>
          <p className='color text-[35px] font-semibold mb-[30px]'>Sign In to Got Your Ride</p>
          <form onSubmit={handleSubmit}>
            <label className='mt-[20px]'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='input focus:ring-2 ring-orange-500 outline-none' type="email" placeholder='Enter Your Email' />
            <label className='mt-[20px]'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='input focus:ring-2 ring-orange-500 outline-none' type="password" placeholder='Enter Password' />
            <div className={`${toogle == true ? "h-[25px]" : "h-[0px]"} text-[#f0582a] text-[15px] flex items-center gap-2  overflow-hidden`}>
              <p className='text-[12px] md:text-[15px]'>Password must be 8 characters long</p>
              <PiSmileySad className='text-[18px] md:text-[22px] ' />
            </div>
            <button className='btn mt-[30px]'>Sign in</button>

          </form>
        </div>
      </div>
    </section>
  )
}
