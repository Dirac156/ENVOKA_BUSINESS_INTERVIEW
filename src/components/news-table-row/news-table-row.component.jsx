import React from "react";

import NewsTableCell from "../news-table-cell/news-table-cell.component";

import "aos/dist/aos.css";
import "./news-table-row.style.scss";

const NewsTableRow = (props) => {
    const {author, source, publishedAt} = props.article;
    const { id, name } = source;

    const newArticle = [ id, name, author, publishedAt ]
    return (
    <div data-aos="fade-up" className="table__row">
        {
            newArticle.map((detail, idx) =><NewsTableCell key={idx}>{detail}</NewsTableCell>)
        }
    </div>
)};


export default NewsTableRow;
