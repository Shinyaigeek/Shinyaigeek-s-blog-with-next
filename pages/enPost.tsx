import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import PageWrapper from '../views/IndexWrapper'
import Post from "../views/Post";

function EnPost(props: any) {
	const [shareFlag, handleShareFlag] = useState(false);
	return (
		<div>
			<Post {...props} shareFlag={shareFlag} handleShareFlag={handleShareFlag}/>
		</div>
	);
}

export default withRouter(Layout(PageWrapper(EnPost)));
