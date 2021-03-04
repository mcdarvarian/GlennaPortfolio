import React, { Component } from 'react';
import info from '../../Contents/Info';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProjectSmall from '../ProjectSmall/ProjectSmall';
import './ProjectList.css';
import { NavLink } from 'react-router-dom';

class ProjectList extends Component {
    findTab(){
        const route = this.props.location.pathname;
        if(route === '/'){
            return 'Main'
        } else {
            return route.replace('/project_list/', '');
        }
    }

    organizeProjects(tab){
        let projs;
        if(tab === 'all'){
            projs = info.all;
        } else {
            info.tags.forEach(tag =>{
                if(tag.tag === tab){
                    projs = tag.projs;
                }
            })
        }
        let res = projs.map(project =>{
            let props ={
                project: project
            }
            return <li><NavLink to={`/project/${project.title}`}><ProjectSmall props={props}></ProjectSmall></NavLink></li>
        })
        return res;
    }

    render(){
        let tab = this.findTab();
        let projs = this.organizeProjects(tab);
        return(
            <div className='project_list'>
                <Header></Header>
                <ul>{projs}</ul>
                <Footer></Footer>
            </div>
        )
    }

}

export default ProjectList