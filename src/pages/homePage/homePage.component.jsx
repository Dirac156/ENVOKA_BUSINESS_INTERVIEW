import React, { useEffect } from 'react';

import Header from "../../components/header/header.component";
import Jumbotron from "../../components/jumbontron/jumbotron.component";
import NewsTable from "../../components/news-table/news-table.component";
import Footer from "../../components/footer/footer.component";

import Aos from "aos";

import { Route } from "react-router-dom";


const HomePage = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

    return ( 
    
    <div>
        <Header />
        <Route path = "/" component = {Jumbotron} />
        <NewsTable />
        <Footer />
    </div>
)};

export default HomePage;