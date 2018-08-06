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
            var user = result.user;
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
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
