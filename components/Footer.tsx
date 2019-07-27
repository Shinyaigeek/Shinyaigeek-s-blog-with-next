import React, { Component } from 'react'

import '../assets/css/footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src="/static/copyright.svg" className="copyright--icon"/>2019 Shinyaigeek
            </div>
        )
    }
}
