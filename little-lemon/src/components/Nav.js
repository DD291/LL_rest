import * as React from "react";
import {Link} from "react-router-dom";
import "./nav.css";



const Nav = () => {
return (
    <div className="nav">
            <ul>
            <li> <Link to="./" className="a"> Home </Link> </li>
            <li> <Link to="./about" className="a"> About </Link> </li>
            <li> <Link to="./Menu" className="a"> Menu </Link> </li>
            <li> <Link to="./BookingPage" className="a"> Reservations </Link> </li>
            </ul>
    </div>
    
)};

export default Nav;