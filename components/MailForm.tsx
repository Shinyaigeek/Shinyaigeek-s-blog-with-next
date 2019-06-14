import {Input} from "antd";
import { Button } from "antd";

import React from "react";

import * as emailjs from "emailjs-com";

interface MailFormProps {
	router: string;
}

interface MailFormState {
	yourName: string;
	subject: string;
	yourAddress: string;
	router: string;
	content: string;
	accept: boolean;
}

type State = {
	yourName: string;
	subject: string;
	yourAddress: string;
	router: string;
	content: string;
	accept: boolean;
};

export default class MailForm extends React.Component<
	MailFormProps,
	MailFormState
> {
	constructor(props: MailFormProps) {
		super(props);
		this.state = {
			yourName: "",
			subject: "",
			yourAddress: "",
			router: this.props.router,
			content: "",
			accept: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.mailSubmit = this.mailSubmit.bind(this);
	}

	handleChange(e: string, where: string) {
		let state: State = this.state;
		state[where] = e;
		this.setState(state);
	}

	mailSubmit() {
		const template_params = {
			reply_to: this.state.yourAddress,
			subject: this.state.subject,
			from_name: this.state.yourName,
			message_html: this.state.content,
			url: this.state.router
		};
		var service_id = "default_service";
		var template_id = "template_vmKwN61k";
		var user_id = "user_lxYZJTHqNDAhtluEIHAmV";
		emailjs.send(service_id, template_id, template_params, user_id);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Input
					type="text"
					value={this.state.yourName}
					label="Your Name"
					name="yourName"
					onChange={(event: string) =>
						this.handleChange(event, "yourName")
					}
				/>
				<Input
					type="text"
					value={this.state.subject}
					label="Subject"
					name="subject"
					onChange={(event: string) =>
						this.handleChange(event, "subject")
					}
				/>
				<Input
					type="email"
					value={this.state.yourAddress}
					label="Your Email Address"
					name="yourAddress"
					onChange={(event: string) =>
						this.handleChange(event, "yourAddress")
					}
				/>
				<Input
					type="text"
					multiline
					value={this.state.content}
					label="Content"
					name="content"
					onChange={(event: string) =>
						this.handleChange(event, "content")
					}
				/>
                <Button
					type="primary"
                    onClick={this.mailSubmit}
                >
				Send
				</Button>
			</div>
		);
	}
}
