import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

type Props = {
    language:any;
    value:any
}

export default function CodeBlock(props:Props) {

	return <SyntaxHighlighter language={props.language}>{props.value}</SyntaxHighlighter>;
}
