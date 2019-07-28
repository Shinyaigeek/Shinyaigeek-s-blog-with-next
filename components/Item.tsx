import React from 'react'
import { Card } from 'antd';
import Link from 'next/link'

import MiniTags from '../components/miniTags'

import '../assets/css/item.scss'
// import 'antd/dist/antd.css'

type Items = {
    path:string,
    img:string,
    description:string,
    name:string,
    tag:string[]
}

interface ItemData{
    itemData:Items
}

const {Meta} = Card;

export default function Item(itemData:ItemData) {
    const Data = itemData.itemData
    return (
        <Link prefetch href={"p" + Data.path} >
            <a className="item--card__anchor">
                <Card className="item--card"
                    bordered={true}
                    hoverable={true}
                    cover={<img
                        src={Data.img}
                        className="item--card__img"
                    />}
                    style={{
                        width:300,
                        margin:"24px auto"
                    }}
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
