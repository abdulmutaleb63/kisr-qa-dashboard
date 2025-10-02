const firebaseConfig = {
  apiKey: "AIzaSyAvwfziFOkb-j0Hbc7Ff-MOBfxpNs7q2TI",
  authDomain: "kisr-qa-dashboard.firebaseapp.com",
  projectId: "kisr-qa-dashboard"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
