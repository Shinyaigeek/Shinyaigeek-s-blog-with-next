import React, { useState } from "react";
import { withRouter } from "next/router";
import Head from "next/head"
import Layout from "../layout/Layout";
import { NextPage } from "next";
import Home from "../views/Home";
import HomeWrapper from "../views/HomeWrapper"

function HomePage(props: any):NextPage<{}> {
	const [page, handlePage] = useState(0);
	const [reverse, handleReverse] = useState(false);
	const itemList = props.router.query.itemList;
	const [items, handleItems] = useState(itemList);
	console.log(props);
	return (
		<div>
			<Head>
				<meta name="description" content="Yes" />
			</Head>
			<Home
				itemDatas={items}
				handleItems={handleItems}
				page={page}
				handlePage={handlePage}
				reverse={reverse}
				handleReverse={handleReverse}
				{...props}
			/>
		</div>
	);
}
export default withRouter(Layout(HomePage));