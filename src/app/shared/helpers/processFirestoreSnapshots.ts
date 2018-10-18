import { map } from 'rxjs/operators';

export const processFirestoreDoc = map(processAction);
// @ts-ignore
export const processFirestoreCollection = map((actions: Array) =>
  actions.map(processAction)
);

function processAction(action) {
  return {
    ...action.payload.data(),
    id: action.payload.id
  };
}
