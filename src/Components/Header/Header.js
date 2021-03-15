import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import info from '../../Contents/Info';
import './Header.css';

class Header extends Component {
    makeTabs(){
        let tabs = info.tags;
        let result = [];
        for(let i = 1; i < 3; i++){
            result.push(<NavLink className='head_tab' to={`/project_list/${tabs[i].tag}`} ><li><h1 className={`tab_${i}`}>{tabs[i].tag}</h1></li></NavLink>)
            result.push(<h1 className='bar'>|</h1>)
        }
        return result
    }

    render(){
        let tabs = this.makeTabs();
        return(
            <div className='navbar'>
                <ul className='Header'>
                    <NavLink className='head_tab' to='/'><li><h1 className='home'>glenna greer</h1></li></NavLink>
                    {tabs}
                    <NavLink className='head_tab' to='/project_list/all'><li><h1 className='all_projs'>all projects</h1></li></NavLink>
                    <h1 className='bar'>|</h1>
                    <NavLink className='head_tab' to='/about_me'><li><h1>about</h1></li></NavLink>
                    <h1 className='bar'>|</h1>
                    <NavLink className='head_tab' to='/resume'><li><h1>resume</h1></li></NavLink>
                </ul>
            </div>
        )
    }
}

export default Header 