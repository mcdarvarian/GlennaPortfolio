import React, { Component } from 'react';
import info from '../../Contents/Info';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProjectSmall from '../ProjectSmall/ProjectSmall';
import './ProjectList.css';
import { NavLink } from 'react-router-dom';

class ProjectList extends Component {    
  state ={
    open: false,
    setOpen: false
}

    findTab() {
        const route = this.props.location.pathname;
        if (route === '/') {
            return 'Main'
        } else {
            return route.replace('/project_list/', '');
        }
    }

    organizeProjects(tab) {
        let projs;
        if (tab === 'all') {
            projs = info.all;
        } else {
            info.tags.forEach(tag => {
                if (tag.tag === tab) {
                    projs = tag.projs;
                }
            })
        }
        if (!!projs) {
            let res = projs.map(project => {
                let props = {
                    project: project
                }
                return <li key={project.title}><NavLink className='proj_card_link' to={`/project/${project.title}`}><ProjectSmall props={props}></ProjectSmall></NavLink></li>
            })
            return res;
        } else {
            this.props.history.push('/Missing')
        }
    }

    render() {
        let tab = this.findTab();
        let projs = this.organizeProjects(tab);
        if (tab === 'all') tab = 'all projects';
        return (
            <div className='project_list'>
                <div className='paralax'>
                    <div className='stuff'>
                        <Header open={this.state.open} setOpen={this.state.setOpen}></Header>
                        <div className='contents'>
                            <h1 className='proj_list_title'>{tab}</h1>
                            <div className='projs'>
                                <ul className='dynamic_list'>{projs}</ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }

}

export default ProjectList