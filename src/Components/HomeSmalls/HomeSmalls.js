import React, { Component } from 'react';
//import info from '../../Contents/Info';
import './HomeSmalls.css';

class HomeSmall extends Component {

    translateProj(){
        let proj = this.props.props.project;        
        let res = (
            <div className='home_proj_card'>
                
                <div className='img_spacing'><img className='home_proj_card_img' src={`${proj.icon}`} alt={`icon for ${proj.title}`} ></img></div>
                <div className='home_proj_card_word_spacer'>
                <h2 className='home_proj_card_title'>{proj.title}</h2>
                <p className='home_proj_card_description'>{proj.short}</p>
                </div>
            </div>
        )
        return res;
    }
    render(){
        let proj = this.translateProj();
        return(
            <div className='home_project_card'>
                {proj}
            </div>
        )
    }
}

export default HomeSmall