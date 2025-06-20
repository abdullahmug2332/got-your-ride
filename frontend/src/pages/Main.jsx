import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "./Booking";

const Main = () => {
  const { placeId } = useParams();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!placeId) return;

    const fetchDestination = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:5000/getdestination', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: placeId }),
        });

        if (!response.ok) {
          alert("Failed to fetch destination data");
        }

        const data = await response.json();
        setSelectedPlace(data);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [placeId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-[150px]">
      {selectedPlace ? (
        <Booking
          bookingData={selectedPlace.bookingData}
          tripData={selectedPlace.tripData}
          itineraryData={selectedPlace.itineraryData}
          options={selectedPlace.options}
          place={selectedPlace.id}
        />
      ) : (
        <p>Place not found.</p>
      )}
    </div>
  );
};

export default Main;
