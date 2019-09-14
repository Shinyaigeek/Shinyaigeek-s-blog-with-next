import React from "react";

import Animation from "./Animation";
import ScrollDown from "./ScrollDown"

import "../assets/css/weocome1.scss";

export default function Welcome1() {
	return (
		<div className="welcome1">
		<img className="banana" src="/static/banana.png" />
			<ScrollDown />
			<Animation />
		</div>
	);
}
