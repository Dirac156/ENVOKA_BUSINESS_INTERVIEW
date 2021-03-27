import React from "react";

import "./news-table-cell.style.scss";

const NewsTableCell = (props) => {

    return (
    <div className="table__cell">
    {
        props.children? props.children 
        : 
        <span className="table__cell--null">NULL</span>
    }
    </div>
)};

export default NewsTableCell;

