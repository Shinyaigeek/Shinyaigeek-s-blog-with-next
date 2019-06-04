import React from 'react'

import Item from '../components/Item'

export default function Home(itemDatas:any) {
    return (
        <div>
            {itemDatas.itemDatas.map((itemData:any,index:number) => (
                <Item itemData = {itemData} key={index} />
            ))}
        </div>
    )
}
