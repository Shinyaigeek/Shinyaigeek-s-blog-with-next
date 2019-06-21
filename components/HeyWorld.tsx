import React from "react";

import Typing from "react-typing-animation";

import "../assets/css/heyworld.scss";

export default function HeyWorld() {
	return (
		<Typing className="heyworld" speed={500}>
			<span>Shinyai<br/>Geek</span>
		</Typing>
	);
}
