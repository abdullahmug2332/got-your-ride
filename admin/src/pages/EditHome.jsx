import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

export default function EditHome() {
    const toggle = useSelector((state) => state.toggle.value);
    const [items, setItems] = useState([]);
    const [homeData, setHomeData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [heroRes, homeRes] = await Promise.all([
                    fetch('http://localhost:5000/homedata/gethomeherodata'),
                    fetch('http://localhost:5000/homedata')
                ]);

                const heroData = await heroRes.json();
                const homeData = await homeRes.json();


                setItems(heroData);
                setHomeData(homeData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch('http://localhost:5000/homedata/updatehomeherodata', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ json: items }),
            });
            if (!res.ok) throw new Error('Failed to update');
            alert('HomeHero updated!');
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };
    const handleHomeDataSubmit = async () => {
        try {
            const res = await fetch('http://localhost:5000/homedata/updatehomedata', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ json: homeData }),
            });
            if (!res.ok) throw new Error('Failed to update home data');
            alert('Home data updated!');
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    if (homeData[3]) {
        console.log(homeData[4])
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className={`${toggle ? 'md:w-[80%] lg:w-[82%] xl:w-[85%] 2xl:w-[87%]' : 'w-full'} ml-auto duration-500 py-5 px-8 mt-[80px]`}>
                <p className="text-[32px] font-semibold ">Edit Home Hero Section</p>
                <div className="edit-home mb-[80px]">
                    <p className="text-orange-600 text-[30px] font-semibold relative top-[31px]">Hero Section</p>
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col gap-[20px] mt-10 rounded">
                            <h3 className="text-orange-600 text-[18px] font-semibold">Hero {index + 1}</h3>
                            <input
                                type="text"
                                className="input2"
                                placeholder="Title"
                                value={item.h1}
                                onChange={(e) => handleChange(index, 'h1', e.target.value)}
                            />
                            <textarea
                                className="input2"
                                placeholder="Subtitle"
                                value={item.p}
                                onChange={(e) => handleChange(index, 'p', e.target.value)}
                            />
                        </div>
                    ))}
                    <button className="btn mt-3" onClick={handleSubmit}>Save Changes</button>

                </div>
                {
                    homeData && homeData[0] ? (
                        <div className="edithomedata flex flex-col gap-y-4 mt-10 gap-[]">
                            <p className="text-orange-600 text-[30px] font-semibold">Home 1</p>
                            <input
                                type="text"
                                className="input2"
                                placeholder="Title"
                                value={homeData[0].title}
                                onChange={(e) => {
                                    const updatedData = [...homeData];
                                    updatedData[0].title = e.target.value;
                                    setHomeData(updatedData);
                                }}
                            />
                            <textarea
                                type="text"
                                className="input2"
                                placeholder="Description"
                                value={homeData[0].des}
                                onChange={(e) => {
                                    const updatedData = [...homeData];
                                    updatedData[0].des = e.target.value;
                                    setHomeData(updatedData);
                                }}

                            />
                            <div className='grid grid-cols-2 gap-[10px] '>
                                {
                                    homeData[0]?.chars?.map((card, index) => (
                                        <div key={index} className='flex flex-col'>
                                            <p className='text-orange-600 text-[18px] font-semibold mt-[30px] mb-[5px]'>Card {index + 1}</p>
                                            <input
                                                type="text"
                                                className="input2"
                                                placeholder="Title"
                                                value={card.text}
                                                onChange={(e) => {
                                                    const updatedData = [...homeData];
                                                    updatedData[0].chars[index].text = e.target.value;
                                                    setHomeData(updatedData);
                                                }}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            <button onClick={handleHomeDataSubmit} className='btn'>Save Changes</button>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )
                }
                {
                    homeData && homeData[1] ? (
                        <>
                            <div className="edithomedata mt-10 ">
                                <p className="text-orange-600 text-[30px] font-semibold">Top Experiences</p>
                                <div className='flex flex-col gap-y-4 '>
                                    {
                                        homeData[1]?.cards?.map((card, index) => (
                                            <div key={index} className='flex flex-col gap-[20px]'>
                                                <p className='text-orange-600 text-[18px] font-semibold mt-[30px] mb-[5px]'>Card {index + 1}</p>
                                                <input
                                                    type="text"
                                                    className="input2"
                                                    placeholder="Title"
                                                    value={card.title}
                                                    onChange={(e) => {
                                                        const updatedData = [...homeData];
                                                        updatedData[1].cards[index].title = e.target.value;
                                                        setHomeData(updatedData);
                                                    }}
                                                />
                                                <input
                                                    type="text"
                                                    className="input2"
                                                    placeholder="Subtitle"
                                                    value={card.subtitle}
                                                    onChange={(e) => {
                                                        const updatedData = [...homeData];
                                                        updatedData[1].cards[index].subtitle = e.target.value;
                                                        setHomeData(updatedData);
                                                    }}
                                                />
                                                <div className='grid grid-cols-2     gap-[10px]'>
                                                    <input
                                                        type="text"
                                                        className="input2"
                                                        placeholder="Price"
                                                        value={card.price}
                                                        onChange={(e) => {
                                                            const updatedData = [...homeData];
                                                            updatedData[1].cards[index].price = e.target.value;
                                                            setHomeData(updatedData);
                                                        }}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="input2"
                                                        placeholder="Original Price"
                                                        value={card.originalPrice}
                                                        onChange={(e) => {
                                                            const updatedData = [...homeData];
                                                            updatedData[1].cards[index].originalPrice = e.target.value;
                                                            setHomeData(updatedData);
                                                        }}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="input2"
                                                        placeholder="Duration"
                                                        value={card.duration}
                                                        onChange={(e) => {
                                                            const updatedData = [...homeData];
                                                            updatedData[1].cards[index].duration = e.target.value;
                                                            setHomeData(updatedData);
                                                        }}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="input2"
                                                        placeholder="Guests"
                                                        value={card.guests}
                                                        onChange={(e) => {
                                                            const updatedData = [...homeData];
                                                            updatedData[1].cards[index].guests = e.target.value;
                                                            setHomeData(updatedData);
                                                        }}
                                                    />

                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>

                                <button onClick={handleHomeDataSubmit} className='btn my-[22px]'>Save Changes</button>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )
                }
                {
                    homeData && homeData[2] ? (
                        <div className="edithomedata mt-10">
                            <p className="text-orange-600 text-[30px] font-semibold my-[20px]">Experience Section</p>

                            <div className='flex flex-col gap-y-4'>
                                <input
                                    type="text"
                                    className="input2"
                                    placeholder="Experience"
                                    value={homeData[2].title}
                                    onChange={(e) => {
                                        const updatedData = [...homeData];
                                        updatedData[2].title = e.target.value;
                                        setHomeData(updatedData);
                                    }}
                                />
                                <textarea
                                    className="input2"
                                    placeholder="Description"
                                    value={homeData[2].des}
                                    onChange={(e) => {
                                        const updatedData = [...homeData];
                                        updatedData[2].des = e.target.value;
                                        setHomeData(updatedData);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="input2"
                                    placeholder="Experience"
                                    value={homeData[2].experience}
                                    onChange={(e) => {
                                        const updatedData = [...homeData];
                                        updatedData[2].experience = e.target.value;
                                        setHomeData(updatedData);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="input2"
                                    placeholder="Experience Text"
                                    value={homeData[2].expText}
                                    onChange={(e) => {
                                        const updatedData = [...homeData];
                                        updatedData[2].expText = e.target.value;
                                        setHomeData(updatedData);
                                    }}
                                />
                            </div>
                            {/* Cards */}
                            <div className="flex flex-col gap-[10px] mt-8">
                                {homeData[2].cards.map((card, index) => (
                                    <div key={index} className='flex flex-col gap-[10px]'>
                                        <p className='text-orange-600 text-[18px] font-semibold mt-[20px]'>Card {index + 1}</p>
                                        <input
                                            type="text"
                                            className="input2"
                                            placeholder="Card Title"
                                            value={card.text}
                                            onChange={(e) => {
                                                const updatedData = [...homeData];
                                                updatedData[2].cards[index].text = e.target.value;
                                                setHomeData(updatedData);
                                            }}
                                        />

                                    </div>
                                ))}
                            </div>

                            {/* Bullet Points */}
                            <div className='mt-10'>
                                <p className="text-orange-600 text-[18px] font-semibold mb-[10px] ">Bullet Points</p>
                                <div className='flex flex-col gap-[10px]'>
                                    {homeData[2].bulletPoints.map((point, index) => (
                                        <input
                                            type='text'
                                            key={index}
                                            className="input2 w-full    "
                                            placeholder={`Bullet Point ${index + 1}`}
                                            value={point}
                                            onChange={(e) => {
                                                const updatedData = [...homeData];
                                                updatedData[2].bulletPoints[index] = e.target.value;
                                                setHomeData(updatedData);
                                            }}
                                        />
                                    ))}
                                </div>

                            </div>

                            <button onClick={handleHomeDataSubmit} className='btn my-[22px]'>Save Changes</button>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )
                }
                {
                    homeData && homeData[3].cards ? (
                        <div className="edithomedata mt-10">
                            <p className="text-orange-600 text-[30px] font-semibold">Trusted Experts Section</p>
                            {
                                homeData[3]?.cards?.map((card, index) => (
                                    <div key={index} className='flex flex-col gap-y-4 mt-5'>
                                        <p className='text-orange-600 text-[18px] font-semibold mt-[30px] mb-[5px]'>Card {index + 1}</p>
                                        <input
                                            type="text"
                                            className="input2"
                                            placeholder="Title"
                                            value={card.title}
                                            onChange={(e) => {
                                                const updatedData = [...homeData];
                                                updatedData[3].cards[index].title = e.target.value;
                                                setHomeData(updatedData);
                                            }}
                                        />
                                        <textarea
                                            className="input2"
                                            placeholder="Description Text"
                                            value={card.text}
                                            onChange={(e) => {
                                                const updatedData = [...homeData];
                                                updatedData[3].cards[index].text = e.target.value;
                                                setHomeData(updatedData);
                                            }}
                                        />
                                    </div>
                                ))

                            }


                            <button onClick={handleHomeDataSubmit} className='btn my-[22px]'>Save Changes</button>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )
                }

                {
                    homeData && homeData[4] ? (
                        <>
                            <p className="text-orange-600 text-[30px] font-semibold">Reviews</p>
                            {homeData[4]?.map((review, index) => (
                                <div key={index} className="flex flex-col gap-y-4 mt-6 border p-4 rounded-lg shadow-sm">
                                    <p className="text-orange-600 font-semibold text-lg">Review {index + 1}</p>

                                    <input
                                        type="text"
                                        className="input2"
                                        placeholder="Name"
                                        value={review.name}
                                        onChange={(e) => {
                                            const updatedData = [...homeData];
                                            updatedData[4][index].name = e.target.value;
                                            setHomeData(updatedData);
                                        }}
                                    />

                                    <input
                                        type="text"
                                        className="input2"
                                        placeholder="Country"
                                        value={review.country}
                                        onChange={(e) => {
                                            const updatedData = [...homeData];
                                            updatedData[4][index].country = e.target.value;
                                            setHomeData(updatedData);
                                        }}
                                    />

                                    <textarea
                                        className="input2"
                                        placeholder="Review"
                                        value={review.review}
                                        onChange={(e) => {
                                            const updatedData = [...homeData];
                                            updatedData[4][index].review = e.target.value;
                                            setHomeData(updatedData);
                                        }}
                                    />
                                </div>
                            ))}

                            <button onClick={handleHomeDataSubmit} className="btn my-[22px]">Save Changes</button>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div >
        </>
    );
}
