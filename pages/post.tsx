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
	return (
		<div>
			<Head>
				<meta name="description" content={props.router.query.postInfo.description} />
			</Head>
			<Post contactFlag={props.contactFlag} handleContactFlag={props.handleContactFlag} shareFlag={shareFlag} handleShareFlag={fixHtml(handleShareFlag)} {...props} />
		</div>
	);
}

export default withRouter(Layout(PageWrapper(PostPage)));
