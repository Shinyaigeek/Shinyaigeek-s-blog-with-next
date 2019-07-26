import React from "react";

import ShareButton from "../components/ShareButton";
import MailForm from "../components/MailForm";
import Content from "../components/Content";
import ShareModal from "../components/ShareModal";
import ThatsMe from "../components/ThatsMe";
import Splash from "../components/Splash";

import { Avatar, Button, Icon } from "antd";

import "../assets/css/post.scss";

type PostInfo = {
	name: string;
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
    contactFlag:boolean;
    handleContactFlag:Function;
}

export default function Post(props: Props) {
    const content = require("../items/" + props.router.query.postIndex + ".md");
    console.log(props)
	return (
		<div className="content">
			<div className="content--main">
				<h1>{props.router.query.postInfo.name}</h1>
				{content && <Content content={content} />}
				{!content && <Splash />}
				<Button
					type="primary"
					shape="round"
					icon="mail"
					size="large"
                    className="contactme--button"
                    style={{
                        display:"block",
                        margin:"25px auto 15px auto"
                    }}
                    onClick={() => {props.handleContactFlag(true)}}
				>
					Contact
				</Button>
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
						<Avatar
							src="/static/twitter.svg"
							className="share--Twitter__icon"
						/>
						Twitter
					</div>
					<div className="share--FaceBook">
						<Avatar
							src="/static/facebook.svg"
							className="share--Facebook__icon"
						/>
						FaceBook
					</div>
					<div className="share--LikedIn">
						<Avatar
							src="/static/linkedin.svg"
							className="share--Linkedin__icon"
						/>
						LikedIn
					</div>
				</ShareModal>
			</div>
		</div>
	);
}
