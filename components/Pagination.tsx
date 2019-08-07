import React from "react";

import { Pagination as AntPagination}  from "antd";

import "../assets/css/pagination.scss";

interface Props {
	itemN: number;
    handleChange: Function;
    currentPage:number
}

export default function Pagination(props: Props) {
	return (
		<div className="pagination">
			<AntPagination
                simple
                current={props.currentPage + 1}
                // pageSize = {props.pageN}
                total={props.itemN}
				onChange={(e: any) => {
					props.handleChange(e-1);
				}}
				className="page--container"
			/>
		</div>
	);
}
