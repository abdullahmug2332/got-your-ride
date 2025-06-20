import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';


export default function EditContact() {
    const toggle = useSelector((state) => state.toggle.value);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch cards from backend
    useEffect(() => {
        fetch('http://localhost:5000/contactcards')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                setCards(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Handle input change for any card field
    const handleChange = (index, field, value) => {
        const updatedCards = [...cards];
        updatedCards[index][field] = value;
        setCards(updatedCards);
    };

    // Submit update for a single card by id
    const handleSubmit = async (id, index) => {
        const card = cards[index];
        try {
            const res = await fetch(`http://localhost:5000/contactcards/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    category: card.category,
                    title: card.title,
                    content: card.content,
                    link: card.link,
                }),
            });
            if (!res.ok) throw new Error('Failed to update card');
            alert('Card updated successfully!');
        } catch (err) {
            alert('Error updating card: ' + err.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className={`${toggle == false ? "w-full" : "md:w-[80%] lg:w-[82%] xl:w-[85%] 2xl:w-[87%]"} duration-500  font-semibold ml-auto py-[20px] px-[30px] mt-[80px]`}>
                <p className='text-[32px]'>Edit Contact Page</p> 
                <div className="edit-contact">
                    {cards.map((card, index) => (
                        <div key={card.id} className="card-form flex flex-col gap-y-5  mb-[60px]  rounded">
                            <h3 className="text-orange-600 text-[25px] relative top-[10px] font-semibold ">Card {card.id}</h3>
{/* 
                            <input
                                type="text"
                                className="input2"
                                placeholder="Category"
                                value={card.category || ''}
                                onChange={(e) => handleChange(index, 'category', e.target.value)}
                            /> */}
                            <input
                                type="text"
                                className="input2"
                                placeholder="Title"
                                value={card.title || ''}
                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                            />
                            <input
                                type="text"
                                className="input2"
                                placeholder="Content"
                                value={card.content || ''}
                                onChange={(e) => handleChange(index, 'content', e.target.value)}
                            />
                            <input 
                                type="text"
                                className="input2"
                                placeholder="Link"
                                value={card.link || ''}
                                onChange={(e) => handleChange(index, 'link', e.target.value)}
                            />

                            <button
                                className="btn mt-3"
                                onClick={() => handleSubmit(card.id, index)}
                            >
                                Submit
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
