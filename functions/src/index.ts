import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as shortid from 'shortid';

admin.initializeApp();
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@'
);

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
  firestore
    .collection('users')
    .doc(user.uid)
    .set(data)
    .then(console.log, console.error);
});

export const generateInviteCode = functions.firestore
  .document('flats/{flatId}')
  .onCreate((snapshot, context) => {
    const inviteCode = shortid.generate();
    snapshot.ref.update({ inviteCode }).then(console.log, console.error);
  });

export const processInviteCode = functions.https.onCall(
  async (data, context) => {
    if (!data.code) {
      console.log('Invite Code is missing aborting function');
      return { data: { success: false, message: 'No code provided' } };
    }
    const inviteCode = data.code;

    const flats = await firestore
      .collection('flats')
      .where('inviteCode', '==', inviteCode)
      .get();
    if (flats.empty) {
      return {
        data: {
          success: false,
          message: 'Invide code did not belong to any flat'
        }
      };
    }
    const flat = flats.docs[0].data();
    await firestore
      .collection('users')
      .doc(context.auth.uid)
      .update({ flatId: flats.docs[0].id });
    return { data: { success: true, flat } };
  }
);
