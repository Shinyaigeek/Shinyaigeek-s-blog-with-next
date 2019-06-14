import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import PathPlugin from "rc-tween-one/lib/plugin/PathPlugin";

import { Avatar } from "antd";

import "../assets/css/animation.scss";
import { url } from "inspector";
import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";
TweenOne.plugins.push(BezierPlugin);
TweenOne.plugins.push(PathPlugin);

interface Props {}

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
			type: "rotate"
		};
		this.animation2 = {
			bezier: {
				type: "quardratic",
				autoRotate: true,
				vars: [
					{ x: 150, y: 150 },
					{ x: 70, y: 150 },
					{ x: 70, y: 70 },
					{ x: 150, y: 70 }
				]
			},
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
					right: "10px"
					// overflow: "hidden"
				}}
			>
				<img
					className="welcome--earth"
					src="/static/earth.png"
					style={{
						width: "250px",
						height: "250px",
						position: "absolute",
						overflow: "hidden",
						transform: "translate(150,150,50)"
					}}
				/>
				{/* <clipPath id="clip-path-2" height={250} width={250} x = {0} y = {0} style={{height:"250px",width:"250px",position:"absolute"}}> */}
				{/* <use
						xlinkHref="#clip-path2"
						fill="white"
						transform="translate(-30, -40)"
					/>
				</clipPath>
				<TweenOne
					style={{
						width: "90px",
						height: "90px",
						position: "relative",
						bottom: "-10px",
						right: "100px",
						transform: "translateZ(10,50,300,120),rotate(-16)",
						zIndex: "500"
					}}
					clip-path="url(#clip-path-2)"
					animation={this.animation}
					className="welcome--animation"
				>
					<Avatar
						className="welcome--animation__img"
						src="/static/icon.jpg"
						size={80}
						style={{ zIndex: "500" }}
					/>
				</TweenOne> */}
				<TweenOne animation={this.animation2} style={{ color: "red" }}>
					aaaaa
				</TweenOne>
			</div>
		);
	}
}

Animation.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	paused: PropTypes.bool
};

export default Animation;
