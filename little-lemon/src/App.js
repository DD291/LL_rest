import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";


import { useEffect, useState } from "react";
import {fetchAPI} from "./components/bookingAPI";
import {submitAPI} from "./components/bookingAPI";
import { useReducer } from "react";


import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import TestForm from "./components/TestForm";

import { Heading } from "@chakra-ui/react";



function App() {



  return (
    <>
    <ChakraProvider>
      <Header />
      <Main />
      <Footer />
      </ChakraProvider>
      </>
  );
}

export default App;


/*
https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer
https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/UQt2G/exercise-connecting-the-bookings-page-to-the-api
https://www.coursera.org/learn/advanced-react/supplement/EBtFp/data-fetching-using-hooks

*/