/**
 * Created by markuswagner on 29.07.18.
 */

/**
 * Base Folder of the icons in the app
 * @type {string}
 */
const iconBaseFolder = 'assets/images/icons/';

/**
 * all related icons
 * @type {Map<string, string>}
 */
const icons = new Map<string, string>();
icons.set('angular', `${iconBaseFolder}angular.svg`);
icons.set('docker', `${iconBaseFolder}docker.svg`);
icons.set('earth', `${iconBaseFolder}earth.svg`);
icons.set('facebook', `${iconBaseFolder}facebook.svg`);
icons.set('firebase', `${iconBaseFolder}firebase.svg`);
icons.set('gears', `${iconBaseFolder}gears.svg`);
icons.set('github', `${iconBaseFolder}github.svg`);
icons.set('hamburger', `${iconBaseFolder}hamburger.svg`);
icons.set('instagram', `${iconBaseFolder}instagram.svg`);
icons.set('mixcloud', `${iconBaseFolder}mixcloud.svg`);
icons.set('octocat', `${iconBaseFolder}octocat.png`);
icons.set('photoshop', `${iconBaseFolder}photoshop.svg`);
icons.set('settings', `${iconBaseFolder}settings.svg`);
icons.set('soundcloud', `${iconBaseFolder}soundcloud.svg`);
icons.set('spinner', `${iconBaseFolder}spinner.gif`);
icons.set('twitter', `${iconBaseFolder}twitter.svg`);
icons.set('ubuntu', `${iconBaseFolder}ubuntu.svg`);
icons.set('school', `${iconBaseFolder}school.svg`);
icons.set('photoshop', `${iconBaseFolder}photoshop.svg`);

/**
 * Current Icons of the App
 * @type {Map<string, string>}
 */
export const Icons = icons;
