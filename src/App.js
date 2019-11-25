import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import home from './pages/home';
import nothome from './pages/nothome';
import Navbar from './component/navbar';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Route path='/' component= {home} exact />
        <Route path='/bukan' component= {nothome} />       
      </div>
    )
  }
}

export default App;
