import React from 'react'

import { withRouter } from 'next/router'

import Profile from '../views/Profile'

import Layout from '../layout/Layout'

import "../assets/css/profile.scss"

type Props = {
    handleContactFlag:Function
}

function profile(props:Props) {
    return (
        <div className="profile">
            <Profile handleContactFlag={props.handleContactFlag}/>
        </div>
    )
}

export default withRouter(Layout(profile))
