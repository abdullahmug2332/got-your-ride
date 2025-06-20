import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';


export default function Booking() {
    const toggle = useSelector((state) => state.toggle.value);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortOrder, setSortOrder] = useState("desc");
    const [place, setPlace] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')





    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(`http://localhost:5000/bookings?page=${page}&limit=10&sort=${sortOrder}&place=${place}&fromDate=${fromDate}&toDate=${toDate}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });
                const data = await response.json();
                setCards(data.data);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        fetchBookings();
    }, [token, navigate, page, sortOrder, place, fromDate, toDate]);
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className={`${toggle === false ? "w-full" : "md:w-[80%] lg:w-[82%] xl:w-[85%] 2xl:w-[87%]"} duration-500 font-semibold ml-auto py-[20px] px-[30px] mt-[80px] relative z-10`}>

                <p className='text-[32px]'>My Bookings</p>
                <p className='text-[16px] font-medium'>Discover Japan: Where Tradition Meets Adventure.</p>
                <div className='w-[100%] overflow-x-auto'>
                    <div className='w-[100%] min-w-[750px]'>
                        <div className='flex items-center w-full gap-[2px] my-[3px]'>
                            <div className='flex gap-[7px] items-center'>
                                <input value={fromDate} onChange={(e) => setFromDate(e.target.value)} type="date" className='border px-3 py-[7px] rounded bg-[#f0582a] text-white shadow hover:cursor-pointer ' />
                                <p className=''>To</p>
                                <input value={toDate} onChange={(e) => setToDate(e.target.value)} type="date" className='border px-3 py-[7px] rounded bg-[#f0582a] text-white shadow hover:cursor-pointer ' />
                            </div>
                            <div className='ml-auto'>
                                <button
                                    onClick={() => {
                                        setFromDate('');
                                        setToDate('');
                                        setPlace('all');  // or '' if your backend expects it
                                        setPage(1); // Optional: Reset to first page
                                    }}
                                    className='border px-3 py-[7.5px] rounded bg-[#f0582a] text-white shadow hover:cursor-pointer focus:outline-0'
                                >
                                    Remove
                                </button>

                            </div>
                            <div >
                                <select
                                    value={place}
                                    onChange={(e) => setPlace(e.target.value)}
                                    className='border px-3 py-2 rounded bg-[#f0582a] text-white shadow hover:cursor-pointer focus:outline-0'>
                                    <option value="all" className='bg-white text-[#f0582a] hover:cursor-pointer'>All</option>
                                    <option value="1" className='bg-white text-[#f0582a] hover:cursor-pointer'>Tokyo</option>
                                    <option value="2" className='bg-white text-[#f0582a] hover:cursor-pointer'>Mount Fuji</option>
                                    <option value="3" className='bg-white text-[#f0582a] hover:cursor-pointer'>Nagano</option>
                                    <option value="4" className='bg-white text-[#f0582a] hover:cursor-pointer'>Nikko</option>
                                </select>
                            </div>
                            <div className=''>
                                <select
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    className='border px-3 py-2 rounded bg-[#f0582a] text-white shadow hover:cursor-pointer focus:outline-0'>
                                    <option value="asc" className='bg-white text-[#f0582a] hover:cursor-pointer'>Newest First</option>
                                    <option value="desc" className='bg-white text-[#f0582a] hover:cursor-pointer'>Oldest First</option>
                                </select>
                            </div>
                        </div>


                        <div className='bg-[#f0582a] text-white flex py-[15px] px-[10px] rounded-[5px] pl-[30px] mb-[50px]'>
                            <p className='w-[33%]'>Description</p>
                            <p className='w-[16.7%] text-center'>Name</p>
                            <p className='w-[16.7%] text-center'>Booking Date</p>
                            <p className='w-[16.7%] text-center'>Cars</p>
                            <p className='w-[16.7%] text-center'>Guest</p>
                            <p className='w-[16.7%] text-center'>Created At</p>
                        </div>
                        {cards.map((card, index) => (
                            <div key={index}>
                                <Card
                                    id={card.id}
                                    name={card.first_name}
                                    place={card.place_number}
                                    price={card.total_price}
                                    btn={card.is_paid}
                                    start={card.booking_date}
                                    people={card.adults}
                                    createdat={card.created_at}
                                />
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center gap-2 mt-6'>
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className='px-4 py-2 bg-[#f0582a] text-white rounded disabled:opacity-50'
                    >
                        Previous
                    </button>
                    <span className='px-4 py-2 font-medium'>Page {page} of {totalPages}</span>
                    <button
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className='px-4 py-2 bg-[#f0582a] text-white rounded disabled:opacity-50'
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
