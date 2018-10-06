import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const firestore = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


export const createUser = functions.auth.user().onCreate((user, context) => {
  const data = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    photoURL: user.photoURL
  };
  firestore.collection('users').doc(user.uid).set(data).then(console.log, console.error);
});
