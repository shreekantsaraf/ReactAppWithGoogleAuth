import React, { Component } from 'react';
import '../App.css';
import firebase, { auth, provider } from '../firebase.js';

export class DisplayItems extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        currentItem: props.currentItem,
        username: props.username,
        items: props.items,
        user: props.user
      }
    }
    
    removeItem(itemId) {
      const itemRef = firebase.database().ref(`/items/${itemId}`);
      itemRef.remove();
    }
    populateListWithItemsFromDB(){
      const itemsRef = firebase.database().ref('items');
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
          newState.push({
            id: item,
            title: items[item].title,
            user: items[item].user
          });
        }
        this.setState({items: newState});
      });
    }
  
    //processStateChang = (userIn) => {this.setState({user:userIn });};
    //processStateChange(userIn) {this.setState({user:userIn });};
    componentDidMount() {
      auth.onAuthStateChanged((userIn) => {this.setState({user:userIn });});
      this.populateListWithItemsFromDB();
    }
    
  render(){
    return(
      <section className='display-item'>
        <div className="wrapper">
        <h1>User Name: {this.state.user.displayName}</h1>
          <ul>
          {this.state.items.map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>brought by: {item.user}
                  {item.user === this.state.user.displayName || item.user === this.state.user.email ?
                    <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                  : null}
                </p>
              </li>
            )
          })}
        </ul>
        </div>
      </section>
    );
  }
  };

  export default DisplayItems;