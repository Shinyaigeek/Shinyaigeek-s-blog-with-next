import React from 'react'

import {Switch} from 'antd'

interface SortProps {
    reverse:boolean,
    handleReverse:Function
}

export default function SortButton(props:SortProps) {
    return (
        <div>
            <Switch checkedChildren="新しい順" unCheckedChildren="古い順" checked={props.reverse} onChange={() => {props.handleReverse(!props.reverse)}}/>
        </div>
    )
}
