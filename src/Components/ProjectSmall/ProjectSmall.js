import React, { Component } from 'react';
import info from '../../Contents/Info';
import './ProjectSmall.css';

class ProjectSmall extends Component {

    translateProj(){
        let proj = this.props.props.project;        
        let res = (
            <div>
                <div>
                <img src={`${proj.icon}`} alt={`icon for ${proj.title}`} ></img>
                </div>
                <h2>{proj.title}</h2>
                <p>{proj.short}</p>
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