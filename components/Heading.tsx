import React from "react";

import ReactHtmlParser from 'react-html-parser';

import {Anchor} from "antd"

const {Link} = Anchor

type Props = {
	content: string;
};

export default function Heading(props: Props) {
	const headings: string[] | null = props.content.match(
		/<h3 id=".+">.+<\/h3>/g
    );
    let anchorList = []
    headings && headings.forEach((heading) => {
        const splited = heading.split('"')[1]
        anchorList.push(
        <Anchor affix={false} offsetTop={100}>
            <Link href={"#" + splited} title={splited}>
            </Link>
        </Anchor>)
    })
	return (
		<div className="headings">
			{anchorList.map((anchor:any) => {
                return anchor
            })}
		</div>
	);
}
