import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

export default function BookingDetail() {
    const token = localStorage.getItem("token");
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const toggle = useSelector((state) => state.toggle.value);
    const [price, setPrice] = useState()

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await fetch(`http://localhost:5000/bookings/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setBooking(data);

                const priceMap = {
                    1: 380,
                    2: 408,
                    3: 477,
                    4: 423,
                };

                setPrice(priceMap[data.place_number] || 0);
            } catch (error) {
                console.error("Error fetching booking:", error);
            }
        };

        fetchBooking();
    }, [id]);

    if (!booking) return <p className='mt-[100px] ml-[20px]'>Loading...</p>;
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className={`${toggle === false ? "w-full" : "md:w-[80%] lg:w-[82%] xl:w-[85%] 2xl:w-[87%]"} duration-500 font-semibold ml-auto py-[20px] px-[30px] mt-[80px] cursor-pointer`}>
                <h1 className='text-[32px] font-bold mb-4'>Booking Details</h1>

                <div className='overflow-x-auto'>
                    <table className='w-full border border-gray-300 text-left text-[16px] shadow-md rounded-lg overflow-hidden'>
                        <tbody>
                            <tr className='bg-gray-100'>
                                <td className='p-3 font-semibold w-[30%]'>Booking ID</td>
                                <td className='p-3'>{booking.id}</td>
                            </tr>
                            <tr>
                                <td className='p-3 font-semibold'>Name</td>
                                <td className='p-3'>{booking.first_name} {booking.last_name}</td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <td className='p-3 font-semibold'>Email</td>
                                <td className='p-3'>{booking.email}</td>
                            </tr>
                            <tr>
                                <td className='p-3 font-semibold'>Phone</td>
                                <td className='p-3'>{booking.phone}</td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <td className='p-3 font-semibold'>Place Number</td>
                                <td className='p-3'>{booking.place_number}</td>
                            </tr>
                            <tr>
                                <td className='p-3 font-semibold'>Total Price</td>
                                <td className='p-3'>${booking.total_price}</td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <td className='p-3 font-semibold'>Status</td>
                                <td className='p-3'>{booking.is_paid === 1 ? "Approved" : "Unapproved"}</td>
                            </tr>
                            <tr>
                                <td className='p-3 font-semibold'>Booking Date</td>
                                <td className='p-3'>{new Date(booking.booking_date).toLocaleDateString()}</td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <td className='p-3 font-semibold'>Created At</td>
                                <td className='p-3'>{new Date(booking.created_at).toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td className='p-3 font-semibold'>Guests</td>
                                <td className='p-3'>{booking.adults} people</td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <td className='p-3 font-semibold'>Street</td>
                                <td className='p-3'>{booking.street}</td>
                            </tr>
                            <tr>
                                <td className='p-3 font-semibold'>City</td>
                                <td className='p-3'>{booking.city}</td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <td className='p-3 font-semibold'>ZIP Code</td>
                                <td className='p-3'>{booking.zip_code}</td>
                            </tr>
                            <tr>
                                <td className='p-3 font-semibold'>State</td>
                                <td className='p-3'>{booking.state}</td>
                            </tr>
                            {/* <tr className='bg-gray-100'>
                                <td className='p-3 font-semibold'>Terms Accepted</td>
                                <td className='p-3'>{booking.termsAccepted ? "Yes" : "No"}</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
