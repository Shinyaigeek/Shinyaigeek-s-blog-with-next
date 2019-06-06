import React, { Component } from 'react'

import '../assets/css/footer.scss'

// import dynamic from 'next/dynamic';

// const Scss=dynamic(import ('../assets/css/footer.scss'),{ssr:true});

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                2019 Shinyaigeek
            </div>
        )
    }
}
