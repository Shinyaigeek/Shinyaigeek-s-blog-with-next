import React from "react";

import Link from "next/link";

import { Button, Drawer } from "antd";

import "../assets/css/header.scss";

export default function Header(props: any) {
	return (
		<div className="header">
			<div className="title">
				<Link prefetch href="/">
					<a href="/" className="toHome">
						<img src="/static/icon_transparent.png" />
						しにゃいの学習帳
					</a>
				</Link>
			</div>
			<div className="contents">
				<div className="to">
					<Link prefetch href="/">
						<a href="/" className="toHome">
							ブログ
						</a>
					</Link>
				</div>
				<div className="to">
					<Link prefetch href="/">
						<a href="/" className="toHome">
							プロフィール
						</a>
					</Link>
				</div>
				<div className="to">
					<Link prefetch href="/">
						<a href="/" className="toHome">
							作品集
						</a>
					</Link>
				</div>
				<div className="to">コンタクト</div>
			</div>
			<div className="contents_hamberger">
				<div
					className={
						!props.menuFlag ? "menu-trigger" : "menu-trigger active"
					}
					id="menu-trigger02"
					onClick={() => {
						props.handleMenuFlag(!props.menuFlag);
					}}
				>
					<span />
					<span />
					<span />
				</div>
				<Drawer
					visible={props.menuFlag}
					onClose={() => props.handleMenuFlag(false)}
					width="100%"
					closable={false}
				>
					<ul className="hamberger--menus">
						<li>REM</li>
						<li>SH</li>
						<li>TEAM</li>
						<li>COMPANY</li>
						<li onClick={() => props.handleContactFlag(true)}>
							CONTACT
						</li>
					</ul>
				</Drawer>
			</div>
		</div>
	);
}
