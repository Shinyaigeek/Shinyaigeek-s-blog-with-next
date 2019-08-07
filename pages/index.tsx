import React, { useState } from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import Layout from "../layout/Layout";
import { NextPage } from "next";
import Home from "../views/Home";
import HomeWrapper from "../views/HomeWrapper";

function HomePage(props: any): NextPage<{}> {
	const [page, handlePage] = useState(0);
	const [reverse, handleReverse] = useState(false);
	const itemList = props.router.query.itemList;
	const [items, handleItems] = useState(itemList);
	console.log(props);
	return (
		<div>
			<Head>
				<title>しにゃいの学習帳</title>
				<meta
					name="description"
					content="しにゃいのブログ。主に技術のことについて語ります。Node.jsが好き"
				/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta charset="utf-8" />
				<meta name="author" content="しにゃい" />
				<meta property="og:url" content="https//www.shinyaigeek.com" />
				<meta property="og:title" content="しにゃいの学習帳" />
				<meta
					property="og:description"
					content="しにゃいのブログ。主に技術のことについて語ります。Node.jsが好き"
				/>
				<meta property="og:image" content="/static/icon.jpg" />
				<meta name="twitter:site" content="@Shinyaigeek" />
				<meta name="twitter:card" content="summery" />
				<link rel="icon" href="/static/monkey.ico" />
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
