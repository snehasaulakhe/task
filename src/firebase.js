// import { initializeApp } from "firebase/app";
const firebase = require('firebase/app');
require('firebase/database');


const firebaseConfig = {
    apiKey: "AIzaSyAO64Anm0LWOIRXjKCPlL-Wh1ej_5cA9Z0",
    authDomain: "my-task-747a4.firebaseapp.com",
    projectId: "my-task-747a4",
    storageBucket: "my-task-747a4.appspot.com",
    messagingSenderId: "501609419948",
    appId: "1:501609419948:web:d670f56b3add63a7787b09",
    measurementId: "G-BG7YCX9DGT"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { database }


