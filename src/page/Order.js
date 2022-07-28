import React, { useState } from "react";
import "../styles/order.css";
import ArrowDown from "../asset/icons/arrow-down.svg";
import Payimg from "../asset/image/payimg.png";
import { Link } from "react-router-dom";
function OrderDetail() {
    const [showState, setShowState] = useState(false);
    return (
        <div className="product-layout">
            <div className="left-slie">
                <div className="product-header">
                    <span className="ship">shipping address</span>
                    <span className="payment">payment</span>
                </div>
                <h4 className="information">contact information</h4>
                <p className="product-detail">Tom Smith (fagox87138@gridmire.com)</p>
                <h4 className="ship-info">Shipping Information</h4>

                <div className="form">
                    <div className="form-flex">
                        <input className="form-input" type="username" placeholder="FirstName" />
                        <input className="form-input" type="username" placeholder="LastName" />
                    </div>
                    <input className="address-input" type="username" placeholder="Address" />
                    <div>
                        <input className="address-input" type="username" placeholder="Apartment, House, Building, etc. Name (Optional)" />
                    </div>
                    <div>
                        <input className="address-input" type="username" placeholder="City" />
                    </div>
                    <div className="form-flex">
                        <div className="input-arrow" onClick={() => setShowState((prevState) => !prevState)}>
                            <input className="input-none" type="username" placeholder="State" />
                            <img className="color-opacity" src={ArrowDown} alt="logo" />
                        </div>



                        <input className="form-input" type="username" placeholder="Zip Code" />

                    </div>
                    {showState && (
                        <div className="state">
                            <h5>Tamil Nadu</h5>
                            <h5>Tamil Nadu</h5>
                            <h5>Tamil Nadu</h5>
                            <h5>Tamil Nadu</h5>
                            <h5>Tamil Nadu</h5>
                            <h5>Tamil Nadu</h5>
                            <h5>Tamil Nadu</h5>
                            <h5>Tamil Nadu</h5>

                        </div>
                    )}
                    <div>
                        <Link to="/OrderData" className="ship-pay">pay now</Link>
                    </div>
                </div>

            </div>
            <div className="right-slide">

                <div className="shadow">
                    <div className="sum-top">
                        <h2 className="summary">order summary</h2>
                        <p className="item">1 item</p>
                    </div>
                    <div className="flex-try">
                        <div className="sum-design">
                            <div className="sum-left">
                                <img className="sum-logo" src={Payimg} alt="logo" />
                                <div className="sum-content">
                                    <h4 className="sum-title">product name goes here</h4>
                                    <h4 className="sum-size">Yellow | XL</h4>
                                    <div className="span-gap">
                                        <span className="Edit">Edit</span>
                                        <span className="remove">Remove</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sum-last-flex">
                            <div className="price-flex">
                                <h4 className="actual-price">Actual Price</h4>
                                <p className="sum-price">₹ 3,500/-</p>
                            </div>
                            <div className="discount">
                                <h4 className="count-price">discount price</h4>
                                <h4 className="count-rate">₹1,500</h4>
                            </div>
                        </div>

                    </div>
                    <div className="summary-footer">
                        <div className="total-flex">
                            <h1 className="sub">Subtotal</h1>
                            <p className="total-price">₹1,500</p>
                        </div>
                        <div className="total-flex">
                            <h1 className="tax">tax</h1>
                            <p className="tal-price">₹500</p>
                        </div>
                        <div className="total-flex">
                            <h1 className="shipping">shipping</h1>
                            <p className="tal-price">free</p>
                        </div>
                        <div className="total-flex">
                            <h1 className="grand">Grand Total</h1>
                            <p className="total-price">₹2,000</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default OrderDetail;