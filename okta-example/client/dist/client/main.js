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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/car-list/car-list.component.ts");
/* harmony import */ var _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-edit/car-edit.component */ "./src/app/car-edit/car-edit.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'car-list',
        component: _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_2__["CarListComponent"]
    },
    {
        path: 'car-add',
        component: _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_3__["CarEditComponent"]
    },
    {
        path: 'car-edit/:id',
        component: _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_3__["CarEditComponent"]
    },
    {
        path: 'implicit/callback',
        component: _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_2__["CarListComponent"]
    }
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



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-spacer {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Welcome to {{title}}!</span>\n  <span class=\"toolbar-spacer\"></span>\n  <button mat-raised-button color=\"accent\" *ngIf=\"isAuthenticated\"\n          (click)=\"oktaAuth.logout()\" [routerLink]=\"['/home']\">Logout\n  </button>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(oktaAuth) {
        this.oktaAuth = oktaAuth;
        this.title = 'client';
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                    case 1:
                        _a.isAuthenticated = _b.sent();
                        // Subscribe to authentication state changes
                        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"]])
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
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-interceptor */ "./src/app/http-interceptor.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/car-list/car-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./car-edit/car-edit.component */ "./src/app/car-edit/car-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_okta_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/okta/auth.interceptor */ "./src/app/shared/okta/auth.interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _configs_okta_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./configs/.okta.config */ "./src/app/configs/.okta.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var oktaConfigData = Object.assign({
    onAuthRequired: function (_a) {
        var oktaAuth = _a.oktaAuth, router = _a.router;
        router.navigate(['/login']);
    }
}, _configs_okta_config__WEBPACK_IMPORTED_MODULE_14__["default"].oidc);
// const config = {
//   issuer: 'https://itorizon.okta.com/oauth2/default',
//   redirectUri: 'http://localhost:4200/implicit/callback',
//   clientId: '0oaxt26hyG7QZD4vc356',
//   scope: 'openid profile email'
// };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_6__["CarListComponent"],
                _car_edit_car_edit_component__WEBPACK_IMPORTED_MODULE_9__["CarEditComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _okta_okta_angular__WEBPACK_IMPORTED_MODULE_11__["OktaAuthModule"].initAuth(oktaConfigData)
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _shared_okta_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_0__["HttpTokenInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car-edit/car-edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/car-edit/car-edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".giphy {\n  margin: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWVkaXQvY2FyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2Nhci1lZGl0L2Nhci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2lwaHkge1xuICBtYXJnaW46IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/car-edit/car-edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/car-edit/car-edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form #carForm=\"ngForm\" (ngSubmit)=\"save(carForm.value)\">\n    <mat-card-header>\n      <mat-card-title><h2>{{car.name ? 'Edit' : 'Add'}} Car</h2></mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <input type=\"hidden\" name=\"href\" [(ngModel)]=\"car.href\">\n      <mat-form-field>\n        <input matInput placeholder=\"Car Name\" [(ngModel)]=\"car.name\"\n               required name=\"name\" #name>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\"\n              [disabled]=\"!carForm.form.valid\">Save</button>\n      <button mat-raised-button color=\"secondary\" (click)=\"remove(car.href)\"\n              *ngIf=\"car.href\" type=\"button\">Delete</button>\n      <a mat-button routerLink=\"/car-list\">Cancel</a>\n    </mat-card-actions>\n    <mat-card-footer>\n      <div class=\"giphy\">\n        <img src=\"{{car.giphyUrl}}\" alt=\"{{car.name}}\">\n      </div>\n    </mat-card-footer>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/car-edit/car-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/car-edit/car-edit.component.ts ***!
  \************************************************/
/*! exports provided: CarEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarEditComponent", function() { return CarEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_car_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/car/car.service */ "./src/app/shared/car/car.service.ts");
/* harmony import */ var _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/giphy/giphy.service */ "./src/app/shared/giphy/giphy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarEditComponent = /** @class */ (function () {
    function CarEditComponent(route, router, carService, giphyService) {
        this.route = route;
        this.router = router;
        this.carService = carService;
        this.giphyService = giphyService;
        this.car = {};
    }
    CarEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.carService.get(id).subscribe(function (car) {
                    if (car) {
                        _this.car = car;
                        _this.car.href = car._links.self.href;
                        _this.giphyService.get(car.name).subscribe(function (url) { return car.giphyUrl = url; });
                    }
                    else {
                        console.log("Car with id '" + id + "' not found, returning to list");
                        _this.gotoList();
                    }
                });
            }
        });
    };
    CarEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CarEditComponent.prototype.gotoList = function () {
        this.router.navigate(['/car-list']);
    };
    CarEditComponent.prototype.save = function (form) {
        var _this = this;
        this.carService.save(form).subscribe(function (result) {
            _this.gotoList();
        }, function (error) { return console.error(error); });
    };
    CarEditComponent.prototype.remove = function (href) {
        var _this = this;
        this.carService.remove(href).subscribe(function (result) {
            _this.gotoList();
        }, function (error) { return console.error(error); });
    };
    CarEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-edit',
            template: __webpack_require__(/*! ./car-edit.component.html */ "./src/app/car-edit/car-edit.component.html"),
            styles: [__webpack_require__(/*! ./car-edit.component.css */ "./src/app/car-edit/car-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_car_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"],
            _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_3__["GiphyService"]])
    ], CarEditComponent);
    return CarEditComponent;
}());



/***/ }),

/***/ "./src/app/car-list/car-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/car-list/car-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhci1saXN0L2Nhci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/car-list/car-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/car-list/car-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>Car List</mat-card-title>\n    <mat-card-content>\n        <mat-list>\n            <mat-list-item *ngFor=\"let car of cars\">\n                <img mat-list-avatar src=\"{{car.giphyUrl}}\" alt=\"{{car.name}}\">\n                <h3 mat-line>\n                    <a mat-button [routerLink]=\"['/car-edit', car.id]\">{{car.name}}</a>\n                </h3>\n            </mat-list-item>\n        </mat-list>\n    </mat-card-content>\n    <button mat-fab color=\"primary\" [routerLink]=\"['/car-add']\">Add</button>\n</mat-card>"

/***/ }),

/***/ "./src/app/car-list/car-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/car-list/car-list.component.ts ***!
  \************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_car_car_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/car/car.service */ "./src/app/shared/car/car.service.ts");
/* harmony import */ var _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/giphy/giphy.service */ "./src/app/shared/giphy/giphy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarListComponent = /** @class */ (function () {
    function CarListComponent(carService, giphyService) {
        this.carService = carService;
        this.giphyService = giphyService;
    }
    CarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getAll().subscribe(function (data) {
            _this.cars = data;
            var _loop_1 = function (car) {
                _this.giphyService.get(car.name).subscribe(function (url) { return car.giphyUrl = url; });
            };
            for (var _i = 0, _a = _this.cars; _i < _a.length; _i++) {
                var car = _a[_i];
                _loop_1(car);
            }
        });
    };
    CarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-list',
            template: __webpack_require__(/*! ./car-list.component.html */ "./src/app/car-list/car-list.component.html"),
            styles: [__webpack_require__(/*! ./car-list.component.css */ "./src/app/car-list/car-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_car_car_service__WEBPACK_IMPORTED_MODULE_1__["CarService"], _shared_giphy_giphy_service__WEBPACK_IMPORTED_MODULE_2__["GiphyService"]])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./src/app/configs/.okta.config.ts":
/*!*****************************************!*\
  !*** ./src/app/configs/.okta.config.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    oidc: {
        clientId: '0oaxt26hyG7QZD4vc356',
        issuer: 'https://itorizon.okta.com',
        redirectUri: 'http://localhost:4200/implicit/callback',
        scope: 'openid profile email'
    }
});


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <div class=\"ui-grid-row\" id=\"divHeader\">\n        <input type=\"text\" class=\"loginInputTextBox\" name=\"username\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.userName\" #username=\"ngModel\" oninvalid=\"this.setCustomValidity('Please Enter Valid UserName.')\" oninput=\"setCustomValidity('')\" placeholder=\"UserName\"\n            required />\n    </div>\n    <br/>\n    <div class=\"ui-grid-row\" id=\"divHeader\">\n        <input class=\"loginInputTextBox\" type=\"{{passwordType}}\" name=\"password\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required placeholder=\"Password\" />\n    </div>\n    <br/>\n    <!-- <div class=\"ui-grid-row\">\n        <div>\n            <button type=\"button\" class=\"ui-button-raised ui-button-login\" (click)=\"login()\">LogIn</button>\n        </div>\n    </div> -->\n    <mat-card-content>\n        <button mat-raised-button color=\"accent\" (click)=\"login()\">Login\n            <!-- oktaAuth.loginRedirect(); -->\n    </button>\n        <!-- <button mat-raised-button color=\"accent\" *ngIf=\"isAuthenticated\" [routerLink]=\"['/car-list']\">Car List\n    </button> -->\n    </mat-card-content>\n</mat-card>"

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
/* harmony import */ var _shared_car_car_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/car/car.service */ "./src/app/shared/car/car.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(oktaAuth, router, carService) {
        this.oktaAuth = oktaAuth;
        this.router = router;
        this.carService = carService;
        this.user = {
            userName: '',
            password: ''
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                    case 1:
                        _a.isAuthenticated = _b.sent();
                        // Subscribe to authentication state changes
                        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/car-list']);
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.carService.loginBack(this.user.userName, this.user.password).subscribe(function (data) {
            console.log('data', data);
            console.log('data.accessToken', data.accessToken);
            console.log('data.refreshToken', data.refreshToken);
            if (data.success) {
                localStorage.setItem('accessToken', data['accessToken']);
                localStorage.setItem('refreshToken', data['refreshToken']);
                _this.router.navigate(['car-list']);
            }
        }, function (err) {
            console.log('err', err);
        }, function () {
            // this.getGreet();
        });
    };
    HomeComponent.prototype.getGreet = function () {
        this.carService.getNewToken().subscribe(function (data) {
            console.log('data', data);
            var accessToken = data;
            localStorage.setItem('accessToken', accessToken.accessToken);
            localStorage.setItem('refreshToken', accessToken.idToken);
        }, function (err) {
            console.log('err', err);
        }, function () { });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_car_car_service__WEBPACK_IMPORTED_MODULE_0__["CarService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http-interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/http-interceptor.ts ***!
  \*************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_car_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/car/car.service */ "./src/app/shared/car/car.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(injector, carService) {
        this.injector = injector;
        this.carService = carService;
    }
    HttpTokenInterceptor.prototype.addToken = function (req, token) {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') } });
    };
    HttpTokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var accessToken = localStorage.getItem('accessToken');
        if (!Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])('access_token', localStorage.getItem('accessToken')) && accessToken !== null) {
            this.carService.fetchRefreshToken();
        }
        return next.handle(this.addToken(request, localStorage.getItem('accessToken'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                switch (error.status) {
                    case 400:
                        return _this.handle400Error(error);
                    case 401:
                        return _this.handle401Error(request, next);
                    default:
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }
        }));
    };
    HttpTokenInterceptor.prototype.handle400Error = function (error) {
        if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
            // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
            // this.logInService.logout();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    HttpTokenInterceptor.prototype.handle401Error = function (req, next) {
        return next.handle(this.addToken(this.getNewRequest(req), localStorage.getItem('accessToken')));
    };
    /*
        This method is only here so the example works.
        Do not include in your code, just use 'req' instead of 'this.getNewRequest(req)'.
    */
    HttpTokenInterceptor.prototype.getNewRequest = function (req) {
        var method = req.method;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"](method, req.url);
    };
    HttpTokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _shared_car_car_service__WEBPACK_IMPORTED_MODULE_5__["CarService"]])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/car/car.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/car/car.service.ts ***!
  \*******************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
        this.API = 'http://localhost:8080/okta';
        this.CAR_API = this.API + '/cars';
    }
    CarService.prototype.getAll = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + localStorage.getItem('accessToken')
        });
        return this.http.get(this.API + '/check/greet', { params: null, headers: headers, responseType: 'json' })
            .map(function (res) { return res; });
    };
    CarService.prototype.get = function (id) {
        return this.http.get(this.CAR_API + '/' + id);
    };
    CarService.prototype.save = function (car) {
        var result;
        if (car['href']) {
            result = this.http.put(car.href, car);
        }
        else {
            result = this.http.post(this.CAR_API, car);
        }
        return result;
    };
    CarService.prototype.remove = function (href) {
        return this.http.delete(href);
    };
    // fetchData(onSuccess: (data) => void, onError: (data) => void, onComplete: () => void,
    //   username: any, password: string): any {
    //   this.login(username, password).subscribe(
    //     resp => {
    //       onSuccess(resp);
    //     },
    //     err => {
    //       onError(err.error);
    //     },
    //     () => {
    //       onComplete();
    //     }
    //   );
    // }
    CarService.prototype.login = function (userName, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        var detail = {
            'username': userName,
            'password': password,
            'relayState': 'www.google.com',
            'options': {
                'multiOptionalFactorEnroll': false,
                'warnBeforePasswordExpired': false
            }
        };
        var body = JSON.stringify(detail);
        return this.http.post('https://itorizon.okta.com/api/v1/authn', body, { params: null, headers: headers, responseType: 'json' })
            .map(function (res) { return res; });
    };
    CarService.prototype.loginBack = function (userName, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        var reqParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userName', userName)
            .set('password', password);
        return this.http.get(this.API + '/user/authenticate', { params: reqParam, headers: headers, responseType: 'json' });
    };
    CarService.prototype.getGreet = function () {
        var headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer' + localStorage.getItem('accessToken')
        });
        // const reqParam: HttpParams = new HttpParams()
        //   .set('userName', userName)
        //   .set('password', password);
        return this.http.get('http://localhost:8080/okta/check/greet', { headers: headers1, responseType: 'text' });
    };
    // To fetch the new access_token using the existing refresh_token
    CarService.prototype.fetchRefreshToken = function () {
        this.getNewToken().subscribe(function (data) {
            var accessToken = data;
            localStorage.setItem('accessToken', accessToken.accessToken);
            localStorage.setItem('refreshToken', accessToken.idToken);
        }, function (err) { }, function () { });
    };
    // To fetch the new JWT Token
    CarService.prototype.getNewToken = function () {
        var requestParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('refreshToken', localStorage.getItem('refreshToken'));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept': 'application/json'
        });
        return this.http.get(this.API + '/user/getRefreshedTokens', {
            headers: headers, params: requestParams,
            responseType: 'json'
        }).map(function (res) {
            var accessToken = null;
            return res;
        });
    };
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/shared/giphy/giphy.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/giphy/giphy.service.ts ***!
  \***********************************************/
/*! exports provided: GiphyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiphyService", function() { return GiphyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GiphyService = /** @class */ (function () {
    function GiphyService(http) {
        this.http = http;
        // Public beta key: https://github.com/Giphy/GiphyAPI#public-beta-key
        this.giphyApi = '//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=';
    }
    GiphyService.prototype.get = function (searchTerm) {
        var apiLink = this.giphyApi + searchTerm;
        return this.http.get(apiLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response.data.length > 0) {
                return response.data[0].images.original.url;
            }
            else {
                return 'https://media.giphy.com/media/YaOxRsmrv9IeA/giphy.gif'; // dancing cat for 404
            }
        }));
    };
    GiphyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
        // http://tutorials.pluralsight.com/front-end-javascript/getting-started-with-angular-2-by-building-a-giphy-search-application
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GiphyService);
    return GiphyService;
}());



/***/ }),

/***/ "./src/app/shared/okta/auth.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/okta/auth.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(oktaAuth) {
        this.oktaAuth = oktaAuth;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.handleAccess(request, next));
    };
    AuthInterceptor.prototype.handleAccess = function (request, next) {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(request.urlWithParams.indexOf('localhost') > -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.oktaAuth.getAccessToken()];
                    case 1:
                        accessToken = _a.sent();
                        request = request.clone({
                            setHeaders: {
                                Authorization: 'Bearer ' + accessToken
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/, next.handle(request).toPromise()];
                }
            });
        });
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    host: 'http://localhost:8080'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\okta-example\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map