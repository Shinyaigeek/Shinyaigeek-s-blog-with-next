import React from "react";

import MiniTag from "./miniTag";

import "../assets/css/miniTags.scss";

interface Props {
	contents: string[];
}

export default function miniTags(props: Props){
	return (
		<div className="item--tags">
			{props.contents.map(function(
				content: string,
				index: NumberConstructor
			) {
				return <MiniTag content={content} />;
			})}
		</div>
	);
}
