webpackJsonp([3],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab1PageModule = (function () {
    function Tab1PageModule() {
    }
    return Tab1PageModule;
}());
Tab1PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */]),
        ],
    })
], Tab1PageModule);

//# sourceMappingURL=tab1.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = (function () {
    function Tab1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab1Page');
    };
    Tab1Page.prototype.gotoPage = function () {
    };
    return Tab1Page;
}());
Tab1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab1',template:/*ion-inline-start:"/Users/Julian/Documents/ionicapps/cartayaDev/src/pages/tab1/tab1.html"*/'<!--\n  Generated template for the Tab1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="naranja">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <!--<ion-title align="center">Tab1</ion-title>-->\n    <ion-grid>\n      <ion-row>\n        <ion-col col-9><ion-searchbar></ion-searchbar></ion-col>\n        <ion-col><img width="100" height="40" src="assets/images/logo-carta.png"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n<ion-content id="contenido">\n  <div style="padding: 15px 0 25px 0;" align="center">\n     <h1>¿ Que buscas ? </h1>\n  </div>\n  <ion-grid align="center">\n    <ion-row align-items-center>\n      <ion-col>\n        <img width="200" height="200" src="assets/images/restaurante-bar.png" (click)="gotoPage()">\n      </ion-col>\n      <ion-col>\n        <img width="200" height="200" src="assets/images/pastas-pizza.png" (click)="gotoPage()">\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col>\n        <img width="200" height="200" src="assets/images/comida-mar.png" (click)="gotoPage()">\n      </ion-col>\n      <ion-col>\n        <img width="200" height="200" src="assets/images/comida-asiatica.png" (click)="gotoPage()">\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col>\n        <img width="200" height="200" src="assets/images/restaurante-gourmet.png" (click)="gotoPage()">\n      </ion-col>\n      <ion-col>\n        <img width="200" height="200" src="assets/images/hamburguesas-perros.png" (click)="gotoPage()">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Julian/Documents/ionicapps/cartayaDev/src/pages/tab1/tab1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Tab1Page);

//# sourceMappingURL=tab1.js.map

/***/ })

});
//# sourceMappingURL=3.js.map