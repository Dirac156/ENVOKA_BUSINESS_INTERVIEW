import React, { Component } from "react";

import axios from "axios";

import NewsTableHeader from "../news-table-header/news-table-header.component";
import NewsTableRow from "../news-table-row/news-table-row.component";

import 'bootstrap/dist/css/bootstrap.min.css';

import Pagination from "react-js-pagination";

import "aos/dist/aos.css";
import "./news-table.style.scss";

const {  REACT_APP_NEWS_API_KEY } = process.env;

class NewsTable extends Component {

    constructor() {
        super();
        this.state = {
            news : [],
            activePage: 1,
            dataToDisplay: [],
            tableHeader: ["source id", "source name", "author", "published date"]
        };

        this.handlePageChangeData = this.handlePageChangeData.bind(this);
    }

    
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        this.handlePageChangeData(pageNumber);
      }

    handlePageChangeData(pageNumber) {
        const newData = this.state.news.filter(
            (articles, idx) => (pageNumber - 1) * 10 <= idx && (pageNumber * 10) > idx 
        );
        this.setState({dataToDisplay : newData});
    }

    

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${REACT_APP_NEWS_API_KEY}`)
        .then(response => response.data)
        .then(news => this.setState({ news : news.articles}))
        .then(() => this.handlePageChangeData(1));

    }


    render () {
        return(
            <div data-aos="fade-in" id="newstable">
                <div className="table">
                    {
                        this.state.tableHeader.map(
                            (headerItem, idx) => 
                            <NewsTableHeader key={idx}>
                                { headerItem }
                            </NewsTableHeader>
                        )
                    }
                    {
                        this.state.dataToDisplay? this.state.dataToDisplay.map(
                            (article, idx) => <NewsTableRow key={idx} article={article}/>
                        ) : null
                    }

                    
                </div>

                <div className="table__pagination">
                        <Pagination 
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"

                        />
                </div>
            </div>
        )
    }
}

export default NewsTable;
