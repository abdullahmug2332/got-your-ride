import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

export default function Routecheck() {
      const token = ("token");
      console.log(token)

  return token ?  <Navigate to={"/dashboard"}/>: <Navigate to={'/login'} />
}
