import React, { Component } from 'react';
import firebase from 'firebase';

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(e) {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().languageCode = 'en_US';
        facebookProvider.setCustomParameters({
            'display': 'popup'
        });
        firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
            var token = result.credential.accessToken;
            console.log('token => ' + token);
            var user = result.user;
            console.log('user => ' + user);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log('errorCode => ' + errorCode);
            var errorMessage = error.message;
            console.log('errorMessage => ' + errorMessage);
            // The email of the user's account used.
            var email = error.email;
            console.log('email => ' + email);
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log('credential => ' + credential);
            // ...
        });
    }

    render() {
        return (
            <section>
                <button id="facebook-login" onClick={this.onLoginClick}>login</button>
            </section>
        );
    }
}

export default Authentication;
