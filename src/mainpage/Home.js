import React from "react";
import Logo from "../images/logo.png"
import Hero from "../images/3.png"
import "../styles/header.css"
import OneImg from "../images/1.png"
import TwoImg from "../images/2.png"
import ThreeImg from "../images/3.png"
import FourImg from "../images/5.png"
import Section from "../mainpage/Section";
import Carousel from "../carosel/Carousel";

function Home(){
    return(
        <div>
           <header>
             <div className="social">
             <i style={{color:"white"}} className="bi-instagram"/>
             <i style={{color:"white"}} className="bi-facebook"/>
             </div>
             <div className="main-logo">
                <img className="logo-size" src={Logo} alt="logo"/>
                <div className="search-box">
                    <i className="bi-search"/>
                    <input className="head-search" type="search" placeholder="Search Products.."/>
                </div>
                <div className="user">
                    <div className="account">
                        <i className="bi-person"/>
                        <p>My Account</p>
                    </div>
                    <div className="account">
                        <i className="bi-envelope"/>
                        <p>FAQ</p>
                    </div>
                    <div className="account">
                        <i className="bi-check-circle"/>
                        <p>CheckOut</p>
                    </div>
                </div>
             </div>
             <div className="navigation">
                <div className="nav-flex">
                    <p className="link">Home</p>
                    <p className="link">About Us</p>
                    <p className="link">Product type</p>
                    <p className="link">Project</p>
                    <p className="link">Shop</p>
                    <p className="link">Media</p>
                </div>
               </div>
           </header>
           <div className="main-hero">
           <div className="hero-logo">
                  <img className="hero" src={Hero} alt="logo"/>
                 
            </div>
            <div className="title">
            <h1 className="hero-title">Bespoke Balcoins</h1>
            <p className="title-para">helro my nam e ti thidpathi i comai caoid rili fdsahofdks alsdifds dsofjds kfj dsklj</p>
            <div className="hero-btn">
            <button className="btn-one">See Our Product</button>
            <button className="btn-two">Inspiration</button>
            </div>
            </div>
            <div className="image-section">
                <div>
                <img className="radius" src={OneImg} alt="logo"/>
                <p className="product-title">Cushions</p>
                </div>
                <div>
                <img className="radius" src={FourImg} alt="logo"/>
                <p className="product-title">Accer</p>
                </div>
                <div>
                <img className="radius" src={ThreeImg} alt="logo"/>
                <p className="product-title">Furnitures</p>                </div>
                <div>
                <img className="radius" src={FourImg} alt="logo"/>
                <p className="product-title">Pallets</p>
                </div>

            </div>
           
           </div>
           <Section/>
            <Carousel/>
           
        </div>

    )
}

export default Home