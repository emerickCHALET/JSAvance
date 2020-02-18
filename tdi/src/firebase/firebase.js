import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBW70XF3mguhZX0Hcu193K6g_tGYn8xA6Q",
    authDomain: "reacttd-39972.firebaseapp.com",
    databaseURL: "https://reacttd-39972.firebaseio.com",
    projectId: "reacttd-39972",
    storageBucket: "reacttd-39972.appspot.com",
    messagingSenderId: "392068407791",
    appId: "1:392068407791:web:1cd700e5d41c125050d61a",
    measurementId: "G-Y0NNEN7DBN"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;