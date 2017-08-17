import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBBGgRJaabY9dOihGFS2ht3lDPgoRyp1Vc",
    authDomain: "goalcoach-1fd3c.firebaseapp.com",
    databaseURL: "https://goalcoach-1fd3c.firebaseio.com",
    projectId: "goalcoach-1fd3c",
    storageBucket: "",
    messagingSenderId: "359227519464"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref("goals");
export const completeGoalRef = firebase.database().ref("completeGoal");
