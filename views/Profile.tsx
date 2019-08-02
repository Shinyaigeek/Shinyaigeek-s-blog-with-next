import React from "react";

import { Icon, Button } from "antd";

type Props = {
	handleContactFlag: Function;
};

export default function Profile(props: Props) {
	return (
		<React.Fragment>
			<img src="/static/icon.jpg" />
			<div className="name">しにゃい/Shinyaigeek</div>
			<div className="social">
				<div className="twitter">
					<Icon type="twitter" style={{ color: "#38A1F3" }} />:
					<a href="https://twitter.com/Shinyaigeek">@Shinyaigeek</a>
				</div>

				<div className="github">
					<Icon type="github" style={{ color: "#000" }} />:
					<a href="https://github.com/Shinyaigeek">@Shinyaigeek</a>
				</div>

				<div className="linkedin">
					<Icon
						type="linkedin"
						style={{ color: "#0077B5" }}
						theme="filled"
					/>
					:
					<a href="https://www.linkedin.com/in/shinyaigeek/">
						@Shinyaigeek
					</a>
				</div>
			</div>

			<Button
				type="primary"
				shape="round"
				icon="mail"
				size="large"
                style={{ margin: "12px auto", display: "block" }}
                onClick={() => props.handleContactFlag(true)}
			>
				Contact Me
			</Button>
		</React.Fragment>
	);
}
