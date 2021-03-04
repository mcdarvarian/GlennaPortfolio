import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Missing from './Components/Missing/Missing';
import ProjectList from './Components/ProjectList/ProjectList';
import AboutMe from './Components/AboutMe/AboutMe';
import Resume from './Components/Resume/Resume';
import WriteUp from './Components/WriteUp/WriteUp'
import './App.css';

class App extends Component {

  renderHomeRoute(){
    return(
      <>
      <Switch>
        <Route exact path='/' component={ProjectList} />
        <Route exact path='/about_me' component={AboutMe}/>
        <Route exact path='/project/:proj_name' component={WriteUp} />
        <Route exact path='/project_list/:proj_list' component={ProjectList} />
        <Route exact path='/resume' component={Resume} />
        <Route component={Missing} />
        </Switch>
      </>
    )
  }

  render(){
  return (
    <div className="App">
      <main>{this.renderHomeRoute()}</main>
    </div>
  );
  }
}

export default App;
