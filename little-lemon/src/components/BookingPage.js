import * as React from "react";
import {useState} from "react";
import {fetchAPI} from "./bookingAPI";
import {submitAPI} from "./bookingAPI";
import { useReducer } from "react";
import bookingAPI from "./bookingAPI";
import { Link } from "react-router-dom";
import "./booking.css"

const BookingPage = () => {

  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);


const [Name, setName] = useState("");
const [email, setEmail] = useState("");
const [tel, setTel] = useState("");
const [people, setPeople] = useState(1);
const [date, setDate] = useState("");

const [finalTime, setFinalTime] = useState(
  availableTimes.map((times) => <option>{times}</option>)
);

function handleDateChange(e) {
  setDate(e.target.value);
  var stringify = e.target.value;
  const date = new Date(stringify);
  updateTimes(date);
  setFinalTime(availableTimes.map((times) => <option>{times}</option>));
}

return (
  <form className="bookingform" method="get">
    <div>
      <label htmlFor="Name">Name</label> <br></br>
      <input
        type="text"
        id="name"
        placeholder="Jane Doe"
        required
        minLength={2}
        maxLength={50}
        value={Name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>

    <div>
      <label htmlFor="email">Email</label> <br></br>
      <input
        type="email"
        id="email"
        placeholder="aaa@mail.com"
        value={email}
        required
        minLength={4}
        maxLength={200}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
    </div>

    <div>
      <label htmlFor="telnum">Phone Number</label> <br></br>
      <input
        type="tel"
        id="telnum"
        placeholder="(000)-0000-0000"
        value={tel}
        required
        minLength={10}
        maxLength={25}
        onChange={(e) => setTel(e.target.value)}
      ></input>
    </div>

    <div>
      <label htmlFor="numppl">Number of People</label> <br></br>
      <input
        type="number"
        id="numppl"
        placeholder="Number of Guests"
        value={people}
        required
        min={1}
        max={10}
        onChange={(e) => setPeople(e.target.value)}
      ></input>
    </div>

    <div>
      <label htmlFor="date">Select Date</label> <br></br>
      <input
        type="date"
        id="date"
        required
        value={date}
        onChange={handleDateChange}
      ></input>
    </div>

    <div>
      <label htmlFor="time">Select Time</label> <br></br>
      <select id="time" required>
        {finalTime}
      </select>
    </div>

    <div>
      <br></br>
      <Link className="a" to="/ConfirmedBooking">
       <button> Book Table </button> 
      </Link>
    </div>
  </form>
        );

}
export default BookingPage;