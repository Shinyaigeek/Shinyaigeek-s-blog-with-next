import React from "react";

import Link from "next/link";

import { Avatar, Icon } from "antd";

import "../assets/css/thatsme.scss";

export default function ThatsMe() {
	return (
		<div className="thatsMe">
			<Link href="/profile">
				<a className="thatsMe--icon">
					<img src="/static/icon.jpg" className="thatsMe--icon" />
				</a>
			</Link>
			しにゃい/Shinyaigeek
			<br />
			エモいをハックしたい
			<br />
			<div className="mySnsBox">
				<div className="sns">
					<a id="twitter" href="https://twitter.com/Shinyaigeek">
						<Icon type="twitter" style={{ color: "#38A1F3",fontSize:"42px",margin:"8px auto" }} />
					</a>
				</div>
				<div className="sns">
					<a id="github" href="https://github.com/Shinyaigeek">
						<Icon type="github" style={{ color: "#000",fontSize:"42px",margin:"8px auto" }} />
					</a>
				</div>
				<div className="sns">
					<a
						id="linkedin"
						href="https://www.linkedin.com/in/shinyaigeek/"
					>
						<Icon
							type="linkedin"
							style={{ color: "#0077B5",fontSize:"42px",margin:"8px auto" }}
							theme="filled"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
