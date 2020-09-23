(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Valframe';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], pathMatch: 'full' },
    { path: 'login', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"] },
    { path: '**', redirectTo: '' }
];
const routerOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"],
        _services_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
                ],
                providers: [
                    _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                    _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"],
                    _services_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");






class AuthComponent {
    constructor(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.signInForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]],
        });
    }
    onSignIn() {
        const email = this.signInForm.get('email').value;
        const password = this.signInForm.get('password').value;
        // this.authService.signInUser(email, password).then(
        //   () => { this.router.navigate(['/main']); },
        //   (error) => { this.errorMessage = error; }
        // )
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 24, vars: 3, consts: [[1, "signin_form"], ["routerLink", "app-root", 1, "navbar-brand"], [1, "divider", "my-4"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "row", "justify-content-center"], ["for", "email", 1, "text-black-75", "font-weight-light", "mb-0"], ["type", "email", "email", "email", "id", "email", "placeholder", "Your email..", "formControlName", "email", 1, "form-control", "form-control-lg"], ["for", "password", 1, "text-black-75", "font-weight-light", "mb-0"], ["type", "password", "name", "password", "id", "password", "placeholder", "Your password..", "formControlName", "password", 1, "form-control", "form-control-lg"], [1, "text-danger"], [1, "row", "justify-content-center", "signin_bloc"], ["type", "submit", "value", "Log in", 1, "btn", "btn-primary", "btn-xl", "js-scroll-trigger", "mb-4", "signinbtn", 3, "disabled"], [1, "col-sm"], [1, "text"], ["routerLink", "", 1, "lien_forgotPass"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "VALFRAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_5_listener() { return ctx.onSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signInForm.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  color: #343a40;\n  font-family: \"Merriweather Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 700;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n  color: #495057;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  font-family: inherit;\n  max-width: 350px;\n}\n\n#other[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin: auto;\n  text-align: center;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover, .navbar-brand[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n.signin_form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 100%;\n  margin: auto;\n  padding: 20px;\n  font-family: \"Merriweather Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\nhr.divider[_ngcontent-%COMP%] {\n  max-width: 3.25rem;\n  border-width: 0.2rem;\n  border-color: #f4623a;\n}\n\n.signinbtn[_ngcontent-%COMP%] {\n  color: white;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 50%;\n  opacity: 0.9;\n  text-align: center;\n}\n\n.signinbtn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 10rem;\n  max-width: 120px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f4623a;\n  border-color: #f4623a;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f24516;\n  border-color: #ee3e0d;\n}\n\n.btn-primary[_ngcontent-%COMP%]:focus, .btn-primary.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f24516;\n  border-color: #ee3e0d;\n  box-shadow: 0 0 0 0.2rem rgba(246, 122, 88, 0.5);\n}\n\n.btn-primary.disabled[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #f4623a;\n  border-color: #f4623a;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ee3e0d;\n  border-color: #e23a0d;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(246, 122, 88, 0.5);\n}\n\n@media only screen and (min-width: 721px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 5px;\n    margin: auto;\n  }\n\n  input[_ngcontent-%COMP%] {\n    height: 50px;\n    padding: 10px;\n    margin: 5px 0 22px 0;\n    display: block;\n    border: none;\n    background: #f1f1f1;\n  }\n\n  p[_ngcontent-%COMP%], .signin_bloc[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n  }\n}\n\n@media only screen and (max-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 5px;\n    margin: auto;\n    width: 90%;\n  }\n\n  input[_ngcontent-%COMP%] {\n    padding: 15px;\n    height: 50px;\n    margin: 5px 0 22px 0;\n    display: block;\n    border: none;\n    background: #f1f1f1;\n  }\n\n  p[_ngcontent-%COMP%], .signin_bloc[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaWhhbS9EZXNrdG9wL1BQL1NpaGFtQWlzLmdpdGxhYi5pby9zcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsc0JBQUE7QUNFSDs7QURBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVOQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVOQUFBO0FDR0Y7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsZ0RBQUE7QUNHRjs7QURBQTtFQUNJO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUNHSjs7RURBRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VDR0o7O0VEQUU7SUFDSSxrQkFBQTtJQUNBLFlBQUE7RUNHTjtBQUNGOztBREFBO0VBQ0k7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUNFSjs7RURDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VDRUo7O0VEQ0U7SUFDSSxrQkFBQTtJQUNBLFlBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cblxuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzM0M2E0MDtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG4jb3RoZXJ7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIsIC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWduaW5fZm9ybXtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xufVxuXG5pbnB1dDpmb2N1c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiAgICBcbmhyLmRpdmlkZXIge1xuICBtYXgtd2lkdGg6IDMuMjVyZW07XG4gIGJvcmRlci13aWR0aDogMC4ycmVtO1xuICBib3JkZXItY29sb3I6ICNmNDYyM2E7XG59XG5cbi5zaWduaW5idG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxufVxuXG4uc2lnbmluYnRuOmhvdmVye1xuICBvcGFjaXR5OjE7XG59XG5cbi5idG4ge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gIH1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDYyM2E7XG4gIGJvcmRlci1jb2xvcjogI2Y0NjIzYTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjQ1MTY7XG4gIGJvcmRlci1jb2xvcjogI2VlM2UwZDtcbn1cblxuLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnkuZm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNDUxNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWUzZTBkO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNDYsIDEyMiwgODgsIDAuNSk7XG59XG5cbi5idG4tcHJpbWFyeS5kaXNhYmxlZCwgLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDYyM2E7XG4gIGJvcmRlci1jb2xvcjogI2Y0NjIzYTtcbn1cblxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTNlMGQ7XG4gIGJvcmRlci1jb2xvcjogI2UyM2EwZDtcbn1cblxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ2LCAxMjIsIDg4LCAwLjUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMXB4KXtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIH1cblxuICAgIHAsLnNpZ25pbl9ibG9je1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xuICAgIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIH1cblxuICAgIHAsLnNpZ25pbl9ibG9je1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG4gICAgIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zMTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICMzNDNhNDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlciBTYW5zXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG4jb3RoZXIge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ25pbl9mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmhyLmRpdmlkZXIge1xuICBtYXgtd2lkdGg6IDMuMjVyZW07XG4gIGJvcmRlci13aWR0aDogMC4ycmVtO1xuICBib3JkZXItY29sb3I6ICNmNDYyM2E7XG59XG5cbi5zaWduaW5idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNTAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ25pbmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ2MjNhO1xuICBib3JkZXItY29sb3I6ICNmNDYyM2E7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI0NTE2O1xuICBib3JkZXItY29sb3I6ICNlZTNlMGQ7XG59XG5cbi5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5LmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjQ1MTY7XG4gIGJvcmRlci1jb2xvcjogI2VlM2UwZDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ2LCAxMjIsIDg4LCAwLjUpO1xufVxuXG4uYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ2MjNhO1xuICBib3JkZXItY29sb3I6ICNmNDYyM2E7XG59XG5cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5zaG93ID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzZTBkO1xuICBib3JkZXItY29sb3I6ICNlMjNhMGQ7XG59XG5cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsIC5zaG93ID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI0NiwgMTIyLCA4OCwgMC41KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjFweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG5cbiAgcCwgLnNpZ25pbl9ibG9jIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDVweCAwIDIycHggMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuXG4gIHAsIC5zaWduaW5fYmxvYyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.searchKey(ctx_r3.path[ctx_r3.path.length - 2]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.searchKey(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5.value, " > ");
} }
function HomeComponent_a_14_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10);
} }
const _c0 = function (a0, a1) { return { "disabled": a0, "abled": a1 }; };
function HomeComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const key_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.switchKey(key_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_a_14_li_6_Template, 2, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, key_r8.child === "null", key_r8.child !== "null"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", key_r8.desc.value);
} }
class HomeComponent {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.keys = [];
        this.path = [];
    }
    ngOnInit() {
        this.firstParse();
    }
    firstParse() {
        this.path = [];
        this.keys = [];
        this.dataService.getJSON().subscribe(response => {
            this.keys.push(response.infos);
        }, error => {
            console.log("error on the parse");
        });
    }
    extractKeys(response) {
        for (let x in response) {
            this.keys.push(response[x]);
        }
    }
    switchKey(key) {
        this.path.push(key);
        this.keys = [];
        if (key.child == "null") {
            console.log("end of the path");
        }
        else {
            this.extractKeys(key.child);
        }
    }
    searchKey(key) {
        this.keys = [];
        if (this.path.length == 1) {
            this.firstParse();
        }
        else {
            for (let i = 0; i < this.path.length; i++) {
                if (this.path[i] == key) {
                    this.path = this.path.slice(0, i + 1);
                    this.extractKeys(key.child);
                }
            }
        }
    }
    logOut() {
        this.router.navigate(['/login']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 3, consts: [[1, "navbar", "navbar-light", "bg-white", "justify-content-between"], ["type", "button", "class", "btn btn-light mr-2", 3, "click", 4, "ngIf"], [1, "navbar-brand"], [1, "navbar-brand", "align-self-center", 3, "click"], [1, "nav-item"], [1, "btn", "btn-light", "auth", 3, "click"], [1, "path", "align-items-stretch"], [1, "path_text", "align-self-center"], [3, "click", 4, "ngFor", "ngForOf"], [1, "container-fluid", "mx-10"], [1, "card-columns", "justify-content-center"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-light", "mr-2", 3, "click"], [1, "fas", "fa-angle-left"], [3, "click"], [3, "ngClass", "click"], ["id", "card", 1, "card", "mx-auto", "mb-3"], [1, "card-body"], [1, "card-text"], [1, "card-title", "text-center", "font-weight-normal"], ["class", "card-text text-left", 4, "ngFor", "ngForOf"], [1, "card-text", "text-left"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_button_2_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_4_listener() { return ctx.firstParse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Valframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_a_11_Template, 2, 1, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_a_14_Template, 7, 6, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.path.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keys);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@-webkit-keyframes divAnim {\n  from {\n    left: 30px;\n  }\n  to {\n    left: 0px;\n  }\n}\n@keyframes divAnim {\n  from {\n    left: 30px;\n  }\n  to {\n    left: 0px;\n  }\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n#card[_ngcontent-%COMP%] {\n  z-index: 99;\n  margin: 0 auto;\n  float: none;\n  margin-bottom: 10px;\n  max-width: 500px;\n  -webkit-animation-name: divAnim;\n          animation-name: divAnim;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n.card-body[_ngcontent-%COMP%] {\n  color: #495057;\n  margin: auto;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n.path[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: #0037B4;\n}\n.path_text[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  color: #0037B4;\n}\n.card-title[_ngcontent-%COMP%] {\n  color: #41007A;\n}\n.arrow[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.path[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n#card[_ngcontent-%COMP%]:hover {\n  background-color: #F8F9FA;\n}\n.card-text[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: red;\n  color: white;\n  text-align: center;\n}\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0px;\n  background-color: transparent;\n  color: black;\n}\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.abled[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaWhhbS9EZXNrdG9wL1BQL1NpaGFtQWlzLmdpdGxhYi5pby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFBTSxVQUFBO0VDRVI7RUREQTtJQUFJLFNBQUE7RUNJSjtBQUNGO0FEUEE7RUFDSTtJQUFNLFVBQUE7RUNFUjtFRERBO0lBQUksU0FBQTtFQ0lKO0FBQ0Y7QURGQTtFQUNJLGdCQUFBO0FDSUo7QUREQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0lKO0FEQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDR0o7QURBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDR0o7QURBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR0o7QURBQTtFQUNJLGNBQUE7QUNHSjtBREFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0dKO0FEQUE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUNHSjtBREFBO0VBQ0kseUJBQUE7QUNHSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDR0o7QURBQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEQUU7RUFDSSxZQUFBO0FDR047QURBQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNHSjtBREFFO0VBQ0ksb0JBQUE7QUNHTjtBREFFO0VBQ0ksb0JBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZGl2QW5pbSB7XG4gICAgZnJvbSB7bGVmdDogMzBweDt9XG4gIHRvIHtsZWZ0OiAwcHg7fVxufVxuXG4ubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNjYXJke1xuICAgIHotaW5kZXg6IDk5O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBhbmltYXRpb24tbmFtZTogZGl2QW5pbTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG5cbi5jYXJkLWJvZHl7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXRoe1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjb2xvcjogIzAwMzdCNDtcbn1cblxuLnBhdGhfdGV4dHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206YXV0bztcbiAgICBjb2xvcjogIzAwMzdCNDtcbn1cblxuLmNhcmQtdGl0bGV7XG4gICAgY29sb3I6ICM0MTAwN0E7XG59XG5cbi5hcnJvd3tcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ucGF0aCBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjYXJkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XG59XG5cbi5jYXJkLXRleHR7XG4gICAgbWFyZ2luLWJvdHRvbSA6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5uYXZiYXIgYXtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4uYnRuLXNlY29uZGFyeXtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmRpc2FibGVke1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAuYWJsZWR7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfSIsIkBrZXlmcmFtZXMgZGl2QW5pbSB7XG4gIGZyb20ge1xuICAgIGxlZnQ6IDMwcHg7XG4gIH1cbiAgdG8ge1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNjYXJkIHtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IGRpdkFuaW07XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG5cbi5jYXJkLWJvZHkge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhdGgge1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiAjMDAzN0I0O1xufVxuXG4ucGF0aF90ZXh0IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgY29sb3I6ICMwMDM3QjQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICM0MTAwN0E7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ucGF0aCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZBO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXIgYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthGuardService {
    constructor() { }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthService {
    constructor() { }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/data/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DataService {
    constructor(http) {
        this.http = http;
        this.jsonURL = '../assets/ValueFramework.json';
    }
    getJSON() {
        return this.http.get(this.jsonURL);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Siham/Desktop/PP/SihamAis.gitlab.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map