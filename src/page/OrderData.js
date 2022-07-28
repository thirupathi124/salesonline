import React from "react";
import "../styles/order.css";
import "../styles/data.css";
import Credit from "../asset/icons/credit.svg";
import Upi from "../asset/icons/upi.png";
import Bank from "../asset/icons/bank.svg";
import Pay from "../asset/icons/pay.svg";
import Pericon from "../asset/icons/user-fill.svg";
import Backcard from "../asset/icons/bank-card-fill.svg";
import Women10 from "../asset/image/payimg.png";
function OrderData() {
    return (
        <div>
            <div className="paymentdata-layout">
                <div className="left-slie">
                    <div className="product-header">
                        <span className="payment">shipping address</span>
                        <span className="ship">payment</span>
                    </div>
                    <h4 className="information">contact information</h4>
                    <p className="data-detail">Tom Smith<br /> +919876543210<br /> (fagox87138@gridmire.com)</p>
                    <h4 className="data-info">Delivery to</h4>
                    <p className="data-address">No.01, Rayvan Apartments,Bharathiyar Salai,<br />Tiruchirappalli-620001, <br />TamilNadu, <br />India.</p>
                    <h4 className="data-pay">Payment</h4>
                    <p className="pay-method">Choose payment method below</p>
                    <div className="payment-method">
                        <div className="credit ">
                            <img className="cre-pad" src={Credit} alt="logo" />
                            <p className="card-text">debit/credit card</p>
                        </div>
                        <div className="credit upi-pad">
                            <img src={Upi} alt="logo" />
                        </div>
                        <div className="credit ">
                            <img className="bank-pad" src={Bank} alt="logo" />
                            <p className="card-text">Net Banking</p>
                        </div>
                        <div className="credit">
                            <img className=" pay-pad" src={Pay} alt="logo" />
                            <p className="card-text">Pay On Delivery</p>
                        </div>
                    </div>
                    <h4 className="card-detail">card payment</h4>
                    <p className="encrypt">All transactions are secure and encrypted.</p>
                    <div className="encrypt-flex">
                        <img src={Pericon} alt="logo" />
                        <input className="input-encry" type="text" placeholder="Name On Card"></input>
                    </div>
                    <div className="encrypt-flex cards-flex">
                        <div>
                            <img src={Backcard} alt="logo" />
                            <input className="input-card" type="text" placeholder="Card Number"></input>
                        </div>
                        <div className="crd-text"> MM/YY CVV</div>
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
                                    <img className="sum-logo" src={Women10} alt="logo" />
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
                    <button className="complete-btn">Complete Order</button>
                </div>

            </div>
        </div >
    )
}

export default OrderData;