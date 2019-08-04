import React from 'react'

import { withRouter } from 'next/router'

import Profile from '../views/Profile'

import Layout from '../layout/Layout'
import CookieConsent from "react-cookie-consent";

import "../assets/css/profile.scss"

type Props = {
    handleContactFlag:Function
}

function profile(props:Props) {
    return (
        <div className="profile">
        <CookieConsent
				location="bottom"
				acceptOnScroll={true}
				buttonText="I understand"
				declineButtonText="I decline"
				cookieName="myAwesomeCookieName2"
				style={{ background: "#2B373B" }}
				buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
				expires={150}
			>
				This website uses cookies to enhance the user experience.{" "}
				<span style={{ fontSize: "10px" }}>
					This bit of text is smaller :O
				</span>
			</CookieConsent>
            <Profile handleContactFlag={props.handleContactFlag}/>
        </div>
    )
}

export default withRouter(Layout(profile))
