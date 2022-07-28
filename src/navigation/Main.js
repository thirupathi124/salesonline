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
                    <Route path="/AllCloth" element={<SecondPage />} />
                    <Route path="/AllCloth" element={<Header />} />
                    <Route path="/sarees" element={<Sarees />} />
                    <Route path="/CollectionColor" element={<Color />} />

                    <Route path="/PaymentMode" element={<Pay />} />
                    <Route path="/OrderDetail" element={<Data />} />
                    <Route path="/OrderData" element={<OrderData />} />

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default Main;