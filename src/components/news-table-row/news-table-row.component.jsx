import React from "react";

import NewsTableCell from "../news-table-cell/news-table-cell.component";

import "./news-table-row.style.scss";

const NewsTableRow = () => (
    <div className="table-row">
        I am the table row
        <NewsTableCell />
    </div>
);


export default NewsTableRow;
