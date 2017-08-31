import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDsqPq_28xl46LB0W3x8aLu0NC0g16xme4",
    authDomain: "dublin-coach-survey.firebaseapp.com",
    databaseURL: "https://dublin-coach-survey.firebaseio.com",
    projectId: "dublin-coach-survey",
    storageBucket: "dublin-coach-survey.appspot.com",
    messagingSenderId: "882680548769"
  };
  firebase.initializeApp(config);

ReactDOM.render((<App />), document.getElementById('root'));





