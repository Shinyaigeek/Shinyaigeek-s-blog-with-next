import React from "react";

import ShareButton from "../components/ShareButton";
import Content from "../components/Content";
import ShareModal from "../components/ShareModal";
import ThatsMe from "../components/ThatsMe";
import Splash from "../components/Splash";
import MiniTags from "../components/miniTags";

import { Icon } from "antd";

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
	const content = require('../items/' + props.router.query.postIndex + ".md")
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
				<Content content={content} />
				<ThatsMe />
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
