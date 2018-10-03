import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import Authentication from './components/authentication/Authentication';

class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: "AIzaSyDbB0zL8PTvqb7eLTqDTltSyNKFvUDhQ_Q",
      authDomain: "the-weding-a-ken.firebaseapp.com",
      databaseURL: "https://the-weding-a-ken.firebaseio.com",
      projectId: "the-weding-a-ken",
      storageBucket: "the-weding-a-ken.appspot.com",
      messagingSenderId: "338413489020"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Authentication />
      </div>
    );
  }
}

export default App;
