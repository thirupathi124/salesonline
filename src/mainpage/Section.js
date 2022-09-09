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
                    <i style={{fontSize:"30px",color:"wheat"}} className="bi-cart-check"/>
                    <h4 className="ship-title">Bespoke Balcoins</h4>
                   
                </div>
                <p className="ship-detail">We have transparent all product and pakages.</p>
                </div>
                <div>
                  <div className="review-flex">
                    <i style={{fontSize:"30px",color:"wheat"}} className="bi-fast-forward"/>
                    <h4  className="ship-title">Fast Touraround</h4>
                   
                </div>
                <p className="ship-detail"> Sponsore by world wide tour We have transparent all product and pakages.</p>
                </div>
                <div>
                  <div className="review-flex">
                    <i style={{fontSize:"30px",color:"wheat"}} className="bi-truck"/>
                    <h4  className="ship-title">Shipping</h4>
                   
                </div>
                <p className="ship-detail">We have transparent all product and pakages.</p>
                </div>
                <div>
                  <div className="review-flex">
                    <i style={{fontSize:"30px",color:"wheat"}} className="bi-people"/>
                    <h4  className="ship-title">Direct Visits.</h4>
                   
                </div>
                <p className="ship-detail">We have transparent all product and pakages.</p>
                </div>
                

            </div>
       </>

    )
}