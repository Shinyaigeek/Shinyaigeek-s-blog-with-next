import React,{useEffect} from 'react'

import ReactMarkdown from 'react-markdown'

import '../assets/css/Content.scss'

export default function Content(content:any) {
    useEffect(() => {
        const heading3 = document.querySelectorAll('h3')
        const content:any = document.querySelector(".blog__content")
        if(heading3.length){
            const headings = document.createElement('div')
            headings.setAttribute('class',"headings")
            let a;
            heading3.forEach((tag:any,index:number) => {
                tag.setAttribute('id',index)
                a = document.createElement('a');
                a.textContent = tag.innerText;
                a.setAttribute('href','#' + index)
                headings.appendChild(a)
            })
            content.appendChild(headings)
        }
    })
    return (
        <div className="blog__content">
            <ReactMarkdown source={content.content} escapeHtml={false} className="blog"/>
        </div>
    )
}
