import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyDbB0zL8PTvqb7eLTqDTltSyNKFvUDhQ_Q",
      authDomain: "the-weding-a-ken.firebaseapp.com",
      databaseURL: "https://the-weding-a-ken.firebaseio.com",
      projectId: "the-weding-a-ken",
      storageBucket: "the-weding-a-ken.appspot.com",
      messagingSenderId: "338413489020"
    };
    firebase.initializeApp(config);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onLoginClick(e) {
    console.log("test");
    const email = this.state.email;
    const password = this.state.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (e) {
        console.log("login success");
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
        // ...
      });
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
        <input type="text" id="email" onChange={this.handleEmailChange} value={this.state.email} />
        <input type="password" id="password" onChange={this.handlePasswordChange} value={this.state.password} />
        <button id="login" onClick={this.onLoginClick}>login</button>
      </div>
    );
  }
}

export default App;
