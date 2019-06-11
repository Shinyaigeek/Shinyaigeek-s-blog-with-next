import React,{useState} from 'react'

import ReactMarkdown from 'react-markdown'
import ShareButton from '../components/ShareButton';
import MailForm from '../components/MailForm'
// import ShareModal from '../components/ShareModal'

import dynamic from 'next/dynamic';

// const ShareModal=dynamic(import ('../components/ShareModal'),{ssr:true});
import ShareModal from '../components/ShareModal'

import '../assets/css/post.scss'

export default function Post(props:any) {
    console.log(props)
    const content = require('../items/' + props.router.query.postIndex + ".md")
    return (
        <div className="content">
            {/* <div className={props.shareFlag?"content--main__fixed":"content--main"}> */}
            <div className="content--main">
                <h1>{props.router.query.postInfo.name}</h1>
                <ReactMarkdown source={content} escapeHtml={false} className="blog"/>
                <MailForm router={props.router.pathname}/>
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


