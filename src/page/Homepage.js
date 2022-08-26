import React, { useState, } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';
import '../styles/Home.css';
import { cloth } from "../componets/Clothnav";
import { jewell } from "../componets/JewellNav";
import { fine } from "../componets/FineJewell";
import Heroimg from '../../src/asset/image/hero.png';
import Arrivalone from "../asset/image/arrival1.png";
import Arrivaltwo from "../asset/image/arrival2.png";
import Arrivalthree from "../asset/image/arrival3.png";
import Arrivalfour from "../asset/image/arrival4.png";
import Slideleft from "../asset/icons/slide-left.svg";
import Slideright from "../asset/icons/slide-right.svg";
import Collection from "../asset/image/collection.png";
import Line from "../asset/logo/line-logo.png";
import Lorem from "../asset/image/lorem.png";
import Loremone from "../asset/image/lorem1.png";
import Dress from "../asset/image/dress.png";
import Inves from "../asset/image/investment.png";
import Shopbig from "../asset/image/shop-bag.png";
import Carousel from 'react-bootstrap/Carousel';
import PayMode from "../componets/PayMode";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "bootstrap";


function Homepage() {
  const [ShowView, SetViewnotification] = useState(false);
  const [ShowJewell, setShowJewell] = useState(false);
  const slide = [
    {
      type: "product type",
      product: "Product name goes here",
      price: "1,500",
      discount: "3,500",
      icon: Arrivalone,
    },
    {
      type: "product type",
      product: "Product name goes here",
      price: "1,500",
      discount: "3,500",
      icon: Arrivaltwo,
    },
    {
      type: "product type",
      product: "Product name goes here",
      price: "1,500",
      discount: "3,500",
      icon: Arrivalthree,
    },
    {
      type: "product type",
      product: "Product name goes here",
      price: "1,500",
      discount: "3,500",
      icon: Arrivalfour,
    },



  ]

  const [showPay, setShowPay] = useState(false);

  return (
    <>

      <div className="full-layout">
        <div className={`  ${showPay ? "show-pay" : ""}`}>
          <Carousel>
            <Carousel.Item>
              <div className="hero">
                <img className="hero-img" src={Heroimg} alt="logo" />
              </div>


              <h1 className="hero-title">MODERN SAREES</h1>
              <h4 className="hero-collection">COLLECTIONS</h4>
              <button className="hero-shop">Shop Now</button>
            </Carousel.Item>
            <Carousel.Item>
              <div className="hero">
                <img className="hero-img" src={Heroimg} alt="logo" />
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="hero-brandname">
            <h3 className="hero-first">vogue</h3>
            <h3 className="hero-second">new york</h3>
            <h3 className="hero-third">the wall street journal</h3>
            <h3 className="hero-four"><b>the</b> guardian</h3>
            <h3 className="hero-five">food &amp; wine</h3>
            <h3 className="hero-six">Traveler</h3>
            <h3 className="hero-seven">Bloomberg</h3>
          </div>



          <div className="new-arrival">
            <div className="line-flex">
              <div className="inline">
                <h3 className="arrival">New Arrivals</h3>

              </div>

            </div>
            <section>
              <Carousel>
                <Carousel.Item>
                  <div className="slide-show">
                    <div className="arrivals">
                      <img className="right" src={Slideright} alt="logo" />
                      {slide.map((item, index) => (
                        <div key={index} className="slidejs">

                          <div className="arrival-img-diff">
                            <img className="new-arival" src={item.icon} alt="logo" />

                            {/* <div className="try">
                              <button className="try-view">Quick View</button>
                            </div> */}

                            <div className="arrival-align">
                              <div className="arrival-text">{item.type}</div>
                              <h4 className="title">{item.product}</h4>

                              <span className="rate">₹ {item.price}/-</span>
                              <span className="no-rate">₹ {item.discount}/-</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <img className="left" src={Slideleft} alt="logo" />
                    </div>
                  </div>


                </Carousel.Item>
                <Carousel.Item>
                  <div className="slide-show">
                    <div className="arrivals">
                      <img className="right" src={Slideright} alt="logo" />
                      {slide.map((item, index) => (
                        <div key={index} className="slidejs">

                          <div className="arrival-img-diff">
                            <img className="new-arival" src={item.icon} alt="logo" />

                            {/* <div className="try">
                              <button className="try-view">Quick View</button>
                            </div> */}
                            <div className="arrival-align">
                              <div className="arrival-text">{item.type}</div>
                              <h4 className="title">{item.product}</h4>

                              <span className="rate">₹ {item.price}/-</span>
                              <span className="no-rate">₹ {item.discount}/-</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <img className="left" src={Slideleft} alt="logo" />
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </section>
            <div className="collection">
              <div>
                <img className="modern-saree" src={Collection} alt="logo" />
              </div>
              <div>
                <h2 className="col-title">MODERN SAREES </h2>
                <h3 className="col-text"> COLLECTIONS</h3>
                <p className="col-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to="/sarees" className="link-btn">check it out</Link>
              </div>
            </div>

          </div>

          <div className="women-cloth">
            <div className="cloth-title">Women Apparels</div>
            <Carousel>
              <Carousel.Item>
                <div className="cloth-flex">
                  <img className="right" src={Slideright} alt="logo" />
                  {cloth.map((item, index) => (
                    <div key={index} className="first-try">
                      <img className="moreview" src={item.icon} alt="logo" />
                      <h4 className="cloth-name">{item.title}</h4>
                      <button className="cloth-btn class-name" onClick={() => setShowPay(true)}>view all</button>
                    </div>
                  ))}
                  <img className="left" src={Slideleft} alt="logo" />


                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="cloth-flex">
                  <img className="right" src={Slideright} alt="logo" />
                  {cloth.map((item, index) => (
                    <div key={index} className="first-try">
                      <img className="moreview" src={item.icon} alt="logo" />
                      <h4 className="cloth-name">{item.title}</h4>
                      <button className="cloth-btn class-name">view all</button>
                    </div>
                  ))}
                  <img className="left" src={Slideleft} alt="logo" />

                </div>
              </Carousel.Item>
            </Carousel>

          </div>


          <div className="ipsum">
            <div className="lorem-flex">
              <h1 className="lorem-title">LOREM IPSUM</h1>
              <p className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              <button className="lorem-btn">check it out</button>
            </div>
            <div className="lorem-position">
              <img className="img-size" src={Lorem} alt="logo" />

            </div>
            <img className="lorem-img" src={Loremone} alt="logo" />


          </div>

          <div className="jewell">
            <h3 className="jewell-title">Jewellery</h3>
            <h3 className="jewell-head">Fashion Jewellery</h3>
            <Carousel>
              <Carousel.Item>

                <div className="jewell-flex">
                  <img className="right" src={Slideright} alt="logo" />
                  {jewell.map((item, index) => (
                    <div key={index} className="jewell-style">
                      <img className="jeweell" src={item.icon} alt="logo" />

                      {/* <div className="jewell-pop">
                        <button className="try-jewell">Quick View</button>
                      </div> */}

                      <div className="arrival-align">
                        <p className="arrival-text">{item.type}</p>
                        <h4 className="title">{item.product}</h4>

                        <span className="rate">₹ {item.price}/-</span>
                        <span className="no-rate">₹ {item.discount} /-</span>
                      </div>
                    </div>
                  ))}
                  <img className="left" src={Slideleft} alt="logo" />
                </div>


              </Carousel.Item>
              <Carousel.Item>

                <div className="jewell-flex">
                  <img className="right" src={Slideright} alt="logo" />
                  {jewell.map((item, index) => (
                    <div key={index} className="jewell-style">
                      <img className="jeweell" src={item.icon} alt="logo" />

                      <div className="arrival-align">
                        <p className="arrival-text">{item.type}</p>
                        <h4 className="title">{item.product}</h4>

                        <span className="rate">₹ {item.price}/-</span>
                        <span className="no-rate">₹ {item.discount} /-</span>
                      </div>
                    </div>
                  ))}
                  <img className="left" src={Slideleft} alt="logo" />
                </div>


              </Carousel.Item>

            </Carousel>
            <button className="jewellbtn">view all</button>

            <div className="fine-jewell">
              <h1 className="fine-title">Fine Jewellery</h1>
              <Carousel>
                <Carousel.Item>
                  <div className="fine-flex">
                    <img className="right" src={Slideright} alt="logo" />
                    {fine.map((item, index) => (
                      <div key={index} className=" fine fine-radius">
                        <img className="fine-width" src={item.icon} alt="logo" />
                        <div className="arrival-align">
                          <p className="arrival-text">{item.type}</p>
                          <h4 className="title">{item.product}</h4>

                          <span className="rate">₹ {item.price} /-</span>
                          <span className="no-rate">₹ {item.discount} /-</span>
                        </div>

                      </div>
                    ))}
                    <img className="left" src={Slideleft} alt="logo" />


                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="fine-flex">
                    <img className="right" src={Slideright} alt="logo" />
                    {fine.map((item, index) => (
                      <div key={index} className=" fine fine-radius">
                        <img className="fine-width" src={item.icon} alt="logo" />
                        <div className="arrival-align">
                          <p className="arrival-text">{item.type}</p>
                          <h4 className="title">{item.product}</h4>

                          <span className="rate">₹ {item.price} /-</span>
                          <span className="no-rate">₹ {item.discount} /-</span>
                        </div>

                      </div>
                    ))}
                    <img className="left" src={Slideleft} alt="logo" />
                  </div>
                </Carousel.Item>
              </Carousel>
              <button className="jewellbtn">view all</button>
            </div>


          </div>

          <div className="about-backcolor">
           
            <h3 className="color-title">Kariga Fashion is all about</h3>
            <div className="about-flex">
              <div className="first-content">
                <img className="logo" src={Dress} alt="logo" />
                <h4 className="about-title">Lorem Ipsum</h4>
                <p className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="first-content">
                <img className="logo" src={Inves} alt="logo" />
                <h4 className="about-title">Lorem Ipsum</h4>
                <p className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="first-content">
                <img className="logo" src={Shopbig} alt="logo" />
                <h4 className="about-title">Lorem Ipsum</h4>
                <p className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

          </div>
          <PayMode setShowPay={setShowPay} />
        </div>

      </div>
    </>

  );
}
export default Homepage;