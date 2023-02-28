import * as React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "./BookingPage"
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import ConfirmedBooking from "./ConfirmedBooking";




const Main = () => {

return (
    <div className="main">
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}> </Route>
            <Route path="/menu" element={<Menu/>}> </Route>
            <Route path="/bookingPage" element={<BookingPage/>}> </Route>
            <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
        </BrowserRouter>
    </div>
)};

export default Main;

