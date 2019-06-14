import React from 'react'

import { withRouter } from 'next/router'

import AboutMe from '../components/AboutMe'

import Layout from '../layout/Layout'

function About() {
    return (
        <div className="about">
            <AboutMe />
        </div>
    )
}

export default withRouter(Layout(About))
