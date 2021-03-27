import React, { Component } from "react";

import NewsTableHeader from "../news-table-header/news-table-header.component";
import NewsTableRow from "../news-table-row/news-table-row.component";

import "./news-table.style.scss";

const { NEWS_API_KEY} = process.env;

console.log(process.env);

class NewsTable extends Component {

    constructor() {
        super();
        this.state = {
            news : []
        };
    }

    componentDidMount() {
        fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`)
        .then(response => console.log(response));
    }


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
