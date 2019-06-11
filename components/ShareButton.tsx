import React from 'react'

import '../assets/css/sharebutton.scss'

export default function ShareButton(props:any) {
    console.log(props)
    return (
        <div onClick={() => props.handleShareFlag(true)}>
            <img className="share--button__under" src="/static/ShareButton.svg" alt="sharebutton" />
        </div>
    )
}
