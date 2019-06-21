import React from 'react'

import {Switch} from 'antd'

interface SortProps {
    reverse:boolean,
    handleReverse:Function
}

export default function SortButton(props:SortProps) {
    console.log(props)
    return (
        <div>
            <Switch checkedChildren="新しい順" unCheckedChildren="古い順" checked={!props.reverse} onChange={(e:boolean) => {props.handleReverse(!e)}}/>
        </div>
    )
}
