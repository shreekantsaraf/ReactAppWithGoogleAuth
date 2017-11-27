import React, { Component } from 'react';
import '../App.css';
import firebase, { auth, provider } from '../firebase.js';
import AddItem from './AddItem';
import DisplayItems from './DisplayItems';
import About from './About';
export const settings = () => {
    return (
    <div>Settings control</div>
    );
  };
  
  
  export class MainAppComponent extends Component{
    constructor() {
      super();
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }
    state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    }
    
    processLogIn(result) {this.setState({user:result.user});};
    login() {
      auth.signInWithPopup(provider).then((result) => this.setState({user:result.user}));
    }
    processLogOut = ()=> this.setState({user:null});
    logout() {
      auth.signOut().then(this.processLogOut);
    }
    render() {
      return (
        <div className='app'>
          <header>
              <div className="wrapper">
                <h1>Fun Food Friends - This App uses Google Authentication</h1>
                <nav>
                  <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/new-item'>New Item</a></li>
                    <li><a href='/settings'>Settings</a></li>
                  </ul>
                </nav>
                {this.state.user ?
                  <button onClick={this.logout}>Logout</button>                
                :
                  <button onClick={this.login}>Log In</button>              
                }
              </div>
          </header>
          {this.state.user ?
            <div>
              <div className='user-profile'>
                  <img src={this.state.user.photoURL} alt="Bugs" />
              </div>
              <div className='container'>
                < AddItem user={this.state.user} items={this.state.items} 
                          currentItem={this.state.currentItem} username={this.state.username}
                          />
                < DisplayItems user={this.state.user} items={this.state.items} 
                          currentItem={this.state.currentItem} username={this.state.username}
                          />
              </div>
            </div>
          : 
            <p><About /></p>
          }
          
        </div>
      );
    }
  };
  export default MainAppComponent;