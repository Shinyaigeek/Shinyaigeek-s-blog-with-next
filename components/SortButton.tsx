import React from 'react'

import Switch from 'react-toolbox/lib/switch'

interface SortProps {
    reverse:boolean,
    handleReverse:Function
}

export default function SortButton(props:SortProps) {
    return (
        <div>
            <Switch 
                checked={props.reverse}
                onChange={(event:any) => {console.log(event); return props.handleReverse(event)}}
            />
        </div>
    )
}
