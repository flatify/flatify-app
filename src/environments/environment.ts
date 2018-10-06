// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBvB7zshdEIC6XBdFMro7WNjEciT3i3Wfs',
    authDomain: 'flatify-app-dev.firebaseapp.com',
    databaseURL: 'https://flatify-app-dev.firebaseio.com',
    projectId: 'flatify-app-dev',
    storageBucket: 'flatify-app-dev.appspot.com',
    messagingSenderId: '160151363210'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// Included with Angular CLI.
import 'zone.js/dist/zone-error';
