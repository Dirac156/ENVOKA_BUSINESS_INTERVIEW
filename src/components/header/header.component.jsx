import React from "react";

import { ReactComponent as Logo} from "../../assets/logo.svg";

import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
    <div className="header">
        <div className="header__logo">
            <Link to="/"><Logo /></Link>
        </div>

        <div className="header__links">
            <Link to="/" className="header__link">Home</Link>
            <a href="#newstable" className="header__link">News</a>
        </div>
    </div>
);

export default Header;
