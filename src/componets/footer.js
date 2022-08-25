import React from "react";
import '../styles/Header.css';
import Footmap from "../asset/icons/map-pin-fill.svg";
import Whatapp from "../asset/icons/whatsapp-fill.svg";
import Mail from "../asset/icons/mail-fill.svg";
import Time from "../asset/icons/time-fill.svg";
import Location from "../asset/image/location.png";
import Face from "../asset/icons/facebook-fill.svg";
import Insta from "../asset/icons/instagram-fill.svg";
import Twit from "../asset/icons/twitter-fill.svg";
import App from "../asset/icons/whatsapp-fill.svg";
import You from "../asset/icons/youtube-fill.svg";
import Loop from "../asset/logo/loop.png";



function Footer() {
    return (
        <div className="footer">

            <div className="footer-flex">
                <div className="first-grid">
                    <h1 className="foot-logo">kariga</h1>
                    <h4 className="foot-title">fashion</h4>
                    <div className="map-fill">
                        <img className="hang" src={Footmap} alt="logo" />
                        <p className="map-text">Bharathiyar Salai,<br /> Tiruchirappalli-620001,<br /> TamilNadu,<br /> India.</p>
                    </div>
                    <div className="what-fill">
                        <img src={Whatapp} alt="logo" />
                        <p className="what-text">+91 88704 15257</p>
                    </div>
                    <div className="email-fill">
                        <img src={Mail} alt="logo" />
                        <p className="mail">karigafashion@gmail.com</p>
                    </div>
                    <div className="time-fill">
                        <img src={Time} alt="logo" />
                        <p className="time"> 09:00 am to 8:00 pm</p>
                    </div>
                </div>
                <div className="second-grid">
                    <h1 className="help-title">Help</h1>
                    <p className="help">Order Status</p>
                    <p className="help"> Returns &amp; Exchange</p>
                    <p className="help"> Terms &amp; Conditions</p>
                    <p className="help">Privacy Policy</p>
                </div>
                <div className="third-grid">
                    <img className="map" src={Location} alt="lgo" />
                </div>

            </div>
            <div className="foot-boot">
                <div className="bor"></div>
                <div className="bot">


                    <div className="copyright">Copyright © Thirupuathi | All Rights Received</div>
                    <div>
                        <img className="gap" src={Face} />
                        <img className="gap" src={Insta} />
                        <img className="gap" src={Twit} />
                        <img className="gap" src={You} />
                        <img className="gap" src={App} />
                    </div>

                    <div className="logo-flex">
                        {/* <div className="by">powered by</div>
                        <img src={Loop} /> */}
                    </div>
                </div>
            </div>
        </div >

    );
}
export default Footer;