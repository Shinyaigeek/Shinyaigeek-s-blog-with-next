import React from "react";

import Item from "../components/Item";
import SortButton from "../components/SortButton";
import Welcome1 from "../components/Welcome1";
import Pagination from "../components/Pagination";

import { Tag } from "antd";

import "../assets/css/home.scss";

interface Home {
	reverseItemsAndSwitch: Function;
}

export default function Home(props: any) {
	let showItems: object[] = [];
	const propItems = props.itemDatas;
	propItems.map(function(item: any, index: number = 2) {
		if (props.page * 10 <= index && index <= props.page * 10 + 9) {
			showItems.push(item);
		}
	});

	async function reverseItemsAndSwitch(flag: boolean) {
		const reverseList = props.itemDatas.reverse();
		await props.handleItems(reverseList);
		return props.handleReverse(flag);
	}
	return (
		<div className="home">
			<Welcome1 />
			<div className="sorters">
				<div className="order">
					<SortButton
						reverse={props.reverse}
						handleReverse={reverseItemsAndSwitch}
					/>
				</div>
				
				{props.router.query.tag && (
					<a href="/">
						{" "}
						<Tag closable={true} className="tag">
							{props.router.query.tag}
						</Tag>
					</a>
				)}
			</div>
			<div className="blog--contents">
				{showItems.map((itemData: any, index: number) => (
					<Item itemData={itemData} key={index} />
				))}
			</div>
			<Pagination
				itemN={props.itemDatas.length}
				handleChange={props.handlePage}
				currentPage={props.page}
			/>
		</div>
	);
}
