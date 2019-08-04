import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import PageWrapper from '../views/HomeWrapper'
import Post from "../views/Post";

import Head from "next/head"

import ReactGA from "react-ga"

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
	ReactGA.initialize('UA-125797546-2');
	ReactGA.pageview(window.location.pathname + window.location.search);
	return (
		<div>
			<Head>
				<meta name="description" content={props.router.query.postInfo.description} />
			</Head>
			<Post contactFlag={props.contactFlag} handleContactFlag={props.handleContactFlag} shareFlag={shareFlag} handleShareFlag={fixHtml(handleShareFlag)} {...props} />
		</div>
	);
}

export default withRouter(Layout(PostPage));
