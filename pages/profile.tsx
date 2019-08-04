import React from 'react'

import { withRouter } from 'next/router'

import Profile from '../views/Profile'

import Layout from '../layout/Layout'
import ReactGA from "react-ga"

import "../assets/css/profile.scss"

type Props = {
    handleContactFlag:Function
}

function profile(props:Props) {
	ReactGA.initialize('UA-125797546-2');
	ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="profile">
            <Profile handleContactFlag={props.handleContactFlag}/>
        </div>
    )
}

export default withRouter(Layout(profile))
