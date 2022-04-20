// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { doc,getFirestore } from "firebase/firestore";
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {auth,db,app};