import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render(){
        const year = new Date()
        return(<div className='footer'>
            <p>copyright Glenna Greer {year.getFullYear()}</p>
        </div>)
    }
} export default Footer