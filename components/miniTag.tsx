import React from 'react'

import Chip from 'react-toolbox/lib/chip'


interface Props{
    content:string
}
export default function miniTag(props:Props) {
    return (
        <div>
            <Chip>{props.content}</Chip>
        </div>
    )
}
