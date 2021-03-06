import { Input } from "antd";
import { Modal } from "antd";

import React from "react";

import * as emailjs from "emailjs-com";

import "../assets/css/mailform.scss";

const { TextArea } = Input;

interface MailFormProps {
	router: string;
	contactFlag: boolean;
	handleContactFlag: Function;
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

	handleChange(e: any, where: string) {
		const { value } = e.target;
		let state: State = this.state;
		state[where] = value;
		this.setState(state);
	}

	async mailSubmit() {
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
		await emailjs.send(service_id, template_id, template_params, user_id)
		return this.props.handleContactFlag(false);
	}

	render() {
		return (
			<Modal
				title="Contact Me"
				visible={this.props.contactFlag}
				onCancel={() => this.props.handleContactFlag(false)}
				onOk={this.mailSubmit}
				className="modal"
				width={300}
			>
				<div className="name">
					<span className="text">名前：</span>
					<Input
						type="text"
						className="form"
						value={this.state.yourName}
						placeholder="Your Name"
						name="yourName"
						onChange={(event: any) =>
							this.handleChange(event, "yourName")
						}
					/>
				</div>
				<div className="subject">
					<span className="text">件名：</span>
					<Input
						type="text"
						value={this.state.subject}
						placeholder="Subject"
						name="subject"
						onChange={(event: any) =>
							this.handleChange(event, "subject")
						}
						className="form"
					/>
				</div>
				<div className="mailaddress">
					<span className="text">メールアドレス：</span>
					<Input
						type="email"
						value={this.state.yourAddress}
						placeholder="Your Email Address"
						name="yourAddress"
						onChange={(event: any) =>
							this.handleChange(event, "yourAddress")
						}
						className="form"
					/>
				</div>
				<TextArea
					value={this.state.content}
					placeholder="Content"
					name="content"
					onChange={(event: any) =>
						this.handleChange(event, "content")
					}
					autosize={{ minRows: 5 }}
				/>
			</Modal>
		);
	}
}
