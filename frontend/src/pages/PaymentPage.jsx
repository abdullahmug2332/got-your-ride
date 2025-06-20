import React from 'react'
import BookingForm from "../components/BookingForm";
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const bookingInfo = location.state;
  return (
    <div>
        <BookingForm bookingInfo={bookingInfo}/>
    </div>
  )
}

export default PaymentPage
