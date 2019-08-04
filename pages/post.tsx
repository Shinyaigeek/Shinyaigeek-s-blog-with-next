import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import PageWrapper from '../views/HomeWrapper'
import Post from "../views/Post";

import Head from "next/head"

import CookieConsent from "react-cookie-consent";

import 'highlight.js/styles/github.css';

const fixHtml:Function = (handleShareFlag:Function) => (flag:boolean) => {
	if(flag){
		document.querySelector('html').style.overflow = "hidden";
	}else{
		document.querySelector('html').style.overflow = "visible";
	}
	return handleShareFlag(flag)
}

function PostPage(props: any) {
	const [shareFlag, handleShareFlag] = useState(false);
	return (
		<div>
			<Head>
				<meta name="description" content={props.router.query.postInfo.description} />
			</Head>
			<CookieConsent
				location="bottom"
				acceptOnScroll={true}
				buttonText="I understand"
				declineButtonText="I decline"
				cookieName="myAwesomeCookieName2"
				style={{ background: "#2B373B" }}
				buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
				expires={150}
			>
				This website uses cookies to enhance the user experience.{" "}
				<span style={{ fontSize: "10px" }}>
					This bit of text is smaller :O
				</span>
			</CookieConsent>
			<Post contactFlag={props.contactFlag} handleContactFlag={props.handleContactFlag} shareFlag={shareFlag} handleShareFlag={fixHtml(handleShareFlag)} {...props} />
		</div>
	);
}

export default withRouter(Layout(PostPage));
