import React from "react";

import { withRouter } from "next/router";
import Head from "next/head";

import ProfilePage from "../views/Profile";

import Layout  from "../layout/Layout";

import "../assets/css/profile.scss";

function Profile(props: any) {
	return (
		<div className="profile">
			<Head>
				<title>しにゃいの学習帳｜プロフィール</title>
				<meta
					name="description"
					content="しにゃいのブログ。主に技術のことについて語ります。Node.jsが好き"
				/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="author" content="しにゃい" />
				<meta property="og:url" content="https//www.shinyaigeek.com" />
				<meta property="og:title" content="しにゃいの学習帳" />
				<meta
					property="og:description"
					content="しにゃいのブログ。主に技術のことについて語ります。Node.jsが好き"
				/>
				<meta property="og:image" content="/static/icon.jpg" />
				<meta name="twitter:site" content="@Shinyaigeek" />
				<meta name="twitter:card" content="summary" />
				<link rel="icon" href="/static/icon.jpg" />
			</Head>
			<ProfilePage handleContactFlag={props.handleContactFlag} />
		</div>
	);
}

export default withRouter(Layout(Profile));
