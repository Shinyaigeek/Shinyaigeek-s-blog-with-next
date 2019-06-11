import React from 'react'

const PageWrapper = (Page:any) => {
    return class extends React.Component {
        static getInitialProps(ctx:any) {
            if(Page.getInitialProps)
                return Page.getInitialProps(ctx);
        }
        render() {
            return <Page {...this.props}/>
        }

    }
}

export default PageWrapper