import React from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ShareButton from '../components/ShareButton';
import MailForm from '../components/MailForm'

import '../assets/css/layout.scss'

const Layout = (ChildComponent:any) =>  (props:any) => (
    <div className="layout">
        <Header />
            <div className="notHeader">
                <ChildComponent {...props} />
                <ShareButton />
                <MailForm router={props.router.pathname}/>
                <Footer />
            </div>
    </div>
)

export default Layout
