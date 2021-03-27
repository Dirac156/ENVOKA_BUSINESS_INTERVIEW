import React from 'react';

import Header from "../../components/header/header.component";
import Jumbotron from "../../components/jumbontron/jumbotron.component";
import NewsTable from "../../components/news-table/news-table.component";
import Footer from "../../components/footer/footer.component";

import { Route } from "react-router-dom";


const HomePage = () => (
    <div>
        <Header />
        <Route exact path = "/" component = {Jumbotron} />
        <Route exact path ="/newstable" component = {NewsTable} />
        <Footer />
    </div>
);

export default HomePage;