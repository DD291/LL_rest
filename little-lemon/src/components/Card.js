import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { AspectRatio } from '@chakra-ui/react'



const Card = ({ title, description, imageSrc }) => {
  return (
      <VStack
        color="333333" 
        backgroundColor="#495e57" 
        cursor="pointer" 
        borderRadius="xl"  >
        <Image borderRadius="xl" src={imageSrc} alt={title} objectFit='cover' boxSize='40vw' />
        <VStack spacing={4} p={4} alignItems="flex-start"> 
          <HStack justifyContent="space-between" alignItems="center"> 
            <Heading as="h3" size="md" color="#ee9972"> 
              {title} 
            </Heading> 
          </HStack> 
          <Text color="#f4ce14" fontSize="lg"> 
            {description} 
          </Text> 
          <HStack spacing={2} alignItems="center" color="#edefee"> 
            <p>See more</p> 
            <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
          </HStack> 
        </VStack> 
      </VStack> 
    ); 
};

export default Card;


/* import Star from '../../../../assets/star.png';
export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img src={Star} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
} */


/* import {Link} from 'react-router-dom';
export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <Link className="special-button"to="/order">Order for Delivery</Link>
            </section>
        </article>
    );
} */