import React from "react";

import Link from "next/link";

import { Tag } from "antd";

import "../assets/css/tags.scss";

type Tags = {
	tagName: string;
	tagPath: string;
	tagNameEn: string;
	tagColor: string;
};
type Prop = {
	props: Tags[];
	handleTag: Function;
};

function Chip(props: Tags, key: number) {
	return (
		<Tag
			color={props.tagColor}
			id={props.tagPath}
			onClick={(e: any) => {
				e.target.getAttribute("id");
			}}
			style={{
				fontSize:24,
				width:"minContent",
				padding:"5px 8px",
				margin:"3px 5px"
			}}
			key={key}
		>
			{props.tagName}
		</Tag>
	);
}

export default function Tags(tags: Prop) {
	return (
		<div className="tags">
			{tags.props.map((tag: Tags, index: number) => (
				<Link href={"/tag/" + tag.tagPath}>
					<a className="tag--anchor">
						<Chip {...tag} key={index} />
					</a>
				</Link>
			))}
		</div>
	);
}
