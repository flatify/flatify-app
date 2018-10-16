import { map } from 'rxjs/operators';

export const processFirestoreDoc = map(processAction);
// @ts-ignore
export const processFirestoreCollection = map(actions => actions.map(processAction));


function processAction(action) {
  return {
    ...action.payload.doc.data(),
    id: action.payload.doc.id
  };
}
