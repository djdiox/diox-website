/**
 * The current environment variables for productive, that will change from app to app
 * (deployment to deployment)
 * @type Object
 */
export const environment = {
  production: false,
  dialogFlowToken: '',
  firebase: {
    apiKey: '',
    authDomain: 'diox-website.firebaseapp.com',
    databaseURL: 'https://diox-website.firebaseio.com',
    projectId: 'diox-website',
    storageBucket: 'diox-website.appspot.com',
    messagingSenderId: '143634320556'
  }
};
