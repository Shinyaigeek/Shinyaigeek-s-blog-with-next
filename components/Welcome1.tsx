import React from "react";

import HeyWorld from "./HeyWorld";
import Animation from "./Animation";
import ScrollDown from "./ScrollDown"

import "../assets/css/weocome1.scss";

export default function Welcome1() {
	return (
		<div className="welcome1">
			<ScrollDown />
			<Animation />
		</div>
	);
}
