import React, { useState } from "react";
import { withRouter } from "next/router";
import Layout from "../layout/Layout";

import Home from "../views/Home";

import PageWrapper from '../views/IndexWrapper'

import axios from 'axios'

function HomePage(props: any) {
	const [page, handlePage] = useState(0);
	const [reverse, handleReverse] =useState(false)
	return (
		<div>
			<Home itemDatas={...props} page={page} handlePage={handlePage} reverse={reverse} handleReverse={handleReverse} />
		</div>
	);
}

// HomePage.getInitialProps = async function(){
// 	const itemDatas = axios.get('/get/homeinfo')
// 	debugger;
// 	console.log(itemDatas)
// 	return {itemDatas}
// }
export default withRouter(Layout(HomePage));
