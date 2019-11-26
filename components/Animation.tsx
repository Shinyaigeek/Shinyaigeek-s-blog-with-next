import React from "react";
import TweenOne from "rc-tween-one";
// import PathPlugin from "rc-tween-one/lib/plugin/PathPlugin";

import { Avatar } from "antd";

import "../assets/css/animation.scss";
// import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";
// TweenOne.plugins.push(BezierPlugin);
// TweenOne.plugins.push(PathPlugin);

interface Props {}

interface Animation {
  path: string;
  p: string;
  easePath: string;
  animation: Object;
  animation2: Object;
}

class Animation extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="welcome--animation">
        <div
          className="monkey"
          style={{
            width: "100%",
            height: "100%",
            zIndex: 3,
            position: "absolute"
          }}
        >
          <img
            src="/static/icon_transparent.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        </div>
        <div
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            bottom: "12%",
            left: "calc(50% - 25px)"
          }}
          className="earth"
        >
          <div className="earthY">
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain"
            }}
            src="/static/earth.png"
          />
          </div>
        </div>
      </div>
    );
  }
}

export default Animation;
