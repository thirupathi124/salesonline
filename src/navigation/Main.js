import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sarees from '../page/Saress';
import Homepage from '../page/Homepage';
import Color from '../page/ColorCollection';
import Data from "../page/Order";
import SecondPage from "../page/AllCloth";
import Pay from "../page/PayMent";
import OrderData from "../page/OrderData";
import Header from '../componets/Header';


function Main() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={<Homepage />} />
                    <Route path="/allcloth" element={<SecondPage />} />
                    <Route path="/allcloth" element={<Header />} />
                    <Route path="/sarees" element={<Sarees />} />
                    <Route path="/collectioncolor" element={<Color />} />

                    <Route path="/paymentmode" element={<Pay />} />
                    <Route path="/orderdetail" element={<Data />} />
                    <Route path="/orderdata" element={<OrderData />} />

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default Main;