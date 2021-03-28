import React, { Component } from 'react';
import info from '../../Contents/Info';
import HomeHead from '../HomeHead/HomeHead'
import HomeSmalls from '../HomeSmalls/HomeSmalls';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    organizeProjects(tab) {
        let projs = info.all;
        /*if (tab === 'all') {
            projs = info.all;
        } else {
            info.tags.forEach(tag => {
                if (tag.tag === tab) {
                    projs = tag.projs;
                }
            })
        }*/
        if (!!projs) {
            let res = projs.map(project => {
                let props = {
                    project: project
                }
                return <li key={project.title} className='home_li'><NavLink className='home_proj_card_link' to={`/project/${project.title}`}><HomeSmalls props={props}></HomeSmalls></NavLink></li>
            })
            return res;
        } else {
            this.props.history.push('/Missing')
        }
    }

    render() {
        let projs = this.organizeProjects('Main');
        return (
            <div className='home_project_list'>
                    <HomeHead></HomeHead>
                        
                            {<ul className='home_projs'>{projs}</ul>}
                </div>
        )
    }

}

export default Home