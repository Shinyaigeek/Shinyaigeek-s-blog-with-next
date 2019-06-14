import React from "react";

import { Avatar } from "antd";

import "../assets/css/sharebutton.scss";

export default function ShareButton(props: any) {
	console.log(props);
	return (
		<Avatar
			onClick={() => props.handleShareFlag(true)}
			src="/static/ShareButton.svg"
			className="share--button__under"
			size={45}
		/>
	);
}
