import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';

export default function EditAbout() {
    const toggle = useSelector((state) => state.toggle.value);
    const [data, setData] = useState({
        title: '',
        content: '',
        posterTitle: '',
        posterNumber: '',
        text1: '',
        text2: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/aboutdata')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                setData(data[0]); // Assuming only 1 row
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)

        fetch('http://localhost:5000/aboutdata/editabout', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to update');
                return res.json();
            })
            .then((result) => {
                alert('Updated successfully!');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className={`${toggle === false ? "w-full" : "md:w-[80%] lg:w-[82%] xl:w-[85%] 2xl:w-[87%]"} duration-500 font-semibold ml-auto py-[20px] px-[30px] mt-[80px]`}>
                <p className='text-[32px]'>Edit About Page</p>
                <form onSubmit={handleSubmit} className="card-form flex flex-col gap-y-5 mb-[60px] rounded">
                    <input
                        type="text"
                        name="title"
                        className="input2"
                        placeholder="Title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <textarea
                        type="text"
                        name="content"
                        className="input2 min-h-[200px]"
                        placeholder="Content"
                        value={data.content || ''}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="posterTitle"
                        className="input2"
                        placeholder="Poster text"
                        value={data.posterTitle || ''}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="posterNumber"
                        className="input2"
                        placeholder="Poster number"
                        value={data.posterNumber || ''}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="text1"
                        className="input2"
                        placeholder="Card 1 text"
                        value={data.text1 || ''}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="text2"
                        className="input2"
                        placeholder="Card 2 text"
                        value={data.text2 || ''}
                        onChange={handleChange}
                    />

                    <button type="submit" className="btn mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
}
