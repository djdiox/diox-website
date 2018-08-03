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

/***/ "./src/animations.ts":
/*!***************************!*\
  !*** ./src/animations.ts ***!
  \***************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

/**
 * The angular animation for the router transitions in this app.
 */
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        /* order */
        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation (navToggle)=\"navToggled($event)\"></app-navigation>\n<app-footer></app-footer>\n<div class=\"app\" [ngClass]=\"{'no-navigation': !showNav}\">\n  <div id=\"home\" class=\"module-wrapper\">\n    <div class=\"container\" [@routerTransition]=\"getState(o)\">\n      <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\n.module-wrapper {\n  height: 100%;\n  color: white;\n  padding: 2em;\n  transition: all ease 1s; }\n.module-wrapper .container {\n    background-color: rgba(40, 138, 214, 0.4);\n    padding: 3.7em 5em;\n    background-size: cover;\n    transition: all 0.5s;\n    min-height: 80vh;\n    border-radius: 0.3em; }\n.no-navigation .module-wrapper .container {\n  padding: 3.7em 1.0em; }\n"

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
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/animations.ts");
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
    /**
     * Initialize controller
     * @param router
     * @param afAuth
     * @param iconRegistry
     * @param sanitizer
     */
    function AppComponent(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        /**
         * Is Currently the nav shown?
         * @type {boolean}
         */
        this.showNav = true;
    }
    /**
     * Gets called everytime the user presses a Button on the page
     * @param event {KeyboardEvent} The Event that has been passed from Angular
     */
    AppComponent.prototype.keyEvent = function (event) {
        if (this.afAuth.auth.currentUser !== null) {
            return;
        }
        this.lastKey = event.keyCode;
        if (event.key === 'L') {
            this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
        }
    };
    /**
     * Gets the state of the current router outlet
     * @param outlet {Object} a RouterOutlet of the app
     */
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    /**
     * Initiate the Module (App)
     */
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // Hide loading indicator
                console.log('end');
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    };
    /**
     * Event hook for setting the emitted value from the nav-bar
     * @param {boolean} $event Is Current nav-bar shown?
     */
    AppComponent.prototype.navToggled = function ($event) {
        this.showNav = $event;
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
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"]] // register the animation
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-gallery/core */ "./node_modules/@ngx-gallery/core/fesm5/ngx-gallery-core.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tab-bar/tab-bar.component */ "./src/app/components/tab-bar/tab-bar.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/pictures/pictures.component */ "./src/app/pages/pictures/pictures.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_sets_sets_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/sets/sets.component */ "./src/app/pages/sets/sets.component.ts");
/* harmony import */ var _pages_work_work_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/work/work.component */ "./src/app/pages/work/work.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_interactive_cv_interactive_cv_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/interactive-cv/interactive-cv.component */ "./src/app/pages/interactive-cv/interactive-cv.component.ts");
/* harmony import */ var _pages_interactive_cv_cv_start_cv_start_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/interactive-cv/cv-start/cv-start.component */ "./src/app/pages/interactive-cv/cv-start/cv-start.component.ts");
/* harmony import */ var _pages_interactive_cv_cv_school_cv_school_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/interactive-cv/cv-school/cv-school.component */ "./src/app/pages/interactive-cv/cv-school/cv-school.component.ts");
/* harmony import */ var _pages_interactive_cv_cv_experience_cv_experience_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/interactive-cv/cv-experience/cv-experience.component */ "./src/app/pages/interactive-cv/cv-experience/cv-experience.component.ts");
/* harmony import */ var _pages_interactive_cv_cv_technology_cv_technology_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/interactive-cv/cv-technology/cv-technology.component */ "./src/app/pages/interactive-cv/cv-technology/cv-technology.component.ts");
/* harmony import */ var _pages_interactive_cv_cv_programming_cv_programming_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/interactive-cv/cv-programming/cv-programming.component */ "./src/app/pages/interactive-cv/cv-programming/cv-programming.component.ts");
/* harmony import */ var _pages_interactive_cv_cv_goals_cv_goals_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/interactive-cv/cv-goals/cv-goals.component */ "./src/app/pages/interactive-cv/cv-goals/cv-goals.component.ts");
/* harmony import */ var _pages_interactive_cv_cv_end_cv_end_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/interactive-cv/cv-end/cv-end.component */ "./src/app/pages/interactive-cv/cv-end/cv-end.component.ts");
/* harmony import */ var _services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/dialog-flow.service */ "./src/app/services/dialog-flow.service.ts");
/* harmony import */ var _filter_tools_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./filter-tools.pipe */ "./src/app/filter-tools.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Imports






// Angular Requirements


// External Imports







// Components





// Pages

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _pages_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_22__["PicturesComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"],
                _pages_sets_sets_component__WEBPACK_IMPORTED_MODULE_24__["SetsComponent"],
                _pages_work_work_component__WEBPACK_IMPORTED_MODULE_25__["WorkComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_26__["BlogComponent"],
                _components_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_16__["TabBarComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"],
                _pages_interactive_cv_interactive_cv_component__WEBPACK_IMPORTED_MODULE_27__["InteractiveCvComponent"],
                _pages_interactive_cv_cv_start_cv_start_component__WEBPACK_IMPORTED_MODULE_28__["CvStartComponent"],
                _pages_interactive_cv_cv_school_cv_school_component__WEBPACK_IMPORTED_MODULE_29__["CvSchoolComponent"],
                _pages_interactive_cv_cv_experience_cv_experience_component__WEBPACK_IMPORTED_MODULE_30__["CvExperienceComponent"],
                _pages_interactive_cv_cv_technology_cv_technology_component__WEBPACK_IMPORTED_MODULE_31__["CvTechnologyComponent"],
                _pages_interactive_cv_cv_programming_cv_programming_component__WEBPACK_IMPORTED_MODULE_32__["CvProgrammingComponent"],
                _pages_interactive_cv_cv_goals_cv_goals_component__WEBPACK_IMPORTED_MODULE_33__["CvGoalsComponent"],
                _pages_interactive_cv_cv_end_cv_end_component__WEBPACK_IMPORTED_MODULE_34__["CvEndComponent"],
                _filter_tools_pipe__WEBPACK_IMPORTED_MODULE_36__["FilterToolsPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"], {
                    enableTracing: false,
                    useHash: true,
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                } // <-- debugging purposes only
                ),
                _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"].forRoot(),
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_13__["InlineSVGModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]
            ],
            providers: [
                _services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_35__["DialogFlowService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/message.ts":
/*!************************************!*\
  !*** ./src/app/classes/message.ts ***!
  \************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/**
 * Created a new Message for talking to the chatbot
 */
var Message = /** @class */ (function () {
    /**
     * Creates the message with given parameters
     * @param content Text that will be send
     * @param avatar The avatar picture
     * @param timestamp Message Sent date
     */
    function Message(content, avatar, timestamp) {
        this.content = content;
        this.timestamp = timestamp;
        this.avatar = avatar;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let message of messages\">\n  <li class=\"list-group-item\">\n    <img [src]=\"message.avatar\" class=\"avatar\"/>\n    <div class=\"message\">\n      {{message.content}}\n    </div>\n    <div class=\"timeform\">\n      <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> <span class=\"timestamp\">at {{message.timestamp | date : 'dd/MM/yyyy' }}</span>\n    </div>\n  </li>\n</ul>\n\n<div class=\"chatcontrol\">\n  <input type=\"text\" class=\"form-control chatinput\" (keyup.enter)=\"sendMessage()\" [(ngModel)]=\"currentMessage.content\"/>\n  <button class=\"btn btn-success sendbtn\" (click)=\"sendMessage()\">Send</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 400; }\n\n.timeform {\n  float: left;\n  width: 100%; }\n\n.timeform i {\n    margin-left: 20px; }\n\n.timeform .timestamp {\n    font-size: 0.6em; }\n\n.avatar {\n  width: 50px;\n  margin-right: 20px; }\n\n.chatlist {\n  height: 600px;\n  overflow-y: scroll; }\n\n.chatcontrol {\n  float: left;\n  width: 100%; }\n\n.chatcontrol .chatinput {\n    width: 80%;\n    float: left;\n    border-radius: 0; }\n\n.chatcontrol .sendbtn {\n    width: 20%;\n    float: left;\n    border-radius: 0;\n    text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/message */ "./src/app/classes/message.ts");
/* harmony import */ var _services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog-flow.service */ "./src/app/services/dialog-flow.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    /**
     * Creates a instance of this component
     * @param dialogFlowService
     */
    function ChatComponent(dialogFlowService) {
        this.dialogFlowService = dialogFlowService;
        /**
         * A list of messages that are visible
         * @type {Array}
         */
        this.messages = [];
        /**
         * The message that will be send
         * @type {Message}
         */
        this.currentMessage = new _classes_message__WEBPACK_IMPORTED_MODULE_1__["Message"]('', 'assets/images/user.png');
    }
    /**
     * Angular Init of the component
     */
    ChatComponent.prototype.ngOnInit = function () {
    };
    /**
     * Sends a message via model binding & dialogFlow Service
     */
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        this.currentMessage.timestamp = new Date();
        this.messages.push(this.currentMessage);
        this.dialogFlowService.getResponse(this.currentMessage.content).subscribe(function (res) {
            _this.messages.push(new _classes_message__WEBPACK_IMPORTED_MODULE_1__["Message"](res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp));
        });
        this.currentMessage = new _classes_message__WEBPACK_IMPORTED_MODULE_1__["Message"]('', 'assets/images/user.png');
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/components/chat/chat.component.scss")]
        })
        /**
         * A chat component for implementing dialog flow for user interaction
         */
        ,
        __metadata("design:paramtypes", [_services_dialog_flow_service__WEBPACK_IMPORTED_MODULE_2__["DialogFlowService"]])
    ], ChatComponent);
    return ChatComponent;
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

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}gallery-dots {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }.g-dot {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  z-index: 20; }.g-dot-active .g-dot-inner {\n  opacity: 1;\n  -webkit-transform: scale(1.6);\n          transform: scale(1.6); }.g-dot-inner {\n  background-color: white;\n  margin: 20px 15px;\n  opacity: 0.6;\n  width: 10px;\n  height: 5px;\n  border-radius: 1px;\n  box-shadow: 0 0 1px black;\n  transition: all ease 0.2s; }.g-nav-next, .g-nav-prev {\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999; }.g-nav-next {\n  right: 0.5em;\n  -webkit-transform: translateY(-50%) perspective(1px);\n          transform: translateY(-50%) perspective(1px); }.g-nav-prev {\n  left: 0.5em;\n  -webkit-transform: translateY(-50%) perspective(1px) scale(-1, -1);\n          transform: translateY(-50%) perspective(1px) scale(-1, -1); }@media only screen and (max-width: 480px) {\n  .g-nav-next {\n    right: 0.2em; }\n  .g-nav-prev {\n    left: 0.2em; } }.g-items-container {\n  height: 100%; }.g-items-slider {\n  position: absolute;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1), -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1); }gallery-core[slidingDirection='horizontal'] .g-slides {\n  flex-direction: row; }gallery-core[slidingDirection='vertical'] .g-slides {\n  flex-direction: column; }gallery-thumbs {\n  display: block;\n  z-index: 1;\n  overflow: unset;\n  width: 100%;\n  height: 100%; }.g-thumbs-container {\n  position: relative;\n  z-index: 206;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  overflow: unset; }.g-thumbs-slider {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1), -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  height: 100%;\n  width: 100%; }gallery-core[thumbPosition='top'] .g-thumbs-slider,\ngallery-core[thumbPosition='bottom'] .g-thumbs-slider {\n  flex-direction: row;\n  top: 0;\n  left: 50%; }gallery-core[thumbPosition='top'] gallery-thumb,\ngallery-core[thumbPosition='bottom'] gallery-thumb {\n  padding: 2px 1px; }gallery-core[thumbPosition='left'] .g-thumbs-slider,\ngallery-core[thumbPosition='right'] .g-thumbs-slider {\n  flex-direction: column;\n  top: 50%;\n  left: 0; }gallery-core[thumbPosition='left'] gallery-thumb,\ngallery-core[thumbPosition='right'] gallery-thumb {\n  padding: 1px 2px; }gallery-core[thumbPosition='top'] {\n  flex-direction: column; }gallery-core[thumbPosition='left'] {\n  flex-direction: row; }gallery-core[thumbPosition='right'] {\n  flex-direction: row-reverse; }gallery-core[thumbPosition='bottom'] {\n  flex-direction: column-reverse; }.g-counter {\n  z-index: 50;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%) perspective(1px);\n          transform: translateX(-50%) perspective(1px);\n  bottom: 0;\n  font-size: 10px;\n  padding: 4px 10px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }gallery[gallerize] gallery-item {\n  cursor: pointer; }gallery-item, gallery-thumb {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  opacity: 0.5;\n  transition: opacity 300ms cubic-bezier(0.5, 0, 0.5, 1); }gallery-item {\n  z-index: 10; }gallery-item.g-active-item {\n    opacity: 1; }gallery-item video {\n    position: absolute;\n    width: 100%;\n    height: 100%; }gallery-item iframe {\n    position: absolute;\n    width: 100%;\n    height: 100%; }gallery-thumb {\n  cursor: pointer; }gallery-thumb.g-active-thumb {\n    opacity: 1; }.g-image-item {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%; }.g-template {\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }.g-loading {\n  position: absolute;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  left: 50%;\n  top: 50%;\n  width: 80px;\n  height: 80px; }gallery {\n  z-index: 1;\n  overflow: hidden;\n  display: block;\n  height: 500px;\n  background-color: black; }gallery * {\n    box-sizing: border-box; }gallery, gallery-core {\n  position: relative;\n  overflow: hidden; }gallery-core {\n  display: flex;\n  height: 100%;\n  width: 100%; }.g-fluid {\n  width: 100vw !important;\n  -webkit-transform: translateX(-50vw);\n          transform: translateX(-50vw);\n  position: relative;\n  left: 50%; }.g-no-transition {\n  transition: unset !important; }.g-box {\n  height: 100%;\n  width: 100%; }.g-box, gallery-slider {\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  order: 1;\n  height: 100%; }gallery-nav svg, .g-btn-close svg {\n  width: 100%;\n  height: 100%;\n  -webkit-filter: drop-shadow(0px 0px 1px black);\n          filter: drop-shadow(0px 0px 1px black);\n  transition: opacity linear 0.2s;\n  opacity: 0.6; }gallery-nav svg:hover, .g-btn-close svg:hover {\n    opacity: 1; }/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */p {\n  text-align: justify;\n  width: 80%; }.no-navigation p {\n  width: 98%; }/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */.social-container {\n  position: fixed;\n  left: 2em;\n  bottom: 0;\n  z-index: 1000;\n  margin-right: 10px;\n  margin-bottom: 10px; }.social-container .social-list {\n    -webkit-transform-origin: 0;\n            transform-origin: 0;\n    -webkit-transform: translateY(500px);\n            transform: translateY(500px);\n    opacity: 0;\n    transition: all 0.2s ease-in; }.social-container .social-list-active {\n    position: inherit;\n    width: auto;\n    opacity: 1;\n    -webkit-transform: translate(-3px, -338px);\n            transform: translate(-3px, -338px);\n    transition: all 0.2s linear; }.social-container .social-toggle {\n    width: 50px;\n    height: 50px;\n    background-size: contain;\n    background: no-repeat center center; }.social-container .social-icon {\n    width: 50px;\n    height: 50px;\n    margin-top: 5px;\n    opacity: 0.8;\n    background-size: contain;\n    text-align: center;\n    border-radius: 12px;\n    background: #288ad6 no-repeat center center;\n    line-height: 4.4;\n    box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.75); }.social-container .social-icon svg {\n      vertical-align: center;\n      margin: auto;\n      width: 40px;\n      height: 40px; }.social-container .social-icon:hover {\n    background: #fe7c08;\n    box-shadow: 4px 4px 5px 0 white; }.social-container .social-icon:hover svg path {\n      fill: #fff !important; }.social-container svg:hover {\n    fill: white; }\n"

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
    /**
     * Class Initialization
     */
    function FooterComponent() {
        /**
         * Are the social Buttons visible?
         * @type {boolean}
         */
        this.socialVisible = false;
    }
    /**
     * Angular Component Initialization Method
     */
    FooterComponent.prototype.ngOnInit = function () {
    };
    /**
     * Toggles the list of social links
     * @param event
     */
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
    /**
     * Opens the specified URL in a new window
     * @param url
     */
    FooterComponent.prototype.openSocial = function (url) {
        this.socialVisible = false;
        window.open(url);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
        /**
         * Sticky Footer for the bottom of the page
         */
        ,
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <h2 class=\"modal-title\">{{CurrentModalOptions?.title}}</h2>\n  <p class=\"modal-content\">\n    {{CurrentModalOptions?.content}}\n  </p>\n  <div class=\"button-bar\" *ngIf=\"CurrentModalOptions?.interactive\">\n    <button (click)=\"closeModal(true)\">\n      {{CurrentModalOptions?.buttonYesText}}\n    </button>\n    <button (click)=\"closeModal(false)\">\n      {{CurrentModalOptions?.buttonNoText}}\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    /**
     * Creates a new Instance of this Component
     * @param modalService
     */
    function ModalComponent(modalService) {
        var _this = this;
        this.modalService = modalService;
        /**
         * A event that will be triggered on every close
         * @type {EventEmitter}
         */
        this.closing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.modalService
            .CurrentModalOptions
            .subscribe(function (options) { return _this.CurrentModalOptions = options; });
    }
    /**
     * Angular Initialization
     */
    ModalComponent.prototype.ngOnInit = function () {
    };
    /**
     * Closes the current modal
     * @param result
     */
    ModalComponent.prototype.closeModal = function (result) {
        this.CurrentModalOptions.result = result;
        this.modalService.hideCurrentModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "closing", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/modal/modal.component.scss")]
        })
        /**
         * Modal (Window in Web) for this page
         */
        ,
        __metadata("design:paramtypes", [_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"hamburger icon\" [ngClass]=\"{'active': !showNav}\" [inlineSVG]=\"'/assets/images/icons/hamburger.svg'\"\n   (click)=\"toggleNav()\"></i>\n<ul class=\"nav\" role=\"navigation\" [ngClass]=\"{'hidden': !showNav}\">\n  <li routerLink=\"/home\" routerLinkActive=\"active\">home</li>\n  <li routerLink=\"/about\" routerLinkActive=\"active\">about</li>\n  <li routerLink=\"/pictures\" routerLinkActive=\"active\">pictures</li>\n  <!--<li routerLink=\"/works\" routerLinkActive=\"active\" [ngx-scroll-to]=\"'#work'\">work</li>-->\n  <li routerLink=\"/cv\" routerLinkActive=\"active\">cv</li>\n  <li routerLink=\"/sets\" routerLinkActive=\"active\">djings</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}gallery-dots {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }.g-dot {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  z-index: 20; }.g-dot-active .g-dot-inner {\n  opacity: 1;\n  -webkit-transform: scale(1.6);\n          transform: scale(1.6); }.g-dot-inner {\n  background-color: white;\n  margin: 20px 15px;\n  opacity: 0.6;\n  width: 10px;\n  height: 5px;\n  border-radius: 1px;\n  box-shadow: 0 0 1px black;\n  transition: all ease 0.2s; }.g-nav-next, .g-nav-prev {\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999; }.g-nav-next {\n  right: 0.5em;\n  -webkit-transform: translateY(-50%) perspective(1px);\n          transform: translateY(-50%) perspective(1px); }.g-nav-prev {\n  left: 0.5em;\n  -webkit-transform: translateY(-50%) perspective(1px) scale(-1, -1);\n          transform: translateY(-50%) perspective(1px) scale(-1, -1); }@media only screen and (max-width: 480px) {\n  .g-nav-next {\n    right: 0.2em; }\n  .g-nav-prev {\n    left: 0.2em; } }.g-items-container {\n  height: 100%; }.g-items-slider {\n  position: absolute;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1), -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1); }gallery-core[slidingDirection='horizontal'] .g-slides {\n  flex-direction: row; }gallery-core[slidingDirection='vertical'] .g-slides {\n  flex-direction: column; }gallery-thumbs {\n  display: block;\n  z-index: 1;\n  overflow: unset;\n  width: 100%;\n  height: 100%; }.g-thumbs-container {\n  position: relative;\n  z-index: 206;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  overflow: unset; }.g-thumbs-slider {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1), -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  height: 100%;\n  width: 100%; }gallery-core[thumbPosition='top'] .g-thumbs-slider,\ngallery-core[thumbPosition='bottom'] .g-thumbs-slider {\n  flex-direction: row;\n  top: 0;\n  left: 50%; }gallery-core[thumbPosition='top'] gallery-thumb,\ngallery-core[thumbPosition='bottom'] gallery-thumb {\n  padding: 2px 1px; }gallery-core[thumbPosition='left'] .g-thumbs-slider,\ngallery-core[thumbPosition='right'] .g-thumbs-slider {\n  flex-direction: column;\n  top: 50%;\n  left: 0; }gallery-core[thumbPosition='left'] gallery-thumb,\ngallery-core[thumbPosition='right'] gallery-thumb {\n  padding: 1px 2px; }gallery-core[thumbPosition='top'] {\n  flex-direction: column; }gallery-core[thumbPosition='left'] {\n  flex-direction: row; }gallery-core[thumbPosition='right'] {\n  flex-direction: row-reverse; }gallery-core[thumbPosition='bottom'] {\n  flex-direction: column-reverse; }.g-counter {\n  z-index: 50;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%) perspective(1px);\n          transform: translateX(-50%) perspective(1px);\n  bottom: 0;\n  font-size: 10px;\n  padding: 4px 10px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }gallery[gallerize] gallery-item {\n  cursor: pointer; }gallery-item, gallery-thumb {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  opacity: 0.5;\n  transition: opacity 300ms cubic-bezier(0.5, 0, 0.5, 1); }gallery-item {\n  z-index: 10; }gallery-item.g-active-item {\n    opacity: 1; }gallery-item video {\n    position: absolute;\n    width: 100%;\n    height: 100%; }gallery-item iframe {\n    position: absolute;\n    width: 100%;\n    height: 100%; }gallery-thumb {\n  cursor: pointer; }gallery-thumb.g-active-thumb {\n    opacity: 1; }.g-image-item {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%; }.g-template {\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }.g-loading {\n  position: absolute;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  left: 50%;\n  top: 50%;\n  width: 80px;\n  height: 80px; }gallery {\n  z-index: 1;\n  overflow: hidden;\n  display: block;\n  height: 500px;\n  background-color: black; }gallery * {\n    box-sizing: border-box; }gallery, gallery-core {\n  position: relative;\n  overflow: hidden; }gallery-core {\n  display: flex;\n  height: 100%;\n  width: 100%; }.g-fluid {\n  width: 100vw !important;\n  -webkit-transform: translateX(-50vw);\n          transform: translateX(-50vw);\n  position: relative;\n  left: 50%; }.g-no-transition {\n  transition: unset !important; }.g-box {\n  height: 100%;\n  width: 100%; }.g-box, gallery-slider {\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  order: 1;\n  height: 100%; }gallery-nav svg, .g-btn-close svg {\n  width: 100%;\n  height: 100%;\n  -webkit-filter: drop-shadow(0px 0px 1px black);\n          filter: drop-shadow(0px 0px 1px black);\n  transition: opacity linear 0.2s;\n  opacity: 0.6; }gallery-nav svg:hover, .g-btn-close svg:hover {\n    opacity: 1; }/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */p {\n  text-align: justify;\n  width: 80%; }.no-navigation p {\n  width: 98%; }/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */ul.nav li.active {\n  color: #fff;\n  outline: none;\n  opacity: 1; }ul.nav li {\n  outline: none;\n  text-align: center;\n  cursor: pointer; }i.hamburger {\n  z-index: 100;\n  position: fixed;\n  right: 3.5em;\n  top: 3em; }i.hamburger svg {\n    width: 2em;\n    height: 2em; }i.hamburger svg path {\n      /* Safari */\n      transition: fill 1s; }i.hamburger.active svg path {\n    fill: #288ad6; }ul.nav {\n  position: fixed;\n  z-index: 100;\n  right: -2.5em;\n  top: 12%;\n  width: 92px;\n  height: 30em;\n  display: flex;\n  flex-wrap: wrap;\n  /* Safari */\n  transition: opacity 1s; }ul.nav.hidden {\n    opacity: 0;\n    pointer-events: none; }ul.nav li {\n    height: 0.7em;\n    width: 80%;\n    list-style: none;\n    line-height: 0.7em;\n    padding: 1em;\n    -webkit-transform-origin: left top 0;\n    transform-origin: left top 0;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    transition: background-color, opacity, color 1.5s;\n    opacity: 0.7; }ul.nav li.active {\n      opacity: 1; }\n"

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
    /**
     * Class Initialization
     */
    function NavigationComponent() {
        /**
         * Event that will be triggered if the user presses the nav toggle button
         * @type {EventEmitter<boolean>}
         */
        this.navToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Is this nav visible?
         * @type {boolean}
         */
        this.showNav = true;
    }
    /**
     * Angular Component Initialization Method
     */
    NavigationComponent.prototype.ngOnInit = function () {
    };
    /**
     * Toggles the navbar, and emits the event
     */
    NavigationComponent.prototype.toggleNav = function () {
        this.showNav = !this.showNav;
        this.navToggle.emit(this.showNav);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "navToggle", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
        /**
         * A navbar for redirecting through the site
         */
        ,
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

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-sort-header-arrow{color:#757575}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-focused:not(.cdk-mouse-focused):not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}gallery-dots {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }.g-dot {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  z-index: 20; }.g-dot-active .g-dot-inner {\n  opacity: 1;\n  -webkit-transform: scale(1.6);\n          transform: scale(1.6); }.g-dot-inner {\n  background-color: white;\n  margin: 20px 15px;\n  opacity: 0.6;\n  width: 10px;\n  height: 5px;\n  border-radius: 1px;\n  box-shadow: 0 0 1px black;\n  transition: all ease 0.2s; }.g-nav-next, .g-nav-prev {\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999; }.g-nav-next {\n  right: 0.5em;\n  -webkit-transform: translateY(-50%) perspective(1px);\n          transform: translateY(-50%) perspective(1px); }.g-nav-prev {\n  left: 0.5em;\n  -webkit-transform: translateY(-50%) perspective(1px) scale(-1, -1);\n          transform: translateY(-50%) perspective(1px) scale(-1, -1); }@media only screen and (max-width: 480px) {\n  .g-nav-next {\n    right: 0.2em; }\n  .g-nav-prev {\n    left: 0.2em; } }.g-items-container {\n  height: 100%; }.g-items-slider {\n  position: absolute;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1), -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1); }gallery-core[slidingDirection='horizontal'] .g-slides {\n  flex-direction: row; }gallery-core[slidingDirection='vertical'] .g-slides {\n  flex-direction: column; }gallery-thumbs {\n  display: block;\n  z-index: 1;\n  overflow: unset;\n  width: 100%;\n  height: 100%; }.g-thumbs-container {\n  position: relative;\n  z-index: 206;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  overflow: unset; }.g-thumbs-slider {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  transition: transform 400ms cubic-bezier(0.5, 0, 0.5, 1), -webkit-transform 400ms cubic-bezier(0.5, 0, 0.5, 1);\n  height: 100%;\n  width: 100%; }gallery-core[thumbPosition='top'] .g-thumbs-slider,\ngallery-core[thumbPosition='bottom'] .g-thumbs-slider {\n  flex-direction: row;\n  top: 0;\n  left: 50%; }gallery-core[thumbPosition='top'] gallery-thumb,\ngallery-core[thumbPosition='bottom'] gallery-thumb {\n  padding: 2px 1px; }gallery-core[thumbPosition='left'] .g-thumbs-slider,\ngallery-core[thumbPosition='right'] .g-thumbs-slider {\n  flex-direction: column;\n  top: 50%;\n  left: 0; }gallery-core[thumbPosition='left'] gallery-thumb,\ngallery-core[thumbPosition='right'] gallery-thumb {\n  padding: 1px 2px; }gallery-core[thumbPosition='top'] {\n  flex-direction: column; }gallery-core[thumbPosition='left'] {\n  flex-direction: row; }gallery-core[thumbPosition='right'] {\n  flex-direction: row-reverse; }gallery-core[thumbPosition='bottom'] {\n  flex-direction: column-reverse; }.g-counter {\n  z-index: 50;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%) perspective(1px);\n          transform: translateX(-50%) perspective(1px);\n  bottom: 0;\n  font-size: 10px;\n  padding: 4px 10px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }gallery[gallerize] gallery-item {\n  cursor: pointer; }gallery-item, gallery-thumb {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  opacity: 0.5;\n  transition: opacity 300ms cubic-bezier(0.5, 0, 0.5, 1); }gallery-item {\n  z-index: 10; }gallery-item.g-active-item {\n    opacity: 1; }gallery-item video {\n    position: absolute;\n    width: 100%;\n    height: 100%; }gallery-item iframe {\n    position: absolute;\n    width: 100%;\n    height: 100%; }gallery-thumb {\n  cursor: pointer; }gallery-thumb.g-active-thumb {\n    opacity: 1; }.g-image-item {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%; }.g-template {\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }.g-loading {\n  position: absolute;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  left: 50%;\n  top: 50%;\n  width: 80px;\n  height: 80px; }gallery {\n  z-index: 1;\n  overflow: hidden;\n  display: block;\n  height: 500px;\n  background-color: black; }gallery * {\n    box-sizing: border-box; }gallery, gallery-core {\n  position: relative;\n  overflow: hidden; }gallery-core {\n  display: flex;\n  height: 100%;\n  width: 100%; }.g-fluid {\n  width: 100vw !important;\n  -webkit-transform: translateX(-50vw);\n          transform: translateX(-50vw);\n  position: relative;\n  left: 50%; }.g-no-transition {\n  transition: unset !important; }.g-box {\n  height: 100%;\n  width: 100%; }.g-box, gallery-slider {\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  order: 1;\n  height: 100%; }gallery-nav svg, .g-btn-close svg {\n  width: 100%;\n  height: 100%;\n  -webkit-filter: drop-shadow(0px 0px 1px black);\n          filter: drop-shadow(0px 0px 1px black);\n  transition: opacity linear 0.2s;\n  opacity: 0.6; }gallery-nav svg:hover, .g-btn-close svg:hover {\n    opacity: 1; }/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */p {\n  text-align: justify;\n  width: 80%; }.no-navigation p {\n  width: 98%; }/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */.tab-bar .tab.active {\n  color: #fff;\n  outline: none;\n  opacity: 1; }.tab-bar .tab {\n  outline: none;\n  text-align: center;\n  cursor: pointer; }.tab-bar .tab {\n  color: #000;\n  border: 1px solid #000;\n  background-color: #16c98d; }.tab-bar {\n  display: flex;\n  flex-direction: row;\n  width: 40%; }.tab-bar .tab {\n    width: 10em;\n    margin: 0;\n    /* height: 2em; */\n    padding: 0 0.5em;\n    line-height: 2em;\n    transition: background-color 0.5s;\n    opacity: 0.7; }.tab-bar .tab:not(:last-child) {\n    margin-right: 0.2em; }\n"

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
    /**
     * Class Initialization
     */
    function TabBarComponent() {
        /**
         * Tabs that gonna be displayed
         * @type {Array} the array of strings for the tabs
         */
        this.tabs = [];
        /**
         * Emitter, when the value is selected
         * @type {EventEmitter<string>}
         */
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The Value of the selected tab
         * @type {any}
         */
        this.current = null;
    }
    /**
     * Angular Component Initialization Method
     */
    TabBarComponent.prototype.ngOnInit = function () {
    };
    /**
     * Selected the tab and emits a value
     * @param {string} current
     */
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
        })
        /**
         * A Nav-bar that has been flipped 90 degrees
         */
        ,
        __metadata("design:paramtypes", [])
    ], TabBarComponent);
    return TabBarComponent;
}());



/***/ }),

/***/ "./src/app/filter-tools.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/filter-tools.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterToolsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterToolsPipe", function() { return FilterToolsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterToolsPipe = /** @class */ (function () {
    function FilterToolsPipe() {
    }
    FilterToolsPipe.prototype.transform = function (value, args) {
        return null;
    };
    FilterToolsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterTools'
        })
    ], FilterToolsPipe);
    return FilterToolsPipe;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About me</h1>\n<h2>It's all about creativity</h2>\n<p>I love making music since i was a little child, and also everything i have been surrounded by tech since that.<br>\n  Art or being creative helped a lot to gain insights of business processes or the developing a own sound.<br>\n  Even this web page would not exist, if I would not have imagine how it could look like!<br><br>\n  <b>I am currently looking forward to find new exciting experiences in my work and dj life!</b>\n</p>\n\n<h2>Contact / Admin</h2>\n<p>\n  Contact via:<br/> Name: Markus Wagner<br/> Mail: <a href=\"mailto:djdiox@gmail.com\">djdiox@gmail.com</a><br/> Home:\n  Stuttgart<br/>\n  Complete CV available on request via E-Mail.\n</p>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".software-icon {\n  height: 3em;\n  width: 4em;\n  display: block; }\n\nsvg {\n  height: 3em;\n  width: 4em; }\n"

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
    /**
     * Class Initialization
     */
    function AboutComponent() {
        /**
         * Collected Icons
         * TODO: Refactor this
         * @type Array<object<
         */
        this.softwareIcons = [
            {
                path: 'assets/images/icons/angular.svg',
                name: 'Angular'
            },
            {
                path: 'assets/images/icons/firebase.svg',
                name: 'Firbase'
            },
            {
                path: 'assets/images/icons/docker.svg',
                name: 'Docker'
            },
            {
                path: 'assets/images/icons/ubuntu.svg',
                name: 'Ubuntu'
            },
            {
                path: 'assets/images/icons/photoshop.svg',
                name: 'Photoshop'
            },
        ];
    }
    /**
     * Angular Component Initialization Method
     */
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        })
        /**
         * Controller for the About Page
         */
        ,
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
    /**
     * Class Initialization
     */
    function BlogComponent() {
    }
    /**
     * Angular Component Initialization Method
     */
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/pages/blog/blog.component.scss")]
        })
        /**
         * Controller for the Blog Page
         * (Currently Placeholder)
         */
        ,
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

module.exports = "<h1>Welcome to my Page!</h1>\n<p>\n    Follow along!\n</p>\n<p>\n  Here will be my published profile and everything which is linked to it!<br>\n  Music, Dev & Gaming.. And many more.<br>\n  <br>\n  This page is currently in Beta and will be published over\n  <a target=\"_blank\" href=\"http://www.github.com/djdiox\"><img src=\"assets/images/icons/Octocat.png\"\n                                                             width=\"30\" height=\"30\" />Github</a>.\n</p>\n"

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
    /**
     * Class Initialization
     */
    function HomeComponent() {
    }
    /**
     * Angular Component Initialization Method
     */
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        })
        /**
         * Controller for the Home Page
         */
        ,
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/interactive-cv/_presets/cv-default-state.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/interactive-cv/_presets/cv-default-state.ts ***!
  \*******************************************************************/
/*! exports provided: DEFAULT_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony import */ var _tool_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool-type */ "./src/app/pages/interactive-cv/_presets/tool-type.ts");

/**
 * Created by markuswagner on 29.07.18.
 */
// TODO: Refactor for Page Class
var DEFAULT_STATE = {
    view: 'start',
    index: 0,
    progress: 0,
    breadcrumbs: ['start'],
    data: {
        views: [
            'start',
            'school',
            'experience',
            'technology',
            'programming',
            'goals',
            'end'
        ],
        schools: [
            {
                name: 'Silcherschule Kornwestheim',
                type: 'elementary school',
                duration: '2000 - 2006',
                tooltip: 'first start into educational world'
            },
            {
                name: 'Realschule Remseck',
                type: 'middle school',
                duration: '2006 - 2012',
                tooltip: 'basic skills and mostly soft skills'
            },
            {
                name: 'ITS-Schule Stuttgart',
                type: 'apprenticeship school',
                duration: '2012 - 2015',
                tooltip: 'software and business skills'
            }
        ],
        experiences: [
            {
                position: 'right',
                startDate: '2012-09',
                endDate: '2015-07',
                headline: 'k+k information services GmbH',
                content: 'Quality management software'
            },
            {
                position: 'left',
                startDate: '2015-07',
                endDate: '2015-11',
                headline: 'Mediverbund AG',
                content: 'Software for doctors'
            },
            {
                position: 'right',
                startDate: '2015-11',
                endDate: '2016-05',
                headline: 'Fritz & Dietrich GbR',
                content: 'Agency for fairs & mobile software'
            },
            {
                position: 'left',
                startDate: '2016-05',
                endDate: new Date().getFullYear() + "-" + ('0' + (new Date().getMonth() + 1)).slice(-2) + " (today)",
                headline: 'netvico GmbH',
                content: 'Digital signage & management software'
            },
        ],
        technology: {
            frameworks: [],
            tools: [
                {
                    name: 'Angular.JS',
                    website: 'https://angularjs.org/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].framework,
                    description: 'The old version of the famous MVVM Framework'
                },
                {
                    name: 'Angular 2+',
                    website: 'https://angular.io/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].framework,
                    description: 'Newer version of the angular framework'
                },
                {
                    name: 'Node.JS',
                    website: 'https://nodejs.org/en/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].framework,
                    description: 'Swiss army tool for developers'
                },
                {
                    name: 'Laravel',
                    website: 'https://laravel.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].framework,
                    description: 'Best PHP framework'
                },
                {
                    name: 'NativeScript',
                    website: 'https://www.nativescript.org/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].framework,
                    description: 'Run Angular / vue.js on mobile devices'
                },
                {
                    name: 'Unity',
                    website: 'https://unity3d.com/de',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].framework,
                    description: 'Gaming framework'
                },
                {
                    name: 'GraphQL',
                    website: 'https://graphql.org/learn/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].development,
                    description: 'Query language for backend'
                },
                {
                    name: 'Firebase',
                    website: 'https://firebase.google.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].database,
                    description: 'Reactive database by google'
                },
                {
                    name: 'webpack',
                    website: 'https://webpack.js.org/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].development,
                    description: 'process javascript for web'
                },
                {
                    name: 'yarn',
                    website: 'http://yarn.org/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].development,
                    description: 'alternative package manager for node.js'
                },
                {
                    name: 'GitLab',
                    website: 'https://about.gitlab.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].development,
                    description: 'Git repository provider with CI/CD etc.'
                },
                {
                    name: 'GitHub',
                    website: 'https://github.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].development,
                    description: 'Git repository provider'
                },
                {
                    name: 'Docker',
                    website: 'https://www.docker.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].development,
                    description: 'VM for simple deployment etc.'
                },
                {
                    name: 'Webstorm',
                    website: 'https://www.jetbrains.com/webstorm/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].IDE,
                    description: 'Jetbrains Web IDE'
                },
                {
                    name: 'VS Code',
                    website: 'https://code.visualstudio.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].IDE,
                    description: 'Lightweight IDE for many languages'
                },
                {
                    name: 'Visual Studio',
                    website: 'https://visualstudio.microsoft.com/de/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].IDE,
                    description: 'Windows development environment'
                },
                {
                    name: 'Jira',
                    website: 'https://www.atlassian.com/software/jira',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].management,
                    description: 'Advanced SCRUM / Kan Ban etc. Webapp'
                },
                {
                    name: 'Trello',
                    website: 'https://trello.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].management,
                    description: 'Process Management Webapp'
                },
                {
                    name: 'MacOSX',
                    website: 'https://www.apple.com/lae/macos/high-sierra/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].OS,
                    description: 'Beautiful running OS'
                },
                {
                    name: 'Windows',
                    website: 'https://www.microsoft.com/en-us/windows',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].OS,
                    description: 'Microsoft all-time classic'
                },
                {
                    name: 'Ubuntu',
                    website: 'https://www.ubuntu.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].OS,
                    description: '(Or other Linux distributions) for servers'
                },
                {
                    name: 'Office',
                    website: 'https://www.office.com/',
                    type: _tool_type__WEBPACK_IMPORTED_MODULE_0__["ToolType"].office,
                    description: 'Office 365 for good office experience'
                }
            ]
        },
        programming: {
            languages: [
                'C#',
                'JavaScript (ES6)',
                'Typescript',
                'HTML5',
                'CSS 3.0',
                'SCSS',
                'PWA',
                'PHP',
                'bash',
                'SQL',
                'NoSQL',
                'Visual Basic',
                'VBA',
            ],
            technics: [
                'Agile development',
                'SCRUM',
                'Kan Ban',
                'Waterfall',
            ]
        }
    }
};


/***/ }),

/***/ "./src/app/pages/interactive-cv/_presets/tool-type.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/interactive-cv/_presets/tool-type.ts ***!
  \************************************************************/
/*! exports provided: ToolType, Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolType", function() { return ToolType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
/*
 * Represents the type of tools
 */
var ToolType;
(function (ToolType) {
    ToolType["OS"] = "OS";
    ToolType["IDE"] = "IDE";
    ToolType["framework"] = "framework";
    ToolType["database"] = "database";
    ToolType["office"] = "office";
    ToolType["management"] = "management";
    ToolType["development"] = "development";
})(ToolType || (ToolType = {}));
var types = Object.keys(ToolType);
var Types = types;


/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-end/cv-end.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-end/cv-end.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Thanks for taking this journey through my Profile!</h2>\n<p>\n  Through the breadcrumbs it is possible to go back to every single page!<br>\n  Enjoy the rest of the page as well!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-end/cv-end.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-end/cv-end.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-end/cv-end.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-end/cv-end.component.ts ***!
  \*****************************************************************/
/*! exports provided: CvEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvEndComponent", function() { return CvEndComponent; });
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

var CvEndComponent = /** @class */ (function () {
    /**
     * Instance Created
     */
    function CvEndComponent() {
    }
    /**
     * Angular Initialization Method
     */
    CvEndComponent.prototype.ngOnInit = function () {
    };
    CvEndComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-end',
            template: __webpack_require__(/*! ./cv-end.component.html */ "./src/app/pages/interactive-cv/cv-end/cv-end.component.html"),
            styles: [__webpack_require__(/*! ./cv-end.component.scss */ "./src/app/pages/interactive-cv/cv-end/cv-end.component.scss")]
        })
        /**
         * Controller for the CV (End) Page
         */
        ,
        __metadata("design:paramtypes", [])
    ], CvEndComponent);
    return CvEndComponent;
}());



/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-experience/cv-experience.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-experience/cv-experience.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline\">\n  <div class=\"container\"\n       *ngFor=\"let experience of state.data.experiences;let idx = $index\"\n       [ngClass]=\"experience.position\">\n    <div class=\"content\">\n      <h2>{{experience.startDate}} - {{experience.endDate}}</h2>\n      <h3>{{experience.headline}}</h3>\n      <p>{{experience.content}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-experience/cv-experience.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-experience/cv-experience.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\n/* The actual timeline (the vertical ruler) */\n.timeline {\n  position: relative;\n  max-width: 662px;\n  margin: 0 auto;\n  color: #000; }\n/* The actual timeline (the vertical ruler) */\n.timeline::after {\n  content: '';\n  position: absolute;\n  width: 6px;\n  background-color: white;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -3px; }\n/* Container around content */\n.container {\n  padding: 10px 40px;\n  position: relative;\n  background-color: inherit;\n  width: 50%; }\n/* The circles on the timeline */\n.container::after {\n  content: '';\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: -17px;\n  background-color: #fff;\n  border: 4px solid #fe7c08;\n  top: 15px;\n  border-radius: 50%;\n  z-index: 1; }\n/* Place the container to the left */\n.left {\n  left: -5em; }\n/* Place the container to the right */\n.right {\n  left: 50%; }\n/* Add arrows to the left container (pointing right) */\n.left::before {\n  content: \" \";\n  height: 0;\n  position: absolute;\n  top: 22px;\n  width: 0;\n  z-index: 1;\n  right: 30px;\n  border: medium solid #fff;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent #fff; }\n/* Add arrows to the right container (pointing left) */\n.right::before {\n  content: \" \";\n  height: 0;\n  position: absolute;\n  top: 22px;\n  width: 0;\n  z-index: 1;\n  left: 30px;\n  border: medium solid #fff;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent white transparent transparent; }\n/* Fix the circle for containers on the right side */\n.right::after {\n  left: -16px; }\n/* The actual content */\n.content {\n  padding: 20px 30px;\n  background-color: white;\n  position: relative;\n  border-radius: 6px; }\n/* Media queries - Responsive timeline on screens less than 600px wide */\n@media screen and (max-width: 1120px) {\n  /* Place the timelime to the left */\n  .timeline::after {\n    left: 31px; }\n  .left {\n    left: 0; }\n  /* Full-width containers */\n  .container {\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px; }\n  /* Make sure that all arrows are pointing leftwards */\n  .container::before {\n    left: 60px;\n    border: medium solid #fff;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent #fff transparent transparent; }\n  /* Make sure all circles are at the same spot */\n  .left::after, .right::after {\n    left: 15px; }\n  /* Make all right containers behave like the left ones */\n  .right {\n    left: 0%; } }\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-experience/cv-experience.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-experience/cv-experience.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CvExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvExperienceComponent", function() { return CvExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_presets/cv-default-state */ "./src/app/pages/interactive-cv/_presets/cv-default-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CvExperienceComponent = /** @class */ (function () {
    /**
     * Class Initialization
     */
    function CvExperienceComponent() {
        /**
         * Current State of the CV
         * @type Object
         */
        this.state = _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"];
    }
    /**
     * Angular Component Initialization Method
     */
    CvExperienceComponent.prototype.ngOnInit = function () {
    };
    CvExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-experience',
            template: __webpack_require__(/*! ./cv-experience.component.html */ "./src/app/pages/interactive-cv/cv-experience/cv-experience.component.html"),
            styles: [__webpack_require__(/*! ./cv-experience.component.scss */ "./src/app/pages/interactive-cv/cv-experience/cv-experience.component.scss")]
        })
        /**
         * Controller for the CV (Experience) Page
         */
        ,
        __metadata("design:paramtypes", [])
    ], CvExperienceComponent);
    return CvExperienceComponent;
}());



/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-goals/cv-goals.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-goals/cv-goals.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>goals / future</h2>\n<p>\n  In near future i want to progress more in architecture and business development<br>\n  Since the learning in coding never ends, i also want to archieve a greater understanding of all the technology!<br>\n  The ultimate goal would be to work at a TOP 5 Company :).<br>\n  Until I reached this goal, i wanna learn as much as i can!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-goals/cv-goals.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-goals/cv-goals.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-goals/cv-goals.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-goals/cv-goals.component.ts ***!
  \*********************************************************************/
/*! exports provided: CvGoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvGoalsComponent", function() { return CvGoalsComponent; });
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

var CvGoalsComponent = /** @class */ (function () {
    /**
     * Class Initialization Method
     */
    function CvGoalsComponent() {
    }
    /**
     * Angular Component Initialization Method
     */
    CvGoalsComponent.prototype.ngOnInit = function () {
    };
    CvGoalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-goals',
            template: __webpack_require__(/*! ./cv-goals.component.html */ "./src/app/pages/interactive-cv/cv-goals/cv-goals.component.html"),
            styles: [__webpack_require__(/*! ./cv-goals.component.scss */ "./src/app/pages/interactive-cv/cv-goals/cv-goals.component.scss")]
        })
        /**
         * Controller for the CV (Goals) Page
         */
        ,
        __metadata("design:paramtypes", [])
    ], CvGoalsComponent);
    return CvGoalsComponent;
}());



/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-programming/cv-programming.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-programming/cv-programming.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>programming</h2>\n<p>\n  There is a use case for any language!<br>\n  I learned a lot of different languages, that is one reason for it!<br>\n  Splitting applications in order to create microservices, has a lot of positive aspects!<br>\n  I try always to achieve a MultiOS Level for my apps!<br>\n  For a best solution, the toolkit must be big! I'm always open for new things!\n</p>\n<h3>languages</h3>\n<mat-chip-list>\n  <mat-chip *ngFor=\"let lang of state.data.programming.languages\">\n    {{lang}}\n  </mat-chip>\n</mat-chip-list>\n<h3>technics</h3>\n<p>\n  These technics and other help to plan and and support the development process.\n</p>\n<mat-chip-list>\n  <mat-chip *ngFor=\"let technic of state.data.programming.technics\">\n    {{technic}}\n  </mat-chip>\n</mat-chip-list>\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-programming/cv-programming.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-programming/cv-programming.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-programming/cv-programming.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-programming/cv-programming.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CvProgrammingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvProgrammingComponent", function() { return CvProgrammingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_presets/cv-default-state */ "./src/app/pages/interactive-cv/_presets/cv-default-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CvProgrammingComponent = /** @class */ (function () {
    /**
     * Class Initialization
     */
    function CvProgrammingComponent() {
        /**
         * Current State of the CV
         * @type Object
         */
        this.state = _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"];
    }
    /**
     * Class Initialization
     */
    CvProgrammingComponent.prototype.ngOnInit = function () {
    };
    CvProgrammingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-programming',
            template: __webpack_require__(/*! ./cv-programming.component.html */ "./src/app/pages/interactive-cv/cv-programming/cv-programming.component.html"),
            styles: [__webpack_require__(/*! ./cv-programming.component.scss */ "./src/app/pages/interactive-cv/cv-programming/cv-programming.component.scss")]
        })
        /**
         * Controller for the CV (Programmng) Page
         */
        ,
        __metadata("design:paramtypes", [])
    ], CvProgrammingComponent);
    return CvProgrammingComponent;
}());



/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-school/cv-school.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-school/cv-school.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Knowledge is key</h2>\n<p>\n  I noticed already in the middle school (2006-2012) that electronic devices and software is mine and our future!<br>\n  The love of creating something new has always been a part of me.<br>\n</p>\n<h3>Educational career</h3>\n<mat-card>\n  <mat-list>\n    <mat-list-item *ngFor=\"let school of state.data.schools\" [matTooltip]=\"school.tooltip\">\n      <mat-icon matListIcon>school</mat-icon>\n      <h3 matLine>{{school.name}}</h3>\n      <p matLine>\n        <span>{{school.type}}</span><br>\n        <span>{{school.duration}}</span>\n      </p>\n    </mat-list-item>\n  </mat-list>\n</mat-card>\n<h3>Practical experience is the best</h3>\n<p>\n  Soon i will find out in that time that practical experience is the most important one!<br>\n  On the next page there will be more informations about it.\n</p>\n<!--<button mat-button (click)=\"nextPage()\">More yet to come :)</button>-->\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-school/cv-school.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-school/cv-school.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-school/cv-school.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-school/cv-school.component.ts ***!
  \***********************************************************************/
/*! exports provided: CvSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvSchoolComponent", function() { return CvSchoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_presets/cv-default-state */ "./src/app/pages/interactive-cv/_presets/cv-default-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CvSchoolComponent = /** @class */ (function () {
    /**
     * Instance created
     */
    function CvSchoolComponent() {
        /**
         * Current State of the CV
         * @type Object
         */
        this.state = _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"];
    }
    /**
     * Angular Initialization Method
     */
    CvSchoolComponent.prototype.ngOnInit = function () {
    };
    CvSchoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-school',
            template: __webpack_require__(/*! ./cv-school.component.html */ "./src/app/pages/interactive-cv/cv-school/cv-school.component.html"),
            styles: [__webpack_require__(/*! ./cv-school.component.scss */ "./src/app/pages/interactive-cv/cv-school/cv-school.component.scss")]
        })
        /**
         * Controller for the CV (SchoolS) Page
         */
        ,
        __metadata("design:paramtypes", [])
    ], CvSchoolComponent);
    return CvSchoolComponent;
}());



/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-start/cv-start.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-start/cv-start.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>More than just a pdf.</h2>\n<p>\n  Welcome to the interactive CV of myself.<br>\n  I am Markus Wagner and I am glad to have you hear on my page!<br>\n  The idea behind this to make this a little more fun!\n</p>\n<!--<button mat-button (click)=\"switchTo(1)\">Let's Go!</button>-->\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-start/cv-start.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-start/cv-start.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-start/cv-start.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-start/cv-start.component.ts ***!
  \*********************************************************************/
/*! exports provided: CvStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvStartComponent", function() { return CvStartComponent; });
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

var CvStartComponent = /** @class */ (function () {
    /**
     * Class Initialization
     */
    function CvStartComponent() {
    }
    /**
     * Angular Component Initialization Method
     */
    CvStartComponent.prototype.ngOnInit = function () {
    };
    CvStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-start',
            template: __webpack_require__(/*! ./cv-start.component.html */ "./src/app/pages/interactive-cv/cv-start/cv-start.component.html"),
            styles: [__webpack_require__(/*! ./cv-start.component.scss */ "./src/app/pages/interactive-cv/cv-start/cv-start.component.scss")]
        })
        /**
         * Controller for the CV (Start) Page
         */
        ,
        __metadata("design:paramtypes", [])
    ], CvStartComponent);
    return CvStartComponent;
}());



/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-technology/cv-technology.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-technology/cv-technology.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Technology as support</h2>\n<p>\n  Knowledge of programming is as important as the knowledge of available tools.<br>\n  Open Source Frameworks made programming really great<br>\n  Here an overview of Sofware which i have or had in use<br>\n</p>\n<mat-form-field class=\"example-full-width\">\n  <input matInput placeholder=\"Search...\" [(ngModel)]=\"searchText\" (keyup)=\"searchTools(searchText)\">\n</mat-form-field>\n<div class=\"tools-wrapper\">\n  <div class=\"tool-container\" *ngFor=\"let section of currenTools\">\n    <h3>{{section.name}}</h3>\n    <mat-chip-list>\n      <mat-chip *ngFor=\"let tool of section.tools\"\n                (click)=\"openUrl(tool.website)\"\n                [matTooltip]=\"tool.description + '\\n' + 'click to open: ' + tool.website\">\n        {{tool.name}}\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-technology/cv-technology.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-technology/cv-technology.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tools-wrapper {\n  clear: both;\n  height: 32em; }\n  .tools-wrapper .tool-container {\n    float: left;\n    width: 13em;\n    min-height: 5em; }\n  .tools-wrapper mat-chip {\n    cursor: pointer; }\n  ::ng-deep .mat-tooltip {\n  white-space: pre-line !important; }\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/cv-technology/cv-technology.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/interactive-cv/cv-technology/cv-technology.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CvTechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvTechnologyComponent", function() { return CvTechnologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_presets/cv-default-state */ "./src/app/pages/interactive-cv/_presets/cv-default-state.ts");
/* harmony import */ var _presets_tool_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_presets/tool-type */ "./src/app/pages/interactive-cv/_presets/tool-type.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CvTechnologyComponent = /** @class */ (function () {
    /**
     * Class Initialization
     */
    function CvTechnologyComponent() {
        /**
         * Current State of the CV
         * (Deep cloned)
         * @type Object
         */
        this.state = __assign({}, _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_STATE"]);
        /**
         * All tools available fo the CV
         * @type {Array}
         */
        this.allTools = this.createTools();
        /**
         * Represents all types of tools in the cv
         * @type {string[]}
         */
        this.currenTools = this.createTools();
        /**
         * A search for the technologies
         */
        this.searchText = '';
    }
    /**
     * Angular Component Initialization Method
     */
    CvTechnologyComponent.prototype.ngOnInit = function () {
    };
    /**
     * Creates the tools of the type
     */
    CvTechnologyComponent.prototype.createTools = function () {
        var _this = this;
        return _presets_tool_type__WEBPACK_IMPORTED_MODULE_2__["Types"].reduce(function (initial, type) { return initial.concat([{
                name: type,
                tools: _this.filterTools(type)
            }]); }, []);
    };
    /**
     * Filters all the given toolTypes by the Type
     * @param type the tipe that filters the array
     * @returns {any[]} The array of tools
     */
    CvTechnologyComponent.prototype.filterTools = function (type) {
        return this.state.data.technology.tools
            .filter(function (tool) { return tool.type === type; });
    };
    /**
     * Opens a given website by parameters
     * @param website a fully qualified URL String
     */
    CvTechnologyComponent.prototype.openUrl = function (website) {
        window.open(website);
    };
    /**
     * Searches all the chips by a given string
     * @param search
     */
    CvTechnologyComponent.prototype.searchTools = function (search) {
        this.currenTools = this.allTools.reduce(function (finalValue, current) {
            current = JSON.parse(JSON.stringify(current));
            current.tools = current.tools.filter(function (tool) { return JSON.stringify(tool).toLowerCase().indexOf(search.toLowerCase()) !== -1; });
            return current.tools.length !== 0 ? finalValue.concat([current]) : finalValue;
        }, []);
    };
    CvTechnologyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv-technology',
            template: __webpack_require__(/*! ./cv-technology.component.html */ "./src/app/pages/interactive-cv/cv-technology/cv-technology.component.html"),
            styles: [__webpack_require__(/*! ./cv-technology.component.scss */ "./src/app/pages/interactive-cv/cv-technology/cv-technology.component.scss")]
        })
        /**
         * Controller for the CV (Technology) Page
         */
        ,
        __metadata("design:paramtypes", [])
    ], CvTechnologyComponent);
    return CvTechnologyComponent;
}());



/***/ }),

/***/ "./src/app/pages/interactive-cv/interactive-cv.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/interactive-cv.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Interactive CV!</h1>\n\n<mat-chip-list>\n  <mat-chip\n    *ngFor=\"let breadcrumb of state.breadcrumbs;let idx = index\"\n    (click)=\"switchTo(idx)\"\n    matTooltip=\"Show the page\"\n    color=\"primary\"\n    [selected]=\"state.view === breadcrumb\"\n    [class.active]=\"state.view === breadcrumb\">\n    {{breadcrumb}}\n  </mat-chip>\n</mat-chip-list>\n<button mat-button (click)=\"previousPage()\">back</button>\n<button mat-button (click)=\"nextPage()\">next</button>\n<mat-progress-bar mode=\"determinate\" [value]=\"state.progress\"></mat-progress-bar>\n<div class=\"component\" [ngClass]=\"state.view\">\n  <app-cv-start *ngIf=\"state.view === 'start'\"></app-cv-start>\n  <button mat-button (click)=\"nextPage()\" *ngIf=\"state.view === 'start'\">Let's Go!</button>\n  <app-cv-school *ngIf=\"state.view === 'school'\"></app-cv-school>\n  <button mat-button (click)=\"nextPage()\" *ngIf=\"state.view === 'school'\">More yet to come :)</button>\n  <app-cv-experience *ngIf=\"state.view === 'experience'\"></app-cv-experience>\n  <app-cv-technology *ngIf=\"state.view === 'technology'\"></app-cv-technology>\n  <app-cv-programming *ngIf=\"state.view === 'programming'\"></app-cv-programming>\n  <app-cv-goals *ngIf=\"state.view === 'goals'\"></app-cv-goals>\n  <app-cv-end *ngIf=\"state.view === 'end'\"></app-cv-end>\n</div>\n<!--<mat-progress-bar mode=\"determinate\" [value]=\"state.progress\"></mat-progress-bar>-->\n<button mat-button (click)=\"previousPage()\">back</button>\n<button mat-button (click)=\"nextPage()\">next</button>\n<!--<pre>{{state | json}}</pre>-->\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/interactive-cv.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/interactive-cv/interactive-cv.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Global color palette\n * =================================\n * - Generic colors\n * - Color scheme\n * - Common colors\n * - Links\n * - Text selection\n * - <hr>\n * - Any others..\n */\nul.breadcrumbs li {\n  display: block;\n  width: 2em; }\nul li {\n  width: 46%; }\n.component {\n  padding: 1em;\n  min-height: 14em;\n  background-color: rgba(0, 0, 0, 0.7); }\n"

/***/ }),

/***/ "./src/app/pages/interactive-cv/interactive-cv.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/interactive-cv/interactive-cv.component.ts ***!
  \******************************************************************/
/*! exports provided: InteractiveCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveCvComponent", function() { return InteractiveCvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_interactive_cv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/interactive-cv.service */ "./src/app/services/interactive-cv.service.ts");
/* harmony import */ var _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_presets/cv-default-state */ "./src/app/pages/interactive-cv/_presets/cv-default-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InteractiveCvComponent = /** @class */ (function () {
    /**
     * Class Initialization
     * @param interActiveCvService
     */
    function InteractiveCvComponent(interActiveCvService) {
        this.interActiveCvService = interActiveCvService;
        /**
         * Current State of this page, includes all changing or data variables
         */
        this.state = _presets_cv_default_state__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_STATE"];
    }
    /**
     * Angular Component Initialization Method
     */
    InteractiveCvComponent.prototype.ngOnInit = function () {
        // this.interActiveCvService
        //   .currentPage
        //   .subscribe((page: Page) => {
        //     this.setState(DEFAULT_STATE);
        //     this.setState(page);
        //   });
    };
    /**
     * Sets the current state, but keeps old variables
     * @param newState The new state that overwrites content
     */
    InteractiveCvComponent.prototype.setState = function (newState) {
        this.state = lodash__WEBPACK_IMPORTED_MODULE_1__["assign"](this.state, newState);
    };
    /**
     * Adds the view to current breadcrumbs, or returns them
     * @param view{string} the view that has been set
     * @param breadcrumbs{[string]} the current breadcrumbs
     * @returns {[string]} the new current breadcrumbs
     */
    InteractiveCvComponent.prototype.getBreadcrumbs = function (view, breadcrumbs) {
        return breadcrumbs.indexOf(view) !== -1 ? breadcrumbs : breadcrumbs.concat([view]);
    };
    /**
     * Calculates the progress for the progress bar (in percent)
     * @param index{number} The index of the next page
     * @param viewCount{number} the current view count
     * @returns {number} the current percentage of the cv
     */
    InteractiveCvComponent.prototype.calculateProgress = function (index, viewCount) {
        return index / viewCount * 100;
    };
    /**
     * Shows the next page
     */
    InteractiveCvComponent.prototype.nextPage = function () {
        this.switchTo(this.state.index + 1);
    };
    /**
     * Shows the previous page
     */
    InteractiveCvComponent.prototype.previousPage = function () {
        this.switchTo(this.state.index - 1);
    };
    /**
     * switches the page the a index
     * @param index the index for switching
     */
    InteractiveCvComponent.prototype.switchTo = function (index) {
        var view = this.state.data.views[index];
        if (this.state.view === view ||
            typeof view === 'undefined') {
            return;
        }
        var page = {
            breadcrumbs: this.getBreadcrumbs(view, this.state.breadcrumbs),
            view: view,
            index: index,
            progress: this.calculateProgress(index, this.state.data.views.length - 1)
        };
        this.interActiveCvService.setPage(page);
        this.setState(page);
    };
    InteractiveCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interactive-cv',
            template: __webpack_require__(/*! ./interactive-cv.component.html */ "./src/app/pages/interactive-cv/interactive-cv.component.html"),
            styles: [__webpack_require__(/*! ./interactive-cv.component.scss */ "./src/app/pages/interactive-cv/interactive-cv.component.scss")]
        })
        /**
         * Controller for the Interactive CV
         */
        ,
        __metadata("design:paramtypes", [_services_interactive_cv_service__WEBPACK_IMPORTED_MODULE_2__["InteractiveCvService"]])
    ], InteractiveCvComponent);
    return InteractiveCvComponent;
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
/**
 * Controller for the Pictures Page
 */


var PicturesComponent = /** @class */ (function () {
    /**
     * Instance Created
     */
    function PicturesComponent() {
        /**
         * A List of all displayed Gallery Items
         */
        this.images = [
            new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: 'assets/images/embedded/photo_1.jpg', thumb: 'assets/images/embedded/photo_1.jpg' }),
            new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: 'assets/images/embedded/photo_2.jpg', thumb: 'assets/images/embedded/photo_2.jpg' }),
            new _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_1__["ImageItem"]({ src: 'assets/images/embedded/photo_3.jpg', thumb: 'assets/images/embedded/photo_3.jpg' }),
        ];
    }
    /**
     * Angular Initialization Method
     */
    PicturesComponent.prototype.ngOnInit = function () {
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

module.exports = ""

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
/**
 * Controller for the Sets Page
 */

var SetsComponent = /** @class */ (function () {
    /**
     * Instance created
     */
    function SetsComponent() {
        /**
         * Current Selected Tab
         * @type {string}
         */
        this.selected = 'biography';
    }
    /**
     * Angular Initialization Method
     */
    SetsComponent.prototype.ngOnInit = function () {
    };
    /**
     * Called when the user clicks on the tab
     * @param $event {string} user input
     */
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

module.exports = "<h1>Development</h1>\n<h2>process design is key</h2>\n<p>\n  Working as a developer and creating a unique experience for everyone has ever been my goal to archive.<br>\n  The details and a perfect workflow is what makes every page or app unique.<br><br>\n  Backend, Frontend and everything else related to making a software is in my scope when it comes to development.<br>\n</p>\n\n<h2>Current Technology in Use</h2>\n<!--TODO add Icons for Software -->\n<p>Angular, Typescript, Firebase, Node.JS, Docker, Ubuntu, Webstorm, VSCode, MacOS, Windows, Photoshop</p>\n\n"

/***/ }),

/***/ "./src/app/pages/work/work.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/work/work.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
    /**
     * Class Initialization
     */
    function WorkComponent() {
    }
    /**
     * Angular Component Initialization Method
     */
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/pages/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/pages/work/work.component.scss")]
        })
        /**
         * Controller for the Work Page
         */
        ,
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
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_sets_sets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/sets/sets.component */ "./src/app/pages/sets/sets.component.ts");
/* harmony import */ var _pages_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pictures/pictures.component */ "./src/app/pages/pictures/pictures.component.ts");
/* harmony import */ var _pages_work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/work/work.component */ "./src/app/pages/work/work.component.ts");
/* harmony import */ var _pages_interactive_cv_interactive_cv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/interactive-cv/interactive-cv.component */ "./src/app/pages/interactive-cv/interactive-cv.component.ts");







/**
 * An Array of all the routes in our app
 * For a clean overview in a new file
 * @type Array
 */
/**
 * Current App Routes in the App
 * @type Array
 */
var appRoutes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
        data: { state: 'home' }
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
        data: { state: 'home' }
    },
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: { state: 'about' }
    },
    {
        path: 'sets',
        component: _pages_sets_sets_component__WEBPACK_IMPORTED_MODULE_3__["SetsComponent"],
        data: { state: 'sets' }
    },
    {
        path: 'pictures',
        component: _pages_pictures_pictures_component__WEBPACK_IMPORTED_MODULE_4__["PicturesComponent"],
        data: { state: 'pictures' }
    },
    {
        path: 'work',
        component: _pages_work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"],
        data: { state: 'work' }
    },
    {
        path: 'blog',
        component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__["BlogComponent"],
        data: { state: 'blog' }
    },
    {
        path: 'cv',
        component: _pages_interactive_cv_interactive_cv_component__WEBPACK_IMPORTED_MODULE_6__["InteractiveCvComponent"],
        data: { state: 'cv' }
    }
    /*{
     path: '**',
     component: PageNotFoundComponent
     }*/
];
/**
 * Created by Markus Wagner on 20.07.18.
 */


/***/ }),

/***/ "./src/app/services/dialog-flow.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dialog-flow.service.ts ***!
  \*************************************************/
/*! exports provided: DialogFlowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFlowService", function() { return DialogFlowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogFlowService = /** @class */ (function () {
    function DialogFlowService(http) {
        this.http = http;
        /**
         * The baseURL From DialogFlow
         * @type {string}
         */
        this.baseURL = 'https://api.dialogflow.com/';
    }
    /**
     * Gets the response for the DialogFlow Request
     * @param query {string} A string that should be searched in the AI
     * @returns {Observable<Promise<any>>} Http Request Observable
     */
    DialogFlowService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'de',
            sessionId: '12345'
        };
        return this.http
            .post(this.baseURL + "v1/query?v=20150910", data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dialogFlowToken
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    DialogFlowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Natural Language Processing made easy
         * Learns by Artificial Intelligence
         */
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DialogFlowService);
    return DialogFlowService;
}());



/***/ }),

/***/ "./src/app/services/interactive-cv.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/interactive-cv.service.ts ***!
  \****************************************************/
/*! exports provided: InteractiveCvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveCvService", function() { return InteractiveCvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InteractiveCvService = /** @class */ (function () {
    /**
     * Creates a new Instance of the service
     */
    function InteractiveCvService() {
        this._currentPage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(InteractiveCvService.prototype, "currentPage", {
        /**
         * Page Observable
         * @returns {Observable<Page>} An Observable that will call everytime the page changes
         */
        get: function () {
            return this._currentPage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the current Page on the Observable
     * @param page next page that should displayed
     */
    InteractiveCvService.prototype.setPage = function (page) {
        this._currentPage.next(page);
    };
    InteractiveCvService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * A Pages services for sharing the current page
         */
        ,
        __metadata("design:paramtypes", [])
    ], InteractiveCvService);
    return InteractiveCvService;
}());



/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalOptions, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The Modal Options that will create a new simple modal
 */
var ModalOptions = /** @class */ (function () {
    /**
     * Creates the instance of the class
     * Default Visible: false
     * @param name the name to find the modal again
     * @param header the header of the current modal
     * @param content the content (text) of the modal
     */
    function ModalOptions(name, title, content, visible) {
        if (visible === void 0) { visible = false; }
        /**
         * Result if Interactive
         * @type {boolean}
         */
        this.result = false;
        this.name = name;
        this.title = title;
        this.content = content;
        this.visible = visible;
    }
    return ModalOptions;
}());

var ModalService = /** @class */ (function () {
    function ModalService() {
        this._currentModalOptions = new rxjs_index__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(ModalService.prototype, "CurrentModalOptions", {
        /**
         * Returns an Observable for the currentModalOptions
         * @returns {Observable<ModalOptions>} Event to hook on
         * @constructor A fine Modal
         */
        get: function () {
            return this._currentModalOptions.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Shows the default modal on view by giving some parameters
     * @param name A unique name
     * @param title a title
     * @param content the content
     */
    ModalService.prototype.showDefaultModal = function (name, title, content) {
        var modalOptions = new ModalOptions(name, title, content, true);
        this.options = modalOptions;
        this._currentModalOptions.next(modalOptions);
    };
    /**
     * Hides the last modal
     * @param result
     */
    ModalService.prototype.hideCurrentModal = function (result) {
        if (result === void 0) { result = false; }
        this.options.visible = false;
        this.options.result = result;
        this._currentModalOptions.next(this.options);
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        /**
         * Provies Appwide Access to Modals
         */
        ,
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



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
/**
 * The current environment variables, that will change from app to app
 * (deployment to deployment)
 * @type Object
 */
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




// Import hammerjs for Gesture Support

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