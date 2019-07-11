import React from 'react'

import ShareButton from '../components/ShareButton';
import MailForm from '../components/MailForm'
import Content from '../components/Content'
import ShareModal from '../components/ShareModal'
import ThatsMe from '../components/ThatsMe'
import Splash from '../components/Splash'

import {Avatar} from 'antd'

import '../assets/css/post.scss'

type PostInfo = {
    name:string
}

type query = {
    postIndex:string,
    postInfo:PostInfo,
    content:string
}

type querywrapper= {
    query:query,
    pathname:string,
}

interface Props{
    router:querywrapper,
    handleShareFlag:Function,
    shareFlag:boolean,
}

export default function Post(props:Props) {
    console.log(props.router.query.content)
    // const content = require('../items/' + props.router.query.postIndex + ".md")
    return (
        <div className="content">
            <div className="content--main">
                <h1>{props.router.query.postInfo.name}</h1>
                <Content content={props.router.query.content} />
                <MailForm router={props.router.pathname}/>
                <ThatsMe />
            </div>
            <div className="share">
                <ShareButton handleShareFlag={props.handleShareFlag} />
                <ShareModal flag={props.shareFlag} handleFlag={props.handleShareFlag} NightMode={false} id="share--modal">
                    <div className="share--Twitter"><Avatar src="/static/twitter.svg" className="share--Twitter__icon"></Avatar>Twitter</div>
                    <div className="share--FaceBook"><Avatar src="/static/facebook.svg" className="share--Facebook__icon"></Avatar>FaceBook</div>
                    <div className="share--LikedIn"><Avatar src="/static/linkedin.svg" className="share--Linkedin__icon"></Avatar>LikedIn</div>
                </ShareModal>
            </div>
        </div>
    )
}


