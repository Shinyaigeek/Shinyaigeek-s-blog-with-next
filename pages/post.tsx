import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import PageWrapper from '../views/IndexWrapper'
import Post from "../views/Post";

const fixHtml = (handleShareFlag:Function) => (flag:boolean) => {
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
			<Post {...props} shareFlag={shareFlag} handleShareFlag={fixHtml(handleShareFlag)}/>
		</div>
	);
}

export default withRouter(Layout(PageWrapper(PostPage)));
