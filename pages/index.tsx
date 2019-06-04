import React from "react";
import { withRouter } from 'next/router';
import Layout from "../layout/Layout";

import Home from '../views/Home'

function HomePage(props:any) {
    return (
        <div>
            <Home itemDatas={props.router.query.itemList}/>
        </div>
    )
}


export default withRouter(Layout(HomePage));
