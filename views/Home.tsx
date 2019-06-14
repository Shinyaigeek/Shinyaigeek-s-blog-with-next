import React from 'react'

import Item from '../components/Item'
import SortButton from '../components/SortButton'
import Welcome1 from '../components/Welcome1'
import Pagination from '../components/Pagination'

import '../assets/css/home.scss'

export default function Home(props:any) {
    console.log(props)
    const showItems:object[] = []
    let itemList = []
    if(props.reverse){
        itemList = props.itemDatas.router.query.itemList.reverse()
    }else{
        itemList = props.itemDatas.router.query.itemList
    }
    itemList.map(function(item:any,index:number = 2) {
        if(props.page * 10 <= index && index <= props.page * 10 + 9){
            showItems.push(item);
        }
    })
    return (
        <div className="home">
            <Welcome1 />
            <SortButton reverse={props.reverse} handleReverse={props.handleReverse} />
            {showItems.map((itemData:any,index:number) => (
                <Item itemData = {itemData} key={index} />
            ))}
            <Pagination itemN={itemList.length} handleChange={props.handlePage} currentPage={props.page} />
            
        </div>
    )
}
