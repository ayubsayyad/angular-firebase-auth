webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <nav class=\"navbar navbar-default\">\n        <div *ngIf=\"isLoggedIn\">\n          <p class=\"navbar-text navbar-center\">Logged In: {{user_displayName}} ({{user_email}})<p>\n        </div>\n        <div *ngIf=\"!isLoggedIn\">\n          <p class=\"navbar-text navbar-right\">Logged Out</p>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.af.authState.subscribe(function (auth) {
            if (auth == null) {
                console.log("Logged out");
                _this.isLoggedIn = false;
                _this.user_displayName = '';
                _this.user_email = '';
                _this.router.navigate(['login']);
            }
            else {
                _this.isLoggedIn = true;
                _this.user_displayName = _this.authService.af.auth.currentUser.displayName;
                _this.user_email = _this.authService.af.auth.currentUser.email;
                console.log("Logged in");
                //console.log(auth);
                _this.router.navigate(['']);
                console.log("routed");
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__["a" /* HomePageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_page_home_page_component__["a" /* HomePageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["g" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["h" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["j" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyBnea5CJ5WKyYxo81YwdceMkpabJRWgV3c",
                    authDomain: "devdemo-610e1.firebaseapp.com",
                    databaseURL: "https://devdemo-610e1.firebaseio.com",
                    projectId: "devdemo-610e1",
                    storageBucket: "devdemo-610e1.appspot.com",
                    messagingSenderId: "1089156503117"
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__providers_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n\n  .example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    max-height: 500px;\n    min-width: 300px;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<mat-checkbox class=\"example-margin\">tttt</mat-checkbox> -->\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div>\n      <p><button class=\"btn btn-default\" (click)=\"logout()\">Logout</button></p>\n    </div>\n    <div>\n        <div class=\"refer-friend\">\n            <form>\n                  <div>\n                    <mat-radio-group [(ngModel)]=\"referral.refertype\" [ngModelOptions]=\"{standalone: true}\">\n                      <mat-radio-button value=\"Friend\">Refer Friend</mat-radio-button>\n                      <mat-radio-button value=\"FileLogin\">File Login</mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                  \n                  <div>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Name\" value=\"\" [(ngModel)]=\"referral.name\" [ngModelOptions]=\"{standalone: true}\">\n                      </mat-form-field>\n                  </div>                         \n\n                  <div>\n                    \n                      <mat-form-field class=\"example-full-width\">\n                          <span matPrefix>+91 &nbsp;</span>\n                          <input type=\"tel\" matInput placeholder=\"Telephone\" [(ngModel)]=\"referral.phone\" \n                              [ngModelOptions]=\"{standalone: true}\">\n                          <mat-icon matSuffix>mode_edit</mat-icon>\n                        </mat-form-field>\n               \n                  </div>\n                  <div>\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"referral.email\"> \n                            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                              Please enter a valid email address\n                            </mat-error>\n                            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                              Email is <strong>required</strong>\n                            </mat-error>\n                          </mat-form-field>\n                  </div>\n                  <div>                    \n                      <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Leave a comment\" maxlength=\"150\" \n                        [(ngModel)]=\"referral.comments\"\n                        [ngModelOptions]=\"{standalone: true}\"></textarea>\n                      </mat-form-field>\n                  </div>\n\n                  <div>\n                      <mat-form-field>\n                          <mat-select placeholder=\"Referal Type\" [(ngModel)]=\"referral.loanType\" [ngModelOptions]=\"{standalone: true}\">\n                            <mat-option *ngFor=\"let loanType of loanTypes\" [value]=\"loanType.value\">\n                              {{ loanType.viewValue }}\n                            </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                  </div>\n               \n\n                  <button \n                    class=\"btn btn-outline-success\" \n                    type=\"button\"\n                    (click)=\"onRefer()\">Refer friend</button>\n                    <div class=\"alert\" [className]=\"alert_class\" role=\"alert\" *ngIf=\"alert_class\">\n                        {{alert_message}}\n                    </div>\n              </form>\n            </div>   \n    </div>\n  </div>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      </ng-container>\n  \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.email}} </mat-cell>\n      </ng-container>\n  \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"phone\">\n        <mat-header-cell *matHeaderCellDef> Phone </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.phone}} </mat-cell>\n      </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator #paginator\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 20]\">\n    </mat-paginator>\n\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__referal_model__ = __webpack_require__("../../../../../src/app/home-page/referal.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePageComponent = (function () {
    function HomePageComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.displayedColumns = ['name', 'email', 'phone'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatTableDataSource */]();
        this.referral = new __WEBPACK_IMPORTED_MODULE_5__referal_model__["a" /* Referral */]();
        this.referrals = [];
        this.loanTypes = [];
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].email,
        ]);
        this.callback = function (childDataVal) {
            _this.referrals = childDataVal;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatTableDataSource */](_this.referrals);
            _this.dataSource.paginator = _this.paginator;
        };
    }
    HomePageComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    HomePageComponent.prototype.ngOnInit = function () {
        this.loanTypes = [
            { value: 'HL', viewValue: 'Home Loan' },
            { value: 'PL', viewValue: 'Personal Loan' },
            { value: 'BL', viewValue: 'Business Loan' }
        ];
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].email,
        ]);
    };
    HomePageComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    HomePageComponent.prototype.onRefer = function () {
        this.referrals = [];
        this.authService.senddata(this.referral, this.callback);
        console.log(this.referrals.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatPaginator */])
    ], HomePageComponent.prototype, "paginator", void 0);
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/referal.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Referral; });
var Referral = (function () {
    function Referral() {
    }
    return Referral;
}());



/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h1>Login To Your Account</h1>\n    <button class=\"btn btn-default\" (click)=\"login()\">Login With Google</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        this.authService.loginWithGoogle().then(function (data) {
            _this.router.navigate(['']);
        });
        console.log("logged in     ....");
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_referal_model__ = __webpack_require__("../../../../../src/app/home-page/referal.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(af, sfa) {
        this.af = af;
        this.sfa = sfa;
    }
    AuthService.prototype.loginWithGoogle = function () {
        return this.af.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
        //return this.af.auth.signInWithPopup(new firebase.auth.PhoneAuthProvider())
    };
    AuthService.prototype.logout = function () {
        this.af.auth.signOut();
    };
    AuthService.prototype.subscribe = function (cb) {
        this;
    };
    AuthService.prototype.senddata = function (referral, callbackfun) {
        var items = this.sfa.database.ref('referals/' + this.af.auth.currentUser.uid.toString());
        var callback = function (snapshot) {
            var referrals = [];
            snapshot.forEach(function (childSnapshot) {
                var ref = new __WEBPACK_IMPORTED_MODULE_3__home_page_referal_model__["a" /* Referral */];
                ref.email = childSnapshot.val().email;
                ref.name = childSnapshot.val().username;
                ref.phone = childSnapshot.val().phone;
                ref.loanType = childSnapshot.val().loanType;
                ref.comments = childSnapshot.val().comments;
                ref.refertype = childSnapshot.val().refertype;
                referrals.push(ref);
            });
            callbackfun(referrals);
        };
        items.once('value', callback);
        items.push({
            username: referral.name.toString(),
            email: referral.email.toString(),
            phone: referral.phone.toString(),
            loanType: referral.loanType.toString(),
            comments: referral.comments.toString(),
            refertype: referral.refertype.toString(),
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map