import {useState} from "react";


const TestList = (props) => {

    return <form> 
                <label for="res-time"> Choose time test </label>
                <select>
                  {props.data.map((item) => (
                  <option key = {item.id}> 
                     {item.time} 
                    </option>
                  ))}
                </select>
                </form>
  }
  export default TestList; 
  
  