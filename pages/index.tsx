import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import Home from "../views/Home";

function HomePage(props: any) {
	const [page, handlePage] = useState(0);
	const [reverse, handleReverse] =useState(false);
	const itemList = props.router.query.itemList;
	const [items,handleItems] = useState(itemList)
	console.log(props)
	return (
		<div>
			<Home itemDatas={items} handleItems={handleItems} page={page} handlePage={handlePage} reverse={reverse} handleReverse={handleReverse} />
		</div>
	);
}
export default withRouter(Layout(HomePage));
