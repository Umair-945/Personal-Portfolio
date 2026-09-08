
const firebaseConfig = {
  apiKey: "AIzaSyC127QZ0_XYGbTPIXN1KTFsUb-7PAXiQso",
  authDomain: "umair-arshad-frontend.firebaseapp.com",
  projectId: "umair-arshad-frontend",
  storageBucket: "umair-arshad-frontend.firebasestorage.app",
  messagingSenderId: "694281103806",
  appId: "1:694281103806:web:6e7fe49a5451536e9ef1ef",
  measurementId: "G-0KY078E3VG"
};


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


 firebaseConfig = {

    apiKey: "AIzaSyC127QZ0_XYGbTPIXN1KTFsUb-7PAXiQso",

    authDomain: "umair-arshad-frontend.firebaseapp.com",

    projectId: "umair-arshad-frontend",

    storageBucket: "umair-arshad-frontend.firebasestorage.app",

    messagingSenderId: "694281103806",

    appId: "1:694281103806:web:6e7fe49a5451536e9ef1ef",

    measurementId: "G-0KY078E3VG"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


window.googleLogin = async function () {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        console.log("Logged in:", user.email);

        alert("Google Login Successful ✅");

    } catch (error) {

        console.error("Google Login Error:", error);

        alert("Google Login Failed ❌");

    }

};



onAuthStateChanged(auth, function (user) {

    if (user) {

        console.log("Logged in Email:", user.email);

    } else {

        console.log("No user logged in");

    }

});