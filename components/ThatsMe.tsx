import React from "react";

import Link from "next/link"

import { Avatar,Icon } from "antd";

import "../assets/css/thatsme.scss";

export default function ThatsMe() {
	return (
		<div className="thatsMe">
			<Link href="/profile"><a className="thatsMe--icon"><img src="/static/icon.jpg" className="thatsMe--icon" /></a></Link>
			しにゃい/Shinyaigeek
			<br />
			エモいをハックしたい
			<br />
			<div className="mySnsBox">
				<div className="sns">
					<a id="twitter" href="https://twitter.com/Shinyaigeek">
						<Avatar src="/static/twitter.svg" />
					</a>
				</div>
				<div className="sns">
					<a id="github" href="https://github.com/Shinyaigeek">
						<Avatar src="/static/github.svg" />
					</a>
				</div>
				<div className="sns">
					<a
						id="linkedin"
						href="https://www.linkedin.com/in/shinyaigeek/"
					>
						<Avatar src="/static/linkedin.svg" />
					</a>
				</div>
			</div>
		</div>
	);
}