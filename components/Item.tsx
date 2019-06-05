import React from 'react'

import Link from 'next/link'

import '../assets/css/item.scss'

export default function Item(itemData:any) {
    const Data = itemData.itemData
    console.log(Data)
    return (
        <div className="item--card">
            <Link href={Data.path}>
                <a>
                    <div className="card--title">
                        {Data.name}
                    </div>
                    <img src={Data.img} />
                    <div className="card--description">
                        {Data.description}
                    </div>
                </a>
            </Link>
        </div>
    )
}
