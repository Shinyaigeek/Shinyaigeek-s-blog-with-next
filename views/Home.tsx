import React from 'react'

import Item from '../components/Item'

import '../assets/css/home.scss'

export default function Home(itemDatas:any) {
    console.log(itemDatas)
    return (
        <div className="home">
            
            {itemDatas.itemDatas.map((itemData:any,index:number) => (
                <Item itemData = {itemData} key={index} />
            ))}
        </div>
    )
}
