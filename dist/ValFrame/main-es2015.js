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
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.searchKey(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r2.value, " ");
} }
function AppComponent_a_7_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7);
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
function AppComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const key_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.switchKey(key_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_a_7_p_6_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.disabled === true ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", key_r5.desc.value);
} }
class AppComponent {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.title = 'ValFrame';
        this.keys = [];
        this.path = [];
        this.disabled = false;
    }
    ngOnInit() {
        this.firstParse();
    }
    firstParse() {
        this.disabled = false;
        this.path = [];
        this.keys = [];
        this.dataService.getJSON().subscribe(response => {
            this.keys.push(response.infos);
        }, error => {
            console.log("error");
        });
    }
    extractKeys(response) {
        for (let x in response) {
            this.keys.push(response[x]);
            if (response[x].child == "null") {
                this.disabled = true;
            }
            else {
                this.disabled = false;
            }
        }
    }
    switchKey(key) {
        this.path.push(key);
        this.keys = [];
        this.extractKeys(key.child);
    }
    searchKey(key) {
        this.keys = [];
        for (let i = 0; i < this.path.length; i++) {
            if (this.path[i] == key) {
                this.path = this.path.slice(0, i + 1);
                this.extractKeys(key.child);
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand", 3, "click"], [1, "path"], ["class", "path_text", 4, "ngFor", "ngForOf"], [1, "card-columns", "justify-content-center"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "bg-light", "py-5"], [1, "small", "text-center", "text-muted"], [1, "path_text"], [3, "click"], [1, "arrow"], [3, "ngStyle", "click"], ["id", "card", 1, "col-md", "card", "mx-auto", "mb-3"], [1, "card-body"], [1, "card-text"], [1, "card-title", "text-center"], ["class", "card-text text-left", 4, "ngFor", "ngForOf"], [1, "card-text", "text-left"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_2_listener() { return ctx.firstParse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ValFrame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 7, 5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Copyright \u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keys);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["@-webkit-keyframes divAnim {\n  from {\n    left: -30px;\n  }\n  to {\n    left: 0px;\n  }\n}\n@keyframes divAnim {\n  from {\n    left: -30px;\n  }\n  to {\n    left: 0px;\n  }\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #343a40;\n}\n#card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  float: none;\n  margin-bottom: 10px;\n  max-width: 400px;\n  -webkit-animation-name: divAnim;\n          animation-name: divAnim;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n.card-body[_ngcontent-%COMP%] {\n  color: #495057;\n  margin: auto;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n.path[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n  font-weight: 500;\n  display: flex;\n}\n.path_text[_ngcontent-%COMP%] {\n  display: flex;\n  color: #004484;\n}\n.arrow[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.path[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n#card[_ngcontent-%COMP%]:hover {\n  background-color: #F8F9FA;\n}\n.card-text[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhY28vUC92YWxmcmFtZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFBTSxXQUFBO0VDRVI7RUREQTtJQUFJLFNBQUE7RUNJSjtBQUNGO0FEUEE7RUFDSTtJQUFNLFdBQUE7RUNFUjtFRERBO0lBQUksU0FBQTtFQ0lKO0FBQ0Y7QURGQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0lKO0FEQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0dKO0FEQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDR0o7QURBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0dKO0FEQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDR0o7QURBQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEQUE7RUFDSSx5QkFBQTtBQ0dKO0FEQUE7RUFDSSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBkaXZBbmltIHtcbiAgICBmcm9tIHtsZWZ0OiAtMzBweDt9XG4gIHRvIHtsZWZ0OiAwcHg7fVxufVxuXG4ubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMzNDNhNDA7XG59XG5cblxuI2NhcmR7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBkaXZBbmltO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG5cbi5jYXJkLWJvZHl7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXRoe1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGF0aF90ZXh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICMwMDQ0ODQ7XG59XG5cbi5hcnJvd3tcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ucGF0aCBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjYXJkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XG59XG5cbi5jYXJkLXRleHR7XG4gICAgbWFyZ2luLWJvdHRvbSA6IDBweDtcbn0iLCJAa2V5ZnJhbWVzIGRpdkFuaW0ge1xuICBmcm9tIHtcbiAgICBsZWZ0OiAtMzBweDtcbiAgfVxuICB0byB7XG4gICAgbGVmdDogMHB4O1xuICB9XG59XG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG5cbiNjYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBhbmltYXRpb24tbmFtZTogZGl2QW5pbTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbn1cblxuLmNhcmQtYm9keSB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGF0aCB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGF0aF90ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMwMDQ0ODQ7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4ucGF0aCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZBO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data/data.service */ "./src/app/services/data/data.service.ts");











const appRoutes = [
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"] },
    { path: '', redirectTo: 'app-root', pathMatch: 'full' },
    { path: '**', redirectTo: 'app-root' }
];
const routerOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
        _services_data_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
                ],
                providers: [
                    _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                    _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"],
                    _services_data_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 0, vars: 0, template: function AuthComponent_Template(rf, ctx) { }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  color: #343a40;\n  font-family: \"Merriweather Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 700;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n  color: #495057;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  font-family: inherit;\n  max-width: 350px;\n}\n\n#other[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin: auto;\n  text-align: center;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover, .navbar-brand[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n.signin_form[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 100%;\n  margin: auto;\n  padding: 20px;\n  font-family: \"Merriweather Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\nhr.divider[_ngcontent-%COMP%] {\n  max-width: 3.25rem;\n  border-width: 0.2rem;\n  border-color: #f4623a;\n}\n\n.signinbtn[_ngcontent-%COMP%] {\n  color: white;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 50%;\n  opacity: 0.9;\n  text-align: center;\n}\n\n.signinbtn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 10rem;\n  max-width: 120px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f4623a;\n  border-color: #f4623a;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #f24516;\n  border-color: #ee3e0d;\n}\n\n.btn-primary[_ngcontent-%COMP%]:focus, .btn-primary.focus[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #f24516;\n  border-color: #ee3e0d;\n  box-shadow: 0 0 0 0.2rem rgba(246, 122, 88, 0.5);\n}\n\n.btn-primary.disabled[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #f4623a;\n  border-color: #f4623a;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #ee3e0d;\n  border-color: #e23a0d;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(246, 122, 88, 0.5);\n}\n\n@media only screen and (min-width: 721px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 5px;\n    margin: auto;\n  }\n\n  input[_ngcontent-%COMP%] {\n    height: 50px;\n    padding: 10px;\n    margin: 5px 0 22px 0;\n    display: block;\n    border: none;\n    background: #f1f1f1;\n  }\n\n  p[_ngcontent-%COMP%], .signin_bloc[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n  }\n}\n\n@media only screen and (max-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 5px;\n    margin: auto;\n    width: 90%;\n  }\n\n  input[_ngcontent-%COMP%] {\n    padding: 15px;\n    height: 50px;\n    margin: 5px 0 22px 0;\n    display: block;\n    border: none;\n    background: #f1f1f1;\n  }\n\n  p[_ngcontent-%COMP%], .signin_bloc[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhY28vUC92YWxmcmFtZS9zcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsc0JBQUE7QUNFSDs7QURBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVOQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVOQUFBO0FDR0Y7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsZ0RBQUE7QUNHRjs7QURBQTtFQUNJO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUNHSjs7RURBRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VDR0o7O0VEQUU7SUFDSSxrQkFBQTtJQUNBLFlBQUE7RUNHTjtBQUNGOztBREFBO0VBQ0k7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUNFSjs7RURDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VDRUo7O0VEQ0U7SUFDSSxrQkFBQTtJQUNBLFlBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cblxuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzM0M2E0MDtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG4jb3RoZXJ7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIsIC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWduaW5fZm9ybXtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xufVxuXG5pbnB1dDpmb2N1c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiAgICBcbmhyLmRpdmlkZXIge1xuICBtYXgtd2lkdGg6IDMuMjVyZW07XG4gIGJvcmRlci13aWR0aDogMC4ycmVtO1xuICBib3JkZXItY29sb3I6ICNmNDYyM2E7XG59XG5cbi5zaWduaW5idG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxufVxuXG4uc2lnbmluYnRuOmhvdmVye1xuICBvcGFjaXR5OjE7XG59XG5cbi5idG4ge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gIH1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDYyM2E7XG4gIGJvcmRlci1jb2xvcjogI2Y0NjIzYTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjQ1MTY7XG4gIGJvcmRlci1jb2xvcjogI2VlM2UwZDtcbn1cblxuLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnkuZm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNDUxNjtcbiAgYm9yZGVyLWNvbG9yOiAjZWUzZTBkO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNDYsIDEyMiwgODgsIDAuNSk7XG59XG5cbi5idG4tcHJpbWFyeS5kaXNhYmxlZCwgLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDYyM2E7XG4gIGJvcmRlci1jb2xvcjogI2Y0NjIzYTtcbn1cblxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTNlMGQ7XG4gIGJvcmRlci1jb2xvcjogI2UyM2EwZDtcbn1cblxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ2LCAxMjIsIDg4LCAwLjUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMXB4KXtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIH1cblxuICAgIHAsLnNpZ25pbl9ibG9je1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xuICAgIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIH1cblxuICAgIHAsLnNpZ25pbl9ibG9je1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG4gICAgIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zMTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICMzNDNhNDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlciBTYW5zXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG4jb3RoZXIge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZ25pbl9mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyIFNhbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmhyLmRpdmlkZXIge1xuICBtYXgtd2lkdGg6IDMuMjVyZW07XG4gIGJvcmRlci13aWR0aDogMC4ycmVtO1xuICBib3JkZXItY29sb3I6ICNmNDYyM2E7XG59XG5cbi5zaWduaW5idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNTAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ25pbmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ2MjNhO1xuICBib3JkZXItY29sb3I6ICNmNDYyM2E7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI0NTE2O1xuICBib3JkZXItY29sb3I6ICNlZTNlMGQ7XG59XG5cbi5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5LmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjQ1MTY7XG4gIGJvcmRlci1jb2xvcjogI2VlM2UwZDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ2LCAxMjIsIDg4LCAwLjUpO1xufVxuXG4uYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ2MjNhO1xuICBib3JkZXItY29sb3I6ICNmNDYyM2E7XG59XG5cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5zaG93ID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUzZTBkO1xuICBib3JkZXItY29sb3I6ICNlMjNhMGQ7XG59XG5cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsIC5zaG93ID4gLmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI0NiwgMTIyLCA4OCwgMC41KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjFweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG5cbiAgcCwgLnNpZ25pbl9ibG9jIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDVweCAwIDIycHggMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuXG4gIHAsIC5zaWduaW5fYmxvYyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! /home/paco/P/valframe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map