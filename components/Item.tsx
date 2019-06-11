import React from 'react'
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';
import Link from 'next/link'

import MiniTags from '../components/miniTags'

import '../assets/css/item.scss'

export default function Item(itemData:any) {
    const Data = itemData.itemData
    console.log(Data)
    return (
        <Link prefetch href={"p" + Data.path} >
            <a className="item--card__anchor">
                <Card className="item--card">
                    <CardTitle
                        title={Data.name}
                    />
                    <CardMedia
                        aspectRatio="wide"
                        image={Data.img}
                    />
                    <MiniTags contents={Data.tag} />
                    <CardText>{Data.description}</CardText>
                </Card>
            </a>
        </Link>
    )
}
