import React, { Component } from 'react';
import Header from '../Header/Header';
import './Missing.css';
import Footer from '../Footer/Footer';

class Missing extends Component {


    render(){
        return(
        <div>
            <Header></Header>
            <h1>You lost, Traveler?</h1>
            <Footer></Footer>
        </div>
        );
    }
}

export default Missing;