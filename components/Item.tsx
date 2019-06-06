import React from 'react'

import Link from 'next/link'

import '../assets/css/item.scss'

export default function Item(itemData:any) {
    const Data = itemData.itemData
    console.log(Data)
    return (
        <div className="item--card">
            <Link prefetch href={"p" + Data.path}>
                <a className="item--card__anchor">
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
