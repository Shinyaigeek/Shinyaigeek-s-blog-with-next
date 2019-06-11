import React from 'react'

import ReactPaginate from 'react-paginate'

import '../assets/css/pagination.scss'

interface Props {
    pageN:number,
    handleChange:Function
}

export default function Pagination(props:Props) {
    return (
        <div className="pagination">
            <ReactPaginate
            pageCount={props.pageN}
            pageRangeDisplayed={2}
            marginPagesDisplayed={50}
            onPageChange={(e:any) => {props.handleChange(e.selected)}}
            containerClassName="page--container"
            previousLabel=""
            nextLabel=""
            />
        </div>
    )
}
