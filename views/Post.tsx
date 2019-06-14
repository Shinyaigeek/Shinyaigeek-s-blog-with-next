import React,{useState} from 'react'

import ReactMarkdown from 'react-markdown'
import ShareButton from '../components/ShareButton';
import MailForm from '../components/MailForm'
import Content from '../components/Content'
import ShareModal from '../components/ShareModal'
import ThatsMe from '../components/ThatsMe'
import Splash from '../components/Splash'

import '../assets/css/post.scss'

export default function Post(props:any) {
    console.log(props)
    const content = require('../items/' + props.router.query.postIndex + ".md")
    console.log(content)
    return (
        <div className="content">
            <div className="content--main">
                <h1>{props.router.query.postInfo.name}</h1>
                {content && <Content content={content} />}
                {!content && <Splash />}
                <MailForm router={props.router.pathname}/>
                <ThatsMe />
            </div>
            <div className="share">
                <ShareButton handleShareFlag={props.handleShareFlag} />
                <ShareModal flag={props.shareFlag} handleFlag={props.handleShareFlag}>
                <div className="share--Twitter">Twitter</div>
                <div className="share--FaceBook">FaceBook</div>
                </ShareModal>
            </div>
        </div>
    )
}


