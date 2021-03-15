import React, { Component } from 'react';
import info from '../../Contents/Info';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProjectSmall from '../ProjectSmall/ProjectSmall';
import background from '../../BackgroundSplash.png'
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
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
                return <li><NavLink to={`/project/${project.title}`}><ProjectSmall props={props}></ProjectSmall></NavLink></li>
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
                <div className='stuff'>
                    <div className='home_background' style={{
                        backgroundImage: `url(/images/BackgroundSplash.png)`
                    }}>
                        <Header></Header>
                        <div className='home_paralax'>
                            <div className='home_projs'>
                                {<ul className='home_projs'>{projs}</ul>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home