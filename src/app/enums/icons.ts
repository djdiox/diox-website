/**
 * Created by markuswagner on 29.07.18.
 */

/**
 * Base Folder of the icons in the app
 * @type {string}
 */
const iconBaseFolder = 'assets/images/icons/';
const iconObjects = [];
const getIconPath = (icon) => {
  const path = `${iconBaseFolder}${icon}`;
  iconObjects.push({
    name: icon.toLowerCase().replace('.svg', '').replace('.png', ''),
    path: path
  });
  return path;
};
/**
 * All Icons that are available through the app
 */
export enum Icons {
  ANGULAR = getIconPath('angular.svg'),
  DOCKER = getIconPath('docker.svg'),
  EARTH = getIconPath('earth.svg'),
  FACEBOOK = getIconPath('facebook.svg'),
  FIREBASE = getIconPath('firebase.svg'),
  GEARS = getIconPath('gears.svg'),
  GITHUB = getIconPath('github.svg'),
  HAMBURGER = getIconPath('hamburger.svg'),
  INSTAGRAM = getIconPath('instagram.svg'),
  MIXCLOUD = getIconPath('mixcloud.svg'),
  OCTOCAT = getIconPath('Octocat.png'),
  PHTOTOSHOP = getIconPath('photoshop.svg'),
  SETTINGS = getIconPath('settings.svg'),
  SOUNDCLOUD = getIconPath('soundcloud.svg'),
  SPINNER = getIconPath('spin.gif'),
  TWITTER = getIconPath('twitter.svg'),
  UBUNTU = getIconPath('ubuntu.svg'),
  SCHOOL = getIconPath('school.svg'),
}

export const IconObjects = iconObjects;
