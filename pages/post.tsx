import React from 'react'
import { withRouter } from 'next/router';
import Layout from "../layout/Layout";

import Post from '../views/Post'

function PostPage(props:any) {
    console.log(props)
    return (
        <div>
            <Post {...props}/>
        </div>
    )
}

export default withRouter(Layout(PostPage))