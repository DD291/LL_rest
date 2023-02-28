import * as React from "react";
import "./home.css";
import { Image, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const Home = () => {
return (
    <div className="homepage">
        <h1> Welcome to Little Lemon's Homepage! </h1> 
        <p> 
            <Box display="grid"
            backgroundImage="https://cdn.powerofpositivity.com/wp-content/uploads/2015/08/Fotolia_79134389_Subscription_Monthly_M.jpg"
            bgPosition="center"
            objectFit='cover'
            opacity="90%">
                <Text color="#495e57" fontSize="18pt" as="b" > 
                    Welcome to our restaurant
                </Text>
                <Text color="#333333" fontSize="15pt" as="i"> 
                We are a family owned Mediterranean restaurant, focused on traditional recepies served with a modern twist.
                </Text>
            </Box>
        <h3> This weeks specials: </h3>
             <ul> 
                <li> <Image src={require('./images/salad.JPG')} alt = 'salad' objectFit='cover' boxSize='30vw'/> Salad </li>
                <li> <Image src={require('./images/lemondessert.jpg')} alt = 'salad' objectFit='cover' boxSize='30vw'/> Lemon dessert </li>
            </ul>
            <Link to="./Menu" className="a"> To online menu <FontAwesomeIcon icon={faArrowRight} size="1x" />  </Link>
        </p>
    </div>
    
    
)};

export default Home;