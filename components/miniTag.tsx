import React from 'react'

import {Tag} from 'antd'


interface Props{
    content:string
}
export default function miniTag(props:Props) {
    return (
        <div>
            <Tag>{props.content}</Tag>
        </div>
    )
}
