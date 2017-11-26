import firebase from 'firebase';
//https://console.firebase.google.com/u/0/

var config = {
  apiKey: "AIzaSyBuJiiMc0pzNZXi5QmCbXUUfpNJgxlHlUo",
  authDomain: "fun-food-friends-c48ab.firebaseapp.com",
  databaseURL: "https://fun-food-friends-c48ab.firebaseio.com",
  projectId: "fun-food-friends-c48ab",
  storageBucket: "",
  messagingSenderId: "690336495325"
};


firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;