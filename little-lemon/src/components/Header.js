import React from "react";
import "./header.css";

const Header = () => {
return (
    <div className="header">
        <div className="header-left">
        <h1> Little Lemon </h1>
        <h2> Chicago </h2>
    </div>
    <div className="header-right">
        <img src={require('./images/logo.JPG')} alt = 'little lemon logo' width="400" /> 
    </div>



    </div>
)};

export default Header;