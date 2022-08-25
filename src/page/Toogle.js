import React, { useState } from "react";
import "../styles/range.css";
import "../styles/sidebar.css";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import Expand from '../../src/asset/icons/expandmore.svg';
import Fasion from '../../src/asset/logo/fasion-logo.png';
import Search from '../../src/asset/icons/search-icon.svg';


export default function SideBar({ setShowPay }) {

    const [showExpand, setExpandmore] = useState(false);
    return (
        <>
            <div className="Togale">

                <div>
                    <img className="side-logo" src={Fasion} alt="logo" />

                </div>
                <div className="side-color">
                    <img className="head-search color" src={Search} alt="icons" />
                    <div>

                        <input className="header-hover" placeholder="Search...." type="search" />
                    </div>
                </div>

                <div className="expand-side">
                    <div className="side-text" onClick={() => setExpandmore((prevState) => !prevState)}>Women clothing</div>

                    <img className="top" onClick={() => setExpandmore(true)} src={Expand} alt="logo" />


                </div>
                {showExpand && (
                    <div className="">
                        <Link to="/allcloth" className="nav">All Apparels</Link>
                        <Link to="/sarees" className="nav">Sarees &amp; Blouses</Link>
                        <Link to="/paymentmode" className="nav">Payment Mode</Link>
                        <Link to="/orderdetail" className="nav">Order Detail</Link>
                        <Link to="/orderdata" className="nav">Order Data</Link>

                    </div>
                )}
                <div className="expand-side">
                    <div className="side-text">Jewellery</div>
                    <img className="top" src={Expand} alt="logo" />
                </div>
                <button className="join">Join Kariga</button>
                <button className="log-in">Login</button>

            </div>
            <div className="overlay" onClick={() => setShowPay(false)}></div>
        </>
    )
}