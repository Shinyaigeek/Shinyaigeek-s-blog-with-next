import React from 'react'

import ReactMarkdown from 'react-markdown'

export default function Post(props:any) {
    console.log(props)
    const content = require('../items/' + props.router.query.postIndex + ".md")
    console.log(content)
    return (
        <div>
            view
            <ReactMarkdown source={content} escapeHtml={false}/>
        </div>
    )
}
