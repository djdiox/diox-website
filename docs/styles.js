(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\np {\n  text-align: justify;\n  width: 80%; }\n/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\ngallery-dots {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n.g-dot {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  z-index: 20; }\n.g-dot-active .g-dot-inner {\n  opacity: 1;\n  -webkit-transform: scale(1.6);\n          transform: scale(1.6); }\n.g-dot-inner {\n  background-color: white;\n  margin: 20px 15px;\n  opacity: 0.6;\n  width: 10px;\n  height: 5px;\n  border-radius: 1px;\n  box-shadow: 0 0 1px black;\n  transition: all ease 0.2s; }\n.g-nav-next, .g-nav-prev {\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999; }\n.g-nav-next {\n  right: 0.5em;\n  -webkit-transform: translateY(-50%) perspective(1px);\n          transform: translateY(-50%) perspective(1px); }\n.g-nav-prev {\n  left: 0.5em;\n  -webkit-transform: translateY(-50%) perspective(1px) scale(-1, -1);\n          transform: translateY(-50%) perspective(1px) scale(-1, -1); }\n@media only screen and (max-width: 480px) {\n  .g-nav-next {\n    right: 0.2em; }\n  .g-nav-prev {\n    left: 0.2em; } }\n.g-items-container {\n  height: 100%; }\n.g-items-slider {\n  position: absolute;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1), -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1); }\ngallery-core[slidingDirection='horizontal'] .g-slides {\n  flex-direction: row; }\ngallery-core[slidingDirection='vertical'] .g-slides {\n  flex-direction: column; }\ngallery-thumbs {\n  display: block;\n  z-index: 1;\n  overflow: unset;\n  width: 100%;\n  height: 100%; }\n.g-thumbs-container {\n  position: relative;\n  z-index: 206;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  overflow: unset; }\n.g-thumbs-slider {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1), -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  height: 100%;\n  width: 100%; }\ngallery-core[thumbPosition='top'] .g-thumbs-slider,\ngallery-core[thumbPosition='bottom'] .g-thumbs-slider {\n  flex-direction: row;\n  top: 0;\n  left: 50%; }\ngallery-core[thumbPosition='top'] gallery-thumb,\ngallery-core[thumbPosition='bottom'] gallery-thumb {\n  padding: 2px 1px; }\ngallery-core[thumbPosition='left'] .g-thumbs-slider,\ngallery-core[thumbPosition='right'] .g-thumbs-slider {\n  flex-direction: column;\n  top: 50%;\n  left: 0; }\ngallery-core[thumbPosition='left'] gallery-thumb,\ngallery-core[thumbPosition='right'] gallery-thumb {\n  padding: 1px 2px; }\ngallery-core[thumbPosition='top'] {\n  flex-direction: column; }\ngallery-core[thumbPosition='left'] {\n  flex-direction: row; }\ngallery-core[thumbPosition='right'] {\n  flex-direction: row-reverse; }\ngallery-core[thumbPosition='bottom'] {\n  flex-direction: column-reverse; }\n.g-counter {\n  z-index: 50;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%) perspective(1px);\n          transform: translateX(-50%) perspective(1px);\n  bottom: 0;\n  font-size: 10px;\n  padding: 4px 10px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }\ngallery[gallerize] gallery-item {\n  cursor: pointer; }\ngallery-item, gallery-thumb {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  opacity: 0.5;\n  transition: opacity 300ms cubic-bezier(0.5, 0, 0.5, 1); }\ngallery-item {\n  z-index: 10; }\ngallery-item.g-active-item {\n    opacity: 1; }\ngallery-item video {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\ngallery-item iframe {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\ngallery-thumb {\n  cursor: pointer; }\ngallery-thumb.g-active-thumb {\n    opacity: 1; }\n.g-image-item {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%; }\n.g-template {\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.g-loading {\n  position: absolute;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  left: 50%;\n  top: 50%;\n  width: 80px;\n  height: 80px; }\ngallery {\n  z-index: 1;\n  overflow: hidden;\n  display: block;\n  height: 500px;\n  background-color: black; }\ngallery * {\n    box-sizing: border-box; }\ngallery, gallery-core {\n  position: relative;\n  overflow: hidden; }\ngallery-core {\n  display: flex;\n  height: 100%;\n  width: 100%; }\n.g-fluid {\n  width: 100vw !important;\n  -webkit-transform: translateX(-50vw);\n          transform: translateX(-50vw);\n  position: relative;\n  left: 50%; }\n.g-no-transition {\n  transition: unset !important; }\n.g-box {\n  height: 100%;\n  width: 100%; }\n.g-box, gallery-slider {\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  order: 1;\n  height: 100%; }\ngallery-nav svg, .g-btn-close svg {\n  width: 100%;\n  height: 100%;\n  -webkit-filter: drop-shadow(0px 0px 1px black);\n          filter: drop-shadow(0px 0px 1px black);\n  transition: opacity linear 0.2s;\n  opacity: 0.6; }\ngallery-nav svg:hover, .g-btn-close svg:hover {\n    opacity: 1; }\nhtml {\n  background: #f1f1f1;\n  font-family: RalewayRegular, SansSerif, sans-serif; }\nhtml a:-webkit-any-link,\n  html a:-webkit-any-link {\n    color: #288ad6; }\nhtml a:any-link,\n  html a:-webkit-any-link {\n    color: #288ad6; }\nhtml p {\n    text-align: justify;\n    width: 80%; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/markuswagner/Documents/Dev/diox-website/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map