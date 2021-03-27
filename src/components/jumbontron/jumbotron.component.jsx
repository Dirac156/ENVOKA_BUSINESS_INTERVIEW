import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

import "aos/dist/aos.css";
import "./jumbotron.styles.scss";

class Jumbotron extends Component {
    constructor() {
        super();

        this.state = {
            message : "welcome to my news letter page",
            printed_message: ""
        }

        this.updateState = this.updateState.bind(this);
        this.setTimeFunc = this.setTimeFunc.bind(this);
        this.sleep = this.sleep.bind(this);
    };


    setTimeFunc = function(e, message){
        setTimeout(() => (
            this.setState({
                printed_message: message + e
            })
        ), 200)
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    async updateState(message){
        for (let i = 0; i < message.length; i++){
            await this.setTimeFunc(message[i], this.state.printed_message);
            await this.sleep(200);
        }
    }

    componentDidMount(){
        this.updateState(this.state.message);
    }

    render() {
        return (
        
            <div data-aos="fade-in" className="jumbotron">
                <div className="jumbotron__message">
                    { this.state.printed_message }
                </div>

                <div data-aos="fade-up"className="jumbotron__message-delayed">
                    <p className="jumbotron__message-delayed--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam vel erat vel nisi porttitor ultrices vel sit amet metus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam vel erat vel nisi porttitor ultrices vel sit amet metus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>

                    <FontAwesomeIcon icon={ faBookReader } size="5x"/>
                    
                </div>            
        </div>)
    };
};


export default Jumbotron;