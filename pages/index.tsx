import React, { useState } from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import Layout from "../layout/Layout";
import { NextPage } from "next";
import Home from "../views/Home";
import CookieConsent from "react-cookie-consent";

function HomePage(props: any): NextPage<{}> {
	const [page, handlePage] = useState(0);
	const [reverse, handleReverse] = useState(false);
	const itemList = props.router.query.itemList;
	const [items, handleItems] = useState(itemList);
	return (
		<div>
			<Head>
				<meta name="description" content="Yes" />
			</Head>
			<CookieConsent
				location="bottom"
				acceptOnScroll={true}
				buttonText="I understand"
				declineButtonText="I decline"
				cookieName="myAwesomeCookieName2"
				style={{ background: "#2B373B" }}
				buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
				expires={150}
			>
				This website uses cookies to enhance the user experience.{" "}
				<span style={{ fontSize: "10px" }}>
					This bit of text is smaller :O
				</span>
			</CookieConsent>
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
