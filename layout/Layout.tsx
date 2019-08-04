import React, { useState,useEffect } from "react";

import Head from "next/head";

import { withRouter } from "next/router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import MailForm from "../components/MailForm"

import { initGA, logPageView } from "../utils/analytics.js";

import "../assets/css/layout.scss";

const tags = [
	{
		tagName: "競プロ",
		tagNameEn: "Code",
		tagPath: "Algo",
		tagColor: "orange"
	},
	{
		tagName: "Python",
		tagPath: "Python",
		tagNameEn: "Python",
		tagColor: "blue"
	},
	{
		tagName: "プログラミング",
		tagPath: "Programing",
		tagNameEn: "Programing",
		tagColor: "cyan"
	},
	{
		tagName: "C/C++",
		tagPath: "C",
		tagNameEn: "C/C++",
		tagColor: "green"
	},
	{
		tagName: "JavaScript",
		tagPath: "JavaScript",
		tagNameEn: "JavaScript",
		tagColor: "volcano"
	},
	{
		tagName: "ブログ",
		tagPath: "Blog",
		tagNameEn: "Blog",
		tagColor: "magenta"
	},
	{
		tagName: "ポエム",
		tagPath: "Poem",
		tagNameEn: "Poem",
		tagColor: "lime"
	},
	{
		tagName: "React",
		tagPath: "React",
		tagNameEn: "React",
		tagColor: "geekblue"
	}
];

const Layout = (ChildComponent: any) =>
	function(props: any) {
		const [menuFlag, handleMenuFlag] = useState(false);
		const [contactFlag, handleContactFlag] = useState(false);
		useEffect(() => {
			// @ts-ignore
			if (!window.GA_INITIALIZED) {
				initGA();
				// @ts-ignore
				window.GA_INITIALIZED = true;
			}
			logPageView();
		});
		return (
			<div className="layout">
				<Head>
					<title>しにゃいの学習帳</title>
					<noscript>
						<strong>
							We're sorry but shinyaigeek doesn't work properly
							without JavaScript enabled. Please enable it to
							continue.
						</strong>
					</noscript>
				</Head>
				<Header menuFlag={menuFlag} handleMenuFlag={handleMenuFlag} contactFlag={contactFlag} handleContactFlag={handleContactFlag}/>
				<div className="notHeader">
					<ChildComponent {...props} contactFlag={contactFlag} handleContactFlag={handleContactFlag}/>
					<Tags tags={tags} handleTag={props.handleTag} />
					<Footer />
				</div>
				<MailForm router="layout" contactFlag={contactFlag} handleContactFlag={handleContactFlag}/>
			</div>
		);
	};

export default Layout;
