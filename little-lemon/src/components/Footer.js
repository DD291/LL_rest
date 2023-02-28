import * as React from "react";
import "./footer.css";

const Footer = () => {
return (
    <>
    <div className="footer">
        <div className="footer-left">
            <p1> Opened: Tue-Sun</p1>
            <ul>
            <li>  11 a.m. - 3 p.m. </li>
            <li>  6 p.m. - 11 p.m. </li>
            <li> Mondays off </li>
        </ul>
        
        </div>

        <div className="footer-center">
        <ul>
            <li> <a href="/Home">Home</a> </li>
            <li> <a href="/About">About</a> </li>
            <li> <a href="/BookingPage"> Reservation </a> </li>
        </ul>
        </div>

        <div className="footer-right">
            © Copyright Little Lemon
        </div>

    </div>
    </>
)};

export default Footer;