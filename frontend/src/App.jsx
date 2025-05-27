import { useState } from 'react'
import './App.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import BookingDetail from './pages/BookingDetail';
import PrivateRoute from "./pages/PrivateRoute";
import { Routes, Route, Navigate } from 'react-router-dom';
import Routecheck from './components/Routecheck';


function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:id" element={<BookingDetail />} />
        </Route>
        <Route path="*" element={<Routecheck/>} />
      </Routes>
    </>
  )
}

export default App
