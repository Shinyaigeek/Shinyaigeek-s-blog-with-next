import React from "react";

import { Button, Icon } from "antd";

import "../assets/css/sharebutton.scss";

export default function ShareButton(props: any) {
	return (
		<Button
			type="primary"
			shape="circle"
			icon="share-alt"
			size="large"
			className="share--button__under"
			onClick={() => {props.handleShareFlag(true)}}
		/>
	);
}
