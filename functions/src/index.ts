import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as shortid from 'shortid';

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

export const processInviteCode = functions.https.onRequest(
  async (req, resp) => {
    resp.set({
      'access-control-allow-headers': 'content-type',
      'access-control-allow-methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'access-control-allow-origin': req.get('origin')
    });
    console.log('Headers are set');
    if (req.method === 'OPTIONS') {
      resp.status(204).send();
      console.log('OPTIONS request found, returning preflight');
      return;
    }
    console.log('Regular request, running function');
    if (!req.body.data || !req.body.data.code) {
      console.log('Invite Code is missing aborting function');
      resp
        .status(400)
        .json({ data: { error: 'Missing the invite code to process' } });
      return;
    }
    const inviteCode = req.body.data.code;
  }
);
