import React from "react";
import TweenOne from "rc-tween-one";
import PathPlugin from "rc-tween-one/lib/plugin/PathPlugin";

import { Avatar } from "antd";

import "../assets/css/animation.scss";
import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";
TweenOne.plugins.push(BezierPlugin);
TweenOne.plugins.push(PathPlugin);

interface Props {}

interface Animation {
	path:string,
	p:string,
	easePath:string,
	animation:Object,
	animation2:Object,
}

class Animation extends React.Component {
	constructor(props: Props) {
		super(props);
		this.path = `M393.86 24C404.46 50.17 325.04 87 216.62 106.21C108.19 125.41 11.56 119.76 0.95 93.6C-9.66 67.43 69.76 30.6 178.19 11.39C286.61 -7.81 383.25 -2.16 393.86 24Z`;
		this.p =
			"M123.5,89.5 C148,82.5 239.5,48.5 230,17.5 C220.5,-13.5 127,6 99.5,13.5 C72,21 -9.5,56.5 1.5,84.5 C12.5,112.5 99,96.5 123.5,89.5 Z";
		this.easePath =
			"M0,100 C7.33333333,89 14.3333333,81.6666667 21,78 C25.3601456,75.6019199 29.8706084,72.9026327 33,70 C37.0478723,66.2454406 39.3980801,62.0758689 42.5,57 C48,46.5 61.5,32.5 70,28 C77.5,23.5 81.5,20 86.5,16 C89.8333333,13.3333333 94.3333333,8 100,0";
		this.animation = {
			path: { x: this.path, y: this.path },
			duration: 5000,
			repeat: -1,
			ease: TweenOne.easing.path(this.easePath, { lengthPixel: 2800 }),
			type: "to"
		};
		this.animation2 = {
			z:100,
			duration: 5000,
			repeat: -1
		};
	}

	render() {
		return (
			<div
				style={{
					position: "absolute",
					height: 250,
					width: 250,
					bottom: "10px",
					right: "10px",
					transformStyle: "preserve-3d",
					transform:"perspective(5000px)",
					overflow:"hidden"
				}}
			>
				<TweenOne
					style={{
						transform: "translate3d(0,0,1px) perspective(5000px)",
						transformStyle: "preserve-3d",
						width: "250px",
						height: "250px",
					}}
					className="welcome--animation"
					animation={this.animation}
				>
					<img
						className="welcome--earth"
						src="/static/earth.png"
						style={{
							width: "250px",
							height: "250px",
							position: "absolute",
							overflow: "hidden",
							transform: "translate3d(0,0,0px) perspective(5000px)",
							transformStyle: "preserve-3d"
						}}
					/>
				{/* </TweenOne>
				<TweenOne
					style={{
						width: "90px",
						height: "90px",
						position: "relative",
						bottom: "250px",
						right: "100px",
						transform: "translate3d(0,0,2px) perspective(5000px)",
						transformStyle: "preserve-3d"
					}}
					animation={this.animation}
					className="welcome--animation"
				> */}
					<Avatar
						className="welcome--animation__img"
						src="/static/icon.jpg"
						size={80}
						style={{
							overflow: "hidden",
							transform: "translate3d(0,0,-2px) perspective(5000px)",
							transformStyle: "preserve-3d"
						}}
					/>
				</TweenOne>
			</div>
		);
	}
}

export default Animation;
