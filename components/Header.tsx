import React from "react";

import Link from "next/link";

import "../assets/css/header.scss";

export default function Header() {
	return (
		<div className="header">
			<Link prefetch href="/">
				<a href="/" className="toHome">しにゃいの学習帳</a>
			</Link>
            <div className="contents">
                <Link prefetch href="/">
                    <a href="/" className="toHome">ブログ</a>
                </Link>
                <Link prefetch href="/">
                    <a href="/" className="toHome">プロフィール</a>
                </Link>
                <Link prefetch href="/">
                    <a href="/" className="toHome">作品集</a>
                </Link>
            </div>
		</div>
	);
}
