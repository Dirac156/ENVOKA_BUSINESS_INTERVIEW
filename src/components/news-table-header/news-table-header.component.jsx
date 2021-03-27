import React from "react";

import "./news-table-header.style.scss";

const NewsTableHeader = (props) => (
    <span className = "table__header">
        {props.children}
    </span>
);


export default NewsTableHeader;
