import React from "react";

// import TweenOne from "rc-tween-one";

import "../assets/css/ScrollDown.scss";

export default function ScrollDown() {
	return (
		<div className="scroll--down__animation">
			{/* <TweenOne
				animation={animation}
                className="scroll--down__circle"
			/> */}
			<div className="scroll--down__box" />
			<span>SCROLL DOWN</span>
		</div>
	);
}
