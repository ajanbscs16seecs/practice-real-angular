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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n\r\n\r\n\r\n[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\n\r\n\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\n\r\n\r\n\r\nh4 {\r\n  position: relative;\r\n}\r\n\r\n\r\n\r\n.grid {\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n\r\n\r\n\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607D8B;\r\n  border-radius: 2px;\r\n}\r\n\r\n\r\n\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n\r\n\r\n\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n\r\n\r\n\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n\r\n\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n  <div class=\"col-for-page\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
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
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _browse_browse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browse/browse.component */ "./src/app/browse/browse.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-details/task-details.component */ "./src/app/task-details/task-details.component.ts");
/* harmony import */ var _task_solution_details_task_solution_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-solution-details/task-solution-details.component */ "./src/app/task-solution-details/task-solution-details.component.ts");
/* harmony import */ var _attachment_attachment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attachment/attachment.component */ "./src/app/attachment/attachment.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-add/task-add.component */ "./src/app/task-add/task-add.component.ts");
/* harmony import */ var _task_submit_task_submit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-submit/task-submit.component */ "./src/app/task-submit/task-submit.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/*
* This file decides the navigation of the app.
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'explore', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'explore/:tag', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'browse', component: _browse_browse_component__WEBPACK_IMPORTED_MODULE_5__["BrowseComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'task/:id', component: _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_7__["TaskDetailsComponent"] },
    { path: 'solution/:id', component: _task_solution_details_task_solution_details_component__WEBPACK_IMPORTED_MODULE_8__["TaskSolutionDetailsComponent"] },
    { path: 'attachment/:id', component: _attachment_attachment_component__WEBPACK_IMPORTED_MODULE_9__["AttachmentComponent"] },
    { path: 'task-new', component: _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_10__["TaskAddComponent"] },
    { path: 'task-submit/:id', component: _task_submit_task_submit_component__WEBPACK_IMPORTED_MODULE_11__["TaskSubmitComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] },
    { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_13__["SupportComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\n\r\n\r\nmat-sidenav{\r\n\twidth: 65%;\r\n}\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n\t/* For tablets: */\r\n\r\n\t[class*=\"header-\"] {\r\n\t\tpadding: 0px;\r\n\t}\r\n\tmat-sidenav{\r\n\t\twidth: 15%;\r\n\t}\r\n}\r\n\r\n\r\n@media only screen and (min-width: 1000px) {\r\n\r\n\t.header-left{\r\n\t\tpadding-left: 15%;\r\n\r\n\t}\r\n\t.header-right{\r\n\t\tpadding-right: 15%;\r\n\r\n\t}\r\n\tmat-sidenav{\r\n\t\twidth: 15%;\r\n\t}\r\n}\r\n\r\n\r\n.nav-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n\r\nmat-sidenav *{\r\n\twidth: 100%;\r\n}\r\n\r\n\r\n.header-outer{\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tbackground: #47f7df;\r\n\tcolor: #072a4e;\r\n}\r\n\r\n\r\n.header-left{\r\n\t\tfloat: left;\r\n\t\theight:100%;\r\n\r\n}\r\n\r\n\r\n.header-right{\r\n\tfloat: right;\r\n\theight:100%\r\n\r\n}\r\n\r\n\r\n.header a,.header i {\r\n\theight:100%;\r\n\tcolor: #072a4e;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 50px;\r\n  padding: 0px 10px;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n.header a:hover {\r\n\tcolor: white ;\r\n}\r\n\r\n\r\n/* Columns : main*/\r\n\r\n\r\n.content{\r\n\t/* background: #fff; */\r\n\theight: 100%;\r\n\tmin-height: 600px;\r\n}\r\n\r\n\r\n.footer{\r\n\tbackground-color: #6f657c;\r\n}\r\n\r\n\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\n\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\n\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n\r\n.footer-distributed{\r\n\tbackground-color: #889190;\r\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tfont: bold 16px sans-serif;\r\n\r\n\tpadding: 55px 50px;\r\n\tmargin-top: 80px;\r\n}\r\n\r\n\r\n.footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n\r\n\r\n/* Footer left */\r\n\r\n\r\n.footer-distributed .footer-left{\r\n\twidth: 40%;\r\n}\r\n\r\n\r\n/* The company logo */\r\n\r\n\r\n.footer-distributed h3{\r\n\tcolor:  #ffffff;\r\n\tfont: normal 36px 'Cookie', cursive;\r\n\tmargin: 0;\r\n}\r\n\r\n\r\n.footer-distributed h3 span{\r\n\tcolor:  #47f7df;\r\n}\r\n\r\n\r\n/* Footer links */\r\n\r\n\r\n.footer-distributed .footer-links{\r\n\tcolor:  #ffffff;\r\n\tmargin: 20px 0 12px;\r\n\tpadding: 0;\r\n}\r\n\r\n\r\n.footer-distributed .footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\r\n}\r\n\r\n\r\n.footer-distributed .footer-company-name{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n\r\n/* Footer Center */\r\n\r\n\r\n.footer-distributed .footer-center{\r\n\twidth: 35%;\r\n}\r\n\r\n\r\n.footer-distributed .footer-center i{\r\n\tbackground-color:  #33383b;\r\n\tcolor: #ffffff;\r\n\tfont-size: 25px;\r\n\twidth: 38px;\r\n\theight: 38px;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tline-height: 42px;\r\n\tmargin: 10px 15px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n\r\n.footer-distributed .footer-center i.fa-envelope{\r\n\tfont-size: 17px;\r\n\tline-height: 38px;\r\n}\r\n\r\n\r\n.footer-distributed .footer-center p{\r\n\tdisplay: inline-block;\r\n\tcolor: #ffffff;\r\n\tvertical-align: middle;\r\n\tmargin:0;\r\n}\r\n\r\n\r\n.footer-distributed .footer-center p span{\r\n\tdisplay:block;\r\n\tfont-weight: normal;\r\n\tfont-size:14px;\r\n\tline-height:2;\r\n}\r\n\r\n\r\n.footer-distributed .footer-center p a{\r\n\tcolor:  #47f7df;\r\n\ttext-decoration: none;;\r\n}\r\n\r\n\r\n/* Footer Right */\r\n\r\n\r\n.footer-distributed .footer-right{\r\n\twidth: 20%;\r\n}\r\n\r\n\r\n.footer-distributed .footer-company-about{\r\n\tline-height: 20px;\r\n\tcolor:  #92999f;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n\r\n.footer-distributed .footer-company-about span{\r\n\tdisplay: block;\r\n\tcolor:  #ffffff;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n.footer-distributed .footer-icons{\r\n\tmargin-top: 25px;\r\n}\r\n\r\n\r\n.footer-distributed .footer-icons a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-right: 3px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n\r\n\r\n@media (max-width: 880px) {\r\n\r\n\t.footer-distributed{\r\n\t\tfont: bold 14px sans-serif;\r\n\t}\r\n\r\n\t.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-center,\r\n\t.footer-distributed .footer-right{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 40px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.footer-distributed .footer-center i{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n}\r\n\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<!-- App component: App Level main html file -->\r\n\r\n\r\n\r\n<html>\r\n\r\n<head>\r\n\r\n\t<!-- cssss -->\r\n\t<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"styles/theme.css\"> -->\r\n\r\n\r\n\r\n\t<!-- settings -->\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\r\n\r\n\t<!-- libraries -->\r\n\t<script defer src=\"https://use.fontawesome.com/releases/v5.0.8/js/all.js\"></script>\r\n\r\n</head>\r\n\r\n\r\n<body>\r\n\r\n\r\n\r\n\t<mat-sidenav-container class=\"nav-container\">\r\n\t\t<mat-sidenav #snav>\r\n\t\t\t<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lOZW7l5eIEpprFJzpwxn60-nIdr91J33udWAxU300a-7Puyu\">\r\n\t\t\t<button mat-button routerLink=\"/explore\">Explore Tasks</button>\r\n\t\t\t<a  routerLink=\"/profile/{{userId}}\" *ngIf=\"loggedIn\">Profile</a>\r\n\t\t\t<a routerLink=\"/signin\" *ngIf=\"notloggedIn\">Sign In</a>\r\n\t\t\t<button mat-button routerLink=\"/about\">About Us</button>\r\n\t\t\t<button mat-button routerLink=\"/support\">Contact/Support</button>\r\n\t\t</mat-sidenav>\r\n\r\n\r\n\r\n\r\n\t\t<mat-sidenav-content>\r\n\r\n\r\n\r\n\r\n\t\t\t<div class=\"header\">\r\n\t\t\t\t<div class=\"header-outer\" (mouseenter) =\"refresh()\">\r\n\t\t\t\t\t<div class=\"header-left\">\r\n\t\t\t\t\t\t<a id=\"menu-icon\"  mat-button (click)=\"snav.toggle()\"><i class=\"fas fa-bars\"></i></a>\r\n\t\t\t\t\t\t<a  routerLink=\"/explore\">{{title}}</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"header-right\">\r\n\t\t\t\t\t\t<a routerLink=\"/browse\">Find Tasks</a>\r\n\t\t\t\t\t\t<a routerLink=\"/task-new\">Post a task</a>\r\n\t\t\t\t\t\t<a routerLink=\"/signin\" *ngIf=\"notloggedIn\">Sign In</a>\r\n\r\n\r\n\t\t\t\t\t\t<a routerLink=\"/profile/{{userId}}\" *ngIf=\"loggedIn\">{{username}}</a>\r\n\r\n\r\n\t\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf=\"loggedIn\" >\r\n\t\t\t\t\t\t  <mat-icon>account_circle</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<mat-menu #menu=\"matMenu\" >\r\n\t\t\t\t\t\t  <button mat-menu-item (click) = \"logout()\" >Logout</button>\r\n\t\t\t\t\t\t</mat-menu>\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t<!-- <div class=\"row\"> -->\r\n\r\n\t\t\t\t<!-- <div class=\"col-15p\"></div> -->\r\n\t\t\t\t<!-- <div class=\"col-full col-m-full full\"> -->\r\n\r\n\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\r\n\r\n\t\t\t\t<app-messages></app-messages>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<!-- <div class=\"col-sidebar col-m-sidebar sidebar\">\r\n\r\n\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/dashboard\">Dashboard</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/heroes\">Heroes</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/profile\">Profile</a>\r\n\t\t\t\t\t\t\t</nav>\r\n\r\n\t\t\t\t\t\t</div> -->\r\n\r\n\r\n\r\n\r\n\t\t\t\t<!-- </div> -->\r\n\r\n\t\t\t\t<!-- <div class=\"col-15p\"></div> -->\r\n\r\n\t\t\t<!-- </di1v> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t<footer class=\"footer-distributed\">\r\n\r\n\t\t\t<div class=\"footer-left\">\r\n\r\n\t\t\t\t<h3>Practice<span>Real</span></h3>\r\n\r\n\t\t\t\t<p class=\"footer-links\">\r\n\t\t\t\t\t<a routerLink=\"/dashboard\">Home</a>\r\n\t\t\t\t\t·\r\n\t\t\t\t\t<a routerLink=\"/about\">About</a>\r\n\t\t\t\t\t·\r\n\t\t\t\t\t<a href=\"#\">Faq</a>\r\n\t\t\t\t\t·\r\n\t\t\t\t\t<a routerLink=\"/support\">Support</a>\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<p class=\"footer-company-name\">Practice Real &copy; 2018</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"footer-center\">\r\n\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\r\n\t\t\t\t\t<p><span>SEECS NUST 12</span> Islamabad, Pakistan</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t\t\t<p>+92 313 5661466</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t\t\t<p><a href=\"mailto:practicereal.com@gmail.com\">practicereal.com@gmail.com</a></p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"footer-right\">\r\n\r\n\t\t\t\t<p class=\"footer-company-about\">\r\n\t\t\t\t\t<span>About the company</span>\r\n\t\t\t\t\tLorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.\r\n\t\t\t\t</p>\r\n\r\n\t\t\t\t<div class=\"footer-icons\">\r\n\r\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-github\"></i></a>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</footer>\r\n\r\n\r\n\t\t\t<!-- <div class=\"row footer\">\r\n\t\t\t\t<div class=\"footer\">\r\n\r\n\t\t\t\t\t<div class=\"col-for-sides\"></div>\r\n\r\n\t\t\t\t\t<div class=\"col-for-page\">\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-3 col-m-3\">\r\n\t\t\t\t\t\t\t\t<h3><i class=\"fas fa-address-card\"></i> Contact Us</h3>\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpis\r\n\t\t\t\t\t\t\t\t\tsit amet interdum ultrices, sapien mauris maximus arcu, non luctus felis risus id lacus. Pellentesque habitant morbi\r\n\t\t\t\t\t\t\t\t\ttristique.</p>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-3 col-m-3\">\r\n\t\t\t\t\t\t\t\t<h3><i class=\"fab fa-amilia\"></i> Follow Us</h3>\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpis\r\n\t\t\t\t\t\t\t\t\tsit amet interdum ultrices, sapien mauris maximus arcu, non luctus felis risus id lacus. Pellentesque habitant morbi\r\n\t\t\t\t\t\t\t\t\ttristique.</p>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-3 col-m-3\">\r\n\t\t\t\t\t\t\t\t<h3>Other stuff</h3>\r\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpis\r\n\t\t\t\t\t\t\t\t\tsit amet interdum ultrices, sapien mauris maximus arcu, non luctus felis risus id lacus. Pellentesque habitant morbi\r\n\t\t\t\t\t\t\t\t\ttristique.</p>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"col-for-sides\"></div>\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\t</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t</mat-sidenav-content>\r\n\t</mat-sidenav-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</body>\r\n\r\n\r\n\r\n</html>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <nav>\r\n  <a routerLink=\"/dashboard\">Dashboard</a>\r\n  <a routerLink=\"/heroes\">Heroes</a>\r\n</nav> -->\r\n<!-- <router-outlet></router-outlet>\r\n<app-messages></app-messages> -->\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import{ MatSidenav} from '@angular/material/sidenav';
// import{ MatSidenavContent} from '@angular/material/sidenav';
// import{ MatSidenavContainer} from '@angular/material/sidenav';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PracticeReal.com';
        this.username = '';
        this.loggedIn = false;
        this.notloggedIn = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var a = localStorage.getItem('currentUser');
        console.log(a);
        if (a) {
            a = JSON.parse(a);
            this.username = a.username;
            this.userId = a.userId;
            this.loggedIn = true;
            this.notloggedIn = false;
        }
        console.log(this.userId);
    };
    AppComponent.prototype.refresh = function () {
        var a = localStorage.getItem('currentUser');
        console.log(a);
        if (a) {
            a = JSON.parse(a);
            this.username = a.username;
            this.userId = a.userId;
            this.loggedIn = true;
            this.notloggedIn = false;
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.userId = 0;
        this.loggedIn = false;
        this.notloggedIn = true;
        this.username = '';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: DemoMaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/esm5/ngx-file-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cloudinary-core */ "./node_modules/cloudinary-core/cloudinary-core.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _covalent_text_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @covalent/text-editor */ "./node_modules/@covalent/text-editor/esm5/covalent-text-editor.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _browse_browse_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./browse/browse.component */ "./src/app/browse/browse.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./task-details/task-details.component */ "./src/app/task-details/task-details.component.ts");
/* harmony import */ var _task_solution_details_task_solution_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./task-solution-details/task-solution-details.component */ "./src/app/task-solution-details/task-solution-details.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./task-add/task-add.component */ "./src/app/task-add/task-add.component.ts");
/* harmony import */ var _task_submit_task_submit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./task-submit/task-submit.component */ "./src/app/task-submit/task-submit.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _attachment_attachment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./attachment/attachment.component */ "./src/app/attachment/attachment.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/assignment.service */ "./src/app/services/assignment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
* this file contains app level dependencies
*/































var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"]
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__["BrowserAnimationsModule"],
                DemoMaterialModule,
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__["FileDropModule"],
                // HighlightModule.forRoot({ theme: 'default' }),
                _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_7__["CloudinaryModule"].forRoot(cloudinary_core__WEBPACK_IMPORTED_MODULE_8__, { cloud_name: 'janmarwat' }),
                _covalent_text_editor__WEBPACK_IMPORTED_MODULE_9__["CovalentTextEditorModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _browse_browse_component__WEBPACK_IMPORTED_MODULE_14__["BrowseComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_16__["TaskDetailsComponent"],
                _task_solution_details_task_solution_details_component__WEBPACK_IMPORTED_MODULE_17__["TaskSolutionDetailsComponent"],
                _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_18__["TaskAddComponent"],
                _task_submit_task_submit_component__WEBPACK_IMPORTED_MODULE_19__["TaskSubmitComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_21__["SupportComponent"],
                _attachment_attachment_component__WEBPACK_IMPORTED_MODULE_22__["AttachmentComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SidebarComponent"],
            ],
            providers: [_services_message_service__WEBPACK_IMPORTED_MODULE_26__["MessageService"], _services_user_service__WEBPACK_IMPORTED_MODULE_27__["UserService"], _services_assignment_service__WEBPACK_IMPORTED_MODULE_28__["AssignmentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/attachment/attachment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/attachment/attachment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/attachment/attachment.component.html":
/*!******************************************************!*\
  !*** ./src/app/attachment/attachment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n  <div class=\"col-for-page\">\r\n\r\n    <h3>Attachment of A's solution for xxxxxx</h3>\r\n    <br>\r\n\r\n    <mat-card class=\"file-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>filename.js</mat-card-title>\r\n        <mat-card-subtitle>javascript</mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n          <pre><code highlight [textContent]=\"code\" (highlighted)=\"onHighlight($event)\"></code></pre>\r\n\r\n          <h4>Highlight response</h4>\r\n          <pre>{{ response | json }}</pre>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <br>\r\n\r\n    <mat-card class=\"file-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>filename.js</mat-card-title>\r\n        <mat-card-subtitle>javascript</mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n          <pre><code highlight [textContent]=\"code\" (highlighted)=\"onHighlight($event)\"></code></pre>\r\n\r\n          <h4>Highlight response</h4>\r\n          <pre>{{ response | json }}</pre>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <br>\r\n    <mat-card class=\"file-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>filename.js</mat-card-title>\r\n        <mat-card-subtitle>javascript</mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n          <pre><code highlight [textContent]=\"code\" (highlighted)=\"onHighlight($event)\"></code></pre>\r\n\r\n          <h4>Highlight response</h4>\r\n          <pre>{{ response | json }}</pre>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

/***/ }),

/***/ "./src/app/attachment/attachment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/attachment/attachment.component.ts ***!
  \****************************************************/
/*! exports provided: AttachmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentComponent", function() { return AttachmentComponent; });
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

var AttachmentComponent = /** @class */ (function () {
    function AttachmentComponent() {
    }
    AttachmentComponent.prototype.ngOnInit = function () {
    };
    AttachmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attachment',
            template: __webpack_require__(/*! ./attachment.component.html */ "./src/app/attachment/attachment.component.html"),
            styles: [__webpack_require__(/*! ./attachment.component.css */ "./src/app/attachment/attachment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttachmentComponent);
    return AttachmentComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/browse/browse.component.css":
/*!*********************************************!*\
  !*** ./src/app/browse/browse.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n\r\n\r\n#search-field{\r\n  width: 90%;\r\n  float: left;\r\n}\r\n\r\n\r\n#search-field *{\r\n  width: 100%;\r\n}\r\n\r\n\r\n#search-button{\r\n  float: left;\r\n  width: auto;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n#search-button::after{\r\n  clear: both;\r\n}\r\n\r\n\r\n.cell{\r\n  width: 50%;\r\n  float: left;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n\r\n.icon{\r\n  color: #072a4e;\r\n  font-size: 80px;\r\n\r\n}\r\n\r\n\r\n@media (min-width: 600px) {\r\n\r\n  .cell{\r\n    width: 33%;\r\n  }\r\n}\r\n\r\n\r\n@media (min-width: 1000px) {\r\n  .cell{\r\n    width: 25%;\r\n  }\r\n}\r\n\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n"

/***/ }),

/***/ "./src/app/browse/browse.component.html":
/*!**********************************************!*\
  !*** ./src/app/browse/browse.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides \">d</div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-for-sides\"></div>\r\n      <div class=\"col-for-page\">\r\n        <div id=\"search-field\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Search</mat-label>\r\n            <input matInput [(ngModel)]=\"searchtag\" placeholder=\"Search tag\">\r\n            <mat-icon matSuffix>search</mat-icon>\r\n            <!-- <mat-hint>Search</mat-hint> -->\r\n          </mat-form-field>\r\n            <!-- <div id=\"search-button\"><i class=\"fas fa-search\"></i></div> -->\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-for-sides\"></div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n\r\n      <div class=\"cell\">\r\n        <a  routerLink=\"/explore/videos\"><span class=\"icon\"><i class=\"fas fa-video big-icon\"></i></span><span><br>Videos & Animations</span></a>\r\n      </div>\r\n      <div class=\"cell\">\r\n        <a routerLink=\"/explore/writing\"><span class=\"icon\"><i class=\"fas fa-pen-square\"></i></span><span><br>Writing</span></a>\r\n      </div>\r\n      <div class=\"cell\">\r\n        <a routerLink=\"/explore/buisness\"><span class=\"icon\"><i class=\"fas fa-chart-line\"></i></span><span><br>Buisness</span></a>\r\n      </div>\r\n      <div class=\"cell\">\r\n        <a routerLink=\"/explore/computers\"><span class=\"icon\"><i class=\"fas fa-desktop\"></i></span><span><br>Computers</span></a>\r\n      </div>\r\n      <div class=\"cell\">\r\n        <a routerLink=\"/explore/angular\"><span class=\"icon\"><i class=\"fab fa-angular\"></i></span><span><br>Angular</span></a>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

/***/ }),

/***/ "./src/app/browse/browse.component.ts":
/*!********************************************!*\
  !*** ./src/app/browse/browse.component.ts ***!
  \********************************************/
/*! exports provided: BrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
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

var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
    }
    BrowseComponent.prototype.ngOnInit = function () {
    };
    BrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browse',
            template: __webpack_require__(/*! ./browse.component.html */ "./src/app/browse/browse.component.html"),
            styles: [__webpack_require__(/*! ./browse.component.css */ "./src/app/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrowseComponent);
    return BrowseComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n\r\n\r\n\r\n\r\n\r\n\r\n.list-item-wrapper{\r\n  padding: 10px 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n    <div class=\"list-item-wrapper\" *ngFor=\"let task of tasks\">\r\n      <mat-card class=\"task-card\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar>\r\n\r\n            <cl-image public-id=\"{{task.dpImgUrl}}\">\r\n              <cl-transformation width=\"40\" height=\"40\" gravity=\"face\" radius=\"100\" crop=\"thumb\">\r\n              </cl-transformation>\r\n\r\n\r\n\r\n            </cl-image>\r\n\r\n\r\n          </div>\r\n          <mat-card-title>{{task.title}}<br>by <a routerLink=\"/profile/{{task.uploadedBy}}\">{{task.username}}</a></mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <markdown ngPreserveWhitespaces>{{task.description}}</markdown>\r\n            <div class=\"more-text\" >\r\n              <a routerLink=\"/task/{{task.id}}\">View details ></a>\r\n\r\n            </div>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <mat-paginator [length]=\"noOfAssignments\"\r\n              [pageSize]=\"pageSize\"\r\n              [pageSizeOptions]=\"pageSizeOptions\"\r\n              (page)=\"pageEvent = $event\">\r\n    </mat-paginator>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/assignment.service */ "./src/app/services/assignment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, assignmentService, location) {
        this.route = route;
        this.assignmentService = assignmentService;
        this.location = location;
        this.tasks = [];
        this.noOfAssignments = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [20];
        this.loading = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var tag = this.route.snapshot.paramMap.get('tag');
        this.assignmentService.getAssignments(this.route.snapshot.paramMap.get('tag'))
            .subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.loading = false;
        });
        this.assignmentService.getCount("assignments")
            .subscribe(function (noOfAssignments) {
            _this.noOfAssignments = noOfAssignments;
            console.log("no of asignment" + noOfAssignments);
            _this.loading = false;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2>Messages</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.col-dp{\r\n  width: 100%;\r\n  display: flex;\r\n  float: left;\r\n  justify-content: center;\r\n}\r\n\r\n.col-info{\r\n  display: block;\r\n}\r\n\r\n#title-options{\r\n  padding: 10px 0px;\r\n\r\n}\r\n\r\n.title-option{\r\n  width: 50%;\r\n  text-align: center;\r\n  padding: 10px 24px; /* Some padding */\r\n  cursor: pointer; /* Pointer/hand icon */\r\n  float: left; /* Float the buttons side by side */\r\n}\r\n\r\n#profile-img{\r\n  height: 100px;\r\n  width: 100px;\r\n  border-radius:3px;\r\n\r\n  z-index: -5;\r\n  /* box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n\t/* For tablets: */\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1000px) {\r\n\t/* For desktop: */\r\n\t.col-dp{\r\n    width: 20%;\r\n  }\r\n\r\n  #profile-img{\r\n    height: 90%;\r\n    width: 90%;\r\n    z-index: -5;\r\n  }\r\n\r\n  .col-info{\r\n    width: 79%;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n.dp{\r\n  position: relative;\r\n}\r\n\r\n.profile-img-dropzone{\r\n\r\n  opacity: 0.00001;\r\n\r\n}\r\n\r\n.on-dp{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.dropzone{\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.on-dp-text{\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #47f7df;\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.passthrough{\r\n  pointer-events:none;\r\n}\r\n\r\n.info{\r\n  padding: 20px 50px;\r\n}\r\n\r\n.spinner{\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.form-element{\r\n  padding: 0px 2px;\r\n}\r\n\r\n.profile-content{\r\n  clear: both;\r\n  width: 100%;\r\n  padding: 20px 10px;\r\n}\r\n\r\n.profile-content mat-tab-group{\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n\r\n      <div class=\"col-dp dp\">\r\n        <!-- <img  src=\"{{profileImgUrl}}\"/> -->\r\n\r\n        <cl-image  id=\"dp-img\" class=\"profile-img\" public-id=\"{{user.dpImgUrl}}\">\r\n          <cl-transformation  width=\"150\" height=\"150\" gravity=\"face\" radius=\"100\" crop=\"thumb\">\r\n          </cl-transformation>\r\n\r\n        </cl-image>\r\n\r\n\r\n\r\n        <div class=\"profile-img-dropzone on-dp\"  *ngIf=\"isEditable\">\r\n          <div class=\"dropzone\">\r\n            <file-drop headertext=\"Drop files here...\" (onFileDrop)=\"dropped($event)\"\r\n            (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n            </file-drop>\r\n        </div></div>\r\n\r\n        <div class=\"on-dp passthrough\"  *ngIf=\"isEditable\">\r\n          <p class=\"on-dp-text passthrough\">Drop new profile image here...</p>\r\n          <div class=\"on-dp\"  *ngIf=\"uploadingImg\">\r\n            <mat-progress-spinner\r\n              [value]=\"progressValue\" [mode]=\"mode\" diameter=\"155\" strokeWidth=\"5\"></mat-progress-spinner>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <!-- <div class=\"on-dp spinner passthrough\"  *ngIf=\"isEditable\">\r\n          <mat-progress-spinner\r\n            [value]=\"profressValue\"></mat-progress-spinner>\r\n\r\n        </div> -->\r\n\r\n      </div>\r\n      <div id=\"col-info info\">\r\n\r\n        <div class=\"button-row\" *ngIf=\"isEditable\">\r\n          <button class=\"centered-horizontal\" mat-raised-button color=\"accent\" *ngIf=\"!(loading)\" (click)=\"addAssignment()\" >Save Changes</button>\r\n          <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"profile-content\">\r\n\r\n\r\n\r\n          <p>@{{user.username}}</p>\r\n\r\n\r\n          <div class=\"row\">\r\n\r\n            <mat-form-field class=\"col-3 form-element\" appearance=\"outline\" *ngIf=\"isEditable\">\r\n              <mat-label>Email</mat-label>\r\n              <input matInput [(ngModel)]=\"user.email\" type=\"email\" placeholder=\"Email\" >\r\n              <mat-icon matSuffix>email</mat-icon>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-3 form-element\" appearance=\"outline\" *ngIf=\"isEditable\">\r\n              <mat-label>Old Password</mat-label>\r\n              <input matInput [(ngModel)]=\"user.oldpassword\" type=\"password\" placeholder=\"Old password\" >\r\n              <mat-icon matSuffix>email</mat-icon>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-3 form-element\" appearance=\"outline\" *ngIf=\"isEditable\">\r\n              <mat-label>Old Password</mat-label>\r\n              <input matInput [(ngModel)]=\"user.newpassword\" type=\"password\" placeholder=\"New password\" >\r\n              <mat-icon matSuffix>email</mat-icon>\r\n            </mat-form-field>\r\n\r\n\r\n          </div>\r\n\r\n          <mat-divider></mat-divider>\r\n          <div id=\"title-options\">\r\n            <div class=\"title-option\" id =\"fav-star\"><i class=\"fas fa-user-plus\"></i></div>\r\n            <div class=\"title-option\" id =\"fav-star\">{{user.points}} <i class=\"fas fa-plus-square\"></i></div>\r\n          </div>\r\n          <mat-divider style=\"clear:both;\"></mat-divider>\r\n\r\n          <mat-tab-group>\r\n            <mat-tab label=\"About\">\r\n              <td-text-editor id=\"editor\" [(ngModel)]=\"user.about\"  [options]=\"simplemdeoptions\" *ngIf=\"isEditable\"></td-text-editor>\r\n\r\n              <markdown ngPreserveWhitespaces *ngIf=\"!isEditable\">{{user.about}}</markdown>\r\n\r\n            </mat-tab>\r\n            <mat-tab label=\"Assignments\">\r\n\r\n              <div class=\"list-item-wrapper\" *ngFor=\"let task of tasks\">\r\n                <mat-card class=\"task-card\">\r\n                  <mat-card-header>\r\n                    <div mat-card-avatar>\r\n\r\n                      <cl-image public-id=\"{{task.dpImgUrl}}\">\r\n                        <cl-transformation width=\"40\" height=\"40\" gravity=\"face\" radius=\"100\"  crop=\"thumb\">\r\n                        </cl-transformation>\r\n\r\n\r\n\r\n                      </cl-image>\r\n\r\n\r\n                    </div>\r\n                    <mat-card-title>{{task.title}}<br>by {{task.username}}</mat-card-title>\r\n                  </mat-card-header>\r\n\r\n                  <mat-card-content>\r\n                      <markdown ngPreserveWhitespaces>{{task.description}}</markdown>\r\n                      <div class=\"more-text\" >\r\n                        <a routerLink=\"/task/{{task.id}}\">View details ></a>\r\n\r\n                      </div>\r\n\r\n                  </mat-card-content>\r\n                </mat-card>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </mat-tab>\r\n            <mat-tab label=\"Solutions\">\r\n\r\n\r\n\r\n\r\n            </mat-tab>\r\n\r\n          </mat-tab-group>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/assignment.service */ "./src/app/services/assignment.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, assignmentService, route, location) {
        this.userService = userService;
        this.assignmentService = assignmentService;
        this.route = route;
        this.location = location;
        this.isEditable = false;
        this.uploadingImg = false;
        this.user = null;
        this.loading = true;
        this.tasks = [];
        ////markdwon editor......
        this.simplemdeoptions = {
            // autofocus: true,
            autoDownloadFontAwesome: true,
            autosave: {
                enabled: true,
                uniqueId: "MyUniqueID",
                delay: 1000,
            },
            // element: document.getElementById("MyID"),
            forceSync: true,
            // hideIcons: ["guide", "heading"],
            // indentWithTabs: false,
            // initialValue: "Hello world!",
            // lineWrapping: false,
            placeholder: "Description here...",
            promptURLs: true,
            // renderingConfig: {
            // 	singleLineBreaks: false,
            // 	codeSyntaxHighlighting: true,
            // },
            shortcuts: {
                drawTable: "Cmd-Alt-T"
            },
            showIcons: ["code"],
            // spellChecker: true,
            styleSelectedText: false,
            tabSize: 4,
        };
        //  function getBase64(file, callback) {
        //    var reader = new FileReader();
        //    reader.onload = function(event) {
        //        callback(event.target.result);
        //    };
        //    reader.readAsDataURL(file);
        // }
        this.mode = 'indeterminate';
        this.progressValue = 50;
        this.files = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        var id = +this.route.snapshot.paramMap.get('id');
        this.assignmentService.getAssignmentsUploadedBy(id).subscribe(function (assignments) {
            _this.tasks = assignments;
        });
        var a = localStorage.getItem('currentUser');
        console.log(a);
        if (a) {
            var currentuser = JSON.parse(a);
            if (currentuser.userId == id) {
                this.isEditable = true;
            }
            this.authToken = currentuser.authToken;
        }
        this.uploadingImg = false;
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.loading = true;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id)
            .subscribe(function (user) {
            _this.user = user;
            _this.loading = false;
        });
    };
    ProfileComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    //
                    //
                    //
                    // var imgtag = document.getElementById("dp-img");
                    // imgtag.title = droppedFile.name;
                    // const callback = function(result) {
                    //   imgtag.src = event.target.result;
                    // };
                    //
                    // this.getBase64(droppedFile,callback)
                    //
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    _this.uploadingImg = true;
                    _this.userService.postDp(file, _this.authToken).subscribe(function (event) {
                        // Via this API, you get access to the raw event stream.
                        // Look for upload progress events.
                        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                            // This is an upload progress event. Compute and show the % done:
                            var percentDone = Math.round(100 * event.loaded / event.total);
                            console.log("File is " + percentDone + "% uploaded.");
                        }
                        else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                            console.log('File is completely uploaded!');
                            _this.uploadingImg = false;
                        }
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            _loop_1(droppedFile);
        }
    };
    ProfileComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    ProfileComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ProfileComponent);
    return ProfileComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/services/assignment.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/assignment.service.ts ***!
  \************************************************/
/*! exports provided: AssignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentService", function() { return AssignmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const headersCons = {
//   headers: new HttpHeaders({
//      'Content-Type': 'application/json' ,
//      'Access-Control-Allow-Origin':'*'
//   })
// };
var AssignmentService = /** @class */ (function () {
    function AssignmentService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.sampleAssignmetUrl = 'http://localhost/pr/assignment.php?id=1'; // URL to web api
        this.assignmentUrl = 'http://localhost/pr/assignment.php'; // URL to web api
        this.newAssignmentUrl = 'http://localhost/pr/assignment-new.php'; // URL to web api
        this.solutionUrl = 'http://localhost/pr/assignment-solution.php'; // URL to web api
        this.newSolutionUrl = 'http://localhost/pr/assignment-solution-new.php'; // URL to web api
        this.commentUrl = 'http://localhost/pr/comment.php'; // URL to web api
        this.newCommentUrl = 'http://localhost/pr/comment-new.php'; // URL to web api
        this.countUrl = 'http://localhost/pr/count.php'; // URL to web api
        this.accessToken = '';
    }
    AssignmentService.prototype.getCount = function (count) {
        var url = this.countUrl + "?count=" + count;
        return this.http.get(url);
    };
    // {headers: new HttpHeaders({'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})}
    /** GET hero by id. Will 404 if id not found */
    AssignmentService.prototype.getAssignment = function (id) {
        var _this = this;
        var url = this.assignmentUrl + "?id=" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched assignment id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getAssignment id=" + id)));
    };
    /** GET hero by id. Will 404 if id not found */
    AssignmentService.prototype.getAssignments = function (tag) {
        var _this = this;
        var url;
        if (tag == null) {
            url = "" + this.assignmentUrl;
        }
        else {
            url = this.assignmentUrl + "?tag=" + tag;
        }
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched assignments"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getAssignments")));
    };
    /** GET hero by id. Will 404 if id not found */
    AssignmentService.prototype.getAssignmentsUploadedBy = function (uploadedBy) {
        var _this = this;
        var url = this.assignmentUrl + "?uploadedBy=" + uploadedBy;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched assignments"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getAssignments")));
    };
    /** GET hero by id. Will 404 if id not found */
    AssignmentService.prototype.getSolutionsForAssignment = function (assignmentId) {
        var _this = this;
        var url = this.solutionUrl + "?assignmentId=" + assignmentId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched solutioons"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("get Solutions for assignemtn")));
    };
    AssignmentService.prototype.getSolutionsForUser = function (userId) {
        var _this = this;
        var url = this.solutionUrl + "?userId=" + userId;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched solutioons"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("get Solutions for user")));
    };
    /** POST: add a new hero to the server */
    AssignmentService.prototype.addAssignment = function (title, description, tags, externalAttachment, authToken) {
        var _this = this;
        var url = this.newAssignmentUrl + "?authToken=" + authToken;
        return this.http.post(url, JSON.stringify({ title: title, description: description, tags: tags, externalAttachment: externalAttachment }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (assignment) { return _this.log("added assignment w/ id=" + assignment.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addAssignment')));
    };
    /** POST: add a new hero to the server */
    AssignmentService.prototype.addAssignmentSol = function (assignmentId, text, externalAttachment, authToken) {
        var _this = this;
        var url = this.newSolutionUrl + "?authToken=" + authToken;
        return this.http.post(url, JSON.stringify({ assignmentId: assignmentId, text: text, externalAttachment: externalAttachment }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (assignment) { return _this.log("added assignment w/ id=" + assignment.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addAssignment')));
    };
    ///comments...........
    AssignmentService.prototype.getAssignmentComments = function (id) {
        var _this = this;
        var url = this.commentUrl + "?assignmentId=" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched assignment  comments"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getAssignment id=" + id)));
    };
    /** POST: add a new hero to the server */
    AssignmentService.prototype.addAssignmentComment = function (text, assignmentId, authToken) {
        var _this = this;
        var url = this.newCommentUrl + "?authToken=" + authToken;
        return this.http.post(url, JSON.stringify({ text: text, assignmentId: assignmentId }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (assignment) { return _this.log("added comment w/ id=" + assignment.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addComment')));
    };
    AssignmentService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return error.message;
        };
    };
    /** Log a HeroService message with the MessageService */
    AssignmentService.prototype.log = function (message) {
        this.messageService.add('AssiignmentService: ' + message);
    };
    AssignmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], AssignmentService);
    return AssignmentService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var headersCons = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }),
    headersWithProgress: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'reportProgress': 'true',
    })
};
var UserService = /** @class */ (function () {
    function UserService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.sampleUserUrl = 'http://localhost/pr/user.php?id=1'; // URL to web api
        this.dpUrl = 'http://localhost/pr/dp.php'; // URL to web api
        this.usersUrl = 'http://localhost/pr/user.php'; // URL to web api
        this.newUserUrl = 'http://localhost/pr/user-new.php'; // URL to web api
        this.signinUrl = 'http://localhost/pr/signin.php'; // URL to web api
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.authToken = currentUser && currentUser.authToken;
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.signinUrl, JSON.stringify({ email: email, password: password }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            // login successful if there's a jwt token in the response
            var authToken = response && response.authToken;
            if (authToken) {
                // set token property
                _this.authToken = authToken;
                var userId = response.userId;
                var username = response.username;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ userId: userId, email: email, username: username, authToken: authToken }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("couldn't login")));
    };
    UserService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.authToken = null;
        localStorage.removeItem('currentUser');
    };
    /** GET hero by id. Will 404 if id not found */
    UserService.prototype.getUser = function (id) {
        var _this = this;
        var url = this.usersUrl + "?id=" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("fetched user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getUser id=" + id)));
    };
    //
    // /* GET heroes whose name contains search term */
    // searchHeroes(term: string): Observable<Hero[]> {
    //   if (!term.trim()) {
    //     // if not search term, return empty hero array.
    //     return of([]);
    //   }
    //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    //     tap(_ => this.log(`found heroes matching "${term}"`)),
    //     catchError(this.handleError<Hero[]>('searchHeroes', []))
    //   );
    // }
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    UserService.prototype.addUser = function (username, email, password) {
        var _this = this;
        //
        return this.http.post(this.signinUrl, JSON.stringify({ username: username, email: email, password: password }), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            // login successful if there's a jwt token in the response
            var authToken = response && response.authToken;
            if (authToken) {
                // set token property
                _this.authToken = authToken;
                var userId = response.userId;
                var username_1 = response.username;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ userId: userId, email: email, username: username_1, authToken: authToken }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("couldn't login")));
    };
    UserService.prototype.postDp = function (fileToUpload, authToken) {
        var url = this.dpUrl + "?authToken=" + authToken;
        var formData = new FormData();
        formData.append('dp', fileToUpload, fileToUpload.name);
        return this.http
            .post(url, formData, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'reportProgress': 'true' }) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("couldn't upload")));
    };
    // /** PUT: update the hero on the server */
    // updateHero (user: User): Observable<any> {
    //   return this.http.put(this.usersUrl, user, httpOptions).pipe(
    //     tap(_ => this.log(`updated hero id=${user.id}`)),
    //     catchError(this.handleError<any>('updateUser'))
    //   );
    // }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return error.message;
        };
    };
    /** Log a HeroService message with the MessageService */
    UserService.prototype.log = function (message) {
        this.messageService.add('UserService: ' + message);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], UserService);
    return UserService;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu{\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n\r\nnav * {\r\n  width: 100%;\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\nnav *:visited, a:link {\r\n  color: #607D8B;\r\n}\r\n\r\n\r\nnav *:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\n\r\n\r\nnav *.active {\r\n  color: #039be5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"menu\">\r\n\r\n<a  routerLink=\"/explore\">Explore</a>\r\n<a  routerLink=\"/profile/{{userId}}\" *ngIf=\"loggedIn\">Profile</a>\r\n<a routerLink=\"/signin\" *ngIf=\"notloggedIn\">Sign In</a>\r\n\r\n<a  routerLink=\"/task-new\" *ngIf=\"loggedIn\">Post a task</a>\r\n<a  routerLink=\"/support\">Contact/Support</a>\r\n\r\n</nav>\r\n\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.loggedIn = false;
        this.notloggedIn = true;
        this.username = '';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var a = localStorage.getItem('currentUser');
        console.log(a);
        if (a) {
            var currentUser = JSON.parse(a);
            this.username = currentUser.username;
            this.userId = currentUser.userId;
            this.loggedIn = true;
            this.notloggedIn = false;
            this.authToken = currentUser.authToken;
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.background{\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n\r\n  background-image: url('http://usersthink.com/wp-content/uploads/45-usersthink-stock-image.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n\r\n.card{\r\n  padding: 20px 10px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.info{\r\n  width: 100%;\r\n}\r\n\r\n\r\n.signin-card{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\r\n}\r\n\r\n\r\n.signin-tab-group{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n\t/* For desktop: */\r\n\r\n  .card{\r\n    width: 40%;\r\n    float: right;\r\n  }\r\n\r\n  .info{\r\n    width: 60%;\r\n    float: left;\r\n  }\r\n  .signin-card{\r\n    width: 370px;\r\n  }\r\n\r\n}\r\n\r\n\r\n.form{\r\n  padding: 20px 20px;\r\n  display: table;\r\n  width: 100%;\r\n  height: 250px;\r\n}\r\n\r\n\r\n.form-element{\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.inner-form{\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n.table-signin-providers{\r\n  width: 100%;\r\n}\r\n\r\n\r\n.centered-horizontal {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n/*\r\n\r\n.signin-card {\r\n\r\n\r\n  float: right;\r\n  clear: both;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://www.w3schools.com/howto/img_avatar2.png');\r\n  background-size: cover;\r\n}\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.sign-tab-group{\r\n\r\n} */\r\n"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <!-- ng-style=\"{'background-image': 'url(' + bgUrl + ')'}\" -->\r\n\r\n\r\n<div class=\"background\">\r\n\r\n\r\n  <div class=\"card\">\r\n\r\n    <mat-card class=\"signin-card\">\r\n\r\n          <mat-card-content>\r\n\r\n            <mat-tab-group class=\"sign-tab-group\">\r\n\r\n\r\n\r\n\r\n              <mat-tab label=\"sign in\">\r\n                <div class=\"form\">\r\n                  <div class=\"inner-form\">\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input matInput  [(ngModel)]=\"email\"  placeholder=\"Email\" type=\"email\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input  matInput type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\">\r\n                    </mat-form-field>\r\n\r\n                    <button class=\"centered-horizontal\" mat-raised-button color=\"accent\" (click)=\"signin()\"  *ngIf=\"!loading\">Sign In</button>\r\n                    <mat-spinner class=\"centered-horizontal\"  diameter=\"30\" *ngIf=\"loading\"></mat-spinner>\r\n\r\n                    <table class=\"table-signin-providers\"><tr>\r\n                      <td >Sign in with Facebook</td>\r\n                      <td >Sign in with Google</td>\r\n                    </tr></table>\r\n\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n              <mat-tab label=\"sign up\">\r\n                <div class=\"form\">\r\n                  <div class=\"inner-form\">\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input matInput [(ngModel)]=\"username\" type=\"text\" placeholder=\"username\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input matInput [(ngModel)]=\"email\" type=\"email\" placeholder=\"Username/Email\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input  matInput [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"form-element\">\r\n                      <input  matInput [(ngModel)]=\"confirmPassword\" type=\"password\" placeholder=\"Confirm Password\">\r\n                    </mat-form-field>\r\n\r\n                    <button  class=\"centered-horizontal\"  mat-raised-button color=\"accent\" (click)=\"signup()\" *ngIf=\"!loading\">Sign Up</button>\r\n                    <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </mat-card-content>\r\n\r\n\r\n\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n  <div class=\"info\"></div>\r\n\r\n\r\n<div>\r\n\r\n<!--\r\n<div class=\"signclass\">\r\n\r\n\r\n\r\n<mat-card class=\"signin-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>Shiba Inu</mat-card-title>\r\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n  </mat-card-header>\r\n\r\n<mat-tab-group class=\"sign-tab-group\">\r\n<mat-tab label=\"sign in\">\r\n\r\n  <mat-card-content>\r\n    <div class=\"example-container\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Username/Email\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <textarea matInput placeholder=\"Password\"></textarea>\r\n  </mat-form-field>\r\n\r\n\r\n</div>\r\n  </mat-card-content>\r\n\r\n\r\n  <mat-card-actions>\r\n    <button mat-button>enter</button>\r\n\r\n  </mat-card-actions>\r\n</mat-tab>\r\n\r\n\r\n<mat-tab label =\"sign up\">\r\n\r\n    <mat-card-content>\r\n      <div class=\"example-container\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\" Select Username*\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Email*\"></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Password*\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Confirm Password*\"></textarea>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n    </mat-card-content>\r\n\r\n\r\n    <mat-card-actions>\r\n\r\n    </mat-card-actions>\r\n\r\n</mat-tab>\r\n\r\n</mat-tab-group>\r\n</mat-card>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(userService, router, snackBar) {
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.bgUrl = 'http://backgroundcheckall.com/wp-content/uploads/2017/12/background-images-for-registration-page-10.jpg';
        this.username = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.loading = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this.userService.login(this.email, this.password).subscribe(function (response) {
            console.log(response);
            console.log("done");
            _this.loading = false;
            if (response) {
                _this.router.navigate(['/explore']);
            }
            else {
                _this.snackBar.open("Couldn't sigin.", null, {
                    duration: 2000,
                });
            }
        });
    };
    SigninComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this.userService.addUser(this.username, this.email, this.password).subscribe(function (response) {
            _this.loading = false;
            console.log(response);
            if (response !== null) {
                _this.router.navigate(['/profile/' + response.id]);
            }
            else {
                _this.snackBar.open("Couldn't sigup", null, {
                    duration: 2000,
                });
            }
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SigninComponent);
    return SigninComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin-card {\r\n\r\n\r\n  float: right;\r\n  clear: both;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://www.w3schools.com/howto/img_avatar2.png');\r\n  background-size: cover;\r\n}\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.signclass{\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n\r\nbackground-image: url('http://backgroundcheckall.com/wp-content/uploads/2017/12/background-images-for-registration-page-10.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.sign-tab-group{\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.bgUrl = 'http://backgroundcheckall.com/wp-content/uploads/2017/12/background-images-for-registration-page-10.jpg';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n.form {\r\n  padding: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.form > * {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides \"></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n\r\n<!--\r\n  \t<div class=\"row\">\r\n  \t\t\t<p>Contact us through our social Media platform </p>\r\n  \t\t\t<ul>\r\n  \t\t\t\t<li><a>FACEBOOK </a></li>\r\n  \t\t\t\t<li><a>GMAIL </a></li>\r\n  \t\t\t\t<li><a>TWITTER </a></li>\r\n  \t\t\t\t<li><a>INSTAGRAM </a></li>\r\n  \t\t\t</ul>\r\n\r\n  \t\t</div>\r\n\r\n  \t<p>or you can contact us directly by sending us a message</p> -->\r\n    <mat-card class=\"form\">\r\n      <!-- <h3>Contact Us</h3>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Title\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Message\"></textarea>\r\n      </mat-form-field>\r\n\r\n\r\n      <div class=\"button-row\">\r\n        <button mat-raised-button color=\"accent\">Submit</button>\r\n      </div> -->\r\n\r\n      <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfogqv2GBr_grjXR0-8zTe9MSOu9TdwGw76IxlY0Z7ZRxZvFQ/viewform?embedded=true\" width=\"100%\" height=\"1000\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\r\n\r\n\r\n    </mat-card>\r\n\r\n\r\n\r\n  </div>\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
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

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/task-add/task-add.component.css":
/*!*************************************************!*\
  !*** ./src/app/task-add/task-add.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import '~dropzone/dist/min/dropzone.min.css'; */\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.form > * {\r\n  width: 100%;\r\n}\r\n.textarea-description{\r\n  height: 100px;\r\n}\r\n.demo-chip-list {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/task-add/task-add.component.html":
/*!**************************************************!*\
  !*** ./src/app/task-add/task-add.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n\r\n    <div class=\"form\">\r\n\r\n        <h2>Post a task.</h2>\r\n\r\n          <mat-form-field>\r\n            <input matInput  [(ngModel)]=\"title\"  placeholder=\"Title\">\r\n          </mat-form-field>\r\n\r\n\r\n\r\n\r\n<!--\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Select\">\r\n              <mat-option value=\"option\">Option</mat-option>\r\n            </mat-select>\r\n          </mat-form-field> -->\r\n\r\n          <form>\r\n            <mat-form-field class=\"demo-chip-list\">\r\n              <mat-chip-list #chipList>\r\n                  <mat-chip\r\n                  *ngFor=\"let tag of tags\"\r\n                  [selectable]=\"selectable\"\r\n                  [removable]=\"removable\"\r\n                  (removed)=\"remove(tag)\">\r\n                  {{tag}}\r\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input\r\n                  placeholder=\"Tags...\"\r\n                  #tagInput\r\n                  [formControl]=\"tagCtrl\"\r\n                  [matAutocomplete]=\"auto\"\r\n                  [matChipInputFor]=\"chipList\"\r\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                  [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                  (matChipInputTokenEnd)=\"add($event)\"\r\n                />\r\n              </mat-chip-list>\r\n              <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n                <mat-option *ngFor=\"let tag of filteredTags | async\" [value]=\"tag\">\r\n                  {{ tag }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </form>\r\n\r\n          <td-text-editor id=\"editor\" [(ngModel)]=\"description\"  [options]=\"simplemdeoptions\"></td-text-editor>\r\n\r\n\r\n\r\n          <mat-form-field class=\"form-element\" appearance=\"outline\">\r\n            <mat-label>External Attachment</mat-label>\r\n            <input matInput [(ngModel)]=\"externalAttachment\" type=\"text\" placeholder=\"Paste link\" >\r\n            <mat-icon matSuffix>link</mat-icon>\r\n            <mat-hint>You may usse Google Drive, Dropbox etc.<br><a href=\"https://files.fm/\" target=\"blank\">File.fm is nice tool.</a></mat-hint>\r\n\r\n          </mat-form-field>\r\n\r\n\r\n            <div class=\"button-row\">\r\n            \t<button class=\"centered-horizontal\" mat-raised-button color=\"accent\" *ngIf=\"!loading\" (click)=\"addAssignment()\" >Submit</button>\r\n              <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-add/task-add.component.ts":
/*!************************************************!*\
  !*** ./src/app/task-add/task-add.component.ts ***!
  \************************************************/
/*! exports provided: TaskAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAddComponent", function() { return TaskAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/assignment.service */ "./src/app/services/assignment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskAddComponent = /** @class */ (function () {
    function TaskAddComponent(assignmentService, router, snackBar) {
        var _this = this;
        this.assignmentService = assignmentService;
        this.router = router;
        this.snackBar = snackBar;
        this.loading = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.tags = [];
        this.allTags = [
            'computers',
            'writing',
            'accounting',
            'angular',
            'android-developement',
            'ios-developement0',
            'maths',
            'physics',
            'digital-logic-design',
            'health',
            'medical-sciences'
        ];
        ////markdwon editor......
        this.simplemdeoptions = {
            // autofocus: true,
            autoDownloadFontAwesome: true,
            autosave: {
                enabled: true,
                uniqueId: "MyUniqueID",
                delay: 1000,
            },
            // element: document.getElementById("MyID"),
            forceSync: true,
            // hideIcons: ["guide", "heading"],
            // indentWithTabs: false,
            // initialValue: "Hello world!",
            // lineWrapping: false,
            placeholder: "Description here...",
            promptURLs: true,
            // renderingConfig: {
            // 	singleLineBreaks: false,
            // 	codeSyntaxHighlighting: true,
            // },
            shortcuts: {
                drawTable: "Cmd-Alt-T"
            },
            showIcons: ["code"],
            // spellChecker: true,
            styleSelectedText: false,
            tabSize: 4,
        };
        this.filteredTags = this.tagCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tag) { return tag ? _this.filter(tag) : _this.allTags.slice(); }));
    }
    TaskAddComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our tag
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.tagCtrl.setValue(null);
    };
    TaskAddComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    TaskAddComponent.prototype.filter = function (name) {
        return this.allTags.filter(function (tag) {
            return tag.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    TaskAddComponent.prototype.selected = function (event) {
        this.tags.push(event.option.viewValue);
        this.tagInput.nativeElement.value = '';
        this.tagCtrl.setValue(null);
    };
    TaskAddComponent.prototype.ngOnInit = function () {
        var a = localStorage.getItem('currentUser');
        console.log(a);
        if (a) {
            var currentUser = JSON.parse(a);
            this.username = currentUser.username;
            this.userId = currentUser.userId;
            this.loggedIn = true;
            this.authToken = currentUser.authToken;
        }
    };
    TaskAddComponent.prototype.addAssignment = function () {
        var _this = this;
        this.loading = true;
        this.assignmentService.addAssignment(this.title, this.description, this.tags, this.externalAttachment, this.authToken).subscribe(function (response) {
            _this.loading = false;
            console.log(response);
            if (response.id == 0) {
                _this.snackBar.open("Couldn't post the assignment", null, {
                    duration: 2000,
                });
            }
            else {
                console.log("navigating..");
                _this.router.navigate(['/task/' + response.id]);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tagInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskAddComponent.prototype, "tagInput", void 0);
    TaskAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-add',
            template: __webpack_require__(/*! ./task-add.component.html */ "./src/app/task-add/task-add.component.html"),
            styles: [__webpack_require__(/*! ./task-add.component.css */ "./src/app/task-add/task-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_assignment_service__WEBPACK_IMPORTED_MODULE_6__["AssignmentService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], TaskAddComponent);
    return TaskAddComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/task-details/task-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/task-details/task-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n#dp-container{\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n\t/* For tablets: */\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1000px) {\r\n\t/* For desktop: */\r\n\t#dp-container{\r\n    display: block;\r\n    align-items: left;\r\n    justify-content: left;\r\n  }\r\n}\r\n\r\n\r\n\r\n.title{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.dp{\r\n  float: left;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n\r\n\r\n.task-title{\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.title-details {\r\n  float: left;\r\n  padding-left: 5px;\r\n}\r\n\r\n\r\n\r\n.title-options{\r\n  clear: both;\r\n  padding: 10px 0px;\r\n\r\n}\r\n\r\n\r\n\r\n.title-options:after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n\r\n\r\n.title-option{\r\n  width: 33%;\r\n  text-align: center;\r\n  padding: 10px 24px; /* Some padding */\r\n  cursor: pointer; /* Pointer/hand icon */\r\n  float: left; /* Float the buttons side by side */\r\n}\r\n\r\n\r\n\r\n/* .mat-chip-list{\r\n  width: 100%;\r\n} */\r\n\r\n\r\n\r\n.content{\r\n  min-height: 600px;\r\n  clear: both;\r\n  padding: 10px 0px;\r\n}\r\n\r\n\r\n\r\n.discussions {\r\n  height: 600%;\r\n}\r\n\r\n\r\n\r\n.comment{\r\n  padding: 10px;\r\n\r\n}\r\n\r\n\r\n\r\n.comment-dp{\r\n\r\n  float: left;\r\n}\r\n\r\n\r\n\r\n.comment-username{\r\n  vertical-align: middle;\r\n  padding-left: 10px;\r\n  float: left;\r\n}\r\n\r\n\r\n\r\n.comment-body{\r\n  padding-left: 50px;\r\n}\r\n\r\n\r\n\r\n.clear{\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n.new-comment{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.new-comment *{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.flex-row{\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n\r\n\r\n.comment-box *{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.task-submit{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.task-submit *{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.list-item-wrapper{\r\n  padding: 10px 10px;\r\n}\r\n\r\n\r\n\r\n.more-text{\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/task-details/task-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/task-details/task-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n    <mat-card class=\"task-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar>\r\n\r\n          <cl-image public-id=\"{{task.dpImgUrl}}\">\r\n            <cl-transformation width=\"40\" height=\"40\" gravity=\"face\" radius=\"100\" effect=\"sepia\" crop=\"thumb\">\r\n            </cl-transformation>\r\n\r\n\r\n\r\n          </cl-image>\r\n\r\n\r\n        </div>\r\n        <mat-card-title>{{task.title}}<br>by <a routerLink=\"/profile/{{task.uploadedBy}}\">{{task.username}}</a></mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"content\">\r\n\r\n          <mat-chip-list class=\"mat-chip-list\"  aria-orientation=\"horizontal\" *ngFor=\"let tag of task.tags\">\r\n            <mat-chip color=\"primary\" selected=\"true\">{{tag}}</mat-chip>\r\n          </mat-chip-list>\r\n\r\n\r\n          <div class=\"title-options\">\r\n            <div class=\"title-option\" id =\"fav-star\">654 <i class=\"far fa-star\"></i></div>\r\n            <div class=\"title-option\" id =\"fav-star\"><i class=\"far fa-star\"></i></div>\r\n            <div class=\"title-option\" id =\"fav-star\"><i class=\"far fa-star\"></i></div>\r\n            <mat-divider></mat-divider>\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n\r\n          <markdown ngPreserveWhitespaces>{{task.description}}</markdown>\r\n\r\n\r\n\r\n         <div class=\"task-submit\"  routerLink=\"/task-submit/{{task.id}}\">\r\n           <button class=\"centered-horizontal\" mat-raised-button color=\"accent\" *ngIf=\"loggedIn\" routerLink=\"/task-submit/{{task.id}}\">Submit</button>\r\n\r\n         </div>\r\n\r\n          <!-- <div class=\"attachment\">\r\n\r\n\r\n\r\n          </div>\r\n -->\r\n          <mat-tab-group class=\"clear\">\r\n            <mat-tab label=\"Discussions\">\r\n\r\n              <!-- <div class=\"discussions\" > -->\r\n                <div class=\"new-comment\" *ngIf=\"loggedIn\">\r\n\r\n                  <div class=\"flex-row\">\r\n                    <div style=\"padding:10px;\">\r\n                      <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Write Comment</mat-label>\r\n                        <input matInput [(ngModel)]=\"newcomment\" placeholder=\"Write some about the task...\">\r\n                        <mat-hint>New comment</mat-hint>\r\n                      </mat-form-field>\r\n\r\n                    </div>\r\n\r\n                      <div style=\"flex: 0 0 150px;padding:10px;align-self: center;\">\r\n                        <button class=\"centered-horizontal\" mat-raised-button color=\"accent\" *ngIf=\"!loading\" (click)=\"addComment()\" >Comment</button>\r\n                        <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n\r\n                <div *ngFor=\"let comment of dicussions\">\r\n                  <div class=\"comment\" >\r\n                    <cl-image class=\"comment-dp\" public-id=\"{{comment.dpImgUrl}}\">\r\n                      <cl-transformation width=\"40\" height=\"40\" gravity=\"face\" radius=\"100\" effect=\"sepia\" crop=\"thumb\">\r\n                      </cl-transformation>\r\n                    </cl-image>\r\n                    <a class=\"comment-username\" routerLink=\"/profile/{{comment.userId}}\">{{comment.username}}</a>\r\n                    <br>\r\n                    <div class=\"comment-body\">\r\n                      {{comment.text}}\r\n                    </div>\r\n\r\n\r\n                    <mat-divider></mat-divider>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              <!-- </div> -->\r\n\r\n\r\n\r\n            </mat-tab>\r\n            <mat-tab label=\"Submissions\">\r\n\r\n              <div class=\"list-item-wrapper\" *ngFor=\"let solution of solutions\">\r\n                <mat-card class=\"task-card\">\r\n                  <mat-card-header>\r\n                    <div mat-card-avatar>\r\n\r\n                      <cl-image public-id=\"{{solution.dpImgUrl}}\">\r\n                        <cl-transformation width=\"40\" height=\"40\" gravity=\"face\" radius=\"100\" crop=\"thumb\">\r\n                        </cl-transformation>\r\n\r\n\r\n\r\n                      </cl-image>\r\n\r\n\r\n                    </div>\r\n                    <mat-card-title>BY <a routerLink=\"/profile/{{solution.userId}}\">{{solution.username}}</a></mat-card-title>\r\n                  </mat-card-header>\r\n                  <mat-card-content>\r\n                      <markdown ngPreserveWhitespaces>{{solution.text}}</markdown>\r\n                      <div class=\"more-text\" >\r\n                        <a routerLink=\"/task/{{solution.id}}\" >View details ></a>\r\n\r\n                      </div>\r\n                  </mat-card-content>\r\n                </mat-card>\r\n\r\n\r\n              </div>\r\n\r\n\r\n\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"title\">\r\n      <img class=\"dp\" src=\"{{dpUrl}}\"/>\r\n\r\n      <div class=\"title-details\">\r\n        <div class=\"task-title\">{{taskTitle}}</div>\r\n        <div class=\"task-subtitle\">Dummy Task</div>\r\n\r\n\r\n      </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-details/task-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/task-details/task-details.component.ts ***!
  \********************************************************/
/*! exports provided: TaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/assignment.service */ "./src/app/services/assignment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskDetailsComponent = /** @class */ (function () {
    function TaskDetailsComponent(route, assignmentService, location, snackBar) {
        this.route = route;
        this.assignmentService = assignmentService;
        this.location = location;
        this.snackBar = snackBar;
        this.loading = true;
        this.dicussions = [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu' },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu' },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu' },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu' },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel dui id nibh luctus pharetra. Morbi placerat, turpisit amet interdum ultrices, sapien mauris maximus arcu' },
        ];
        this.solutions = [];
        this.tags = ["computers", "app-developement"];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.assignmentId = +this.route.snapshot.paramMap.get('id');
        this.getAssignment();
        this.getComments();
        this.getAssignmentSolutions();
        var a = localStorage.getItem('currentUser');
        console.log(a);
        if (a) {
            var currentUser = JSON.parse(a);
            this.username = currentUser.username;
            this.userId = currentUser.userId;
            this.loggedIn = true;
            this.authToken = currentUser.authToken;
        }
    };
    TaskDetailsComponent.prototype.getAssignment = function () {
        var _this = this;
        this.loading = true;
        var id = +this.route.snapshot.paramMap.get('id');
        this.assignmentService.getAssignment(id)
            .subscribe(function (task) {
            _this.task = task;
            _this.loading = false;
        });
    };
    TaskDetailsComponent.prototype.getAssignmentSolutions = function () {
        var _this = this;
        this.loading = true;
        this.assignmentService.getSolutionsForAssignment(this.assignmentId)
            .subscribe(function (solutions) {
            console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
            _this.solutions = solutions;
            _this.loading = false;
        });
    };
    TaskDetailsComponent.prototype.getComments = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.assignmentService.getAssignmentComments(id)
            .subscribe(function (comments) { return _this.dicussions = comments; });
    };
    TaskDetailsComponent.prototype.addComment = function () {
        var _this = this;
        this.loading = true;
        var assignmentId = this.task.id;
        console.log(assignmentId);
        this.assignmentService.addAssignmentComment(this.newcomment, assignmentId, this.authToken).subscribe(function (response) {
            _this.loading = false;
            console.log(response);
            if (response.id == 0) {
                _this.snackBar.open("Couldn't post the comment", null, {
                    duration: 2000,
                });
            }
            else {
                _this.newcomment = '';
                _this.getComments();
            }
        });
    };
    TaskDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-details',
            template: __webpack_require__(/*! ./task-details.component.html */ "./src/app/task-details/task-details.component.html"),
            styles: [__webpack_require__(/*! ./task-details.component.css */ "./src/app/task-details/task-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/task-solution-details/task-solution-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/task-solution-details/task-solution-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n#dp-container{\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n\t/* For tablets: */\r\n\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 1000px) {\r\n\t/* For desktop: */\r\n\t#dp-container{\r\n    display: block;\r\n    align-items: left;\r\n    justify-content: left;\r\n  }\r\n}\r\n\r\n\r\n\r\n.title{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.dp{\r\n  float: left;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n\r\n\r\n.task-title{\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.title-details {\r\n  float: left;\r\n  padding-left: 5px;\r\n}\r\n\r\n\r\n\r\n.title-options{\r\n  clear: both;\r\n  padding: 10px 0px;\r\n\r\n}\r\n\r\n\r\n\r\n.title-options:after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n\r\n\r\n.title-option{\r\n  width: 33%;\r\n  text-align: center;\r\n  padding: 10px 24px; /* Some padding */\r\n  cursor: pointer; /* Pointer/hand icon */\r\n  float: left; /* Float the buttons side by side */\r\n}\r\n\r\n\r\n\r\n/* .mat-chip-list{\r\n  width: 100%;\r\n} */\r\n\r\n\r\n\r\n.content{\r\n  min-height: 600px;\r\n  clear: both;\r\n  padding: 10px 0px;\r\n}\r\n\r\n\r\n\r\n.discussions {\r\n  height: 600%;\r\n}\r\n\r\n\r\n\r\n.comment{\r\n  padding: 10px;\r\n\r\n}\r\n\r\n\r\n\r\n.comment-dp{\r\n\r\n  float: left;\r\n}\r\n\r\n\r\n\r\n.comment-username{\r\n  vertical-align: middle;\r\n  padding-left: 10px;\r\n  float: left;\r\n}\r\n\r\n\r\n\r\n.comment-body{\r\n  padding-left: 50px;\r\n}\r\n\r\n\r\n\r\n.clear{\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n.new-comment{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.new-comment *{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.flex-row{\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n\r\n\r\n.comment-box *{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.task-submit{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.task-submit *{\r\n  width: 100%;\r\n\r\n}\r\n\r\n\r\n\r\n.list-item-wrapper{\r\n  padding: 10px 10px;\r\n}\r\n\r\n\r\n\r\n.more-text{\r\n  width: 100%;\r\n  text-align: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/task-solution-details/task-solution-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/task-solution-details/task-solution-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n    <mat-card class=\"task-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar>\r\n\r\n          <cl-image public-id=\"{{task.dpImgUrl}}\">\r\n            <cl-transformation width=\"40\" height=\"40\" gravity=\"face\" radius=\"100\" effect=\"sepia\" crop=\"thumb\">\r\n            </cl-transformation>\r\n\r\n\r\n\r\n          </cl-image>\r\n\r\n\r\n        </div>\r\n        <mat-card-title>{{task.title}}<br>by <a routerLink=\"/profile/{{task.uploadedBy}}\">{{task.username}}</a></mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"content\">\r\n\r\n          <mat-chip-list class=\"mat-chip-list\"  aria-orientation=\"horizontal\" *ngFor=\"let tag of task.tags\">\r\n            <mat-chip color=\"primary\" selected=\"true\">{{tag}}</mat-chip>\r\n          </mat-chip-list>\r\n\r\n\r\n          <div class=\"title-options\">\r\n            <div class=\"title-option\" id =\"fav-star\">654 <i class=\"far fa-star\"></i></div>\r\n            <div class=\"title-option\" id =\"fav-star\"><i class=\"far fa-star\"></i></div>\r\n            <div class=\"title-option\" id =\"fav-star\"><i class=\"far fa-star\"></i></div>\r\n            <mat-divider></mat-divider>\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n\r\n          <markdown ngPreserveWhitespaces>{{solution.text}}</markdown>\r\n\r\n\r\n\r\n         <div class=\"externalAttachment\"  routerLink=\"/task-submit/{{task.id}}\">\r\n           <button class=\"centered-horizontal\" mat-raised-button color=\"accent\" *ngIf=\"loggedIn\" routerLink=\"/task-submit/{{task.id}}\">Submit</button>\r\n\r\n         </div>\r\n\r\n          <!-- <div class=\"attachment\">\r\n\r\n\r\n\r\n          </div>\r\n -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"title\">\r\n      <img class=\"dp\" src=\"{{dpUrl}}\"/>\r\n\r\n      <div class=\"title-details\">\r\n        <div class=\"task-title\">{{taskTitle}}</div>\r\n        <div class=\"task-subtitle\">Dummy Task</div>\r\n\r\n\r\n      </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-solution-details/task-solution-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/task-solution-details/task-solution-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: TaskSolutionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSolutionDetailsComponent", function() { return TaskSolutionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/assignment.service */ "./src/app/services/assignment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskSolutionDetailsComponent = /** @class */ (function () {
    function TaskSolutionDetailsComponent(route, assignmentService, location) {
        this.route = route;
        this.assignmentService = assignmentService;
        this.location = location;
        this.loading = true;
        this.dicussions = [];
    }
    TaskSolutionDetailsComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.assignmentId = +this.route.snapshot.paramMap.get('id');
        this.getSolution();
        // this.getComments();
        var a = localStorage.getItem('currentUser');
        console.log(a);
        if (a) {
            var currentUser = JSON.parse(a);
            this.username = currentUser.username;
            this.userId = currentUser.userId;
            this.loggedIn = true;
            this.authToken = currentUser.authToken;
        }
    };
    TaskSolutionDetailsComponent.prototype.getSolution = function () {
        this.loading = true;
        var id = +this.route.snapshot.paramMap.get('id');
        // this.assignmentService.getSolution(id)
        //   .subscribe(solution => {
        //     this.solution = solution;
        //     this.loading = false;
        //   });
    };
    TaskSolutionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-solution-details',
            template: __webpack_require__(/*! ./task-solution-details.component.html */ "./src/app/task-solution-details/task-solution-details.component.html"),
            styles: [__webpack_require__(/*! ./task-solution-details.component.css */ "./src/app/task-solution-details/task-solution-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TaskSolutionDetailsComponent);
    return TaskSolutionDetailsComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/task-submit/task-submit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/task-submit/task-submit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import '~dropzone/dist/min/dropzone.min.css'; */\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.form > * {\r\n  width: 100%;\r\n}\r\n.textarea-description{\r\n  height: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/task-submit/task-submit.component.html":
/*!********************************************************!*\
  !*** ./src/app/task-submit/task-submit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-for-sides\"></div>\r\n\r\n  <div class=\"col-for-page padding-responsive\">\r\n\r\n    <div class=\"form\">\r\n\r\n        <h2>Post a Soulution.</h2>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <td-text-editor id=\"editor\" [(ngModel)]=\"text\"  [options]=\"simplemdeoptions\"></td-text-editor>\r\n\r\n\r\n\r\n        <mat-form-field class=\"form-element\" appearance=\"outline\">\r\n          <mat-label>External Attachment</mat-label>\r\n          <input matInput [(ngModel)]=\"externalAttachment\" type=\"text\" placeholder=\"Paste link\" >\r\n          <mat-icon matSuffix>link</mat-icon>\r\n          <mat-hint>You may usse Google Drive, Dropbox etc.<br><a href=\"https://files.fm/\" target=\"blank\">File.fm is nice tool.</a></mat-hint>\r\n\r\n        </mat-form-field>\r\n        <br>\r\n\r\n        <mat-checkbox>This assignment is my own work, except where I have acknowledged the use of the works of other people.</mat-checkbox>\r\n\r\n        <div class=\"button-row\">\r\n        \t<button class=\"centered-horizontal\" mat-raised-button color=\"accent\" *ngIf=\"!loading\" (click)=\"addAssignmentSol()\" >Submit</button>\r\n          <mat-spinner class=\"centered-horizontal\"   diameter=\"30\"  *ngIf=\"loading\"></mat-spinner>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <app-sidebar class=\"col-for-sides\"></app-sidebar>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-submit/task-submit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-submit/task-submit.component.ts ***!
  \******************************************************/
/*! exports provided: TaskSubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSubmitComponent", function() { return TaskSubmitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/assignment.service */ "./src/app/services/assignment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskSubmitComponent = /** @class */ (function () {
    function TaskSubmitComponent(route, assignmentService, location, snackBar, router) {
        this.route = route;
        this.assignmentService = assignmentService;
        this.location = location;
        this.snackBar = snackBar;
        this.router = router;
        this.loading = true;
        this.simplemdeoptions = {
            // autofocus: true,
            autoDownloadFontAwesome: true,
            autosave: {
                enabled: true,
                uniqueId: "MyUniqueID",
                delay: 1000,
            },
            // element: document.getElementById("MyID"),
            forceSync: true,
            // hideIcons: ["guide", "heading"],
            // indentWithTabs: false,
            // initialValue: "Hello world!",
            // lineWrapping: false,
            placeholder: "Description here...",
            promptURLs: true,
            // renderingConfig: {
            // 	singleLineBreaks: false,
            // 	codeSyntaxHighlighting: true,
            // },
            shortcuts: {
                drawTable: "Cmd-Alt-T"
            },
            showIcons: ["code"],
            // spellChecker: true,
            styleSelectedText: false,
            tabSize: 4,
        };
    }
    TaskSubmitComponent.prototype.ngOnInit = function () {
        var a = localStorage.getItem('currentUser');
        console.log(a);
        if (a) {
            var currentUser = JSON.parse(a);
            this.username = currentUser.username;
            this.userId = currentUser.userId;
            this.loggedIn = true;
            this.authToken = currentUser.authToken;
        }
        this.assignmentId = +this.route.snapshot.paramMap.get('id');
    };
    TaskSubmitComponent.prototype.addAssignmentSol = function () {
        var _this = this;
        this.loading = true;
        this.assignmentService.addAssignmentSol(this.assignmentId, this.text, this.externalAttachment, this.authToken).subscribe(function (response) {
            _this.loading = false;
            console.log(response);
            if (response.id == 0) {
                _this.snackBar.open("Couldn't post the assignment", null, {
                    duration: 2000,
                });
            }
            else {
                console.log("navigating..");
                _this.router.navigate(['/task/' + response.id]);
            }
        });
    };
    TaskSubmitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-submit',
            template: __webpack_require__(/*! ./task-submit.component.html */ "./src/app/task-submit/task-submit.component.html"),
            styles: [__webpack_require__(/*! ./task-submit.component.css */ "./src/app/task-submit/task-submit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TaskSubmitComponent);
    return TaskSubmitComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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



// import { MaterialModule } from './app/material.module';

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

module.exports = __webpack_require__(/*! C:\Users\Arif\documents\github\practice\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map