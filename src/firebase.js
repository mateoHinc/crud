import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAh5d1iSNZf_TvNYBs87shon8tQaao2n7g",
    authDomain: "crud-8b29f.firebaseapp.com",
    projectId: "crud-8b29f",
    storageBucket: "crud-8b29f.appspot.com",
    messagingSenderId: "526017680465",
    appId: "1:526017680465:web:cb40e30b43e70cefde9470"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig)