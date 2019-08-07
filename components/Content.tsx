import React from "react";

import ReactHtmlParser from 'react-html-parser';

import Heading from "./Heading"

import "../assets/css/Content.scss";

export default function Content(content: any) {
	return (
		<div className="blog__content">
			<Heading content={content.content}/>

			<div className="blog">
				{ReactHtmlParser(content.content)}
			</div>
		</div>
	);
}
