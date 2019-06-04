import React from 'react'

export default function Item(itemData:any) {
    const Data = itemData.itemData
    return (
        <div>
            {Data.name}
        </div>
    )
}
