import React from "react";

import TweenOne from "rc-tween-one";

import "../assets/css/ScrollDown.scss";

const p0 = "M0,100 L25,100 C34,20 40,0 100,0";
const p1 =
	"M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100";
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);

const animation = [
	{
		repeatDelay: 500,
		y: -70,
		repeat: -1,
		yoyo: true,
		ease: ease0,
		duration: 1000
	},
	{
		repeatDelay: 500,
		appearTo: 0,
		scaleX: 0,
		scaleY: 10,
		repeat: -1,
		yoyo: true,
		ease: ease1,
		duration: 999
	}
];

export default function ScrollDown() {
	return (
		<div className="scroll--down__animation">
			<TweenOne
				animation={animation}
                className="scroll--down__circle"
			/>
			<span>SCROLL DOWN</span>
		</div>
	);
}
