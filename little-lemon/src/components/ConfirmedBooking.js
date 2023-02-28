import * as React from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";



const ConfirmedBooking = () => {
return (
    <div className="confbooking">
        <Heading color="#495e57" fontSize="18pt" padding="20pt"> Booking successfull </Heading>
        <Link to="/." className="a"> <button>  Home </button> </Link>
    </div>
)};

export default ConfirmedBooking;