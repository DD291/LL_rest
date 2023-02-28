import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const menu =  [ {
    title: "Bruchetta",
    description:
      "Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.",
    getImageSrc: () => require("./images/restauranfood.jpg"),
  },
  {
    title: "Israeli Salad",
    description:
      "Israeli salad is a chopped salad of finely diced tomato, onion, cucumber, and bell or chili peppers.",
    getImageSrc: () => require("./images/salad.JPG"),
  },]

const Menu = () => {
return (

   <>
     <Heading as="h1" id="menu" padding="20pt">
        Our menu
      </Heading>
       <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {menu.map((menu) => (
          <Card
            key={menu.title}
            title={menu.title}
            description={menu.description}
            imageSrc={menu.getImageSrc()}
          /> 
        ))}
      </Box>
    </>  
)};

export default Menu;


