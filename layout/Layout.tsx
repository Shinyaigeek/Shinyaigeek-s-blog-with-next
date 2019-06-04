import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import '../assets/css/layout.scss'

const Layout = (ChildComponent:any) =>  (props:any) => (
    <div>
        <Header />
            <div className="notHeader">
                <ChildComponent {...props} />
                <Footer />
            </div>
    </div>
)

export default Layout
