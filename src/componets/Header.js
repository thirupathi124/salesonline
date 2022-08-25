import React, { useState } from "react";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import Search from '../../src/asset/icons/search-icon.svg';
import Fasion from '../../src/asset/logo/fasion-logo.png';
import Shopicon from '../../src/asset/icons/shop.svg';
import Expand from '../../src/asset/icons/expandmore.svg';
import toogle from '../../src/asset/icons/menu-icon.svg';
import Togle from "../page/Toogle";
function Header() {
    const [showExpand, setExpandmore] = useState(false);
    const [showPay, setShowPay] = useState(false)

    return (

        <div className={`full-layout ${showPay ? 'show-pay' : ""}`}>

            <div className="head-flex"  >
                <div className="first-flex">
                    <div className="search-color">
                        <img className="head-search color" src={Search} alt="icons" />
                        <div>

                            <input className="header-hover" placeholder="Search...." type="search" />
                        </div>
                    </div>
                    <div className="toogle">
                        <img className="side-icon" src={toogle} onClick={() => setShowPay(true)} alt="logo" />

                    </div>
                    <div className="expand">
                        <div className="women-cloth head-gap" onClick={() => setExpandmore((prevState) => !prevState)}>Women clothing</div>

                        <img className="expand-bar" onClick={() => setExpandmore((prevState) => !prevState)} src={Expand} alt="logo" />

                        {showExpand && (
                            <div className="block">
                                <Link to="/allcloth" className="nav">All Apparels</Link>
                                <Link to="/sarees" className="nav">Sarees &amp; Blouses</Link>
                                <Link to="/paymentmode" className="nav">Payment Mode</Link>
                                <Link to="/orderdetail" className="nav">Order Detail</Link>
                                <Link to="/orderdata" className="nav">Order Data</Link>

                            </div>
                        )}
                    </div>


                    <div className="expand">
                        <div className="jwell head-gap">Jewellery</div>
                        <img className="expand-bar" src={Expand} alt="logo" />
                    </div>

                </div>


                <div>
                    <img className="hero-logo" src={Fasion} alt="logo" />

                </div>
                <div className="second-flex">
                    <button className="head-btn">Join Kariga</button>


                    <div className="head-login">Login</div>
                    <img className="shoping" src={Shopicon} alt="icons" />

                </div>
                <Togle setShowPay={setShowPay} />
            </div>

        </div>



    );

}

export default Header;

