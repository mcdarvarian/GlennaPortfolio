import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import info from '../../Contents/Info';
import './Header.css';

class Header extends Component {
    makeTabs(){
        let tabs = info.tags;
        let result = [];
        for(let i = 1; i < 3; i++){
            result.push(<li><NavLink to={`/project_list/${tabs[i].tag}`} >{tabs[i].tag}</NavLink></li>)
        }
        return result
    }

    render(){
        let tabs = this.makeTabs();
        return(
            <div className='Header'>
                <ul>
                    <li><NavLink to='/'>Glenna Greer</NavLink></li>
                    {tabs}
                    <li><NavLink to='/project_list/all'>All Projects</NavLink></li>
                    <li><NavLink to='/about_me'>About</NavLink></li>
                    <li><NavLink to='/resume'>Resume</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Header 