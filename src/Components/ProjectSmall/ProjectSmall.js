import React, { Component } from 'react';
import info from '../../Contents/Info';
import './ProjectSmall.css';

class ProjectSmall extends Component {

    translateProj(){
        let proj = this.props.props.project;        
        let res = (
            <div className='proj_card'>
                
                <img className='proj_card_img' src={`${proj.icon}`} alt={`icon for ${proj.title}`} ></img>
                <div className='proj_card_word_spacer'>
                <h2 className='proj_card_title'>{proj.title}</h2>
                <p className='proj_card_description'>{proj.short}</p>
                </div>
            </div>
        )
        return res;
    }
    render(){
        let proj = this.translateProj();
        return(
            <div className='project_card'>
                {proj}
            </div>
        )
    }
}

export default ProjectSmall