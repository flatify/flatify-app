import { map } from 'rxjs/operators';

export const processFirestoreDoc = map(processAction);
// @ts-ignore
export const processFirestoreCollection = map((actions: any[]) =>
  actions.map(processAction)
);

export const processFirestoreQuery = map((snapshot: { docs: any[] }) =>
  snapshot.docs.map(processDoc)
);

function processAction(action) {
  if (action.payload.doc) {
    return processDoc(action.payload.doc);
  }
  return processDoc(action.payload);
}

function processDoc(doc) {
  return {
    ...doc.data(),
    id: doc.id
  };
}
