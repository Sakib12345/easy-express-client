import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const Login = () => {

    const {error, setError} = useState({})

    const history = useHistory()
    const location = useLocation()

    let { from } = location.state || {from: {pathname: "/"}};

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = {name: user.displayName, email: user.email, img: user.photoURL};
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <div className="container">
            <div className="text-center">
                <button className="btn btn-primary m-5" onClick={handleGoogleSignIn}>Login with Google</button>
                <p>{error}</p>
            </div>
            
        </div>
    );
};

export default Login;