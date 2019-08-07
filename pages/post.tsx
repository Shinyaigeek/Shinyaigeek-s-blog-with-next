import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import PageWrapper from '../views/HomeWrapper'
import Post from "../views/Post";

import Head from "next/head"

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
				<title>しにゃいの学習帳｜{props.router.query.postInfo.name}</title>
				<meta
					name="description"
					content={props.router.query.postInfo.description}
				/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta charset="utf-8" />
				<meta name="author" content="しにゃい" />
				<meta property="og:url" content="https//www.shinyaigeek.com" />
				<meta property="og:title" content={"しにゃいの学習帳｜" + props.router.query.postInfo.name} />
				<meta
					property="og:description"
					content={props.router.query.postInfo.description}
				/>
				<meta property="og:image" content="/static/icon.jpg" />
				<meta name="twitter:site" content="@Shinyaigeek" />
				<meta name="twitter:card" content="summery" />
				<link rel="icon" href="/static/monkey.ico" />
			</Head>
			<Post contactFlag={props.contactFlag} handleContactFlag={props.handleContactFlag} shareFlag={shareFlag} handleShareFlag={fixHtml(handleShareFlag)} {...props} />
		</div>
	);
}

export default withRouter(Layout(PostPage));
