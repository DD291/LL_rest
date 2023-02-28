import * as React from "react";
import { Image, Text, Box, HStack } from "@chakra-ui/react";
import "./about.css";


const About = () => {
return (
    <div className="about">
        <h1> Little Lemon</h1>
        <h2> Chicago </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div className="hstack"> 
            <HStack> 
            <Image src={require('./images/MarioandAdriana.jpg')} alt = 'ownersa' objectFit='cover' boxSize='30vw'/> 
            <Image src={require('./images/MarioandAdrianb.jpg')} alt = 'ownersb' objectFit='cover' boxSize='30vw'/> 
            </HStack>
        </div>
    </div>
)};

export default About;