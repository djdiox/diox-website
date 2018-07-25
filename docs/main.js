(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"app\">\n  <div id=\"home\" class=\"module-wrapper\">\n    <div class=\"container\">\n      <app-home></app-home>\n    </div>\n  </div>\n  <div id=\"about\" class=\"module-wrapper\">\n    <div class=\"container\">\n      <app-about></app-about>\n    </div>\n  </div>\n  <div id=\"pictures\" class=\"module-wrapper\">\n    <div class=\"container\">\n      <app-pictures></app-pictures>\n    </div>\n  </div>\n  <div id=\"work\" class=\"module-wrapper\">\n    <div class=\"container\">\n      <app-work></app-work>\n    </div>\n  </div>\n  <div id=\"sets\" class=\"module-wrapper\">\n    <div class=\"container\">\n      <app-sets></app-sets>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\n.module-wrapper {\n  height: 100vh;\n  width: 100%;\n  background: #181830;\n  color: white;\n  padding: 2em; }\n.module-wrapper .container {\n    height: 100%;\n    border-radius: 0.3em;\n    padding: 2em;\n    background: #000; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AppComponent.prototype.keyEvent = function (event) {
        console.log(event);
        if (this.afAuth.auth.currentUser !== null) {
            return;
        }
        this.lastKey = event.keyCode;
        if (event.key === 'L') {
            this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (route) {
            console.log(route);
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "keyEvent", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/pictures/pictures.component */ "./src/app/pages/pictures/pictures.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_sets_sets_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/sets/sets.component */ "./src/app/pages/sets/sets.component.ts");
/* harmony import */ var _pages_work_work_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/work/work.component */ "./src/app/pages/work/work.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/tab-bar/tab-bar.component */ "./src/app/components/tab-bar/tab-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _pages_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_15__["PicturesComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _pages_sets_sets_component__WEBPACK_IMPORTED_MODULE_17__["SetsComponent"],
                _pages_work_work_component__WEBPACK_IMPORTED_MODULE_18__["WorkComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_20__["BlogComponent"],
                _components_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_23__["TabBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_21__["appRoutes"], { enableTracing: false, useHash: true } // <-- debugging purposes only
                ),
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot(),
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_10__["GalleryModule"].forRoot(),
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__["InlineSVGModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"] // imports firebase/storage only needed for storage features
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<i class=\"toggle-icon\" [inlineSVG]=\"'/assets/images/icons/hamburger.svg'\"></i>-->\n<div class=\"social-container\">\n  <div class=\"social-list\" id=\"socialList\" [ngClass]=\"{'social-list-active': socialVisible}\">\n    <a></a>\n    <div id=\"mixcloud\" class=\"social-icon\" [inlineSVG]=\"'assets/images/icons/mixcloud.svg'\"\n         (click)=\"openSocial('https://www.mixcloud.com/diox_dj/')\">\n    </div>\n    <div id=\"soundcloud\" class=\"social-icon\" [inlineSVG]=\"'assets/images/icons/soundcloud.svg'\"\n         (click)=\"openSocial('https://soundcloud.com/nerdreflex')\">\n    </div>\n    <div id=\"facebook\" class=\"social-icon\" [inlineSVG]=\"'assets/images/icons/facebook.svg'\"\n         (click)=\"openSocial('https://www.facebook.com/diox0/')\">\n    </div>\n    <div id=\"twitter\" class=\"social-icon\" [inlineSVG]=\"'assets/images/icons/twitter.svg'\"\n         (click)=\"openSocial('https://twitter.com/markuswagner93')\">\n    </div>\n    <div id=\"instagram\" class=\"social-icon\" [inlineSVG]=\"'assets/images/icons/instagram.svg'\"\n         (click)=\"openSocial('https://www.instagram.com/dj.diox/')\">\n    </div>\n    <div id=\"github\" class=\"social-icon\" [inlineSVG]=\"'assets/images/icons/github.svg'\"\n         (click)=\"openSocial('https://github.com/djdiox')\">\n    </div>\n  </div>\n  <div id=\"socialToggle \" class=\"social-toggle \" [ngClass]=\"{active: socialVisible} \" (click)=\"toggleSocials($event)\"\n       [inlineSVG]=\" 'assets/images/icons/earth.svg' \">\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\np {\n  text-align: justify;\n  width: 80%; }\n/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\n.social-container {\n  position: fixed;\n  left: 2em;\n  bottom: 0;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n.social-container .social-list {\n    -webkit-transform-origin: 0;\n            transform-origin: 0;\n    -webkit-transform: translateY(500px);\n            transform: translateY(500px);\n    opacity: 0;\n    transition: all 0.2s ease-in; }\n.social-container .social-list-active {\n    position: inherit;\n    width: auto;\n    opacity: 1;\n    -webkit-transform: translate(-3px, -338px);\n            transform: translate(-3px, -338px);\n    transition: all 0.2s linear; }\n.social-container .social-toggle {\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center center; }\n.social-container .social-icon {\n    width: 50px;\n    height: 50px;\n    margin-top: 5px;\n    opacity: 0.8;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center center;\n    text-align: center;\n    border-radius: 12px;\n    background-color: aquamarine;\n    line-height: 3.7;\n    box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.75); }\n.social-container .social-icon svg {\n      vertical-align: center;\n      margin: auto;\n      width: 40px;\n      height: 40px; }\n.social-container .social-icon:hover {\n    background: black;\n    box-shadow: 4px 4px 5px 0px white; }\n.social-container .social-icon:hover path {\n      fill: white !important; }\n.social-container svg:hover {\n    fill: white; }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.socialVisible = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.toggleSocials = function (event) {
        var _this = this;
        event.stopPropagation();
        this.socialVisible = !this.socialVisible;
        var clickListener = function () {
            _this.socialVisible = false;
        };
        if (this.socialVisible) {
            document.body.addEventListener('click', clickListener, false);
        }
        else {
            document.body.removeEventListener('click', clickListener, false);
        }
    };
    FooterComponent.prototype.openSocial = function (url) {
        this.socialVisible = false;
        window.open(url);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"hamburger icon\" [ngClass]=\"{'active': !showNav}\" [inlineSVG]=\"'/assets/images/icons/hamburger.svg'\"\n   (click)=\"showNav = !showNav\"></i>\n<ul class=\"nav\" role=\"navigation\" [ngClass]=\"{'hidden': !showNav}\">\n  <li routerLink=\"/home\" routerLinkActive=\"active\" [ngx-scroll-to]=\"'#home'\">home</li>\n  <li routerLink=\"/about\" routerLinkActive=\"active\" [ngx-scroll-to]=\"'#about'\">about</li>\n  <li routerLink=\"/pictures\" routerLinkActive=\"active\" [ngx-scroll-to]=\"'#pictures'\">pictures</li>\n  <li routerLink=\"/work\" routerLinkActive=\"active\" [ngx-scroll-to]=\"'#work'\">work</li>\n  <li routerLink=\"/sets\" routerLinkActive=\"active\" [ngx-scroll-to]=\"'#sets'\">djing</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\np {\n  text-align: justify;\n  width: 80%; }\n/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\nul.nav li.active {\n  background-color: #fe7c08;\n  border: 1px solid #fff;\n  color: #fff;\n  outline: none;\n  opacity: 1; }\nul.nav li {\n  cursor: pointer;\n  color: #000;\n  border: 1px solid #000;\n  background-color: #288ad6;\n  text-align: center; }\ni.hamburger {\n  z-index: 100;\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  right: 3.5em;\n  top: 3em; }\ni.hamburger svg path {\n    /* Safari */\n    transition: fill 1s; }\ni.hamburger.active svg path {\n    fill: #288ad6; }\nul.nav {\n  position: fixed;\n  z-index: 100;\n  right: -2.5em;\n  top: 12%;\n  width: 92px;\n  height: 30em;\n  display: flex;\n  flex-wrap: wrap;\n  /* Safari */\n  transition: opacity 1s; }\nul.nav.hidden {\n    opacity: 0;\n    pointer-events: none; }\nul.nav li {\n    height: 1.5em;\n    width: 80%;\n    list-style: none;\n    line-height: 1.5em;\n    padding: 1em;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    transition: background-color, opacity, color 1.5s;\n    opacity: 0.7; }\nul.nav li.active {\n      opacity: 1; }\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.showNav = true;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/tab-bar/tab-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tab-bar/tab-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-bar\">\n  <div class=\"tab\"\n       *ngFor=\"let tab of tabs\"\n       [ngClass]=\"{'active': tab === current}\"\n       (click)=\"select(tab)\">\n    {{tab}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tab-bar/tab-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/tab-bar/tab-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\np {\n  text-align: justify;\n  width: 80%; }\n/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\n.tab-bar .tab.active {\n  background-color: #fe7c08;\n  border: 1px solid #fff;\n  color: #fff;\n  outline: none;\n  opacity: 1; }\n.tab-bar .tab {\n  cursor: pointer;\n  color: #000;\n  border: 1px solid #000;\n  background-color: #288ad6;\n  text-align: center; }\n.tab-bar {\n  display: flex;\n  flex-direction: row;\n  width: 40%; }\n.tab-bar .tab {\n    width: 10em;\n    height: 2em;\n    line-height: 2em;\n    transition: background-color 0.5s;\n    opacity: 0.7; }\n.tab-bar .tab:not(:last-child) {\n    margin-right: 0.2em; }\n"

/***/ }),

/***/ "./src/app/components/tab-bar/tab-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tab-bar/tab-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: TabBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBarComponent", function() { return TabBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabBarComponent = /** @class */ (function () {
    function TabBarComponent() {
        this.tabs = [];
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.current = null;
    }
    TabBarComponent.prototype.ngOnInit = function () {
        /*if (!this.current) {
          this.current = this.tabs[0];
         }*/
    };
    TabBarComponent.prototype.select = function (current) {
        this.current = current;
        this.selected.next(current);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TabBarComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TabBarComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabBarComponent.prototype, "current", void 0);
    TabBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-bar',
            template: __webpack_require__(/*! ./tab-bar.component.html */ "./src/app/components/tab-bar/tab-bar.component.html"),
            styles: [__webpack_require__(/*! ./tab-bar.component.scss */ "./src/app/components/tab-bar/tab-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabBarComponent);
    return TabBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About me</h1>\n<h2>It's all about creativity</h2>\n<p>I love making music since i was a little child, and also everything i have been surrounded by tech since that.<br>\n  Art or being creative helped a lot to gain insights of business processes or the developing a own sound.<br>\n  Even this web page would not exist, if I would not have imagine how it could look like!<br><br>\n  <b>I am currently looking forward to find new exciting experiences in my work and dj life!</b>\n</p>\n\n<h2>Current Software/Technology in Use</h2>\n<!--TODO add Icons for Software -->\n<p>Angular, Typescript, Firebase, Node.JS, Docker, Ubuntu, Webstorm, VSCode, MacOS, Windows, Photoshop</p>\n<h2>Contact / Admin</h2>\n<p>\n  Contact via:<br/> Name: Markus Wagner<br/> Mail: <a href=\"mailto:djdiox@gmail.com\">djdiox@gmail.com</a><br/> Home:\n  Stuttgart<br/>\n  Complete CV available on request via E-Mail.\n</p>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: justify;\n  width: 80%; }\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/blog/blog.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/pages/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to my Page!</h1>\n<p>\n    Follow along!\n</p>\n<p>\n  Here will be my published profile and everything which is linked to it!<br>\n  Music, Dev & Gaming.. And many more.<br>\n  <br>\n  This page is currently in Beta and will be published over <img src=\"assets/images/icons/Octocat.png\"\n                                                                 width=\"30\" height=\"30\">\n  <a target=\"_blank\" href=\"http://www.github.com/djdiox\">Github</a>.\n</p>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/pictures/pictures.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/pictures/pictures.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gallery [items]=\"images\"></gallery>\n"

/***/ }),

/***/ "./src/app/pages/pictures/pictures.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/pictures/pictures.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pictures/pictures.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pictures/pictures.component.ts ***!
  \******************************************************/
/*! exports provided: PicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturesComponent", function() { return PicturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PicturesComponent = /** @class */ (function () {
    function PicturesComponent() {
    }
    PicturesComponent.prototype.ngOnInit = function () {
        this.images = [
            new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: '/assets/images/embedded/photo_1.jpg', thumb: '/assets/images/embedded/photo_1.jpg' }),
            new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: '/assets/images/embedded/photo_1.jpg', thumb: '/assets/images/embedded/photo_1.jpg' })
            // ... more items
        ];
    };
    PicturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pictures',
            template: __webpack_require__(/*! ./pictures.component.html */ "./src/app/pages/pictures/pictures.component.html"),
            styles: [__webpack_require__(/*! ./pictures.component.scss */ "./src/app/pages/pictures/pictures.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PicturesComponent);
    return PicturesComponent;
}());



/***/ }),

/***/ "./src/app/pages/sets/sets.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/sets/sets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tab-bar [current]=\"selected\" (selected)=\"tabChanged($event)\" [tabs]=\"['sets', 'biography']\"></app-tab-bar>\n<div *ngIf=\"selected === 'biography'\">\n  <h1>DJing and Producing</h1>\n  <h2>Genres</h2>\n  <p>\n    Electronic music has always be my beloved treasure.<br>\n    But i love every genre over rock and Hip Hop to Goa and Trap<br>\n  </p>\n  <h2>Musical Experience</h2>\n  <p>\n    Since I was a child i wanted to play a Instrument, which I started when I was 12.\n    I played flute, clarinet & saxophone. But there was still something missing.\n    I started 2 years later to love electronic music, and my fascination for it did not stop since then!\n    You can hear the development of it in the DJ / Sets / Music Section. I hope you like it!!\n  </p>\n</div>\n<div *ngIf=\"selected === 'sets'\">\n  <iframe width=\"100%\" height=\"180\"\n          src=\"https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fdiox_dj%2F&hide_cover=1&light=1\"\n          frameborder=\"0\"></iframe>\n  <iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\"\n          src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6380736&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\"></iframe>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/sets/sets.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/sets/sets.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: justify;\n  width: 80%; }\n"

/***/ }),

/***/ "./src/app/pages/sets/sets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/sets/sets.component.ts ***!
  \**********************************************/
/*! exports provided: SetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetsComponent", function() { return SetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SetsComponent = /** @class */ (function () {
    function SetsComponent() {
        this.selected = 'biography';
    }
    SetsComponent.prototype.ngOnInit = function () {
    };
    SetsComponent.prototype.tabChanged = function ($event) {
        this.selected = $event;
    };
    SetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sets',
            template: __webpack_require__(/*! ./sets.component.html */ "./src/app/pages/sets/sets.component.html"),
            styles: [__webpack_require__(/*! ./sets.component.scss */ "./src/app/pages/sets/sets.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SetsComponent);
    return SetsComponent;
}());



/***/ }),

/***/ "./src/app/pages/work/work.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/work/work.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Development</h1>\n<p>\n  Working as a developer and creating a unique experience for everyone has ever been my goal to archive.<br>\n  The details and a perfect workflow is what makes every page or app unique.<br><br>\n  Backend, Frontend and everything else related to making a software is in my scope when it comes to development.<br>\n</p>\n"

/***/ }),

/***/ "./src/app/pages/work/work.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/work/work.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: justify;\n  width: 80%; }\n"

/***/ }),

/***/ "./src/app/pages/work/work.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/work/work.component.ts ***!
  \**********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/pages/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/pages/work/work.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");


/**
 * Created by markuswagner on 20.07.18.
 */
var appRoutes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'about',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'sets',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'pictures',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'work',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'blog',
        component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__["BlogComponent"]
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBcYD_2BYYlwmlMZ295MWcqtDEqqhACsdc',
        authDomain: 'diox-website.firebaseapp.com',
        databaseURL: 'https://diox-website.firebaseio.com',
        projectId: 'diox-website',
        storageBucket: 'diox-website.appspot.com',
        messagingSenderId: '143634320556'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/markuswagner/Documents/Dev/diox-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map