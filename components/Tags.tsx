import React from 'react'

import {Tag} from 'antd'

import '../assets/css/tags.scss'

type Tags = {
    tagName:string,
    tagPath:string,
    tagNameEn:string,
    tagColor:string
}
type Prop = {
    props:Tags
}

function Chip(props:Prop,key:number){
    return(
        <Tag color={props.props.tagColor} id={props.props.tagPath} onClick={(e:any) => {e.target.getAttribute('id')}}>{props.props.tagName}</Tag>
    )
}

export default function Tags(tags:Prop) {
    return (
        <div className="tags">
            {tags.tags.map((tag:any,index:number)=> (
                <Chip props={tag} key={index}/>
            ))}
        </div>
    )
}
