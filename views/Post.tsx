import React from 'react'

import ReactMarkdown from 'react-markdown'

import '../assets/css/post.scss'

export default function Post(props:any) {
    console.log(props)
    const content = require('../items/' + props.router.query.postIndex + ".md")
    console.log(content)
    return (
        <div className="content">
            <ReactMarkdown source={content} escapeHtml={false}/>
        </div>
    )
}
