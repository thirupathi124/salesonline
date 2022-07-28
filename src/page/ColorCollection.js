import React, { useState } from "react";
import "../styles/saree.css";
import "../styles/Color.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Sareeone from "../asset/image/saree1.png";
import Sareetwo from "../asset/image/saree2.png";
import Sareethree from "../asset/image/saree3.png";
import Sareefour from "../asset/image/saree4.png";
import Color from "../asset/image/women1.png";
import Women2 from "../asset/image/women2.png";
import Women3 from "../asset/image/women3.png";
import Women4 from "../asset/image/women4.png";
import Women5 from "../asset/image/women5.png";
import Women6 from "../asset/image/women6.png";
import Women7 from "../asset/image/women7.png";
import Women8 from "../asset/image/women8.png";
import Women9 from "../asset/image/women9.png";
import Women10 from "../asset/image/women10.png";
import Women11 from "../asset/image/women11.png";
import Women12 from "../asset/image/women12.png";
import ArrowDown from "../asset/icons/arrow-down.svg";

function CollectionColor() {
    const [showColor, setShowColor] = useState(false);
    const [showDiff, SetShowDiff] = useState(false);
    const list = [

        {
            img: Women2,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },
        {
            img: Women3,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },
        {
            img: Women4,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },
        {
            img: Women5,
            productname: "Product name goes here",
            price: "₹1,500 /-",
            discount: "₹3,500 /-"
        },
        {
            img: Women6,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },
        {
            img: Women7,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },
        {
            img: Women8,
            productname: "Product name goes here",
            price: "₹1,500/-",
            discount: "₹3,500/-"
        },
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
        <div className="saree-layout">
            <div className="saree-header">
                <div>
                    <img className="logo-saree" src={Sareeone} alt="logo" />
                    <p className="logo-title">New arrival text goes here</p>
                </div>
                <div>
                    <img className="logo-saree" src={Sareetwo} alt="logo" />
                    <p className="logo-title">New arrival text goes here</p>
                </div>
                <div>
                    <img className="logo-saree" src={Sareethree} alt="logo" />
                    <p className="logo-title">New arrival text goes here</p>
                </div>
                <div>
                    <img className="logo-saree" src={Sareefour} alt="logo" />
                    <p className="logo-title">New arrival text goes here</p>
                </div>



            </div>

            <div className="saree-main">
                <div className="saree-flex">
                    <h3 className="saree-shop">shop</h3>
                    <h3 className="color-cloth">Olive Color Collections</h3>
                    <div className="saree-border">
                        <div>
                            <span className="sort">Sort by : </span>
                            <span className="recom"> Recommended</span>
                        </div>
                        <img className="arrow" src={ArrowDown} alt="logo" />
                    </div>
                </div>
                <div className="saree-list">
                    <div className="saree-list-item">
                        <div className="arrow-flex">
                            <h3 className="cata">Catagories</h3>
                            <img className="arrow-align" src={ArrowDown} alt="logo" />
                        </div>

                        <div className="arrow-flex">
                            <h3 className="cata">Size</h3>
                            <img className="arrow-align" src={ArrowDown} alt="logo" />
                        </div>
                        <div className="arrow-flex">
                            <h3 className="cata" onClick={() => setShowColor((prevState) => !prevState)}>Colors</h3>
                            <img className="arrow-align" src={ArrowDown} alt="logo" />

                        </div>
                        {showColor && (
                            <div className="colors">
                                <h5 className="white">White</h5>
                                <h5 className="gray">Gray</h5>
                                <h5 className="black">Black</h5>
                                <h5 className="red">Red</h5>
                                <h5 className="maroon">Maroon</h5>
                                <h5 className="yellow">Yellow</h5>
                                <Link Link to="/Range" className="olive">Olive</Link>
                                <h5 className="lime">Lime</h5>
                                <h5 className="green">Green</h5>
                                <h5 className="aqua">Aqua</h5>
                                <h5 className="teal">Teal</h5>
                                <h5 className="blue">Blue</h5>

                            </div>
                        )}
                        <div className="arrow-flex">
                            <h3 className="cata">Discount Range</h3>
                            <img className="arrow-align" src={ArrowDown} alt="logo" />
                        </div>
                    </div>

                    <div className="saree-gird">
                        <div className="saree-grid-flex">
                            <div className="saree-desing color-desing">
                                <img className="color-logo" src={Color} onClick={() => SetShowDiff((prevState) => !prevState)} alt="logo" />
                                {showDiff && (
                                    <div className="color-location">
                                        <button className="color-view">Quick View</button>
                                    </div>
                                )}
                                <div className="saree-left">
                                    <h4 className="sareename">product type</h4>
                                    <h3 className="producttitle">product name goes here</h3>
                                    <div className="upsaree">
                                        <span className="sareerate">₹1,500</span>
                                        <span className="sareediscount">₹ 3,500/-</span>
                                    </div>
                                </div>
                            </div>

                            {list.map((item, index) =>
                            (
                                <div key={index} className="saree-desing">

                                    <img className="logos" src={item.img} alt="logo" />
                                    <div className="saree-left">
                                        <h4 className="sareename">product type</h4>
                                        <h3 className="producttitle">{item.productname}</h3>
                                        <div className="upsaree">
                                            <span className="sareerate">{item.price}</span>
                                            <span className="sareediscount">{item.discount}</span>
                                        </div>
                                    </div>
                                </div>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <span className="prev">Prev</span>
                <button className="pagi-color">1</button>
                <button className="pagi-color">2</button>
                <button className="pagi-color">3</button>
                <button className="pagi-color">4</button>
                <button className="pagi-color">5</button>
                <button className="pagi-color">6</button>
                <button className="pagi-color">7</button>
                <button className="pagi-color">8</button>
                <button className="pagi-color">9</button>
                <button className="pagi-color">10</button>
                <span className="prev">Next</span>
            </div>
        </div >


    )
}
export default CollectionColor;