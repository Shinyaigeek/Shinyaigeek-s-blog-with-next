import React from 'react'
import { Card } from 'antd';
import Link from 'next/link'

import MiniTags from '../components/miniTags'

import '../assets/css/item.scss'
// import 'antd/dist/antd.css'

const {Meta} = Card;

export default function Item(itemData:any) {
    const Data = itemData.itemData
    console.log(Data)
    return (
        <Link prefetch href={"p" + Data.path} >
            <a className="item--card__anchor">
                <Card className="item--card"
                    bordered={true}
                    cover={<img
                        src={Data.img}
                        className="item--card__img"
                    />}
                    >
                    <Meta
                    title={Data.name}
                    description={Data.description}
                    />
                    <MiniTags contents={Data.tag} />
                </Card>
            </a>
        </Link>
    )
}
