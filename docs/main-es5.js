function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Valframe';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/auth/auth-guard.service */
    "./src/app/services/auth/auth-guard.service.ts");
    /* harmony import */


    var _services_data_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/data/data.service */
    "./src/app/services/data/data.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/SafeHtml.pipe */
    "./src/app/home/SafeHtml.pipe.ts");
    /* harmony import */


    var _doc_form_doc_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./doc-form/doc-form.component */
    "./src/app/doc-form/doc-form.component.ts");

    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"]
    }, {
      path: 'newDoc',
      component: _doc_form_doc_form_component__WEBPACK_IMPORTED_MODULE_14__["DocFormComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];
    var routerOptions = {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__["SafeHtmlPipe"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"], _services_data_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__["SafeHtmlPipe"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _doc_form_doc_form_component__WEBPACK_IMPORTED_MODULE_14__["DocFormComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__["SafeHtmlPipe"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _doc_form_doc_form_component__WEBPACK_IMPORTED_MODULE_14__["DocFormComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]],
          providers: [_home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_13__["SafeHtmlPipe"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"], _services_data_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(router, authService, formBuilder) {
        _classCallCheck(this, AuthComponent);

        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.signInForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
          });
        }
      }, {
        key: "onSignIn",
        value: function onSignIn() {
          var email = this.signInForm.get('email').value;
          var password = this.signInForm.get('password').value; // this.authService.signInUser(email, password).then(
          //   () => { this.router.navigate(['/main']); },
          //   (error) => { this.errorMessage = error; }
          // )
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      decls: 24,
      vars: 3,
      consts: [[1, "signin_form"], ["routerLink", "app-root", 1, "navbar-brand"], [1, "divider", "my-4"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "row", "justify-content-center"], ["for", "email", 1, "text-black-75", "font-weight-light", "mb-0"], ["type", "email", "email", "email", "id", "email", "placeholder", "Your email..", "formControlName", "email", 1, "form-control", "form-control-lg"], ["for", "password", 1, "text-black-75", "font-weight-light", "mb-0"], ["type", "password", "name", "password", "id", "password", "placeholder", "Your password..", "formControlName", "password", 1, "form-control", "form-control-lg"], [1, "text-danger"], [1, "row", "justify-content-center", "signin_bloc"], ["type", "submit", "value", "Log in", 1, "btn", "btn-primary", "btn-xl", "js-scroll-trigger", "mb-4", "signinbtn", 3, "disabled"], [1, "col-sm"], [1, "text"], ["routerLink", "", 1, "lien_forgotPass"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "VALFRAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSignIn();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signInForm.invalid);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  color: #343a40;\n  font-family: \"Merriweather Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 700;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n  color: #495057;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  font-family: inherit;\n  max-width: 350px;\n}\n\n#other[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin: auto;\n  text-align: center;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover, .navbar-brand[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n.signin_form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 100%;\n  margin: auto;\n  padding: 20px;\n  font-family: \"Merriweather Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\nhr.divider[_ngcontent-%COMP%] {\n  max-width: 3.25rem;\n  border-width: 0.2rem;\n  border-color: #f4623a;\n}\n\n.signinbtn[_ngcontent-%COMP%] {\n  color: white;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 50%;\n  opacity: 0.9;\n  text-align: center;\n}\n\n.signinbtn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 10rem;\n  max-width: 120px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f4623a;\n  border-color: #f4623a;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f24516;\n  border-color: #ee3e0d;\n}\n\n.btn-primary[_ngcontent-%COMP%]:focus, .btn-primary.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f24516;\n  border-color: #ee3e0d;\n  box-shadow: 0 0 0 0.2rem rgba(246, 122, 88, 0.5);\n}\n\n.btn-primary.disabled[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #f4623a;\n  border-color: #f4623a;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ee3e0d;\n  border-color: #e23a0d;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(246, 122, 88, 0.5);\n}\n\n@media only screen and (min-width: 721px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 5px;\n    margin: auto;\n  }\n\n  input[_ngcontent-%COMP%] {\n    height: 50px;\n    padding: 10px;\n    margin: 5px 0 22px 0;\n    display: block;\n    border: none;\n    background: #f1f1f1;\n  }\n\n  p[_ngcontent-%COMP%], .signin_bloc[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n  }\n}\n\n@media only screen and (max-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 5px;\n    margin: auto;\n    width: 90%;\n  }\n\n  input[_ngcontent-%COMP%] {\n    padding: 15px;\n    height: 50px;\n    margin: 5px 0 22px 0;\n    display: block;\n    border: none;\n    background: #f1f1f1;\n  }\n\n  p[_ngcontent-%COMP%], .signin_bloc[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWhhbWFpcy9EZXNrdG9wL1Byb2plY3RzL3ZhbGZyYW1lL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxzQkFBQTtBQ0VIOztBREFBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdU5BQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdU5BQUE7QUNHRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnREFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxnREFBQTtBQ0dGOztBREFBO0VBQ0k7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQ0dKOztFREFFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUNHSjs7RURBRTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQ0VKOztFRENFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUNFSjs7RURDRTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IDAuMzEyNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMzEyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjMzQzYTQwO1xuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXIgU2Fuc1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uZm9ybS1jb250cm9se1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxcmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG5cbiNvdGhlcntcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ25pbl9mb3Jte1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXIgU2Fuc1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG59XG5cbmlucHV0OmZvY3Vze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuICAgIFxuaHIuZGl2aWRlciB7XG4gIG1heC13aWR0aDogMy4yNXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwLjJyZW07XG4gIGJvcmRlci1jb2xvcjogI2Y0NjIzYTtcbn1cblxuLnNpZ25pbmJ0bntcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgb3BhY2l0eTogMC45O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXG59XG5cbi5zaWduaW5idG46aG92ZXJ7XG4gIG9wYWNpdHk6MTtcbn1cblxuLmJ0biB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgfVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NjIzYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjQ2MjNhO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNDUxNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWUzZTBkO1xufVxuXG4uYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeS5mb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI0NTE2O1xuICBib3JkZXItY29sb3I6ICNlZTNlMGQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI0NiwgMTIyLCA4OCwgMC41KTtcbn1cblxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkLCAuYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NjIzYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjQ2MjNhO1xufVxuXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdyA+IC5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlM2UwZDtcbiAgYm9yZGVyLWNvbG9yOiAjZTIzYTBkO1xufVxuXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLCAuc2hvdyA+IC5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNDYsIDEyMiwgODgsIDAuNSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIxcHgpe1xuICAgIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgfVxuXG4gICAgcCwuc2lnbmluX2Jsb2N7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCl7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgfVxuXG4gICAgcCwuc2lnbmluX2Jsb2N7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbiAgICAiLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzM0M2E0MDtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAxcmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG5cbiNvdGhlciB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVyLCAubmF2YmFyLWJyYW5kOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2lnbmluX2Zvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXIgU2Fuc1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaHIuZGl2aWRlciB7XG4gIG1heC13aWR0aDogMy4yNXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwLjJyZW07XG4gIGJvcmRlci1jb2xvcjogI2Y0NjIzYTtcbn1cblxuLnNpZ25pbmJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbmluYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDYyM2E7XG4gIGJvcmRlci1jb2xvcjogI2Y0NjIzYTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjQ1MTY7XG4gIGJvcmRlci1jb2xvcjogI2VlM2UwZDtcbn1cblxuLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnkuZm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNDUxNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWUzZTBkO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNDYsIDEyMiwgODgsIDAuNSk7XG59XG5cbi5idG4tcHJpbWFyeS5kaXNhYmxlZCwgLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDYyM2E7XG4gIGJvcmRlci1jb2xvcjogI2Y0NjIzYTtcbn1cblxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTNlMGQ7XG4gIGJvcmRlci1jb2xvcjogI2UyM2EwZDtcbn1cblxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ2LCAxMjIsIDg4LCAwLjUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cblxuICBwLCAuc2lnbmluX2Jsb2Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG5cbiAgcCwgLnNpZ25pbl9ibG9jIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth',
          templateUrl: './auth.component.html',
          styleUrls: ['./auth.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/doc-form/doc-form.component.ts":
  /*!************************************************!*\
    !*** ./src/app/doc-form/doc-form.component.ts ***!
    \************************************************/

  /*! exports provided: DocFormComponent */

  /***/
  function srcAppDocFormDocFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocFormComponent", function () {
      return DocFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_models_card_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/models/card.model */
    "./src/models/card.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DocFormComponent_a_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocFormComponent_a_16_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var card_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onAddChild(card_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.title);
      }
    }

    function DocFormComponent_a_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocFormComponent_a_24_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var i_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onSearchCard(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6.title, " > ");
      }
    }

    function DocFormComponent_a_27_a_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocFormComponent_a_27_a_3_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onRemoveCard(card_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocFormComponent_a_27_input_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocFormComponent_a_27_input_7_Template_input_change_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onChange(card_r9, _r18.value, 0 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", card_r9.title);
      }
    }

    function DocFormComponent_a_27_h5_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r9.title, "");
      }
    }

    function DocFormComponent_a_27_div_9_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var point_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", point_r25, " ");
      }
    }

    function DocFormComponent_a_27_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocFormComponent_a_27_div_9_li_1_Template, 2, 1, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", card_r9.content);
      }
    }

    function DocFormComponent_a_27_div_10_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 39, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocFormComponent_a_27_div_10_li_1_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.onChange(card_r9, _r29.value, _r29.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var point_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", point_r28);
      }
    }

    function DocFormComponent_a_27_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocFormComponent_a_27_div_10_li_1_Template, 3, 1, "li", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", card_r9.content);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "static-card": a0
      };
    };

    function DocFormComponent_a_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocFormComponent_a_27_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var card_r9 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.onDepthSearch(card_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocFormComponent_a_27_a_3_Template, 2, 0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocFormComponent_a_27_input_7_Template, 2, 1, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DocFormComponent_a_27_h5_8_Template, 2, 1, "h5", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DocFormComponent_a_27_div_9_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DocFormComponent_a_27_div_10_Template, 2, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r9 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r2.edit || !card_r9.childs));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.edit);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "edit-true": a0
      };
    };

    var DocFormComponent = /*#__PURE__*/function () {
      function DocFormComponent(router) {
        _classCallCheck(this, DocFormComponent);

        this.router = router;
        this.cards = [];
        this.display = [];
        this.path = [];
        this.closeResult = '';
        this.edit = false;
      }

      _createClass(DocFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.cards = [];
          var newCard = new src_models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"](this.cards.length, "Title here", ["First point", "Second point", "Third point"]);
          this.cards.push(newCard);
          this.display.push(newCard);
        }
      }, {
        key: "onAddCard",
        value: function onAddCard() {
          var newCard = new src_models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"](this.cards.length, "Title here", ["First point", "Second point", "Third point"]);
          this.cards.push(newCard);
          this.display.push(newCard);
        }
      }, {
        key: "onAddChild",
        value: function onAddChild(card) {
          var newCard = new src_models_card_model__WEBPACK_IMPORTED_MODULE_1__["Card"](this.cards.length, "Title here", ["First point", "Second point", "Third point"]);

          if (!card.childs) {
            card.childs = [];
          }

          card.childs.push(newCard);
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          this.edit = !this.edit;
        }
      }, {
        key: "onModifyCard",
        value: function onModifyCard() {}
      }, {
        key: "onRemoveCard",
        value: function onRemoveCard(card) {
          for (var i = 0; i < this.cards.length; i++) {
            if (this.cards[i] == card) {
              this.cards.splice(i, 1);
            }
          }

          for (var _i = 0; _i < this.display.length; _i++) {
            if (this.display[_i] == card) {
              this.display.splice(_i, 1);
            }
          }

          for (var _i2 = 0; _i2 < this.path.length; _i2++) {
            if (this.path[_i2] == card) {
              this.path.splice(_i2, 1);
            }
          }
        }
      }, {
        key: "onDepthSearch",
        value: function onDepthSearch(card) {
          if (card.childs) {
            this.path.push(card);
            this.display = [];

            for (var i = 0; i < card.childs.length; i++) {
              this.display.push(card.childs[i]);
            }
          }
        }
      }, {
        key: "onSearchCard",
        value: function onSearchCard(card) {
          this.display = [];

          for (var i = 0; i < card.childs.length; i++) {
            this.display.push(card.childs[i]);
          }
        }
      }, {
        key: "onChange",
        value: function onChange(card, value, type) {
          if (type == -1) {
            card.title = value;
          } else {
            card.content[type] = value;
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON() {}
      }]);

      return DocFormComponent;
    }();

    DocFormComponent.ɵfac = function DocFormComponent_Factory(t) {
      return new (t || DocFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DocFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocFormComponent,
      selectors: [["app-doc-form"]],
      decls: 28,
      vars: 6,
      consts: [[1, "navbar", "navbar-light", "bg-white", "justify-content-between"], [1, "navbar-brand"], ["routerLink", "/", 1, "navbar-brand", "align-self-center"], [1, "left", "justify-content-between"], [1, "nav-item", "dropdown"], [1, "btn", "btn-success", "px-3", "py-2", "dropbtn"], [1, "dropdown-content"], [3, "click"], [1, "dropright-item", "dropright", "parent"], [1, "dropright-item", "dropright-toggle", "dropbtn"], [1, "dropright-content"], ["class", "dropright-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-light", "mx-4", "px-3", "py-2", 3, "ngClass", "click"], [1, "btn", "btn-outline-primary", "px-3", "py-2"], [1, "cont"], [1, "path"], [1, "path_text", "align-self-center"], [3, "click", 4, "ngFor", "ngForOf"], [1, "card-columns"], [1, "justify-content-center"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dropright-item", 3, "click"], [3, "ngClass", "click"], ["id", "card", 1, "card", "mx-auto", "mb-3"], [1, "remove", "mx-1", "my-1", "float-right"], ["class", "btn btn-danger py-0 px-2", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "card-text"], [1, "title"], ["class", "card-title text-center font-weight-normal editing", "placeholder", "Title here", 3, "value", "change", 4, "ngIf"], ["class", "card-title text-center font-weight-normal inediting", 4, "ngIf"], ["class", "points", 4, "ngIf"], [1, "btn", "btn-danger", "py-0", "px-2", 3, "click"], ["placeholder", "Title here", 1, "card-title", "text-center", "font-weight-normal", "editing", 3, "value", "change"], ["box", ""], [1, "card-title", "text-center", "font-weight-normal", "inediting"], [1, "points"], ["class", "card-text text-left inediting", 4, "ngFor", "ngForOf"], [1, "card-text", "text-left", "inediting"], ["placeholder", "Content here", 1, "card-text", "text-left", "editing", 3, "value", "change"]],
      template: function DocFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Valframe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocFormComponent_Template_a_click_10_listener() {
            return ctx.onAddCard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Child card to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DocFormComponent_a_16_Template, 2, 1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocFormComponent_Template_a_click_17_listener() {
            return ctx.onEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DocFormComponent_a_24_Template, 2, 1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DocFormComponent_a_27_Template, 11, 8, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.edit));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.display);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nheader[_ngcontent-%COMP%] {\n  z-index: 99;\n  border-bottom: solid 0.5px lightgray;\n  top: 0px;\n  width: 100%;\n  position: fixed;\n  margin-bottom: 65px;\n}\n\n.cont[_ngcontent-%COMP%] {\n  margin-top: 65px;\n  padding: 20px;\n}\n\n.edit-true[_ngcontent-%COMP%] {\n  background-color: #FFC7C6;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content[_ngcontent-%COMP%], .dropright-content[_ngcontent-%COMP%] {\n  min-width: 100px;\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropright[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n\n.parent[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropright-content[_ngcontent-%COMP%] {\n  left: 100px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dropright[_ngcontent-%COMP%]:hover   .dropright-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#card[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  max-width: 500px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  color: #495057;\n  margin: auto;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #41007A;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n\n.static-card[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.remove[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.editing[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  text-align: center;\n  font-weight: 400;\n  margin-bottom: 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWhhbWFpcy9EZXNrdG9wL1Byb2plY3RzL3ZhbGZyYW1lL3NyYy9hcHAvZG9jLWZvcm0vZG9jLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvYy1mb3JtL2RvYy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQTJCLHNCQUFBO0FDRTNCOztBREFBO0VBQW1DLGNBQUE7QUNJbkM7O0FERkE7RUFBcUMsY0FBQTtBQ01yQzs7QURKQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDTUo7O0FESEE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTUo7O0FESEE7RUFDSSxjQUFBO0FDTUo7O0FESEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNNSjs7QURIQTtFQUNJLG9CQUFBO0FDTUo7O0FESEE7RUFDSSxvQkFBQTtBQ01KOztBREhBO0VBQ0ksb0JBQUE7QUNNSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9kb2MtZm9ybS9kb2MtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmR7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaGVhZGVye1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4IGxpZ2h0Z3JheTtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcbn1cblxuLmNvbnR7XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZWRpdC10cnVle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM3QzY7XG59XG5cbi5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQsIC5kcm9wcmlnaHQtY29udGVudCB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wcmlnaHR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wYXJlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wcmlnaHQtY29udGVudHtcbiAgICBsZWZ0OiAxMDBweDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuXG4uZHJvcHJpZ2h0OmhvdmVyIC5kcm9wcmlnaHQtY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxuXG4jY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cblxuLmNhcmQtYm9keXtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtdGl0bGV7XG4gICAgY29sb3I6ICM0MTAwN0E7XG59XG5cbi5jYXJkLXRleHR7XG4gICAgbWFyZ2luLWJvdHRvbSA6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdGF0aWMtY2FyZHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnJlbW92ZXtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmVkaXRpbmd7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbmlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xufVxuIiwiLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmhlYWRlciB7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCBsaWdodGdyYXk7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xufVxuXG4uY29udCB7XG4gIG1hcmdpbi10b3A6IDY1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5lZGl0LXRydWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDN0M2O1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQsIC5kcm9wcmlnaHQtY29udGVudCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wYXJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wcmlnaHQtY29udGVudCB7XG4gIGxlZnQ6IDEwMHB4O1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wcmlnaHQ6aG92ZXIgLmRyb3ByaWdodC1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNjYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjNDEwMDdBO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdGF0aWMtY2FyZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ucmVtb3ZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5lZGl0aW5nIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doc-form',
          templateUrl: './doc-form.component.html',
          styleUrls: ['./doc-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/SafeHtml.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/home/SafeHtml.pipe.ts ***!
    \***************************************/

  /*! exports provided: SafeHtmlPipe */

  /***/
  function srcAppHomeSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
      return SafeHtmlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafeHtmlPipe = /*#__PURE__*/function () {
      function SafeHtmlPipe(sanitizer) {
        _classCallCheck(this, SafeHtmlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(value, type) {
          switch (type) {
            case 'html':
              return this.sanitizer.bypassSecurityTrustHtml(value);

            case 'style':
              return this.sanitizer.bypassSecurityTrustStyle(value);

            case 'script':
              return this.sanitizer.bypassSecurityTrustScript(value);

            case 'url':
              return this.sanitizer.bypassSecurityTrustUrl(value);

            case 'resourceUrl':
              return this.sanitizer.bypassSecurityTrustResourceUrl(value);

            default:
              throw new Error("Invalid safe type specified: ".concat(type));
          }
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeHtml'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data/data.service */
    "./src/app/services/data/data.service.ts");
    /* harmony import */


    var _home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../home/SafeHtml.pipe */
    "./src/app/home/SafeHtml.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_a_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_a_4_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.searchKey(ctx_r4.path[ctx_r4.path.length - 2]);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "disabled": a0,
        "abled": a1
      };
    };

    function HomeComponent_div_11_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_11_li_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var key_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.switchKey(key_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, key_r7.child === "null", key_r7.child !== "null"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r7.value);
      }
    }

    function HomeComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_11_li_1_Template, 3, 5, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.keys);
      }
    }

    function HomeComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_a_15_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var i_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.searchKey(i_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r10.value, " > ");
      }
    }

    function HomeComponent_a_18_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
      }

      if (rf & 2) {
        var i_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, i_r15, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function HomeComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_a_18_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var key_r13 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.switchKey(key_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h5", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "safeHtml");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_a_18_li_6_Template, 2, 4, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, key_r13.child === "null", key_r13.child !== "null"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, key_r13.value, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", key_r13.desc.value);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, dataService, safeHtml) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.dataService = dataService;
        this.safeHtml = safeHtml;
        this.keys = [];
        this.path = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstParse();
        }
      }, {
        key: "firstParse",
        value: function firstParse() {
          var _this = this;

          this.path = [];
          this.keys = [];
          this.dataService.getJSON().subscribe(function (response) {
            _this.keys.push(response.infos);
          }, function (error) {
            console.log("error on the parse");
          });
        }
      }, {
        key: "extractKeys",
        value: function extractKeys(response) {
          for (var x in response) {
            this.keys.push(response[x]);
          }
        }
      }, {
        key: "switchKey",
        value: function switchKey(key) {
          if (key.child != "null") {
            this.path.push(key);
            this.keys = [];
            this.extractKeys(key.child);
          }
        }
      }, {
        key: "searchKey",
        value: function searchKey(key) {
          this.keys = [];

          if (this.path.length == 1) {
            this.firstParse();
          } else {
            for (var i = 0; i < this.path.length; i++) {
              if (this.path[i] == key) {
                this.path = this.path.slice(0, i + 1);
                this.extractKeys(key.child);
              }
            }
          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.router.navigate(['/login']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 19,
      vars: 4,
      consts: [[1, "body"], [1, "navbar", "navbar-light", "bg-white", "justify-content-between"], [1, ""], ["class", "btn btn-light mr-2 back", 3, "click", 4, "ngIf"], [1, "navbar-brand"], [1, "navbar-brand", "align-self-center", 3, "click"], [1, "nav-item"], ["disabled", "", 1, "btn", "btn-white", "auth", 3, "click"], [1, "row", "cont"], ["class", "col-3 summary", 4, "ngIf"], [1, "col", "view", "mx-2"], [1, "path"], [1, "path_text", "align-self-center"], [3, "click", 4, "ngFor", "ngForOf"], [1, "card-columns"], [1, "justify-content-center"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-light", "mr-2", "back", 3, "click"], [1, "col-3", "summary"], [4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [3, "click"], ["id", "card", 1, "card", "mx-auto", "mb-3"], [1, "card-body"], [1, "card-text"], [1, "card-title", "text-center", "font-weight-normal", 3, "innerHTML"], ["class", "card-text text-left", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "card-text", "text-left", 3, "innerHTML"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_a_4_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_6_listener() {
            return ctx.firstParse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Valframe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_9_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_a_15_Template, 2, 1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_a_18_Template, 7, 10, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.path.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.path.length == 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keys);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      pipes: [_home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]],
      styles: [".body[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nheader[_ngcontent-%COMP%] {\n  z-index: 99;\n  border-bottom: solid 0.5px lightgray;\n  top: 0px;\n  width: 100%;\n  position: fixed;\n}\n\n.cont[_ngcontent-%COMP%] {\n  margin-top: 65px;\n}\n\n.view[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.summary[_ngcontent-%COMP%] {\n  min-height: 100%;\n  border-right: solid 0.5px lightgray;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  padding: 20px;\n  margin-right: 20px;\n}\n\n.summary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0037B4;\n}\n\n#card[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  max-width: 500px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  color: #495057;\n  margin: auto;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n\n.path[_ngcontent-%COMP%] {\n  margin: 10px;\n  color: #0037B4;\n}\n\n.path_text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  color: #0037B4;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #41007A;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.path[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 14px;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0px;\n  background-color: transparent;\n  color: black;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.disabled[_ngcontent-%COMP%]:hover {\n  background-color: none;\n}\n\n.card-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  pointer-events: initial;\n}\n\n.card-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: none;\n}\n\n.abled[_ngcontent-%COMP%] {\n  cursor: pointer;\n  pointer-events: auto;\n}\n\n.abled[_ngcontent-%COMP%]   #card[_ngcontent-%COMP%]:hover {\n  background-color: #F8F9FA;\n}\n\n.back[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWhhbWFpcy9EZXNrdG9wL1Byb2plY3RzL3ZhbGZyYW1lL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0ksWUFBQTtBQ0FOOztBREdBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0ksb0JBQUE7QUNBTjs7QURHRTtFQUNJLHNCQUFBO0FDQU47O0FER0U7RUFDSSx1QkFBQTtBQ0FOOztBREdFO0VBQ0ksc0JBQUE7QUNBTjs7QURHRTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQ0FOOztBREdFO0VBQ0UseUJBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmhlYWRlcntcbiAgICB6LWluZGV4OiA5OTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCBsaWdodGdyYXk7XG4gICAgdG9wOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uY29udHtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xufVxuXG4udmlld3tcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN1bW1hcnkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCBsaWdodGdyYXk7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc3VtbWFyeSBhIHtcbiAgICBjb2xvcjogIzAwMzdCNDtcbn1cblxuI2NhcmR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG5cbi5jYXJkLWJvZHl7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXRoe1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjb2xvcjogIzAwMzdCNDtcbn1cblxuLnBhdGhfdGV4dCBhe1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTphdXRvO1xuICAgIGNvbG9yOiAjMDAzN0I0O1xufVxuXG4uY2FyZC10aXRsZXtcbiAgICBjb2xvcjogIzQxMDA3QTtcbn1cblxuLmFycm93e1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5wYXRoIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtdGV4dHtcbiAgICBtYXJnaW4tYm90dG9tIDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuICAubmF2YmFyIGF7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuLmJ0bi1zZWNvbmRhcnl7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5kaXNhYmxlZHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmRpc2FibGVkOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgfVxuXG4gIC5jYXJkLXRleHQgYXtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xuICB9XG5cbiAgLmNhcmQtdGV4dCBhOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgfVxuXG4gIC5hYmxlZHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG5cbiAgLmFibGVkICNjYXJkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XG4gIH1cblxuICAuYmFja3tcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9IiwiLmJvZHkge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oZWFkZXIge1xuICB6LWluZGV4OiA5OTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggbGlnaHRncmF5O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmNvbnQge1xuICBtYXJnaW4tdG9wOiA2NXB4O1xufVxuXG4udmlldyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3VtbWFyeSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogc29saWQgMC41cHggbGlnaHRncmF5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5zdW1tYXJ5IGEge1xuICBjb2xvcjogIzAwMzdCNDtcbn1cblxuI2NhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXRoIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogIzAwMzdCNDtcbn1cblxuLnBhdGhfdGV4dCBhIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgY29sb3I6ICMwMDM3QjQ7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICM0MTAwN0E7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ucGF0aCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubmF2YmFyIGEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cblxuLmNhcmQtdGV4dCBhIHtcbiAgcG9pbnRlci1ldmVudHM6IGluaXRpYWw7XG59XG5cbi5jYXJkLXRleHQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbi5hYmxlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5hYmxlZCAjY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XG59XG5cbi5iYWNrIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _home_SafeHtml_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth/auth-guard.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/auth/auth-guard.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthGuardService = function AuthGuardService() {
      _classCallCheck(this, AuthGuardService);
    };

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)();
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthService = function AuthService() {
      _classCallCheck(this, AuthService);
    };

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data/data.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/data/data.service.ts ***!
    \***********************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.jsonURL = '../assets/ValueFramework.json';
      }

      _createClass(DataService, [{
        key: "getJSON",
        value: function getJSON() {
          return this.http.get(this.jsonURL);
        }
      }, {
        key: "pushJSON",
        value: function pushJSON() {}
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/models/card.model.ts":
  /*!**********************************!*\
    !*** ./src/models/card.model.ts ***!
    \**********************************/

  /*! exports provided: Card */

  /***/
  function srcModelsCardModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Card", function () {
      return Card;
    });

    var Card = function Card(id, title, content, childs) {
      _classCallCheck(this, Card);

      this.id = id;
      this.title = title;
      this.content = content;
      this.childs = childs;
    };
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sihamais/Desktop/Projects/valframe/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map