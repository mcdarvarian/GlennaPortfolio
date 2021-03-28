import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import info from '../../Contents/Info';
import './HomeHead.css'

class HomeHead extends Component {
    makeTabs(){
        let tabs = info.tags;
        let result = [];
        for(let i = 1; i < 3; i++){
            result.push(<NavLink className='home_head_tab' to={`/project_list/${tabs[i].tag}`} ><li key={tabs[i].tag}><h1 className={`home_tab_${i}`}>{tabs[i].tag}</h1></li></NavLink>)
            result.push(<h1 key={`bar_${i}`} className='home_bar'>|</h1>)
        }
        return result
    }

    render(){
        let tabs = this.makeTabs();
        return(
            <div className='home_navbar'>
                <ul className='home_Header'>
                    <li key='home_head' id='home_head' className='home_head_tab'><NavLink className='deco' to='/'><h1 className='home_home'>glenna greer</h1></NavLink></li>
                    <div className='tab_section'>
                    {tabs}
                    <li key='home_all' className='home_head_tab'><NavLink className='deco' to='/project_list/all'><h1 className='home_all_projs'>all projects</h1></NavLink></li>
                    </div>
                    <div className='tab_section'>
                    <li key='home_about' className='home_head_tab'><NavLink className='deco' to='/about_me'><h1>about</h1></NavLink></li>
                    <h1 className='home_bar'>|</h1>
                    <li key='home_resume' className='home_head_tab'><NavLink className='deco' to='/resume'><h1>resume</h1></NavLink></li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default HomeHead