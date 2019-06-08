import React,{ useState, useEffect } from 'react'

import Avatar from 'react-toolbox/lib/avatar';

import '../assets/css/weocome1.scss'


export default function Welcome1() {

    const[top,handleTop] = useState(30)
    const [left,handleLeft] = useState(10)
    const [flag,handleFlag] = useState(1)

    

    useEffect(() => {
        const rightBorder = window.innerWidth - window.innerHeight * 0.3;
        setTimeout(function(){
            switch(flag){
                case 1:
                    handleTop(top - 0.2)
                    handleLeft(left - 2)
                    break;
                case 2:
                    handleTop(top - 0.2)
                    handleLeft(left + 2)
                    break;
                case 3:
                    handleTop(top + 0.2)
                    handleLeft(left + 2)
                    break;
                case 4:
                    handleTop(top + 0.2)
                    handleLeft(left - 2)
                    break;
                
            }
            if((flag === 2 && Math.floor(left) === Math.floor(rightBorder)) || (flag === 4 && Math.floor(top) === 55)){
                handleFlag(1)
            }else if((flag === 1 && Math.floor(left) === 0) || (flag === 3 && Math.floor(top) === 55)){
                handleFlag(2)
            }else if((flag === 4 && Math.floor(left) === 0) || (flag === 2 && Math.floor(top) === 0)){
                handleFlag(3)
            }else if((flag === 3 && Math.floor(left) === Math.floor(rightBorder)) || (flag === 1 && Math.floor(top) === 0)){
                handleFlag(4)
            }
        },0.1)
    })

    return (
        <div className="welcome1">
            <Avatar style={{top:top + "vh",left:left+"px"}}className="icon"><img src="/static/icon.jpg"/></Avatar>
        </div>
    )
}
