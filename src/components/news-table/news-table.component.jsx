import React, { Component } from "react";

import NewsTableHeader from "../news-table-header/news-table-header.component";
import NewsTableRow from "../news-table-row/news-table-row.component";

import "./news-table.style.scss";


class NewsTable extends Component {



    render () {
        return(
            <div className="table">
                I am the table
                <NewsTableHeader />
                <NewsTableRow />
            </div>
        )
    }
}

export default NewsTable;
