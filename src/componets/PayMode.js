import React from "react";
import "../styles/range.css";
import { Link } from "react-router-dom";
import Sareethree from "../asset/image/saree3.png";
import Close from '../asset/icons/close-icon.svg';

function PayMode({ setShowPay }) {
 return (
        <>
            <div className="pay">
                <div className="close-win">

                    <div className="pay-content">

                        <div>
                            <img className="pay-logo" src={Sareethree} alt="logo" />
                        </div>
                        <div className="close-tab">
                            <div className="content">
                                <h6 className="pay-type">product type</h6>
                                <h5 className="pay-product">product name goes here</h5>
                                <p className="detail">full-details</p>
                                <h5 className="pay-color">Colors</h5>
                                <div className="color-list">
                                    <div className="pay-green"></div>
                                    <div className="pay-light"></div>
                                    <div className="pay-red"></div>
                                    <div className="pay-blue"></div>
                                </div>
                                <div className="img-list">
                                    <img className="pay-img" src={Sareethree} alt="logo" />
                                    <img className="pay-img2" src={Sareethree} alt="logo" />
                                    <img className="pay-img2" src={Sareethree} alt="logo" />
                                    <img className="pay-img2" src={Sareethree} alt="logo" />
                                </div>
                                <button className="pay-size">XS</button>
                                <button className="pay-size">S</button>
                                <button className="pay-size">M</button>
                                <button className="pay-size">XL</button>
                                <div className="pay-rate">
                                    <span className="sareerate">₹1.500/-</span>
                                    <span className="sareediscount">₹3,500/-</span>
                                </div>

                                <Link to="/PaymentMode" className="pay-btn">add to cart</Link>
                            </div>
                            <div>
                                <img className="close-icon" onClick={() => setShowPay(false)} src={Close} />
                            </div>
                        </div>
                    </div>


                </div>




            </div>
            <div className="overlay" onClick={() => setShowPay(false)}  ></div>
        </>
    )
}

export default PayMode;