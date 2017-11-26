import firebase from 'firebase';
//https://console.firebase.google.com/u/0/

var config = {
  authDomain: "fun-food-friends-c48ab.firebaseapp.com",
  databaseURL: "https://fun-food-friends-c48ab.firebaseio.com",
  storageBucket: "",
};


firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;