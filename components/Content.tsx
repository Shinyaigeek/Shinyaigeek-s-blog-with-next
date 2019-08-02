import React, { useEffect } from "react";

import Link from "next/link"

import ReactMarkdown from "react-markdown";
import ReactHtmlParser from 'react-html-parser';

import CodeBlock from "./CodeBlock";
import Heading from "./Heading"

import "../assets/css/Content.scss";

export default function Content(content: any) {

    console.log(content)

	return (
		<div className="blog__content">
		<Link prefetch href="/home" >
		<a>aaaaa</a>
		</Link>
			<Heading content={content.content}/>

			<div className="blog">
				{ReactHtmlParser(content.content)}
			</div>
		</div>
	);
}
