import { initializeApp } from 'firebase/app';

//firebase config
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDu8bHWhmhsg-OrZ1xDaz5EGicY5sGUDfw',
  authDomain: 'quizreact-d2cdb.firebaseapp.com',
  databaseURL: 'https://quizreact-d2cdb-default-rtdb.firebaseio.com',
  projectId: 'quizreact-d2cdb',
  storageBucket: 'quizreact-d2cdb.appspot.com',
  messagingSenderId: '820745172911',
  appId: '1:820745172911:web:78eee3ff3e1f3147aa215a',
});

export default firebaseApp;
