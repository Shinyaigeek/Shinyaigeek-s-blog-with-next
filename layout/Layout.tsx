import React from "react";

import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Tags from "../components/Tags";

import "../assets/css/layout.scss";

const tags = [
	{
		tagName: "競プロ",
		tagNameEn: "Code",
		tagPath: "Algo",
		tagColor: "orange"
	},
	{
		tagName: "Python",
		tagPath: "Python",
		tagNameEn: "Python",
		tagColor: "blue"
	},
	{
		tagName: "プログラミング",
		tagPath: "Programing",
		tagNameEn: "Programing",
		tagColor: "cyan"
	},
	{
		tagName: "C/C++",
		tagPath: "C",
		tagNameEn: "C/C++",
		tagColor: "green"
	},
	{
		tagName: "JavaScript",
		tagPath: "JavaScript",
		tagNameEn: "JavaScript",
		tagColor: "volcano"
	},
	{
		tagName: "ブログ",
		tagPath: "Blog",
		tagNameEn: "Blog",
		tagColor: "magenta"
	},
	{
		tagName: "ポエム",
		tagPath: "Poem",
		tagNameEn: "Poem",
		tagColor: "lime"
	},
	{
		tagName: "React",
		tagPath: "React",
		tagNameEn: "React",
		tagColor: "geekblue"
	}
];

const Layout = (ChildComponent: any) => (props: any) => (
	<div className="layout">
		<Head>
			<title>しにゃいの学習帳</title>
			<noscript>
				<strong>
					We're sorry but shinyaigeek doesn't work properly without
					JavaScript enabled. Please enable it to continue.
				</strong>
			</noscript>
		</Head>
		<Header />
		<div className="notHeader">
			<ChildComponent {...props} />
			<Tags tags={tags} handleTag={props.handleTag} />
			<Footer />
		</div>
	</div>
);

export default Layout;
