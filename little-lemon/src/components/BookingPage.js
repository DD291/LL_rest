import * as React from "react";
import BookingForm from "./BookingForm";
import {useState} from "react";
import {fetchAPI} from "./bookingAPI";
import {submitAPI} from "./bookingAPI";
import { useReducer } from "react";
import TestForm from "./TestForm";
import bookingAPI from "./bookingAPI";





const BookingPage = () => {
    const [bookingData, setBookingData] = useState({
        date: " ",
        time: " ",
        guests: " ",
        occasion: " ",
      });


    
      const today = new Date();
      const init = { time: fetchAPI(today) };
      const [availableTimess, setAvailableTimess] = useReducer(updateTimes, init);
      const submitForm = () => {
        const res = submitAPI(bookingData);
        if (res === true) {
          return true;
        } else {
          return false;
        }
      };
      function initializeTimes() {
        setAvailableTimes({ type: "init" });
      }

      function updateTimes() {
          return { time: fetchAPI(today) };
      } 


        const[availableDate, setAvailableDate] = useState("");
        const[availableTimes , setAvailableTimes ] = useState([
                { time:"17:00"},
                { time:"18:00"},
                { time:"19:00"},
                { time:"20:00"},
                { time:"21:00"},
                { time:"22:00"},
              ]);




        return (
            <div className="bookingPage"> 
            <p> Reserve a table at Little Lemon! </p>
            <p> fg {availableTimess.time[0].toLocaleString()} </p>
     

             < BookingForm
                availableDate = {availableDate}
                setAvailableDate =  {setAvailableDate}
                availableTimes = {availableTimes}
                setAvailableTimes ={setAvailableTimes}
                        /> 
{/*                 <TestForm
              bookingData={bookingData}
              setBookingData={setBookingData}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              availableDate = {availableDate}
              setAvailableDate =  {setAvailableDate}
              submitForm={submitForm} 
            />     */}

            </div>
        );
         }
        export default BookingPage;