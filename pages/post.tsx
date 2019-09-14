import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import Post from "../views/Post";

import Head from "next/head";

import "highlight.js/styles/github.css";

function ensure<T>(
	argument: T | undefined | null,
	message: string = "This value was promised to always be there"
) {
	if (argument === undefined || argument === null) {
		throw new TypeError(message);
	}
	return argument;
}

const fixHtml: Function = (handleShareFlag: Function) => (flag: boolean) => {
	const doc:HTMLElement = ensure(document.querySelector("html"));
	if (doc) {
		if (flag) {
			doc.style.overflow = "hidden";
		} else {
			doc.style.overflow = "visible";
		}
		return handleShareFlag(flag);
	}
};

function PostPage(props: any) {
	const [shareFlag, handleShareFlag] = useState(false);
	return (
		<div>
			<Head>
				<title>
					しにゃいの学習帳｜{props.router.query.postInfo.name}
				</title>
				<meta
					name="description"
					content={props.router.query.postInfo.description}
				/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="author" content="しにゃい" />
				<meta property="og:url" content="https://www.shinyaigeek.com" />
				<meta
					property="og:title"
					content={
						"しにゃいの学習帳｜" + props.router.query.postInfo.name
					}
				/>
				<meta
					property="og:description"
					content={props.router.query.postInfo.description}
				/>
				<meta property="og:image" content="https://www.shinyaigeek.com/icon.png" />
				<meta name="twitter:site" content="@Shinyaigeek" />
				<meta name="twitter:card" content="summary" />
				<link rel="icon" href="/static/icon.png" />
			</Head>
			<Post
				contactFlag={props.contactFlag}
				handleContactFlag={props.handleContactFlag}
				shareFlag={shareFlag}
				handleShareFlag={fixHtml(handleShareFlag)}
				router={props.router}
			/>
		</div>
	);
}

export default withRouter(Layout(PostPage));
