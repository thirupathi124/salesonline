import React from "react";
import "../styles/payment.css";
import "../styles/range.css";
import "../styles/saree.css";
import Payimg from "../asset/image/payimg.png";
import Darksocial from "../asset/icons/whatsapp-dak.svg";
import Darkdial from "../asset/icons/phone-dial.svg";
import Darkmail from "../asset/icons/mail-dark.svg";
import Women9 from "../asset/image/women9.png";
import Women10 from "../asset/image/women10.png";
import Women11 from "../asset/image/women11.png";
import Women12 from "../asset/image/women12.png";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideleft from "../asset/icons/slide-left.svg";
import Slideright from "../asset/icons/slide-right.svg";
import Socialpay from "..//asset/icons/facebook-dark.svg";
import Twitt from "..//asset/icons/twitter-dark.svg";
import Darkwhat from "..//asset/icons/what-social.svg";
import Social from "..//asset/icons/instagram-dark.svg";
import { Link } from "react-router-dom";



function PaymentMode() {
    const sarees = [

        {
            img: Women9,
            productname: "Product name goes here",
            price: "₹1,500 /-",
            discount: "₹3,500 /-"

        },
        {
            img: Women10,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },
        {
            img: Women11,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },
        {
            img: Women12,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },


    ]
    return (
        <>
            <div className="payment-layout">
                <p className="gram">Breadcrumbs  Breadcrumbs  Breadcrumbs  Breadcrumbs</p>

                <div className="payment-left-flex">
                    <img className="payment-size" src={Payimg} alt="logo" />

                    <div className="payment-right-flex">
                        <div className="pay-social">
                            <h6 className="pay-type mode-type">product type</h6>
                            <div className="social-flex">
                                <div className="back-desing">
                                    <img className="back-color" src={Socialpay} alt="logo" />
                                </div>
                                <div className="back-desing">
                                    <img className="back-color" src={Twitt} alt="logo" />
                                </div>
                                <div className="back-desing">
                                    <img className="back-color" src={Darkwhat} alt="logo" />
                                </div>
                                <div className="back-desing">
                                    <img className="back-color" src={Social} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <h5 className="pay-product mode-product">product name goes here</h5>
                        <p className=" mode-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corporis atque suscipit fuga neque  natus?</p>
                        <h5 className="pay-color">Colors</h5>
                        <div className="color-pay">
                            <div className="pay-green"></div>
                            <div className="pay-light"></div>
                            <div className="pay-red"></div>
                            <div className="pay-blue"></div>
                        </div>
                        <p className="size-pay">Sizes</p>
                        <button className="pay-size ">XS</button>
                        <button className="pay-size">S</button>
                        <button className="pay-size pay-hover">M</button>
                        <button className="pay-size">XL</button>
                        <h6 className="pay-qual">Quality</h6>
                        <button className="payments">-</button>
                        <button className="pay-white">1</button>
                        <button className="payments">+</button>
                        <h5 className="payment-price">price</h5>
                        <span className="payment-rate">₹1,5000/-</span>
                        <span className="payment-dis">₹3,500/-</span>
                        <div>
                            <Link to="/OrderDetail" className="payment-btn">Pay now</Link>
                        </div>
                        <button className="card-btn">add to card</button>
                    </div>
                </div>
                <div className="img-pay">
                    <img className="small-img" src={Payimg} alt="logo" />
                    <img className="small-imgs" src={Payimg} alt="logo" />
                    <img className="small-imgs" src={Payimg} alt="logo" />

                </div>
                <div className="payment-content">
                    <div className="payment-graph">
                        <h5 className="pay-details">Product Details</h5>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam.</li>
                        </ul>
                        <h5 className="pay-details">Product Details</h5>
                        <p className="detail-pay">Standard shipping arrives in 4 to 6 days, with one business day for processing. Returns accepted within 30 days of delivery.</p>
                    </div>
                    <div className="payment-help">
                        <h4 className="need-help">Need Help With This Product?</h4>
                        <div className="what-help">
                            <div className="pad">
                                <div className="need-back">
                                    <img className="contact-social" src={Darksocial} alt="logo" />
                                </div>
                                <span className="span-text">Chat with us on Whatsapp</span>
                            </div>
                            <div className="pad">
                                <div className="need-back">
                                    <img className="contact-social" src={Darkdial} alt="logo" />
                                </div>
                                <span className="span-text">Call us to +91 9876543210</span>
                            </div>
                            <div className="pad">
                                <div className="need-back">
                                    <img className="contact-social" src={Darkmail} alt="logo" />
                                </div>
                                <span className="span-text">Write to us user@example.com</span>
                            </div>

                        </div>
                    </div>


                </div>
                <h1 className="may-like">You May Also Like</h1>

            </div>
            <Carousel>
                <Carousel.Item>
                    <div className="saree-gird">
                        <div className="payment-grid-flex">
                            <img className="pay-ment" src={Slideright} alt="logo" />
                            {sarees.map((item, index) =>
                            (
                                <div key={index} className="saree-desing">

                                    <img className="flex-caro" src={item.img} alt="logo" />
                                    <div className="saree-right">
                                        <h4 className="sareename">product type</h4>
                                        <h3 className="producttitle">{item.productname}</h3>
                                        <div className="upsaree">
                                            <span className="sareerate">{item.price}</span>
                                            <span className="sareediscount">{item.discount}</span>
                                        </div>
                                    </div>
                                </div>)
                            )}
                            <img className="pay-ment" src={Slideleft} alt="logo" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="saree-gird">
                        <div className="payment-grid-flex">
                            <img className="pay-ment" src={Slideright} alt="logo" />
                            {sarees.map((item, index) =>
                            (
                                <div key={index} className="saree-desing">

                                    <img className="flex-caro" src={item.img} alt="logo" />
                                    <div className="saree-right">
                                        <h4 className="sareename">product type</h4>
                                        <h3 className="producttitle">{item.productname}</h3>
                                        <div className="upsaree">
                                            <span className="sareerate">{item.price}</span>
                                            <span className="sareediscount">{item.discount}</span>
                                        </div>
                                    </div>
                                </div>)
                            )}
                            <img className="pay-ment" src={Slideleft} alt="logo" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default PaymentMode;