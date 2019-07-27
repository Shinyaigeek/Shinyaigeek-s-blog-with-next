import React from "react";

import Link from "next/link";

import { Tag } from "antd";

import "../assets/css/tags.scss";
import { summarizers } from "istanbul-lib-report";

type Tags = {
	tagName: string;
	tagPath: string;
	tagNameEn: string;
	tagColor: string;
	handleTag: Function;
};
type Prop = {
	props: Tags;
	handleTag: Function;
};

function Chip(props: Prop, key: number) {
	return (
		<Tag
			color={props.props.tagColor}
			id={props.props.tagPath}
			onClick={(e: any) => {
				e.target.getAttribute("id");
			}}
			style={{
				fontSize:24,
				width:"minContent",
				padding:"5px 8px",
				margin:"3px 5px"
			}}
		>
			{props.props.tagName}
		</Tag>
	);
}

export default function Tags(tags: Prop) {
	console.log(tags);
	return (
		<div className="tags">
			{tags.tags.map((tag: any, index: number) => (
				<Link href={"/tag/" + tag.tagPath}>
					<a className="tag--anchor">
						<Chip props={tag} key={index} />
					</a>
				</Link>
			))}
		</div>
	);
}
