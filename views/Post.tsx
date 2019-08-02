import React from "react";

import ShareButton from "../components/ShareButton";
import MailForm from "../components/MailForm";
import Content from "../components/Content";
import ShareModal from "../components/ShareModal";
import ThatsMe from "../components/ThatsMe";
import Splash from "../components/Splash";
import MiniTags from "../components/miniTags";

import { Avatar, Button, Icon } from "antd";

import "../assets/css/post.scss";

type PostInfo = {
	name: string;
	date: string;
	tag: string[];
};

type query = {
	postIndex: string;
	postInfo: PostInfo;
};

type querywrapper = {
	query: query;
	pathname: string;
};

interface Props {
	router: querywrapper;
	handleShareFlag: Function;
	shareFlag: boolean;
	contactFlag: boolean;
	handleContactFlag: Function;
}

export default function Post(props: Props) {
	const content = require("../items/" + props.router.query.postIndex + ".md");
	console.log(props);
	return (
		<div className="content">
			<div className="content--main">
				<h1>{props.router.query.postInfo.name}</h1>
				<div className="date">
					<Icon type="edit" />
					{props.router.query.postInfo.date}
				</div>
				<div className="post--tag">
					<MiniTags contents={props.router.query.postInfo.tag} />
				</div>
				{content && <Content content={content} />}
				{!content && <Splash />}
				<ThatsMe />
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
			</div>
			<div className="share">
				<ShareButton handleShareFlag={props.handleShareFlag} />
				<ShareModal
					flag={props.shareFlag}
					handleFlag={props.handleShareFlag}
					NightMode={false}
					id="share--modal"
				>
					<div className="share--Twitter">
						<a
							href={
								"https://twitter.com/intent/tweet?url=https://www.shinyaigeek.com/p/" +
								props.router.query.postIndex +
								"&text=しにゃいの学習帳&via=shinyaigeek"
							}
						>
							<Icon type="twitter" />
							Twitter
						</a>
					</div>
					<div className="share--FaceBook">
						<a
							href={
								"https://www.facebook.com/sharer/sharer.php?u=https://www.shinyaigeek.com/p/" +
								props.router.query.postIndex
							}
						>
							<Icon type="facebook" />
							FaceBook
						</a>
					</div>
				</ShareModal>
			</div>
		</div>
	);
}
