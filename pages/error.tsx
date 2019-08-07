import React from "react";
import { withRouter } from 'next/router';
import Layout from "../layout/Layout";

interface Props{}

class HomePage extends React.Component {
    constructor(props:Props){
        super(props)
    }

      render(){
          return(
              <div>
                  Error
              </div>
          )
      }
}


export default withRouter(Layout(HomePage));
