import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

export default function EditDestinations() {
    const toggle = useSelector((state) => state.toggle.value);
    const [id, setId] = useState("1"); // default selected id as string
    const [selectedPlace, setSelectedPlace] = useState(null);

    useEffect(() => {
        if (!id) return; // don't fetch if id is empty

        const fetchDestinationData = async () => {
            try {
                const response = await fetch("http://localhost:5000/getdestination", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id }),
                });

                if (!response.ok) {
                    alert("Failed to fetch destination data");
                    return;
                }

                const data = await response.json();
                setSelectedPlace(data);
            } catch (err) {
                alert(err.message);
            }
        };

        fetchDestinationData();
    }, [id]);
    const handlesubmit = async () => {
        try {
            const res = await fetch('http://localhost:5000/getdestination/updateDestinations', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ json: selectedPlace, id: id }),
            });
            if (!res.ok) throw new Error('Failed to update home data');
            alert('Destination data updated!');
        } catch (err) {
            alert('Error: ' + err.message);
        }
    }
    const handleChange = (field, value) => {
        setSelectedPlace((prev) => ({
            ...prev,
            bookingData: {
                ...prev.bookingData,
                [field]: value
            }
        }));
    };
    const handleDetailChange = (index, value) => {
        setSelectedPlace(prev => {
            const newDetails = [...prev.bookingData.details];
            newDetails[index] = {
                ...newDetails[index],
                value: value
            };
            return {
                ...prev,
                bookingData: {
                    ...prev.bookingData,
                    details: newDetails
                }
            };
        });
    };
    const handlePriceChange = (field, value) => {
        setSelectedPlace(prev => ({
            ...prev,
            bookingData: {
                ...prev.bookingData,
                price: {
                    ...prev.bookingData.price,
                    [field]: value
                }
            }
        }));
    };
    const handleDescriptionChange = (value) => {
        setSelectedPlace(prev => ({
            ...prev,
            tripData: {
                ...prev.tripData,
                description: {
                    ...prev.tripData.description,
                    text: value
                }
            }
        }));
    };
    const handleOptionsChange = (index, value) => {
        setSelectedPlace(prev => {
            const newOptions = [...prev.options];       // copy array
            newOptions[index] = { ...newOptions[index], label: value }; // update label at index
            return {
                ...prev,
                options: newOptions
            };
        });
    };
    const handleIncludedItemsChange = (index, value) => {
        setSelectedPlace(prev => {
            const newIncludedItems = [...prev.tripData.includeExclude.includedItems];
            newIncludedItems[index] = value;
            return {
                ...prev,
                tripData: {
                    ...prev.tripData,
                    includeExclude: {
                        ...prev.tripData.includeExclude,
                        includedItems: newIncludedItems,
                    }
                }
            };
        });
    };
    const handleExcludedItemsChange = (index, value) => {
        setSelectedPlace(prev => {
            const updatedExcludedItems = [...prev.tripData.includeExclude.excludedItems];
            updatedExcludedItems[index] = value;

            return {
                ...prev,
                tripData: {
                    ...prev.tripData,
                    includeExclude: {
                        ...prev.tripData.includeExclude,
                        excludedItems: updatedExcludedItems,
                    }
                }
            };
        });
    };
    const handleTripInfoChange = (index, newValue) => {
        setSelectedPlace(prev => {
            const updatedTripInfo = [...prev.tripData.booking.tripInfo];
            updatedTripInfo[index] = {
                ...updatedTripInfo[index],
                value: newValue
            };

            return {
                ...prev,
                tripData: {
                    ...prev.tripData,
                    booking: {
                        ...prev.tripData.booking,
                        tripInfo: updatedTripInfo
                    }
                }
            };
        });
    };





    if (selectedPlace?.bookingData) {
        console.log(selectedPlace.tripData.booking.tripInfo)

    }
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div
                className={`${toggle
                    ? "md:w-[80%] lg:w-[82%] xl:w-[85%] 2xl:w-[87%]"
                    : "w-full"
                    } ml-auto duration-500 py-5 px-8 mt-[80px] relative `}
            >

                <select
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="border p-2 mb-4 absolute top-3 right-4 w-[120px] text-center bg-[#F0582A] text-white rounded-[5px] focus:outline-0 hover:scale-[1.03] hover:cursor-pointer duration-500"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                {selectedPlace ? (
                    <div>
                        <p className="text-[32px] font-semibold mb-[40px]">{`Edit ${selectedPlace.bookingData.title} Page`}</p>
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="text-orange-600 text-[18px] font-semibold">Title</h3>
                            <input
                                type="text"
                                className="input2"
                                value={selectedPlace.bookingData.title}
                                onChange={(e) => handleChange("title", e.target.value)} />
                            <h3 className="text-orange-600 text-[18px] font-semibold">Subtitle</h3>
                            <textarea
                                type="text"
                                className="input2"
                                value={selectedPlace.bookingData.subtitle}
                                onChange={(e) => handleChange("subtitle", e.target.value)} />
                            <h3 className="text-orange-600 text-[18px] font-semibold">Location</h3>
                            <input
                                type="text"
                                className="input2"
                                value={selectedPlace.bookingData.location}
                                onChange={(e) => handleChange("location", e.target.value)} />
                            <div className="grid grid-cols-2 gap-[10px]">
                                {
                                    selectedPlace.bookingData.details.map((data, index) => (
                                        <div key={index} className="flex flex-col gap-[10px]">
                                            <h3 className="text-orange-600 text-[18px] font-semibold">{data.label}</h3>
                                            <input
                                                type="text"
                                                className="input2 w-full"
                                                value={data.value}
                                                onChange={(e) => handleDetailChange(index, e.target.value)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="grid grid-cols-2 gap-[10px]">
                                <div className="flex flex-col gap-[10px]">
                                    <h3 className="text-orange-600 text-[18px] font-semibold">Actual Price</h3>
                                    <input
                                        type="text"
                                        className="input2"
                                        value={selectedPlace.bookingData.price.primary}
                                        onChange={(e) => handlePriceChange("primary", e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <h3 className="text-orange-600 text-[18px] font-semibold">Discounted Price</h3>
                                    <input
                                        type="text"
                                        className="input2"
                                        value={selectedPlace.bookingData.price.secondary}
                                        onChange={(e) => handlePriceChange("secondary", e.target.value)}
                                    />
                                </div>
                            </div>
                            <h3 className="text-orange-600 text-[18px] font-semibold">Description</h3>
                            <textarea
                                type="text"
                                className="input2"
                                value={selectedPlace.tripData.description.text}
                                onChange={(e) => handleDescriptionChange(e.target.value)}
                            />

                            <h3 className="text-orange-600 text-[18px] font-semibold">Spots</h3>
                            {
                                selectedPlace.options.map((data, index) => (
                                    <div key={index} className="flex flex-col gap-[10px]">
                                        <input
                                            type="text"
                                            className="input2"
                                            value={data.label}
                                            onChange={(e) => handleOptionsChange(index, e.target.value)}
                                        />
                                    </div>
                                ))
                            }
                            <h3 className="text-orange-600 text-[18px] font-semibold">Included Services</h3>
                            {
                                selectedPlace.tripData.includeExclude.includedItems.map((item, index) => (
                                    <div key={index} className="flex flex-cols gap-[10px]  mb-3">
                                        <input
                                            type="text"
                                            className="input2 w-full"
                                            value={item}
                                            onChange={(e) => handleIncludedItemsChange(index, e.target.value)}
                                        />
                                    </div>
                                ))
                            }
                            <h3 className="text-orange-600 text-[18px] font-semibold">Excluded Services</h3>
                            {
                                selectedPlace.tripData.includeExclude.excludedItems.map((item, index) => (
                                    <div key={index} className="flex flex-cols gap-[10px]  mb-3">
                                        <input
                                            type="text"
                                            className="input2 w-full"
                                            value={item}
                                            onChange={(e) => handleExcludedItemsChange(index, e.target.value)}
                                        />
                                    </div>
                                ))
                            }
                            <h3 className="text-orange-600 text-[18px] font-semibold">Trip Information</h3>
                            {
                                selectedPlace.tripData.booking.tripInfo.map((item, index) => (
                                    <div key={index} className="flex flex-cols gap-[10px]  mb-3">
                                        <input
                                            type="text"
                                            className="input2 w-full"
                                            value={item.value}
                                             onChange={(e) => handleTripInfoChange(index, e.target.value)}
                                        />
                                    </div>
                                ))
                            }
                            <button onClick={handlesubmit} className="btn">Save changes</button>
                        </div>
                    </div>
                ) : (
                    <p>Loading destination data...</p>
                )}
            </div>
        </div>
    );
}
