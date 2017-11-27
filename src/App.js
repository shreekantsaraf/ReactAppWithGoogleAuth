import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainAppComponent from './components/MainAppComponent'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <MainAppComponent />
        </div>
    </BrowserRouter>
    );
  }
}
export default App;