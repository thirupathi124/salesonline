import React from "react"
import "../styles/carosel.css"
import OneImg from "../images/1.png"
import TenImg from "../images/10.jpg"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import {photo} from "../map/Image";
import Seven from "../images/18.jpg"
import Eig from "../images/19.jpg"
import Nin from "../images/20.jpg"
import Ten from "../images/21.jpg"


function Carouse(){
    return(
        <div className="Carosel-section">
            <h1 className="caro-title">Pallet Furnitures Inspo</h1>
            <p className="caro-para">Get some more product in carosel section</p>
            <div className="caro-color">
            <Carousel>
         
             <Carousel.Item>
                <div className="caro-flex">

                <img src={Seven} alt="logo"/>
                <img src={Ten} alt="logo"/>
                <img src={Nin} alt="logo"/>
                <img src={Eig} alt="logo"/>
                </div> 
              </Carousel.Item>
              <Carousel.Item>
                   <div className="caro-flex">

                <img src={Seven} alt="logo"/>
                <img src={Eig} alt="logo"/>
                <img src={Nin} alt="logo"/>
                <img src={Ten} alt="logo"/>
                </div> 
              </Carousel.Item>
           </Carousel>
         </div>
        <div className="card-flex">
        <div className="caro-card">
            <Carousel>
                <Carousel.Item>
            <div className="people">
                <i style={{fontSize:"20px"}} className="bi-person"/>
                <div >
                <h4 className="name">Thirupahit</h4>
                              
                <i className="bi-star-fill"/>
                <i className="bi-star-fill"/>
                <i className="bi-star-fill"/>
                <i className="bi-star"/>
                </div>

            </div>
            <div className="goal">
                <p>I am very happy to used this app.and more usefull I am very happy to used this app.and more usefull</p>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="people">
                <i style={{fontSize:"20px"}} className="bi-person"/>
                <div >
                <h4 className="name">Thirupahit</h4>
                              
                <i className="bi-star-fill"/>
                <i className="bi-star-fill"/>
                <i className="bi-star-fill"/>
                <i className="bi-star"/>
                </div>

            </div>
            <div className="goal">
                <p>I am very happy to used this app.and more usefull I am very happy to used this app.and more usefull</p>
            </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="trans-layout">
            
                <div className="trans-img">
                    <img className="opacity" src={TenImg} alt="logo"/>
                </div>
                <div className="trans-center">
                <h5 className="caro-text">What's on new Articals</h5>
                <p className="artical">Latest new artical is avilable.please check below link.Latest new artical is avilable.please check below link</p>
                <button className="view">view article</button>
             </div>
           
         </div>

        </div>
        <div className="photos">
           <div className="photo-flex">
          <i style={{fontSize:"20px",color:"black"}} className="bi-instagram"/>
          <p className="insta">Instagram</p>
          </div>
         
          <div className="all-photo">
          {photo.map((item,index) =>(
            <img className="photo-size" src={item.img} alt="logo"/>
            ))}
           
          </div>
        
         </div>
           <div className="btn-insta">
             <button className="load">Load More...</button>
             <div className="follow">
             <i className="bi-instagram"/>
             <button className="fall" >Follow on Instagram</button>

             </div>
            </div>
        </div>

    )
}
export default Carouse;