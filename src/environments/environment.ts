/**
 * The current environment variables, that will change from app to app
 * (deployment to deployment)
 * @type Object
 */
export const environment = {
  production: false,
  dialogFlowToken: '',
  firebase: {
    apiKey: 'AIzaSyBcYD_2BYYlwmlMZ295MWcqtDEqqhACsdc',
    authDomain: 'diox-website.firebaseapp.com',
    databaseURL: 'https://diox-website.firebaseio.com',
    projectId: 'diox-website',
    storageBucket: 'diox-website.appspot.com',
    messagingSenderId: '143634320556'
  }
};
