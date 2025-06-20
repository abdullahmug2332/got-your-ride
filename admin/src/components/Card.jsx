import React, { useEffect, useState } from 'react'
import editicon from "../assets/editicon.png"
import deleteicon from "../assets/deleteicon.png"
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import { useNavigate } from 'react-router-dom'

export default function Card(props) {
    const id=props.id ;
    const navigate=useNavigate();
    const [img, setImg] = useState(img2)
    const [cars, setCars] = useState(1)
    const [placename, setPlacename] = useState("h")
    useEffect(() => {
        if (props.place == 1) {
            setImg(img1)
            setPlacename("Tokyo City")

        } else if (props.place == 2) {
            setImg(img2)
            setPlacename("Mount Fuji")

        } else if (props.place == 3) {
            setImg(img3)
            setPlacename("Nagano")

        } else if (props.place == 4) {
            setImg(img4)
            setPlacename("Nikko")

        }
        const cars = props.people
        const requiredCars = Math.ceil(cars / 6);
        setCars(requiredCars)
    }, [img,id])
    const handleClick = () => {
        navigate(`/booking/${props.id}`);
    };

    return (
        <div onClick={handleClick} className='flex items-center px-[20px] pr-[5px] my-[15px] cursor-pointer'>
            <div className='w-[33%] flex gap-[15px] '>
                <img src={img} className='w-[85px] h-[60px]' />
                <div className='flex flex-col justify-between'>
                    <p className='text-[14px]'>ID: {props.id}</p>
                    <p className='text-[14px]'>{placename}</p>
                    <p className='text-[14px] text-[#f0582a] font-extrabold'>${props.price}</p>
                </div>
            </div>
            <div className='w-[16.7%] flex justify-center'>
                <div className='w-[16.7%] text-center text-[14px]'>{props.name}</div>
            </div>
            <div className='w-[16.7%] text-center text-[14px]'>{`${new Date(props.start).toLocaleDateString().split('T')[0]}`}</div>
            <div className='w-[16.7%] text-center text-[14px]'>{cars} {`${cars <= 1 ? "Car" : "Cars"}`} </div>
            <div className='w-[16.7%] text-center text-[14px]'>{props.people} People</div>
            <div className='w-[16.7%] text-center flex justify-center gap-4'>{`${new Date(props.createdat).toLocaleDateString().split('T')[0]}`}</div>
        </div>
    )
}
