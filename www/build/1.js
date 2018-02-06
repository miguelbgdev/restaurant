webpackJsonp([1],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab3__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab3PageModule = (function () {
    function Tab3PageModule() {
    }
    return Tab3PageModule;
}());
Tab3PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */]),
        ],
    })
], Tab3PageModule);

//# sourceMappingURL=tab3.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab3Page; });
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
 * Generated class for the Tab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab3Page = (function () {
    function Tab3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab3Page');
    };
    Tab3Page.prototype.gotoPage = function () {
        //this.navCtrl.push('MenuRestaurantePage');
        this.navCtrl.push('MenuRestaurantePage', {
            restaurantId: "1",
            restaurantName: "BourbonStreet"
        });
    };
    return Tab3Page;
}());
Tab3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab3',template:/*ion-inline-start:"/Users/Julian/Documents/ionicapps/cartayaDev/src/pages/tab3/tab3.html"*/'<!--\n  Generated template for the Tab3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="naranja">\n    <ion-buttons start left>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-9><ion-searchbar></ion-searchbar></ion-col>\n        <ion-col><img width="100" height="40" src="assets/images/logo-carta.png"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n<ion-content id="contenido">\n  <ion-grid align="center">\n    <ion-row align-items-center>\n      <ion-col width-20>\n        <img width="100" height="100" src="assets/images/bourbon.png" (click)="gotoPage()">\n      </ion-col>\n      <ion-col width-60>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div>Bourbon St</div>\n              <div><small>Bar-Restaurante</small></div>\n              <div><small>Cali - Granada</small></div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col width-20>\n        <p>Abierto!</p>\n        <p style="color: #59B85D; margin-top: -15px;">Reserva ya!</p>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col width-20>\n        <img width="100" height="100" src="assets/images/route66.png" (click)="gotoPage()">\n      </ion-col>\n      <ion-col width-60>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div>Route 66</div>\n              <div><small>Bar-Restaurante</small></div>\n              <div><small>Cali - Granada</small></div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col width-20>\n        Abierto!\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col width-20>\n        <img width="100" height="100" src="assets/images/faro.png" (click)="gotoPage()">\n      </ion-col>\n      <ion-col width-60>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div>El Faro</div>\n              <div><small>Bar-Restaurante</small></div>\n              <div><small>Cali - Granada</small></div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col width-20>\n        Abierto!\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col width-20>\n        <img width="100" height="100" src="assets/images/estacion.png" (click)="gotoPage()">\n      </ion-col>\n      <ion-col width-60>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div>La estacion</div>\n              <div><small>Bar-Restaurante</small></div>\n              <div><small>Cali - Granada</small></div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col width-20>\n        Abierto!\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Julian/Documents/ionicapps/cartayaDev/src/pages/tab3/tab3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Tab3Page);

//# sourceMappingURL=tab3.js.map

/***/ })

});
//# sourceMappingURL=1.js.map