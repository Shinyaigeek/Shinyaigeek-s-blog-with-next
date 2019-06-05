import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import '../assets/css/layout.scss'

// import dynamic from 'next/dynamic';

// const Scss=dynamic(import ('../assets/css/layout.scss'),{ssr:true});

const Scss = require('../assets/css/header.scss')

const Layout = (ChildComponent:any) =>  (props:any) => (
    <div className="layout">
        <Header />
            <div className="notHeader">
                <ChildComponent {...props} />
                <Footer />
            </div>
    </div>
)

export default Layout
