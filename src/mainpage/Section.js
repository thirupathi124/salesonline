import React from "react"
import "../styles/section.css"
import FourImg from "../images/5.png"
import {seller} from "../map/Product"


export default function Section(){
    return(
        <>
        <div className="section">
             <h1 className="section-title">Our Best Sellers</h1>
            <div className="grid">
            {seller.map((item,index) =>(
             <div className="sellers-product">
                <img className="sell-img" src={item.img} alt="logo"/>
                <p className="fire">{item.name}</p>
                <p className="price">{item.price}</p>   
                <button className="option">Add Card</button>
             </div>
             ))}
                </div>
              </div>

            <div className="shipping">
                <div>
                  <div className="review-flex">
                    <i className="bi-check"/>
                    <h1>Bespoke Balcoins</h1>
                   
                </div>
                <p className="ship-detail">We have transparent all product and pakages.</p>
                </div>
                <div>
                  <div className="review-flex">
                    <i className="bi-check"/>
                    <h1>Fast Touraround</h1>
                   
                </div>
                <p className="ship-detail"> Sponsore by world wide tour We have transparent all product and pakages.</p>
                </div>
                <div>
                  <div className="review-flex">
                    <i className="bi-check"/>
                    <h1>Shipping</h1>
                   
                </div>
                <p className="ship-detail">We have transparent all product and pakages.</p>
                </div>
                

            </div>
       </>

    )
}