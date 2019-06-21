import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import PageWrapper from '../views/IndexWrapper'
import Post from "../views/Post";

import Head from "next/head"

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
	console.log(props)
	return (
		<div>
			<Head>
				<meta name="description" content={props.router.query.postInfo.description} />
			</Head>
			<Post {...props} shareFlag={shareFlag} handleShareFlag={fixHtml(handleShareFlag)}/>
		</div>
	);
}

export default withRouter(Layout(PageWrapper(PostPage)));
