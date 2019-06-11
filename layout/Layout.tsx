import React from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Tags from '../components/Tags'

import '../assets/css/layout.scss'

const tags = [
    {
        tagName:"競プロ",
        tagPath:"Algo"
    },
    {
        tagName:"Python",
        tagPath:"Python"
    },
    {
        tagName:"プログラミング",
        tagPath:"Programing"
    },
    {
        tagName:"C/C++",
        tagPath:"C"
    },
    {
        tagName:"JavaScript",
        tagPath:"JavaScript"
    },
    {
        tagName:"ブログ",
        tagPath:"Blog"
    },
    {
        tagName:"ポエム",
        tagPath:"Poem"
    },
    {
        tagName:"React",
        tagPath:"React"
    },
]

const Layout = (ChildComponent:any) =>  (props:any) => (
    <div className="layout">
        <Header />
            <div className="notHeader">
                <ChildComponent {...props} />
                <Tags tags={tags}/>
                <Footer />
            </div>
    </div>
)

export default Layout
