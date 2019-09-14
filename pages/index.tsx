import React, { useState } from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import Layout from "../layout/Layout";
import Home from "../views/Home";

function HomePage(props: any) {
	const [page, handlePage] = useState(0);
	const [reverse, handleReverse] = useState(true);
	const itemList = props.router.query.itemList;
	const [items, handleItems] = useState(itemList);
	return (
		<div>
			<Head>
				<title>しにゃいの学習帳</title>
				<meta
					name="description"
					content="しにゃいのブログ。主に技術のことについて語ります。Node.jsが好き"
				/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="author" content="しにゃい" />
				<meta property="og:url" content="https://www.shinyaigeek.com" />
				<meta property="og:title" content="しにゃいの学習帳" />
				<meta
					property="og:description"
					content="しにゃいのブログ。主に技術のことについて語ります。Node.jsが好き"
				/>
				<meta
					property="og:image"
					content="https://www.shinyaigeek.com/icon.png"
				/>
				<meta name="twitter:site" content="@Shinyaigeek" />
				<meta name="twitter:card" content="summary" />
				<link rel="icon" href="/static/icon.png" />
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
