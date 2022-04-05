// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5277fMoN8Yt2YYu7C78Mkcoci1Vji5sw",
  authDomain: "weatherapp-a4cb5.firebaseapp.com",
  projectId: "weatherapp-a4cb5",
  storageBucket: "weatherapp-a4cb5.appspot.com",
  messagingSenderId: "366067578233",
  appId: "1:366067578233:web:5cc1e990ed521f2b1c2ba8",
  measurementId: "G-KBQY4VSQR3"
};

// Initialize Firebase
let app;
if(firebase.app.length === 0) {
    app =firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app();
}
const auth = firebase.auth();


export {auth};