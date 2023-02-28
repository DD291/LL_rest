import * as React from "react";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";



function BookingForm(props){
    
    const[guestsNumber, setGuestsNumber] = useState(null);
    const[occasion, setOccasion] = useState(null);

    const[availableDate, setAvailableDate] = useState("");
     const[availableTimes , setAvailableTimes ] = useState({time: props.availableTimes});

    const getIsFormValid = () => {
        return (
            props.availableDate  &&
            props.availableTimes &&
            guestsNumber.value.length >= 1 &&
            occasion
        );
    };

    const goToConf = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation successfull!");
        goToConf("/ConfirmedBooking")
    };

    return (
        <>
        <h1>Book Now </h1>
        <form action="" method="get" class="bookingForm" onSubmit={handleSubmit}>
            <div class="form_date">
                <label for="res-date"> Choose date </label>
                <input
                    type="date"
                    id="res-date"
                    required
                    value={props.availableDate}
                    onChange={(e) => {props.setAvailableDate(e.target.value);}}
                />
            </div>
            <div class="form_time">
                <label for="res-time"> Choose time </label>
                <select
                    id ="res-time"
                    value={props.availableTimes}
                    onChange={(e) => {props.setAvailableTimes(e.target.value);}}
                >
                {props.availableTimes.map((item) => (
                  <option key = {item.time}> 
                     {item.time} 
                    </option>
                  ))}
                </select>
            </div>
            <div class="form_guests">
                <label for="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guestsNumber}
                    onChange={(e) => {setGuestsNumber(e.target.value);}}
                />
            <div class="form_occasion">
            <label for="occasion" >Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => {setOccasion(e.target.value);}}
            > 
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            </div>

            </div>
            <div class="form_submit">
                <button type="submit" disabled={!getIsFormValid}  value="Make Your reservation!" > Reserve! </button>
            </div>
        </form>
        </>
    );
         }
        export default BookingForm;


