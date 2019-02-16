import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBrFzy_TiOaKsrm8HaNhyhKHGGjNjI9pJk",
  authDomain: "planner-app-001.firebaseapp.com",
  databaseURL: "https://planner-app-001.firebaseio.com",
  projectId: "planner-app-001",
  storageBucket: "planner-app-001.appspot.com",
  messagingSenderId: "92547312913"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
