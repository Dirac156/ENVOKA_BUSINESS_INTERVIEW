import React from "react";

import styled from "styled-components";
import CopyRight from "../copyright/copyright.component";

import "aos/dist/aos.css";
import "./footer.style.scss";

const ListItemMargined = styled.li` 
    padding: 0;
    margin-left: 0;
    margin-bottom: 1rem 
`

const Footer = () => (
    <footer className="footer">
    <div data-aos="fade-up" className="footer">
        <div className="footer__about">
            <h2 className="footer__title">About us</h2>
            <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce iaculis purus dictum dui euismod porttitor. 
            Sed eget aliquam justo. Nulla sodales facilisis mollis. 
            Vestibulum efficitur at nisi nec egestas.  </p>
        </div>

        <div className="footer__service">
        <h2 className="footer__title">Services</h2>
            <p className="footer__text">News</p>
            <p className="footer__text">Politics</p>
            <p className="footer__text">Eonomy</p>
        </div>

        <div className="footer__contact">
            <h2 className="footer__title">Contact</h2>
            <ul className="footer__list">
                <ListItemMargined className="footer-item">
                    <a href="tel:250788782472" className="footer__link">+250788782472</a>
                </ListItemMargined>

                <ListItemMargined className="footer-item">
                    <a href="mailto:someone@gmail.com" className="footer__link">someone@gmail.com</a>
                </ListItemMargined>

                <ListItemMargined className="footer-item">
                    <a href="mailto:someone@example.com" className="footer__link">Kigali, Kimironko</a>
                </ListItemMargined>
            </ul>
        </div>

        <CopyRight />
    </div>
    </footer>
);


export default Footer;