import React from 'react'

import Chip from 'react-toolbox/lib/chip'

type Tags = {
    tagName:string,
    tagPath:string
}

function Tag(props:Tags,key:number){
    return(
        <Chip>{props.props.tagName}</Chip>
    )
}

export default function Tags(tags:Tags[]) {
    return (
        <div>
            {tags.tags.map((tag:any,index:number)=> (
                <Tag props={tag} key={index}/>
            ))}
        </div>
    )
}
