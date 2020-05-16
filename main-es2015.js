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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cartas/cartas.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cartas/cartas.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>cartas works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm-email/confirm-email.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm-email/confirm-email.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Su correo electronico ha sido validado.</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-profile/edit-profile.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-profile/edit-profile.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n\n    <div class=\"divForm\">\n      <div>\n        <form [formGroup]=\"formTemplate\">\n          <div class=\"title\">\n              <button type=\"button\" class=\"btn btn-info\" (click)=\"navigateBack()\">Volver</button>\n            <p id=\"titleQuestion\">Mi establecimiento</p>\n\n            <div class=\"titulo\">\n                <p>Nombre del establecimiento</p>\n                <input type=\"text\" required class=\"titulo\" formControlName=\"name\">\n            </div>\n\n            <div class=\"titulo\">\n                <p>Direccion</p>\n                <input type=\"text\" required class=\"titulo\" formControlName=\"direccion\">\n            </div>\n            <div class=\"titulo\">\n                <p>Telefono</p>\n                <input type=\"text\" required class=\"titulo\" formControlName=\"telefono\">\n            </div>\n          </div>\n\n          <div class=\"cartel\">\n              <p>Foto del establecimiento</p>\n                <img class=\"fotoEstablecimiento\" *ngIf=\"imgSrc\" [src]=\"imgSrc\" width=\"150px\" height=\"150px\" margin-bottom=\"10px\" (click)=\"fileUploader.click()\">\n                <input type=\"file\" aria-describedby=\"inputGroupFileAddon01\" class=\"custom-file-input\" formControlName=\"image\" #fileUploader (change)=\"showPreview($event)\">\n               <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text buttonCambiar\" id=\"inputGroupFileAddon01\" (click)=\"fileUploader.click()\">Cambiar foto</span>\n                </div>\n              </div>\n\n            <input type=\"hidden\" formControlName = \"uid\">\n\n\n            <input type=\"hidden\"\n            formControlName = \"email\"\n            >\n\n            <input type=\"hidden\"\n            formControlName = \"emailVerified\"\n            >\n\n            <div class=\"crear\">\n              <button type=\"submit\" [disabled]=\"!formTemplate.valid\" class=\"btn btn-success btn-block guardarButton\" (click)=\"onSubmitEdit(formTemplate.value)\">Guardar Cambios</button>\n            </div>\n\n\n        </form>\n      </div>\n      <!--\n      <div class=\"deleteDiv\">\n          <button class=\"btn btn-danger eliminar\" (click)=\"onDelete()\">Eliminar mi cuenta</button>\n      </div>\n      -->\n\n    </div>\n  </div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/establecimiento/establecimiento.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/establecimiento/establecimiento.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n  <div class=\"divForm\">\n    <div>\n      <form [formGroup]=\"formTemplate\">\n        <div class=\"title\">\n          <p id=\"titleQuestion\">Antes de empezar, cuentanos un poco sobre tu establecimiento</p>\n\n          <div class=\"titulo\">\n              <p>Nombre del establecimiento</p>\n              <input type=\"text\" required class=\"form-control titulo\" formControlName=\"name\">\n              <div class=\"text-danger\" *ngIf=\"isSubmitted && formsControls.name.errors?.required\">Este campo es obligatorio</div>\n          </div>\n\n          <div class=\"titulo\">\n              <p>Direccion</p>\n              <input type=\"text\" required class=\"form-control titulo\" formControlName=\"direccion\">\n              <div class=\"text-danger\" *ngIf=\"isSubmitted && formsControls.direccion.errors?.required\">Este campo es obligatorio</div>\n          </div>\n          <div class=\"titulo\">\n              <p>Telefono</p>\n              <input type=\"text\" required class=\"form-control titulo\" formControlName=\"telefono\">\n              <div class=\"text-danger\" *ngIf=\"isSubmitted && formsControls.telefono.errors?.required\">Este campo es obligatorio</div>\n          </div>\n        </div>\n\n        <div class=\"cartel\">\n            <p>Sube una foto de tu local para que tus clientes lo reconozcan facilmente</p>\n              <img [src]=\"imgSrc\" width=\"150px\" height=\"150px\" margin-bottom=\"10px\" (click)=\"fileUploader.click()\"  >  <!--  it used to have: (click)=\"fileUploader.click()\" -->\n              <input type=\"file\" required class=\"form-control\" formControlName=\"image\" #fileUploader (change)=\"showPreview($event)\"> <!-- it used to have #fileUploader -->\n              <div class=\"text-danger\" *ngIf=\"isSubmitted && !uploadedPic\">Este campo es obligatorio</div>\n\n        </div>\n\n          <input type=\"hidden\"\n                  id=\"profileId\"\n                  value = \"authService.userData.uid\"\n                  [formControl]=\"formTemplate.controls['uid']\"\n          >\n\n\n          <input type=\"hidden\"\n          id=\"email\"\n          [formControl]=\"formTemplate.controls['email']\"\n          >\n\n          <input type=\"hidden\"\n          id=\"emailVerified\"\n          [formControl]=\"formTemplate.controls['emailVerified']\"\n          >\n\n          <div class=\"crear\">\n            <button type=\"submit\" class=\"btn btn-success btn-block float-right\" (click)=\"onSubmit(formTemplate.value)\">Listo!</button>\n          </div>\n\n\n      </form>\n    </div>\n    <!--\n    <div class=\"deleteDiv\">\n        <button class=\"btn btn-danger eliminar\" (click)=\"onDelete()\">Eliminar mi cuenta</button>\n    </div>\n    -->\n    <div class=\"footer\">\n      <p (click)=\"authService.SignOut()\" class=\"signout\">Desconectarse</p>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maindiv\">\n    <div class=\"back\">\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"backHome\" routerLink=\"/login\">arrow_back</mat-icon>\n    </div>\n    <div class=\"left-side\">\n      <div class =\"title\">\n        <p class=\"body-text\">Recupera tu Contraseña</p>\n      </div>\n      <div class=\"wrap-login\">\n        <form [formGroup] >\n          <div class=\"email\">\n            <p>Correo electronico</p>\n            <input type=\"email\" id=\"email\" #email aria-describedby=\"emailHelp\">\n          </div>\n          <div class=\"button\">\n            <input type=\"button\" class=\"btn btn-primary\" value=\"Cambiar contraseña\" (click)=\"onSubmit(email.value)\">\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"right-side\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full\">\n    <li routerLinkActive=\"active\" class=\"nav-item estLi\">\n        <p class=\"text-muted text-right establecimiento\" routerLink=\"/login\">Soy un establecimiento</p>\n    </li>\n  <div class=\"body\">\n    <div class=\"search\">\n      <input type=\"text\" placeholder=\"Escribe el nombre del bar...\" class=\"form-control box\" [(ngModel)]=\"searchTerm\"/>\n      <div>\n          <ul *ngIf=\"this.show\" class=\"list-group\">\n            <li class=\"list-group-item results\" *ngFor=\"let user of filteredList\">\n            <div class=\"name\" (click)=\"viewCarta(user.uid)\">\n              <div class=\"image\">\n                  <img [src]=\"user.image\" class=\"profile\">\n\n                  <a class=\"nameUser\">{{user.name}}</a> <a class=\"address\">{{user.direccion}}</a>\n              </div>\n            </div>\n            </li>\n          </ul>\n        </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"maindiv\">\n  <div class=\"back\">\n      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"backHome\" routerLink=\"/\">arrow_back</mat-icon>\n  </div>\n    <div class=\"nuevaCuenta\">\n        <input type=\"button\" class=\"btn btn-light\" value=\"Quiero crear una cuenta\" routerLink=\"/signup\">\n      </div>\n    <div class=\"left-side\">\n      <div class =\"title\">\n        <p class=\"body-text\">Inicia sesión si ya tienes una cuenta</p>\n      </div>\n      <div class=\"wrap-login\">\n        <form >\n          <div class=\"email\">\n            <p>Correo electronico</p>\n            <input type=\"email\" id=\"exampleInputEmail1\" #email aria-describedby=\"emailHelp\">\n          </div>\n          <div class=\"password\">\n            <p>Contraseña</p>\n            <input type=\"password\" #password id=\"exampleInputPassword1\">\n          </div>\n          <div class=\"button\">\n            <input type=\"button\" class=\"btn btn-success\" value=\"Iniciar sesión\" (click)=\"authService.SignIn(email.value, password.value)\">\n          </div>\n\n          <div class=\"forgot\">\n            <a class=\"nav-link\" routerLink=\"/forgot\">He olvidado mi contraseña</a>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"right-side\">\n\n\n    </div>\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/management/management.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/management/management.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"mode\">\n    <!-- password reset -->\n    <ng-container *ngSwitchCase=\"'resetPassword'\">\n      <app-user-management></app-user-management>\n    </ng-container>\n\n    <!-- verify email address -->\n    <ng-container *ngSwitchCase=\"'verifyEmail'\">\n      <app-confirm-email></app-confirm-email>\n    </ng-container>\n\n    <!-- default action -->\n    <ng-container *ngSwitchDefault>\n      <a>Nada</a>\n    </ng-container>\n  </ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-dashboard/my-dashboard.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-dashboard/my-dashboard.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Profile info and profile actions -->\n<div class=\"body\">\n  <div class=\"header\">\n    <div class=\"pic\">\n       <img *ngIf=\"this.image\" [src]=\"this.image\" class=\"profile\">\n    </div>\n    <div class=\"name\">\n      <div class=\"user\">\n          <p class=\"nameUser\">{{name}}</p>\n      </div>\n      <div class=\"dir\">\n          <p class=\"address\">{{direccion}}</p>\n      </div>\n\n        <div class=\"icons\">\n            <div class=\"dotsProfile\">\n\n                <div class=\"iconDotsProfile\">\n                    <div ngbDropdown class=\"d-inline-block\">\n                        <button class=\"btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">                 <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"dotsProfileIcon\">more_vert</mat-icon>\n                        </button>\n                        <div class=\"dropdown-menu optionsDiv\" aria-labelledby=\"dropdownMenuButton\">\n                          <a class=\"dropdown-item option\" (click)=\"editButtonClick(this.authService.userId)\">Editar mi cuenta</a>\n                          <a class=\"dropdown-item option\" (click)=\"onSignOut()\">Desconectarme</a>\n                        </div>\n                      </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n\n\n  <!-- New Category  -->\n <form [formGroup] = \"formCat\">\n    <div class=\"create\">\n      <button class=\"btn btn-light createCat\" (click)=\"openPopUp()\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"add\">add_circle</mat-icon>\n        <a class=\"textNueva\">Nueva categoría</a>\n        </button>\n    </div>\n<!-- Pop-up for Add and Edit Category  -->\n\n   <div class=\"popUpBody\" *ngIf=\"this.popUpOpen\">\n        <div class=\"shadow\" (click)=\"cancelOption()\">\n        </div>\n        <div class=\"box\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"salir\" (click)=\"cancelOption()\">clear</mat-icon>\n            <div class=\"newCategory\">\n              <input type=\"text\" required class=\"form-control formPopUp\" formControlName=\"category\" placeholder=\"Nueva categoría (*)\">\n              <input type=\"button\" *ngIf=\"!editingCat\" [disabled]=\"!formCat.valid\" class=\"btn btn-success buttonPopUp\" value=\"Guardar\" (click)=\"onSubmitCat(formCat.value)\">\n              <input type=\"button\" *ngIf=\"editingCat\" [disabled]=\"!formCat.valid\" class=\"btn btn-success buttonPopUp\" value=\"Guardar1\" (click)=\"onSubmitEditCat(formCat.value)\">\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n\n\n</form>\n\n\n  <div class=\"middle\">\n  <!-- All Categories  -->\n\n      <div class=\"categoriesAll\">\n    <li class=\"list-group-item categoryContainer\" *ngFor=\"let cat of categoryList\">\n      <div class=\"divCategory\">\n        <div class=\"icondotsCategory\">\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"dotsCategory\">more_vert</mat-icon>\n                  </button>\n                <div class=\"dropdown-menu optionsDiv\" aria-labelledby=\"dropdownMenuButton\">\n                  <a class=\"dropdown-item\" (click)=\"onEditCat(cat.id)\">Editar</a>\n                  <a class=\"dropdown-item\" (click)=\"onDeleteCat(cat.id)\">Eliminar</a>\n                </div>\n              </div>\n        </div>\n        <div class=\"categoryTitleDiv\">\n          <a class=\"categoryTitle\">{{cat.category}}</a>\n        </div>\n    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"expand\" *ngIf=\"!makeViewMore(cat)\" (click)=\"selectViewMore(cat, cat.id)\">expand_more</mat-icon>\n    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"expand\" *ngIf=\"makeViewMore(cat)\"  (click)=\"unselectViewMore(cat)\">expand_less</mat-icon>\n      </div>\n\n\n  <!-- All Products  -->\n\n     <!-- <div [ngClass]=\"{'collapsed':!makeViewMore(cat.key), 'expanded':makeViewMore(cat.key)}\">  -->\n      <div class=\"collapsed\" *ngIf=\"!makeViewMore(cat)\">\n      </div>\n      <div class=\"expanded\" *ngIf=\"makeViewMore(cat)\">\n\n          <ng-container class=\"list-group-item\" *ngFor=\"let prod of productListPerCat\">\n            <ng-container *ngIf=\"prod.categoryId === cat.id\">\n              <li class=\"list-group-item fieldProducts\">\n                <div class=\"divProducts\">\n                    <div class=\"textPro\">\n                              <a class=\"textProducts\">{{prod.title}}</a> <a>&nbsp;</a> <a class=\"textProductsPrice\">{{prod.price}}€</a>\n                        <div class=\"textDescDiv\">\n                        <p class=\"textDescription\">{{prod.description}}</p>\n                        </div>\n                    </div>\n                    <div class=\"icondots\">\n                        <div ngbDropdown class=\"d-inline-block\">\n                            <button class=\"btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">  <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"dots\">more_vert</mat-icon></button>\n                            <div class=\"dropdown-menu optionsDiv\" aria-labelledby=\"dropdownMenuButton\">\n                              <a class=\"dropdown-item\" (click)=\"onEditProduct(prod.id, cat.id, cat)\">Editar</a>\n                              <a class=\"dropdown-item\" (click)=\"onDeleteProduct(cat.id, prod.id)\">Eliminar</a>\n                            </div>\n                          </div>\n                    </div>\n                </div>\n              </li>\n          </ng-container>\n      </ng-container>\n\n        <!-- Add Product button and pop-up for Add Product -->\n\n        <div class=\"addIconProduct\" (click)=\"openPopUpAddProduct(cat)\">\n          <mat-icon class=\"iconProduct iconAnadir\" aria-hidden=\"false\" aria-label=\"Example home icon\">add_circle_outline</mat-icon>\n        <a class=\"textNuevoProducto\">Añade {{cat.category}}</a>\n        </div>\n        <div [ngClass]=\"{'collapsedP':!makeProductMore(cat), 'expandedP':makeProductMore(cat)}\" (click)=\"unselectProductMore(cat)\">\n        </div>\n          <div [ngClass]=\"{'collapsedP':!makeProductMore(cat), 'boxProduct':makeProductMore(cat)}\">\n              <form [formGroup]=\"formProduct\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"salir\" (click)=\"unselectProductMore(cat)\">clear</mat-icon>\n              <div class=\"newCategory\">\n                    <input type=\"hidden\" formControlName=\"category\">\n                    <input type=\"text\"  required class=\"form-control formPopUp\" formControlName=\"title\" id=\"title\" placeholder=\"Nombre (*)\">\n                    <div class=\"text-danger\" *ngIf=\"isSubmitted && formsControls.title.errors?.required\">Este campo es obligatorio</div>\n\n                    <input type=\"text\" class=\"form-control formPopUp\" formControlName=\"description\" placeholder=\"Descripción (opcional)\">\n                    <input type=\"number\" required class=\"form-control formPopUp\" formControlName=\"price\" placeholder=\"Precio (*)\">\n                    <div class=\"text-danger\" *ngIf=\"isSubmitted && formsControls.price.errors?.required\">Este campo es obligatorio</div>\n                    <div class=\"divPicProduct\">\n                          <img class=\"picProduct\" [hidden]=\"!uploadedPic\" *ngIf=\"imgSrc\" [src]=\"imgSrc\" width=\"50px\" height=\"50px\" margin-bottom=\"10px\" (click)=\"fileUploader.click()\">\n                          <mat-icon [hidden]=\"!uploadedPic\" aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"removePic\" (click)=\"removePic()\">clear</mat-icon>\n                          <input type=\"file\" [hidden]=\"true\" aria-describedby=\"inputGroupFileAddon01\" class=\"custom-file-input\" formControlName=\"image\" #fileUploader (change)=\"showPreview($event)\">\n                         <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text buttonUploadPicture\" id=\"inputGroupFileAddon01\" (click)=\"fileUploader.click()\">Añadir foto (opcional)</span>\n                          </div>\n                    </div>\n                    <input type=\"button\" *ngIf=\"!editingProd\" class=\"btn btn-success buttonPopUp\" value=\"Guardar\" (click)=\"onSubmit(formProduct.value, cat.id, cat.category)\">\n                    <input type=\"button\" *ngIf=\"editingProd\" class=\"btn btn-success buttonPopUp\" value=\"Guardar1\" (click)=\"onSubmitEditProduct(formProduct.value, cat.id)\">\n              </div>\n              </form>\n          </div>\n\n\n      </div>\n\n\n        <!-- Text to display if there are no categories -->\n\n\n     </li>\n     <div class=\"textPrincipio\" *ngIf=\"!categoryList || categoryList.length === 0\">\n        <div class=\"principioHeader\">\n          <p>¿List@ para empezar? en 2 min tendrás tu carta en la nube</p>\n        </div>\n        <div class=\"pasosPrincipio\">\n          <p>Pasos: </p>\n          <mat-icon class=\"iconProduct steps\" aria-hidden=\"false\" aria-label=\"Example home icon\">looks_one</mat-icon>\n          <p>Haz click arriba en \"+ Nueva Categoria\" para crear las categorías, por ejemplo: Bebidas, Entrantes, Postres o cualquier otra</p>\n          <mat-icon class=\"iconProduct steps\" aria-hidden=\"false\" aria-label=\"Example home icon\">looks_two</mat-icon>\n          <p>Crea productos dentro de las categorías creadas.</p>\n          <mat-icon class=\"iconProduct steps\" aria-hidden=\"false\" aria-label=\"Example home icon\">looks_3</mat-icon>\n\n          <p>Tu carta online está lista!</p>\n        </div>\n        <div class=\"principioFooter\">\n          <p>Ten en cuenta que el cliente verá el menu de la misma forma que tú lo ves y en el mismo orden.\n          </p>\n        </div>\n    </div>\n\n </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pop-up-component-cat/pop-up-component-cat.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pop-up-component-cat/pop-up-component-cat.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shade\" [@openCloseShade]=\"isOpen ? 'open' : 'closed'\">&nbsp;</div>\n<div class=\"pop-up\" [@openClose]=\"isOpen ? 'open' : 'closed'\">\n  <div class=\"pop-up-box\"><ng-content></ng-content></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"limiter\">\n        <div class=\"back\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"backHome\" routerLink=\"/login\">arrow_back</mat-icon>\n        </div>\n      <div class=\"container-login\">\n        <div class =\"title\">\n          <p class=\"body-text\">Crea tu cuenta</p>\n        </div>\n        <div class=\"wrap-login\">\n          <form [formGroup]=\"userSignUp\" (ngSubmit)=\"onSubmit(userSignUp.value)\">\n           <div class=\"form\">\n              <div class=\"email\">\n                <p>Correo electronico</p>\n                <input type=\"email\" required id=\"email\" label=\"email\" class=\"form-control\" formControlName='email'>\n                <div class=\"text-danger\" *ngIf=\"isSubmitted && formsControls.email.errors?.required\">Este campo es obligatorio</div>\n              </div>\n            </div>\n            <div class=\"form\">\n              <div class=\"password\">\n                <p>Contraseña</p>\n                <input type=\"password\" required id=\"password\" label=\"password\" formControlName='password'>\n                <div class=\"text-danger\" *ngIf=\"isSubmitted && formsControls.email.errors?.required\">Este campo es obligatorio</div>\n              </div>\n            </div>\n            <div class=\"terms\">\n              <input type=\"checkbox\" required formControlName=\"cb\" id=\"cb\">\n              <a id=\"terminos\" mat-raised-button (click)=\"openDialog()\">Acepto los terminos y las condiciones</a>\n             <div class=\"text-danger\" *ngIf=\"isSubmitted && formsControls.email.errors?.required\">Es necesario que acepte los Terminos y Condiciones</div>\n\n            </div>\n            <div class=\"submit\">\n              <button type=\"submit\" class=\"btn btn-success\">Registrarme</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"container-pic\">\n\n      </div>\n    </div>\n  </body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-management/user-management.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-management/user-management.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"frmSetNewPassword\" (ngSubmit)=\"onSubmit()\">\n    <h3 class=\"title is-5 has-text-black\">\n      Set a new password\n    </h3>\n    <h4 class=\"subtitle is-6 has-text-grey\">Please enter and confirm your new password</h4>\n    <div class=\"field\">\n      <label class=\"label\">Password: </label>\n      <div class=\"control\">\n        <input class=\"input \" type=\"password\" name=\"password\" formControlName=\"password\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label class=\"label\">Confirm Password: </label>\n      <div class=\"control\">\n        <input class=\"input \" type=\"password\" name=\"confirmPassword\" formControlName=\"confirmPassword\">\n       <div class=\"has-text-danger\" >\n          Confirm password is required!\n        </div>\n      </div>\n    </div>\n\n    <div class=\"field\">\n      <div class=\"control\">\n        <button class=\"button is-fullwidth is-primary\" type=\"submit\" [disabled]=\"!frmSetNewPassword.valid\">\n          <span>Reset</span>\n        </button>\n      </div>\n    </div>\n  </form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-carta/view-carta.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-carta/view-carta.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Profile info and profile actions -->\n<div class=\"body\">\n    <div class=\"header\">\n      <div class=\"pic\">\n         <img *ngIf=\"this.image\" [src]=\"this.image\" class=\"profile\">\n      </div>\n      <div class=\"name\">\n        <div class=\"user\">\n            <p class=\"nameUser\">{{name}}</p>\n        </div>\n        <div class=\"dir\">\n            <p class=\"address\">{{direccion}}</p>\n        </div>\n        <div class=\"icons\">\n            <div class=\"dotsProfile\">\n\n                <div class=\"iconDotsProfile\">\n                        <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"dotsProfileIcon\" routerLink=\"/home\">arrow_back_ios</mat-icon>\n                </div>\n                </div>\n            </div>\n    </div>\n\n    <div class=\"middle\">\n        <div class=\"categoriesAll\">\n      <li class=\"list-group-item categoryContainer\" *ngFor=\"let cat of categoryList\">\n        <div class=\"divCategory\">\n\n          <div class=\"categoryTitleDiv\">\n            <a class=\"categoryTitle\">{{cat.category}}</a>\n          </div>\n      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"expand\" *ngIf=\"!makeViewMore(cat)\" (click)=\"selectViewMore(cat, cat.id)\">expand_more</mat-icon>\n      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"expand\" *ngIf=\"makeViewMore(cat)\"  (click)=\"unselectViewMore(cat)\">expand_less</mat-icon>\n        </div>\n\n\n    <!-- All Products  -->\n\n        <div class=\"collapsed\" *ngIf=\"!makeViewMore(cat)\">\n        </div>\n        <div class=\"expanded\" *ngIf=\"makeViewMore(cat)\">\n\n            <ng-container class=\"list-group-item\" *ngFor=\"let prod of productListPerCat\">\n              <ng-container *ngIf=\"prod.categoryId === cat.id\">\n                <li class=\"list-group-item\">\n                  <div class=\"divProducts\">\n                      <div class=\"textPro\">\n                                <a class=\"textProducts\">{{prod.title}}</a>\n                                <div class=\"imageDiv\" *ngIf=\"prod.image\">\n                                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"iconPic\" (click)=\"openPicture(prod)\">photo</mat-icon>\n                                </div>\n                                <div *ngIf=\"isPictureOpen\" class=\"popUpImage\">\n                                  <div class=\"shadow\" (click)=\"closePicture()\"></div>\n                                  <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"clearPic\" (click)=\"closePicture()\">clear</mat-icon>\n                                  <div class=\"imageDiv\">\n                                      <img class=\"image\" [src]=pictureSelected.image>\n                                    </div>\n                                </div>\n                          <div class=\"textDescDiv\">\n                          <p class=\"textDescription\">{{prod.description}}</p>\n                          </div>\n                      </div>\n\n                      <div class=\"divPrice\">\n                          <a class=\"textProductsPrice\">{{prod.price}}€</a>\n                      </div>\n                  </div>\n                </li>\n            </ng-container>\n        </ng-container>\n        </div>\n\n\n          <!-- Text to display if there are no categories -->\n\n\n       </li>\n       <div class=\"textPrincipio\" *ngIf=\"!categoryList || categoryList.length === 0\">\n          <div class=\"principioHeader\">\n            <p>¿List@ para empezar? en 2 min tendrás tu carta en la nube</p>\n          </div>\n          <div class=\"pasosPrincipio\">\n            <p>Pasos: </p>\n            <mat-icon class=\"iconProduct steps\" aria-hidden=\"false\" aria-label=\"Example home icon\">looks_one</mat-icon>\n            <p>Haz click arriba en \"+ Nueva Categoria\" para crear las categorías, por ejemplo: Bebidas, Entrantes, Postres o cualquier otra</p>\n            <mat-icon class=\"iconProduct steps\" aria-hidden=\"false\" aria-label=\"Example home icon\">looks_two</mat-icon>\n            <p>Crea productos dentro de las categorías creadas.</p>\n            <mat-icon class=\"iconProduct steps\" aria-hidden=\"false\" aria-label=\"Example home icon\">looks_3</mat-icon>\n\n            <p>Tu carta online está lista!</p>\n          </div>\n          <div class=\"principioFooter\">\n            <p>Ten en cuenta que el cliente verá el menu de la misma forma que tú lo ves y en el mismo orden.\n            </p>\n          </div>\n      </div>\n\n   </div>\n  </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-dashboard/my-dashboard.component */ "./src/app/components/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-management/user-management.component */ "./src/app/components/user-management/user-management.component.ts");
/* harmony import */ var _components_management_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/management/management.component */ "./src/app/components/management/management.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_establecimiento_establecimiento_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/establecimiento/establecimiento.component */ "./src/app/components/establecimiento/establecimiento.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_view_carta_view_carta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/view-carta/view-carta.component */ "./src/app/components/view-carta/view-carta.component.ts");














const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'establecimiento', component: _components_establecimiento_establecimiento_component__WEBPACK_IMPORTED_MODULE_9__["EstablecimientoComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'forgot', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
    { path: 'manage', component: _components_management_management_component__WEBPACK_IMPORTED_MODULE_5__["ManagementComponent"] },
    { path: 'userMgmt', component: _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_4__["UserManagementComponent"] },
    { path: 'mydashboard', component: _components_my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MyDashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'editar/:id', component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'view/:id', component: _components_view_carta_view_carta_component__WEBPACK_IMPORTED_MODULE_13__["ViewCartaComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'barapp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_cartas_cartas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cartas/cartas.component */ "./src/app/components/cartas/cartas.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_establecimiento_establecimiento_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/establecimiento/establecimiento.component */ "./src/app/components/establecimiento/establecimiento.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_management_management_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/management/management.component */ "./src/app/components/management/management.component.ts");
/* harmony import */ var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user-management/user-management.component */ "./src/app/components/user-management/user-management.component.ts");
/* harmony import */ var _components_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/confirm-email/confirm-email.component */ "./src/app/components/confirm-email/confirm-email.component.ts");
/* harmony import */ var _components_my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/my-dashboard/my-dashboard.component */ "./src/app/components/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _components_pop_up_component_cat_pop_up_component_cat_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pop-up-component-cat/pop-up-component-cat.module */ "./src/app/components/pop-up-component-cat/pop-up-component-cat.module.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_view_carta_view_carta_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/view-carta/view-carta.component */ "./src/app/components/view-carta/view-carta.component.ts");































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _components_cartas_cartas_component__WEBPACK_IMPORTED_MODULE_13__["CartasComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _components_establecimiento_establecimiento_component__WEBPACK_IMPORTED_MODULE_15__["EstablecimientoComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"],
            _components_management_management_component__WEBPACK_IMPORTED_MODULE_23__["ManagementComponent"],
            _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_24__["UserManagementComponent"],
            _components_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmEmailComponent"],
            _components_my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["MyDashboardComponent"],
            _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_28__["EditProfileComponent"],
            _components_view_carta_view_carta_component__WEBPACK_IMPORTED_MODULE_29__["ViewCartaComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
            _components_pop_up_component_cat_pop_up_component_cat_module__WEBPACK_IMPORTED_MODULE_27__["PopUpModule"]
        ],
        providers: [
            _auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (Object(firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"])().currentUser) {
            return true;
        }
        else {
            this.router.navigate[('/home')];
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/components/cartas/cartas.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/cartas/cartas.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydGFzL2NhcnRhcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/cartas/cartas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/cartas/cartas.component.ts ***!
  \*******************************************************/
/*! exports provided: CartasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartasComponent", function() { return CartasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartasComponent = class CartasComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cartas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cartas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cartas/cartas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cartas.component.css */ "./src/app/components/cartas/cartas.component.css")).default]
    })
], CartasComponent);



/***/ }),

/***/ "./src/app/components/confirm-email/confirm-email.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/confirm-email/confirm-email.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS1lbWFpbC9jb25maXJtLWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/confirm-email/confirm-email.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/confirm-email/confirm-email.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailComponent", function() { return ConfirmEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ConfirmEmailComponent = class ConfirmEmailComponent {
    constructor(afAuth, activatedRoute) {
        this.afAuth = afAuth;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const code = this.activatedRoute.snapshot.queryParams['oobCode'];
        this.afAuth.auth
            .applyActionCode(code)
            .then(() => {
            // do something after successful verification
        })
            .catch(err => {
            // show error message
        });
    }
};
ConfirmEmailComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ConfirmEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirm-email/confirm-email.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-email.component.css */ "./src/app/components/confirm-email/confirm-email.component.css")).default]
    })
], ConfirmEmailComponent);



/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body{\n  width: 100%;\n  height: 100%;\n}\n\n.divForm{\n  width: 90%;\n  height: 90%;\n  margin-top: 5%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.titulo{\n  width: 90%;\n  max-width: 500px;\n}\n\n.guardarButton{\n  max-width: 500px;\n}\n\n.cartel{\n  margin-top: 20px;\n}\n\n.crear{\n  margin-top: 20px;\n}\n\n.footer{\n  margin-top: 20px;\n  float: left;\n  text-align: center;\n  align-items: center;\n}\n\n.signout{\n    display: inline-block;\n    cursor: pointer;\n    font-size: 12px;\n    text-align: center;\n    justify-content: center;\n}\n\n.buttonCambiar{\n  cursor: pointer;\n}\n\n.fotoEstablecimiento{\n  cursor: pointer;\n}\n\n.salir{\n  font-size: 30px;\n\n  margin-top:0px;\n  margin-right: 10px;\n}\n\n.volver{\n  width: 60px;\n}\n\n#titleQuestion{\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlOztFQUVmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGl2Rm9ybXtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi50aXR1bG97XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5ndWFyZGFyQnV0dG9ue1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uY2FydGVse1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY3JlYXJ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5mb290ZXJ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lnbm91dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnV0dG9uQ2FtYmlhcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvdG9Fc3RhYmxlY2ltaWVudG97XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNhbGlye1xuICBmb250LXNpemU6IDMwcHg7XG5cbiAgbWFyZ2luLXRvcDowcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnZvbHZlcntcbiAgd2lkdGg6IDYwcHg7XG59XG5cbiN0aXRsZVF1ZXN0aW9ue1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let EditProfileComponent = class EditProfileComponent {
    constructor(fb, authService, storage, db, router, activatedRoute) {
        this.fb = fb;
        this.authService = authService;
        this.storage = storage;
        this.db = db;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userId = '';
        this.selectedImage = null;
        this.formTemplate = fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            uid: [authService.userId],
            email: [authService.userEmail],
            emailVerified: [authService.isVerified],
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.userId = params.get('id');
            if (this.userId) {
                this.getData(this.userId);
            }
        });
    }
    getData(id) {
        this.authService.getProfileId(id).valueChanges().subscribe(res => {
            this.editProfile(res);
        }, err => {
            console.log(err);
        });
    }
    editProfile(res) {
        this.imgSrc = res.image;
        this.image2 = res.image.toString();
        this.formTemplate.patchValue({
            name: res.name,
            direccion: res.direccion,
            telefono: res.telefono,
        });
    }
    /*
      getTheProfile(id){
        this.authService.getProfileWithoutRouting2(id).valueChanges().subscribe(
          res=> {
            this.imgSrc = res.image;
          }
        )
    
      }
    */
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                this.imgSrc = e.target.result;
                this.uploadedPic = true;
            };
            this.selectedImage = event.target.files[0];
        }
        else {
            this.selectedImage = null;
            console.log('showPreview doesnt not work');
        }
    }
    onSubmit(formTemplate) {
        if (formTemplate) {
            this.isSubmitted = true;
            var filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
            const fileRef = this.storage.ref(filePath);
            console.log(fileRef);
            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    console.log(url);
                    formTemplate['image'] = url;
                    this.authService.updateProfile(this.userId, this.formTemplate.value);
                });
            })).subscribe();
        }
        console.log('you subbmited', formTemplate);
    }
    onSubmitEdit(profileTemplate) {
        if (confirm("¿Estas seguro de hacer los cambios?")) {
            console.log(this.selectedImage);
            if (this.selectedImage == null) {
                profileTemplate.image = this.authService.image;
                this.authService.updateProfile(this.userId, this.formTemplate.value);
            }
            else if (this.selectedImage !== null) {
                var filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
                const fileRef = this.storage.ref(filePath);
                console.log(fileRef);
                this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                    fileRef.getDownloadURL().subscribe((url) => {
                        console.log(url);
                        profileTemplate['image'] = url;
                        this.authService.updateProfile(this.userId, this.formTemplate.value);
                    });
                })).subscribe();
            }
        }
    }
    navigateBack() {
        this.router.navigate(['/mydashboard']);
    }
    onDelete() {
        if (confirm("Are you sure?")) {
            this.authService.deleteProfile(this.userId).then(res => {
                this.authService.SignOut();
                this.router.navigate(['/signup']);
            }, err => {
                console.log(err);
            });
        }
    }
    get formsControls() {
        return this.formTemplate['controls'];
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-profile/edit-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/components/edit-profile/edit-profile.component.css")).default]
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/components/establecimiento/establecimiento.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/establecimiento/establecimiento.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body{\n  width: 100%;\n  height: 100%;\n}\n\n.divForm{\n  width: 90%;\n  height: 90%;\n  margin-top: 10%;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.titulo{\n  width: 90%;\n  max-width: 500px;\n}\n\n.cartel{\n  margin-top: 20px;\n}\n\n.crear{\n  margin-top: 20px;\n}\n\n.footer{\n  margin-top: 20px;\n  float: left;\n  text-align: center;\n  align-items: center;\n}\n\n.signout{\n    display: inline-block;\n    cursor: pointer;\n    font-size: 12px;\n    text-align: center;\n    justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lc3RhYmxlY2ltaWVudG8vZXN0YWJsZWNpbWllbnRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lc3RhYmxlY2ltaWVudG8vZXN0YWJsZWNpbWllbnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRpdkZvcm17XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnRpdHVsb3tcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmNhcnRlbHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNyZWFye1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZm9vdGVye1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZ25vdXR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/establecimiento/establecimiento.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/establecimiento/establecimiento.component.ts ***!
  \*************************************************************************/
/*! exports provided: EstablecimientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablecimientoComponent", function() { return EstablecimientoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let EstablecimientoComponent = class EstablecimientoComponent {
    constructor(fb, authService, storage, db, router) {
        this.fb = fb;
        this.authService = authService;
        this.storage = storage;
        this.db = db;
        this.router = router;
        this.userId = '';
        this.imgSrc = './assets/images/logo.png';
        this.selectedImage = null;
        this.formTemplate = fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            uid: [authService.userId],
            email: [authService.userEmail],
            emailVerified: [authService.isVerified],
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
    }
    ngOnInit() {
        this.userId = this.authService.userId;
        //this.authService.SetProfileData(name);
        //this.authService.getProfileList();
        //this.getTheProfile(this.userId);
        /*
            if(this.authService.image) {
              console.log(this.authService.image);
              this.imgSrc = this.authService.image;
            }else{
              this.imgSrc = './assets/images/logo.png';
            }
        */
    }
    /*
      getTheProfile(id){
        this.authService.getProfileWithoutRouting2(id).valueChanges().subscribe(
          res=> {
            this.imgSrc = res.image;
          }
        )
    
      }
    */
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                this.imgSrc = e.target.result;
                this.uploadedPic = true;
            };
            this.selectedImage = event.target.files[0];
        }
        else {
            this.selectedImage = null;
            console.log('showPreview doesnt not work');
        }
    }
    onSubmit(formTemplate) {
        this.isSubmitted = true;
        if (formTemplate) {
            var filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
            const fileRef = this.storage.ref(filePath);
            console.log(fileRef);
            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    console.log(url);
                    formTemplate['image'] = url;
                    this.authService.updateProfile(this.userId, this.formTemplate.value);
                    this.router.navigate(['/mydashboard']);
                });
            })).subscribe();
        }
        console.log('you subbmited', formTemplate);
    }
    onDelete() {
        if (confirm("Are you sure?")) {
            this.authService.deleteProfile(this.userId).then(res => {
                this.authService.SignOut();
                this.router.navigate(['/signup']);
            }, err => {
                console.log(err);
            });
        }
    }
    get formsControls() {
        return this.formTemplate['controls'];
    }
};
EstablecimientoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EstablecimientoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-establecimiento',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./establecimiento.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/establecimiento/establecimiento.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./establecimiento.component.css */ "./src/app/components/establecimiento/establecimiento.component.css")).default]
    })
], EstablecimientoComponent);



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maindiv {\n  margin-left: 0px;\n  margin-top:0px;\n  width: 100%;\n  height:100%;\n  float: left;\n  text-align: center;\n}\n.left-side{\n  width: 80%;\n  left: 10%;\n  right: 10%;\n  height: 60%;\n  margin-top: 20%;\n  margin-bottom: 20%;\n  padding: 0px;\n  float: left;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  z-index: 1;  }\n.title{\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  float:left;\n}\n.wrap-login {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  height: 60%;\n  float: left;\n}\n.email{\n  display: inline-block;\n  margin-top: 30px;\n  width: 100%;\n  text-align: center;\n  float: left;\n  margin-bottom: 20px;\n\n}\n.button{\n  width: 100%;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.forgot {\n  margin-top: 30px;\n}\n.back{\n  position: absolute;\n  float: left;\n  width: 50px;\n  height: 50px;\n  margin-left: 0px;\n  margin-top: 10px;\n}\n.backHome{\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVSxHQUFHO0FBSWY7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7O0FBRXJCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGVmdC1zaWRle1xuICB3aWR0aDogODAlO1xuICBsZWZ0OiAxMCU7XG4gIHJpZ2h0OiAxMCU7XG4gIGhlaWdodDogNjAlO1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbiAgcGFkZGluZzogMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7ICB9XG5cblxuXG4udGl0bGV7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDpsZWZ0O1xufVxuLndyYXAtbG9naW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmVtYWlse1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5cbi5idXR0b257XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3Jnb3Qge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYmFja3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJhY2tIb21le1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(authService, activatedRoutes) {
        this.authService = authService;
        this.activatedRoutes = activatedRoutes;
        this.userEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
        const code = this.activatedRoutes.snapshot.queryParams['oobCode'];
    }
    onSubmit(email) {
        if (!email) {
            alert('Type in your email first');
        }
        this.authService.resetPassword(email).then(() => alert('A password reset link has been sent to your email address'), (rejectionReason) => alert(rejectionReason))
            .catch(e => alert('An error occurred while attempting to reset your password'));
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.logo = '/assets/img/logo.png';
    }
    ngOnInit() {
    }
    onSignOut() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full {\n    min-height: 100%;\n    height: 100%;\n    min-width: 100%;\n    width: 100%;\n    /* background-image: url(\"src/assets/images/869.jpg\"); */\n    background-repeat: no-repeat;\n  }\n\n.body{\n  height: 1000px;\n  width: 100%;\n  text-align: center;\n}\n\n.search{\n  position: absolute;\n  width: 80%;\n  max-width: 600px;\n  top: 50%;\n  left: 10%;\n}\n\n.box{\n  width: 100%;\n}\n\n.establecimiento{\n  margin-right: 30px;\n  font-size: 12px;\n  margin-top: 30px;\n  cursor: pointer;\n}\n\n.estLi{\n  list-style-type: none;\n}\n\n.address{\n  color: lightslategrey;\n  float: left;\n  margin-left: 5px;\n}\n\n.profile{\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border-radius: 10%;\n  margin-left: 5px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  float: left;\n}\n\n.nameUser{\n  margin-left: 5px;\n  float: left;\n}\n\n.image{\n  float: left;\n}\n\n.text{\n  margin-left: 5px;\n  float: left;\n}\n\n.results{\n\n}\n\n.name{\ncursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCx3REFBd0Q7SUFDeEQsNEJBQTRCO0VBQzlCOztBQUVGO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBLGVBQWU7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzLzg2OS5qcGdcIik7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4uYm9keXtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2h7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDEwJTtcbn1cblxuLmJveHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lc3RhYmxlY2ltaWVudG97XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lc3RMaXtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmFkZHJlc3N7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5wcm9maWxle1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmFtZVVzZXJ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaW1hZ2V7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5cbi50ZXh0e1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuXG5cbi5yZXN1bHRze1xuXG59XG5cbi5uYW1le1xuY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let HomeComponent = class HomeComponent {
    constructor(product, router) {
        this.product = product;
        this.router = router;
    }
    get searchTerm() {
        console.log(this._searchTerm);
        return this._searchTerm;
    }
    set searchTerm(value) {
        if (value === '') {
            this.show = false;
        }
        else if (value !== '') {
            this.show = true;
        }
        this._searchTerm = value;
        this.filteredList = this.filterList(value);
    }
    filterList(searchString) {
        return this.fullList.filter(user => user.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
            user.direccion.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
    ngOnInit() {
        var x = this.product.getAll();
        x.snapshotChanges().subscribe(item => {
            this.fullList = [];
            item.forEach(element => {
                var y = element.payload.toJSON();
                y['$key'] = element.key;
                if (y.name === undefined) {
                }
                else {
                    this.fullList.push(y);
                }
            });
        });
    }
    viewCarta(id) {
        this.router.navigate(['view/', id]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maindiv {\n  margin-left: 0px;\n  margin-top:0px;\n  width: 100%;\n  height:100%;\n  float: left;\n  text-align: center;\n}\n.left-side{\n  width: 80%;\n  left: 10%;\n  right: 10%;\n  height: 95%;\n  padding: 0px;\n  float: left;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  z-index: 1;   }\n.title{\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding-top: 5%;\n  float:left;\n}\n.wrap-login {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  height: 60%;\n  float: left;\n}\n.email{\n  display: inline-block;\n  margin-top: 30px;\n  width: 100%;\n  text-align: center;\n  float: left;\n}\n.password{\n  margin-top: 30px;\n  margin-bottom: 20px;\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  float: left;\n}\n.button{\n  width: 100%;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.title-text {\n  font-size: 20px;\n  font: Arial;\n}\n.forgot {\n  width: 100%;\n  margin-top: 30px;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  float: left;\n}\n.nav-link{\n  width: 200px;\n  text-align: center;\n  display: inline;\n}\n.nuevaCuenta{\n  margin-top: 15%;\n}\n.back{\n  position: absolute;\n  float: left;\n  width: 50px;\n  height: 50px;\n  margin-left: 0px;\n  margin-top: 10px;\n}\n.backHome{\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVLElBQUk7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDowcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sZWZ0LXNpZGV7XG4gIHdpZHRoOiA4MCU7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDEwJTtcbiAgaGVpZ2h0OiA5NSU7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxOyAgIH1cblxuXG4udGl0bGV7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGZsb2F0OmxlZnQ7XG59XG4ud3JhcC1sb2dpbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZW1haWx7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wYXNzd29yZHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbn1cbi5idXR0b257XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udDogQXJpYWw7XG59XG4uZm9yZ290IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2LWxpbmt7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5udWV2YUN1ZW50YXtcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG4uYmFja3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJhY2tIb21le1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/management/management.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/management/management.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlbWVudC9tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/management/management.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/management/management.component.ts ***!
  \***************************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ManagementComponent = class ManagementComponent {
    constructor(activatedActivated) {
        this.activatedActivated = activatedActivated;
        this.mode = this.activatedActivated.snapshot.queryParams['mode'];
    }
    ngOnInit() {
    }
};
ManagementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/management/management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management.component.css */ "./src/app/components/management/management.component.css")).default]
    })
], ManagementComponent);



/***/ }),

/***/ "./src/app/components/my-dashboard/my-dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/my-dashboard/my-dashboard.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile{\n  display: block;\n  width: 130px;\n  height: 130px;\n  border-radius: 10%;\n  margin-left: 5px;\n  margin-top: 5px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  float: left;\n}\n\n.name{\n  display: table;\n}\n\n.nameUser{\n  float: left;\n  margin-left: 5px;\n  display: block;\n  line-height : 5px;\n  position: relative;\n}\n\n.user{\ndisplay: block;\nmin-width: 200px;\nmax-width: 500px;\nwidth: 100%;\nmargin-top: 50px;\nmargin-left: 5px;\n}\n\n.iconDotsProfile{\n  float: left;\n}\n\n.dir{\n  display: block;\n  min-width: 200px;\n  max-width: 500px;\n  width: 100%;\n  margin-left: 5px;\n}\n\n.address{\n  display: block;\n  color: lightslategrey;\n  float: left;\n  margin-left: 5px;\n  line-height : 5px;\n  position: relative;\n}\n\n.icons{\n  float: left;\n}\n\n.addIconProduct{\n  margin-top: 10px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.iconProduct{\n  display: inline-table;\n  vertical-align: middle;\n  color: #46C646;\n}\n\n.textIconProduct{\n  display: inline-table;\n  vertical-align: middle;\n  color: lightslategrey;\n}\n\n.editing{\n}\n\n.pic{\n  display: inline;\n}\n\n.header{\n  min-width: 330px;\n  width: 100%;\n  float: left;\n}\n\n.create{\n  width: 100%;\n  float: left;\n  text-align: center;\n  margin-top: 15px;\n}\n\n.add{\n  color: #46C646;\n  font-size: 30px;\n  display: inline-table;  vertical-align: middle;\n}\n\n.textNueva{\n  font-size: 16px;\n  color: black;\n\nfont-size: 15px;\n  display: inline-table;  vertical-align: middle;\n}\n\n.crearButton{\n  color: black;\n  font-size: 15px;\n  display: inline-table;  vertical-align: middle;\n}\n\n.categoryContainer{\n  vertical-align: middle;\n}\n\n.divCategory{\n  width: 100%;\n  height: 40px;\n  vertical-align: middle;\n  display: inline-table;\n}\n\n.categoryTitleDiv{\n  height: 38px;\n  display: inline-table;\n  vertical-align: middle;\n}\n\n.categoryTitle{\n  margin-top: 7px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.icondotsCategory{\n  display: inline-table;\n  height: 38px;\n  width: 10%;\n  float: left;\n  margin: auto;\n  padding: 0px;\n}\n\n.dotsCategory{\n  display: inline-table;\n  margin-left: 5px;\n  float: left;\n}\n\n.expand{\n  height: 38px;\n  color: lightslategrey;\n  display: inline-table;\n  float: right;\n  margin-right: 5px;\n  padding-top: 7px;\n}\n\n.createCat{\n  background-color: white;\n  display:inline-block;\n  padding:0.35em 1.2em;\n  border-bottom:none;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  margin:0 0.3em 0.3em 0;\n  border-radius:0.0em;\n  text-decoration:none;\n  font-family:'Roboto',sans-serif;\n  font-weight:300;\n  text-align:center;\n  transition: all 0.2s;\n  height: 45px;\n}\n\n.categoriesAll{\n  max-width: 600px;\n  width: 90%;\n  display: inline-block;\n}\n\n.middle{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.collapsed{\n  height: 0px;\n  overflow: hidden;}\n\n.expanded{\n}\n\n.collapsedP{\n  height: 0px;\n  width: 0%;\n  overflow: hidden;\n}\n\n.expandedP{\n  min-width: 300px;\n  min-height: 100px;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0.3;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  position: fixed;\n  padding:0;\n  margin:0;\n  top:0;\n  left:0;\n}\n\n.fieldProducts{\n  padding: 0px;\n  border-bottom-color: white;\n}\n\n.divProducts{\nwidth: 100%;\nmargin: 0px;\ntext-align: left;\nfloat: left;\n/* vertical-align: middle; */\n}\n\n.textPro{\n  margin-top: 5px;\n  padding-left: 10px;\n  width: 80%;\n  float: left;\n}\n\n.icondots{\n  padding-top: 0px;\n  width: 50px;\n  float: right;\n  text-align: right;\n}\n\n.textProducts{\n  font-size: 15px;\n  line-height: 0%;\n  vertical-align: middle;\n}\n\n.textProductsPrice{\n  font-size: 15px;\n  line-height: 0%;\n}\n\n.textDescription{\n  font-size: 13px;\n  line-height: 0%;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.dots{\n  float: right;\n}\n\n.dotsProfileIcon{\n  display: inline-block;\n  margin-left: 5px;\n  font-size: 30px;\n}\n\n.popUpBody{\n    min-width: 300px;\n    min-height: 100px;\n    background-color: rgba(0, 0, 0, 0.5);;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    position: absolute;\n  }\n\n.shadow{\n    min-width: 300px;\n    min-height: 100px;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: absolute;\n  }\n\n.popUpBodyProduct{\n    min-width: 300px;\n    min-height: 100px;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0.3;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: fixed;\n    padding:0;\n    margin:0;\n    top:0;\n    left:0;\n  }\n\n.shadowProduct{\n    min-width: 300px;\n    min-height: 100px;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: fixed;\n    padding:0;\n    margin:0;\n    top:0;\n    left:0;\n  }\n\n.box {\n    min-width: 300px;\n    min-height: 100px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 50%;\n    background-color: white;\n    z-index: 1;\n    margin: auto;\n    text-align: center;\n    justify-content: center;\n    vertical-align: middle;\n  }\n\n.boxProduct {\n    border-radius: 1%;\n    min-width: 300px;\n    min-height: 100px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 50%;\n    background-color: white;\n    z-index: 4;\n    margin: auto;\n    text-align: center;\n    justify-content: center;\n    vertical-align: middle;\n  }\n\n.salir{\n    color: lightslategray;\n    float: right\n  }\n\n.newCategory{\n    vertical-align: middle;\n    justify-content: center;\n    text-align: center;\n    margin-left: 5%;\n    margin-right: 5%;\n    width: 90%;\n    height: 90%;\n  }\n\n.formPopUp{\n  margin-top: 30px;\n  display: inline-block;\n}\n\n.buttonPopUp{\n    margin-top: 10px;\n    margin-bottom: 15px;\n  }\n\nheader {\n      position: absolute;\n      display: inline-block;\n      left: 0;\n      right: 0;\n      top: -.65em;\n\n    }\n\nfooter {\n      padding-top: 2ch;\n    }\n\n.optionsDiv{\n    position: absolute;\n    z-index: 1;\n    overflow: hidden;\n  }\n\n.option{\n    display: block;\n  }\n\n.steps{\n    color: #2FB82E;\n  }\n\n.principioHeader{\n    margin-top: 15px;\n  }\n\n.collapsedPopUp{\n    width: 0px;\n    height: 0px;\n  }\n\n.iconAnadir{\n    cursor: pointer;\n  }\n\n.textNuevoProducto{\n    cursor: pointer;\n  }\n\n.buttonUploadPicture{\n    margin-top: 5px;\n    cursor: pointer;\n  }\n\n.divPicProduct{\n    margin-top: 5px;\n    width: 100%;\n    float: left;\n  }\n\n.picProduct{\n    float: left;\n  }\n\n.removePic{\n    float: left;\n    size: 30px;\n    cursor: pointer;\n  }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1kYXNoYm9hcmQvbXktZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFHQTtBQUNBOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUIsR0FBRyxzQkFBc0I7QUFDaEQ7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTs7QUFFZCxlQUFlO0VBQ2IscUJBQXFCLEdBQUcsc0JBQXNCO0FBQ2hEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUIsR0FBRyxzQkFBc0I7QUFDaEQ7O0FBSUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixDQUFDOztBQUVuQjtBQUNBOztBQUtBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsS0FBSztFQUNMLE1BQU07QUFDUjs7QUFHQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsNEJBQTRCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFJRTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0VBQ1I7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0VBQ1I7O0FBS0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7O0FBR0E7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCO0VBQ0Y7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7QUFHRTtNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsT0FBTztNQUNQLFFBQVE7TUFDUixXQUFXOztJQUViOztBQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCOztBQUVGO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWRhc2hib2FyZC9teS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxle1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uYW1le1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5uYW1lVXNlcntcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodCA6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udXNlcntcbmRpc3BsYXk6IGJsb2NrO1xubWluLXdpZHRoOiAyMDBweDtcbm1heC13aWR0aDogNTAwcHg7XG53aWR0aDogMTAwJTtcbm1hcmdpbi10b3A6IDUwcHg7XG5tYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaWNvbkRvdHNQcm9maWxle1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYWRkcmVzc3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGxpbmUtaGVpZ2h0IDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uc3tcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5hZGRJY29uUHJvZHVjdHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaWNvblByb2R1Y3R7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM0NkM2NDY7XG59XG5cbi50ZXh0SWNvblByb2R1Y3R7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xufVxuXG5cbi5lZGl0aW5ne1xufVxuXG4ucGlje1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5oZWFkZXJ7XG4gIG1pbi13aWR0aDogMzMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNyZWF0ZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5hZGR7XG4gIGNvbG9yOiAjNDZDNjQ2O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTsgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udGV4dE51ZXZhe1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcblxuZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7ICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY3JlYXJCdXR0b257XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7ICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5cblxuLmNhdGVnb3J5Q29udGFpbmVye1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZGl2Q2F0ZWdvcnl7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbn1cbi5jYXRlZ29yeVRpdGxlRGl2e1xuICBoZWlnaHQ6IDM4cHg7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jYXRlZ29yeVRpdGxle1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmljb25kb3RzQ2F0ZWdvcnl7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogMTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5kb3RzQ2F0ZWdvcnl7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5leHBhbmR7XG4gIGhlaWdodDogMzhweDtcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5cblxuLmNyZWF0ZUNhdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOjAuMzVlbSAxLjJlbTtcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBtYXJnaW46MCAwLjNlbSAwLjNlbSAwO1xuICBib3JkZXItcmFkaXVzOjAuMGVtO1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6MzAwO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmNhdGVnb3JpZXNBbGx7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5taWRkbGV7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb2xsYXBzZWR7XG4gIGhlaWdodDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO31cblxuLmV4cGFuZGVke1xufVxuXG5cblxuXG4uY29sbGFwc2VkUHtcbiAgaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4cGFuZGVkUHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgb3BhY2l0eTogMC4zO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6MDtcbiAgbWFyZ2luOjA7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG59XG5cblxuLmZpZWxkUHJvZHVjdHN7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XG59XG5cbi5kaXZQcm9kdWN0c3tcbndpZHRoOiAxMDAlO1xubWFyZ2luOiAwcHg7XG50ZXh0LWFsaWduOiBsZWZ0O1xuZmxvYXQ6IGxlZnQ7XG4vKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuXG4udGV4dFByb3tcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaWNvbmRvdHN7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5cbi50ZXh0UHJvZHVjdHN7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dFByb2R1Y3RzUHJpY2V7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDAlO1xufVxuXG4udGV4dERlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbi5kb3Rze1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kb3RzUHJvZmlsZUljb257XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5cblxuICAucG9wVXBCb2R5e1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuc2hhZG93e1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLnBvcFVwQm9keVByb2R1Y3R7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICB9XG5cbiAgLnNoYWRvd1Byb2R1Y3R7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgfVxuXG5cblxuXG4gIC5ib3gge1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cblxuICAuYm94UHJvZHVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMSU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogNDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuc2FsaXJ7XG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICAgIGZsb2F0OiByaWdodFxuICB9XG5cbiAgLm5ld0NhdGVnb3J5e1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gIH1cblxuLmZvcm1Qb3BVcHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4gIC5idXR0b25Qb3BVcHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuXG4gICAgaGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogLS42NWVtO1xuXG4gICAgfVxuICAgIGZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogMmNoO1xuICAgIH1cblxuICAub3B0aW9uc0RpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLm9wdGlvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zdGVwc3tcbiAgICBjb2xvcjogIzJGQjgyRTtcbiAgfVxuXG4gIC5wcmluY2lwaW9IZWFkZXJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIC5jb2xsYXBzZWRQb3BVcHtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICB9XG4gIC5pY29uQW5hZGlye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAudGV4dE51ZXZvUHJvZHVjdG97XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmJ1dHRvblVwbG9hZFBpY3R1cmV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5kaXZQaWNQcm9kdWN0e1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAucGljUHJvZHVjdHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAucmVtb3ZlUGlje1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHNpemU6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/my-dashboard/my-dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-dashboard/my-dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let MyDashboardComponent = class MyDashboardComponent {
    constructor(authService, product, router, storage) {
        this.authService = authService;
        this.product = product;
        this.router = router;
        this.storage = storage;
        this.selectedImage = null;
        this.editingCat = false;
        this.editingProd = false;
        this.formProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.formCat = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.popUpOpen = false;
        this.popUpOpenProduct = false;
    }
    openPopUp() {
        this.popUpOpen = true;
    }
    cancelOption() {
        this.popUpOpen = false;
        this.editingCat = false;
        this.formCat.reset();
        this.formProduct.reset();
    }
    openPopUpProduct(cat) {
        this.popUpOpenProduct = true;
    }
    cancelOptionProduct() {
        this.popUpOpenProduct = false;
    }
    ngOnInit() {
        this.userId = this.authService.userId;
        this.getData(this.authService.userId);
        var z = this.product.getAllCategories(this.authService.userId);
        var z = this.product.getAllCategories(this.authService.userId);
        z.valueChanges().subscribe(item => {
            this.categoryList = [];
            this.productListPerCat = [];
            item.forEach(element => {
                var y = element;
                this.categoryList.push(y);
                console.log(element.id);
                var v = this.product.getProductsPerCategory(element.id);
                v.valueChanges().subscribe(item => {
                    item.forEach(elementProd => {
                        var v = elementProd;
                        console.log(v.id);
                        this.productListPerCat.push(v);
                    });
                });
            });
        });
    }
    clickNuevaCat() {
        this.nuevaCat = true;
    }
    /*
    
    
    var z = this.product.getAllCategories(this.authService.userId);
    z.snapshotChanges().subscribe(item => {
      this.categoryList = [];
      this.productListPerCat = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.categoryList.push(y as Category);
        this.filteredCategory = this.categoryList;
    
    
        var v = this.product.getProductsPerCategory(element.key);
        v.snapshotChanges().subscribe( item => {
        item.forEach(elementProd => {
          var v = elementProd.payload.toJSON();
          v["$key"] = elementProd.key;
          this.productListPerCat.push(v as Product);
        })
        })
    
      });
    });
    
    
    
    */
    /*
    
    var z = this.product.getAllCategories(this.authService.userId);
    z.valueChanges().subscribe(item => {
      this.categoryList = [];
      this.productListPerCat = [];
      item.forEach(element => {
        var y = element;
        this.categoryList.push(y as Category);
        console.log(element.$key);
        var v = this.product.getProductsPerCategory(element.id);
        v.valueChanges().subscribe(item => {
        item.forEach(elementProd => {
          var v = elementProd;
          this.productListPerCat.push(v as Product);
          })
        })
      });
     });
    */
    getData(id) {
        this.authService.getProfileForMyDashboard(id).subscribe(res => {
            this.name = res.payload.val().name;
            this.image = res.payload.val().image;
            this.direccion = res.payload.val().direccion;
            console.log(this.name);
        });
    }
    showPreview(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                this.imgSrc = e.target.result;
                this.uploadedPic = true;
            };
            this.selectedImage = event.target.files[0];
        }
        else {
            this.imgSrc = null;
            this.selectedImage = null;
            console.log('showPreview doesnt not work');
        }
    }
    removePic() {
        this.imgSrc = null;
        this.uploadedPic = false;
        this.selectedImage = null;
    }
    onSubmit(form, catId, catCat) {
        this.isSubmitted = true;
        if (this.formProduct.valid) {
            if (this.uploadedPic === true) {
                var filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
                const fileRef = this.storage.ref(filePath);
                this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                    fileRef.getDownloadURL().subscribe((url) => {
                        form['image'] = url;
                        this.product.newProduct(form, catId, catCat);
                        this.formProduct.reset();
                        this.isSubmitted = false;
                        this.imgSrc = null;
                        this.uploadedPic = false;
                        this.selectedImage = null;
                    });
                })).subscribe();
            }
            else {
                this.product.newProduct(form, catId, catCat);
                this.formProduct.reset();
                this.isSubmitted = false;
            }
        }
        else {
            console.log('error');
        }
    }
    onSubmitCat(formCat) {
        if (this.formCat) {
            this.product.newCategory(formCat);
            this.popUpOpen = false;
            this.formCat.reset();
        }
        else {
            console.log('error');
        }
    }
    onDeleteCat(id) {
        this.product.deleteCategory(id);
    }
    onEditCat(id) {
        this.popUpOpen = true;
        this.editingCat = true;
        this.selectedCat = id;
        this.product.getCat(id).valueChanges().subscribe(res => {
            this.formCat.patchValue({
                $key: id,
                category: res.category
            });
        });
    }
    onSubmitEditCat(formValue) {
        this.product.updateCat(this.selectedCat, formValue);
        this.cancelOption();
        this.formCat.reset();
    }
    onEditProduct(id, catId, cat) {
        this.openPopUpAddProduct(cat);
        this.editingProd = true;
        this.selectedProd = id;
        this.product.getProduct(id, catId).valueChanges().subscribe(res => {
            if (res.image != null) {
                this.uploadedPic = true;
                this.imgSrc = res.image;
                this.oldImage = res.image;
                this.formProduct.patchValue({
                    title: res.title,
                    description: res.description,
                    price: res.price,
                });
            }
            else {
                this.formProduct.patchValue({
                    title: res.title,
                    description: res.description,
                    price: res.price,
                });
            }
        });
    }
    onSubmitEditProduct(formValue, catId) {
        if (this.imgSrc === null) {
            this.product.updateProduct(this.selectedProd, formValue, catId);
            this.cancelOptionProduct();
        }
        else if (this.oldImage === this.imgSrc) {
            formValue.image = this.imgSrc;
            this.product.updateProduct(this.selectedProd, formValue, catId);
            this.formProduct.reset();
            this.isSubmitted = false;
            this.cancelOptionProduct();
            this.uploadedPic = false;
            this.imgSrc = null;
        }
        else {
            console.log(this.oldImage);
            console.log(this.imgSrc);
            var filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
            const fileRef = this.storage.ref(filePath);
            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    formValue['image'] = url;
                    this.product.updateProduct(this.selectedProd, formValue, catId);
                    this.formProduct.reset();
                    this.isSubmitted = false;
                    this.imgSrc = null;
                    this.uploadedPic = false;
                    this.selectedImage = null;
                });
            })).subscribe();
        }
    }
    onDeleteProduct(id, productId) {
        console.log(id, productId);
        if (confirm('¿Estas seguro de borrar el producto?')) {
            this.product.deleteProduct(id, productId);
        }
    }
    onSignOut() {
        this.authService.SignOut();
    }
    selectViewMore(item, catId) {
        this.viewMoreCat = item.category;
    }
    unselectViewMore(item) {
        this.viewMoreCat = null;
        // this.makeViewMore(null)
    }
    makeViewMore(item) {
        return this.viewMoreCat === item.category;
    }
    openPopUpAddProduct(item) {
        this.viewProductCat = item;
    }
    unselectProductMore(item) {
        this.viewProductCat = [];
        this.imgSrc = null;
        this.uploadedPic = false;
        this.selectedImage = null;
        // this.makeViewMore(null)
    }
    makeProductMore(item) {
        return this.viewProductCat === item;
    }
    editButtonClick(id) {
        this.router.navigate(['editar/', id]);
    }
    get formsControls() {
        return this.formProduct['controls'];
    }
    get formsControlsCat() {
        return this.formCat['controls'];
    }
};
MyDashboardComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
];
MyDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-my-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-dashboard/my-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-dashboard.component.css */ "./src/app/components/my-dashboard/my-dashboard.component.css")).default]
    })
], MyDashboardComponent);



/***/ }),

/***/ "./src/app/components/pop-up-component-cat/animations.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pop-up-component-cat/animations.ts ***!
  \***************************************************************/
/*! exports provided: openCloseAnimation, openCloseShadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseAnimation", function() { return openCloseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseShadeAnimation", function() { return openCloseShadeAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const openCloseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        transform: 'scale(1)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        transform: 'scale(0)',
        display: 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed, closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.25s')
    ]),
]);
const openCloseShadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openCloseShade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: .2,
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        display: 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed, closed => open', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.25s')
    ]),
]);


/***/ }),

/***/ "./src/app/components/pop-up-component-cat/pop-up-component-cat.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/pop-up-component-cat/pop-up-component-cat.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  .shade {\n    z-index: 1000;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    background: transparent;\n  }\n  .pop-up {\n    z-index: 1001;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    box-sizing: border-box;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    padding: 1ch;\n    height: 100vh;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3AtdXAtY29tcG9uZW50LWNhdC9wb3AtdXAtY29tcG9uZW50LWNhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sWUFBWTtJQUNaLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wLXVwLWNvbXBvbmVudC1jYXQvcG9wLXVwLWNvbXBvbmVudC1jYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuc2hhZGUge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAucG9wLXVwIHtcbiAgICB6LWluZGV4OiAxMDAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAxY2g7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/components/pop-up-component-cat/pop-up-component-cat.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pop-up-component-cat/pop-up-component-cat.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PopUpComponentCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponentCatComponent", function() { return PopUpComponentCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/components/pop-up-component-cat/animations.ts");



let PopUpComponentCatComponent = class PopUpComponentCatComponent {
    constructor() {
        this.isOpen = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopUpComponentCatComponent.prototype, "isOpen", void 0);
PopUpComponentCatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pop-up-component-cat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pop-up-component-cat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pop-up-component-cat/pop-up-component-cat.component.html")).default,
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_2__["openCloseAnimation"],
            _animations__WEBPACK_IMPORTED_MODULE_2__["openCloseShadeAnimation"],
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pop-up-component-cat.component.css */ "./src/app/components/pop-up-component-cat/pop-up-component-cat.component.css")).default]
    })
], PopUpComponentCatComponent);



/***/ }),

/***/ "./src/app/components/pop-up-component-cat/pop-up-component-cat.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/pop-up-component-cat/pop-up-component-cat.module.ts ***!
  \********************************************************************************/
/*! exports provided: PopUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpModule", function() { return PopUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pop_up_component_cat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-up-component-cat.component */ "./src/app/components/pop-up-component-cat/pop-up-component-cat.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");





let PopUpModule = class PopUpModule {
};
PopUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_pop_up_component_cat_component__WEBPACK_IMPORTED_MODULE_1__["PopUpComponentCatComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ],
        exports: [_pop_up_component_cat_component__WEBPACK_IMPORTED_MODULE_1__["PopUpComponentCatComponent"]]
    })
], PopUpModule);



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".limiter {\n  margin-left: 0px;\n  margin-top:0px;\n  width: 100%;\n  height:100%;\n  float: left;\n  text-align: center;\n}\n\n.container-login {\n  width: 80%;\n  left: 10%;\n  right: 10%;\n  height: 60%;\n  top: 20%;\n  bottom: 20%;\n  padding: 0px;\n  float: left;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  z-index: 1;\njustify-content: center;  }\n\n.title{\n  display: inline-block;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 15%;\n  padding-top: 5%;\n  float:left;\n}\n\n.wrap-login {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  height: 60%;\n  float: left;\n}\n\n.form{\n  width: 100%;\n}\n\n.email{\n  margin-top: 30px;\n  display: inline-block;\n  width: 200px;\n  text-align: center;\n}\n\n.password{\n  margin-top: 30px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 200px;\n  text-align: center;\n}\n\n.submit{\n  margin-top: 20px;\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n}\n\n#terminos{\n  font-size: 12px;\n  text-decoration: underline;\n}\n\n.back{\n  position: absolute;\n  float: left;\n  width: 50px;\n  height: 50px;\n  margin-left: 0px;\n  margin-top: 10px;\n}\n\n.backHome{\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWix1QkFBdUIsR0FBRzs7QUFFMUI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbWl0ZXIge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLWxvZ2luIHtcbiAgd2lkdGg6IDgwJTtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMTAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdG9wOiAyMCU7XG4gIGJvdHRvbTogMjAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbmp1c3RpZnktY29udGVudDogY2VudGVyOyAgfVxuXG4udGl0bGV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBmbG9hdDpsZWZ0O1xufVxuXG4ud3JhcC1sb2dpbiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cblxuLmZvcm17XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1haWx7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLnBhc3N3b3Jke1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN1Ym1pdHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbiN0ZXJtaW5vc3tcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJhY2t7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iYWNrSG9tZXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let SignupComponent = class SignupComponent {
    constructor(authService) {
        this.authService = authService;
        this.userSignUp = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cb: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    onSubmit(userSignUp) {
        this.isSubmitted = true;
        if (this.userSignUp.valid) {
            this.authService.signUp(this.userSignUp.value);
        }
    }
    openDialog() {
    }
    get formsControls() {
        return this.userSignUp['controls'];
    }
};
SignupComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/components/user-management/user-management.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/user-management/user-management.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/user-management/user-management.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-management/user-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let UserManagementComponent = class UserManagementComponent {
    constructor(afAuth, fb, router, activatedRoute) {
        this.afAuth = afAuth;
        this.fb = fb;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.frmSetNewPassword = this.fb.group({
            password: [null],
            confirmPassword: [null]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        const password = this.frmSetNewPassword.controls['password'].value;
        const confirmPassword = this.frmSetNewPassword.controls['confirmPassword'].value;
        if (password !== confirmPassword) {
            return;
        }
        const code = this.activatedRoute.snapshot.queryParams['oobCode'];
        this.afAuth.auth
            .confirmPasswordReset(code, password)
            .then(() => this.router.navigate(['login']))
            .catch(err => {
            console.log(err);
        });
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-user-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-management/user-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management.component.css */ "./src/app/components/user-management/user-management.component.css")).default]
    })
], UserManagementComponent);



/***/ }),

/***/ "./src/app/components/view-carta/view-carta.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/view-carta/view-carta.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile{\n  display: block;\n  width: 130px;\n  height: 130px;\n  border-radius: 10%;\n  margin-left: 5px;\n  margin-top: 5px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  float: left;\n}\n\n.name{\n  display: table;\n  min-height: 130px;\n}\n\n.nameUser{\n  float: left;\n  margin-left: 5px;\n  display: block;\n  line-height : 5px;\n  position: relative;\n}\n\n.user{\ndisplay: block;\nmin-width: 200px;\nmax-width: 500px;\nwidth: 100%;\nmargin-top: 50px;\nmargin-left: 5px;\n}\n\n.dir{\n  display: block;\n  min-width: 200px;\n  max-width: 500px;\n  width: 100%;\n  margin-left: 5px;\n}\n\n.address{\n  display: block;\n  color: lightslategrey;\n  float: left;\n  margin-left: 5px;\n  line-height : 5px;\n  position: relative;\n}\n\n.iconProduct{\n  display: inline-table;\n  vertical-align: middle;\n  color: #46C646;\n}\n\n.textIconProduct{\n  display: inline-table;\n  vertical-align: middle;\n  color: lightslategrey;\n}\n\n.pic{\n  display: inline;\n}\n\n.header{\n  min-width: 330px;\n  width: 100%;\n  float: left;\n}\n\n.categoryContainer{\n  vertical-align: middle;\n}\n\n.divCategory{\n  width: 100%;\n  height: 40px;\n  vertical-align: middle;\n  display: inline-table;\n}\n\n.categoryTitleDiv{\n  height: 38px;\n  display: inline-table;\n  vertical-align: middle;\n}\n\n.categoryTitle{\n  margin-top: 7px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.icondotsCategory{\n  display: inline-table;\n  height: 38px;\n  width: 10%;\n  float: left;\n  margin: auto;\n  padding: 0px;\n}\n\n.dotsCategory{\n  display: inline-table;\n  margin-left: 5px;\n  float: left;\n}\n\n.expand{\n  height: 38px;\n  color: lightslategrey;\n  display: inline-table;\n  float: right;\n  margin-right: 5px;\n  padding-top: 7px;\n}\n\n.createCat{\n  background-color: white;\n  display:inline-block;\n  padding:0.35em 1.2em;\n  border-bottom:none;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  margin:0 0.3em 0.3em 0;\n  border-radius:0.0em;\n  text-decoration:none;\n  font-family:'Roboto',sans-serif;\n  font-weight:300;\n  text-align:center;\n  transition: all 0.2s;\n  height: 45px;\n}\n\n.categoriesAll{\n  max-width: 600px;\n  width: 90%;\n  display: inline-block;\n}\n\n.middle{\n  margin-top: 25px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.collapsed{\n  height: 0px;\n  overflow: hidden;}\n\n.expanded{\n}\n\n.collapsedP{\n  height: 0px;\n  width: 0%;\n  overflow: hidden;\n}\n\n.expandedP{\n  min-width: 300px;\n  min-height: 100px;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0.3;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  position: fixed;\n  padding:0;\n  margin:0;\n  top:0;\n  left:0;\n}\n\n.divProducts{\nwidth: 100%;\nmin-height: 40px;\nmargin: 0px;\ntext-align: left;\n/* vertical-align: middle; */\n}\n\n.textPro{\n  margin-top: 5px;\n  padding-left: 10px;\n  width: 80%;\n  float: left;\n}\n\n.imageDiv{\n  display: inline-table;\n  margin-top: 5px;\n  padding-left: 5px;\n}\n\n.divPrice{\n  margin-top: 5px;\n  width: 10%;\n  float: right;\n}\n\n.textProducts{\n  font-size: 15px;\n  line-height: 0%;\n  vertical-align: middle;\n}\n\n.textProductsPrice{\n  font-size: 15px;\n  line-height: 0%;\n  vertical-align: middle;\n  text-align: right;\n  align-self: right;\n}\n\n.textDescription{\n  font-size: 13px;\n  line-height: 0%;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.steps{\n    color: #2FB82E;\n  }\n\n.principioHeader{\n    margin-top: 15px;\n  }\n\n.iconPic{\n    font-size: 18px;\n    color: #1ECD1C;\n    cursor: pointer;\n  }\n\n.icons{\n  padding-left: 15px;\n  width: 100%;\n  display: block;\n  float: left;\n}\n\n.dotsProfileIcon{\n  cursor: pointer;\n  margin-left: 5px;\n  font-size: 24px;\n  color: #1CA7CD;\n}\n\n.shadow{\n  min-width: 300px;\n  min-height: 100px;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0.3;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  position: fixed;\n  padding:0;\n  margin:0;\n  top:0;\n  left:0;\n}\n\n.image{\n  min-width: 320px;\n  max-width: 600px;\n  min-height: 100px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  background-color: white;\n  z-index: 4;\n  margin: auto;\n  text-align: center;\n  justify-content: center;\n  vertical-align: middle;\n}\n\n.clearPic{\n  float: right;\n  margin-top: 15px;\n  margin-right: 15px;\n  color: beige;\n  z-index: 4;\n  position: fixed;\n  top: 5px;\n  right: 5px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWNhcnRhL3ZpZXctY2FydGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0FBQ0EsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBSUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFHQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixDQUFDOztBQUVuQjtBQUNBOztBQUtBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsS0FBSztFQUNMLE1BQU07QUFDUjs7QUFHQTtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLGdCQUFnQjtBQUNoQiw0QkFBNEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUdFO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsS0FBSztFQUNMLE1BQU07QUFDUjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXctY2FydGEvdmlldy1jYXJ0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGV7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm5hbWV7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbn1cbi5uYW1lVXNlcntcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodCA6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udXNlcntcbmRpc3BsYXk6IGJsb2NrO1xubWluLXdpZHRoOiAyMDBweDtcbm1heC13aWR0aDogNTAwcHg7XG53aWR0aDogMTAwJTtcbm1hcmdpbi10b3A6IDUwcHg7XG5tYXJnaW4tbGVmdDogNXB4O1xufVxuXG5cblxuLmRpcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYWRkcmVzc3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGxpbmUtaGVpZ2h0IDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLmljb25Qcm9kdWN0e1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjNDZDNjQ2O1xufVxuXG4udGV4dEljb25Qcm9kdWN0e1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbn1cblxuXG4ucGlje1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5oZWFkZXJ7XG4gIG1pbi13aWR0aDogMzMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuXG4uY2F0ZWdvcnlDb250YWluZXJ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kaXZDYXRlZ29yeXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xufVxuLmNhdGVnb3J5VGl0bGVEaXZ7XG4gIGhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNhdGVnb3J5VGl0bGV7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaWNvbmRvdHNDYXRlZ29yeXtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAxMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmRvdHNDYXRlZ29yeXtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmV4cGFuZHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cblxuXG4uY3JlYXRlQ2F0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6MC4zNWVtIDEuMmVtO1xuICBib3JkZXItYm90dG9tOm5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIG1hcmdpbjowIDAuM2VtIDAuM2VtIDA7XG4gIGJvcmRlci1yYWRpdXM6MC4wZW07XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDozMDA7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uY2F0ZWdvcmllc0FsbHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1pZGRsZXtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbGxhcHNlZHtcbiAgaGVpZ2h0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47fVxuXG4uZXhwYW5kZWR7XG59XG5cblxuXG5cbi5jb2xsYXBzZWRQe1xuICBoZWlnaHQ6IDBweDtcbiAgd2lkdGg6IDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXhwYW5kZWRQe1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBvcGFjaXR5OiAwLjM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzowO1xuICBtYXJnaW46MDtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbn1cblxuXG4uZGl2UHJvZHVjdHN7XG53aWR0aDogMTAwJTtcbm1pbi1oZWlnaHQ6IDQwcHg7XG5tYXJnaW46IDBweDtcbnRleHQtYWxpZ246IGxlZnQ7XG4vKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xufVxuXG4udGV4dFByb3tcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaW1hZ2VEaXZ7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmRpdlByaWNle1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAxMCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRleHRQcm9kdWN0c3tcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0UHJvZHVjdHNQcmljZXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBhbGlnbi1zZWxmOiByaWdodDtcbn1cblxuLnRleHREZXNjcmlwdGlvbntcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4gIC5zdGVwc3tcbiAgICBjb2xvcjogIzJGQjgyRTtcbiAgfVxuXG4gIC5wcmluY2lwaW9IZWFkZXJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIC5pY29uUGlje1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzFFQ0QxQztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuLmljb25ze1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZG90c1Byb2ZpbGVJY29ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMxQ0E3Q0Q7XG59XG5cbi5zaGFkb3d7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG9wYWNpdHk6IDAuMztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOjA7XG4gIG1hcmdpbjowO1xuICB0b3A6MDtcbiAgbGVmdDowO1xufVxuLmltYWdle1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA0O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY2xlYXJQaWN7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogYmVpZ2U7XG4gIHotaW5kZXg6IDQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/view-carta/view-carta.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/view-carta/view-carta.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewCartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCartaComponent", function() { return ViewCartaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ViewCartaComponent = class ViewCartaComponent {
    constructor(activatedRoute, product, authService) {
        this.activatedRoute = activatedRoute;
        this.product = product;
        this.authService = authService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.barId = params.get('id');
            if (this.barId) {
                this.getData(this.barId);
                var z = this.product.getAllCategories(this.barId);
                var z = this.product.getAllCategories(this.barId);
                z.valueChanges().subscribe(item => {
                    this.categoryList = [];
                    this.productListPerCat = [];
                    item.forEach(element => {
                        var y = element;
                        this.categoryList.push(y);
                        var v = this.product.getProductsPerCategoryForUser(this.barId, element.id);
                        v.valueChanges().subscribe(item => {
                            item.forEach(elementProd => {
                                var v = elementProd;
                                this.productListPerCat.push(v);
                            });
                        });
                    });
                });
            }
        });
    }
    getData(id) {
        this.authService.getProfileForMyDashboard(id).subscribe(res => {
            this.name = res.payload.val().name;
            this.image = res.payload.val().image;
            this.direccion = res.payload.val().direccion;
            console.log(this.name);
        });
    }
    selectViewMore(item, catId) {
        this.viewMoreCat = item.category;
    }
    unselectViewMore(item) {
        this.viewMoreCat = null;
        // this.makeViewMore(null)
    }
    makeViewMore(item) {
        return this.viewMoreCat === item.category;
    }
    openPicture(prod) {
        this.pictureSelected = prod;
        this.isPictureOpen = true;
    }
    closePicture() {
        this.isPictureOpen = false;
        this.pictureSelected = null;
    }
};
ViewCartaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
ViewCartaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-view-carta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-carta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/view-carta/view-carta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-carta.component.css */ "./src/app/components/view-carta/view-carta.component.css")).default]
    })
], ViewCartaComponent);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);







let AuthService = class AuthService {
    constructor(afAuth, router, ngZone, //NgZone to remove outside scope warning
    af) {
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.af = af;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    getAuth() {
        return this.afAuth.auth;
    }
    signUp(signUpForm) {
        return this.afAuth.auth.createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
            .then((result) => {
            this.SendVerificationMail();
            const message = `Verifica tu email. Hemos enviado un correo con un link de activación al correo electronico proporcionado. Por favor verifica tu bandeja de entrada y carpeta de correo no deseado.`;
            alert(message);
            Object(firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"])().ref('users/' + result.user.uid).set({
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName,
                emailVerified: result.user.emailVerified,
            });
            this.router.navigate(['login']);
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    SendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification();
    }
    resetPassword(email) {
        return this.afAuth.auth.sendPasswordResetEmail(email, { url: 'http://localhost:4200/userMgmt' });
    }
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            if (result.user.emailVerified) {
                this.isLoggedIn = true;
                this.ngZone.run(() => {
                    this.userId = result.user.uid;
                    this.userEmail = result.user.email;
                    this.isVerified = result.user.emailVerified;
                });
            }
            else {
                alert('El correo electronico no está verificado.');
            }
            this.getProfile(this.userId);
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
    deleteProfile(id) {
        var profile = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
        profile.delete();
        return this.profileObj.remove();
    }
    getProfile(id) {
        this.profileObj = this.af.object('users/' + id);
        this.profileObj.snapshotChanges().subscribe(action => {
            this.image = action.payload.val().image;
            this.name = action.payload.val().name;
            if (this.name != null) {
                this.router.navigate(['mydashboard']);
            }
            else {
                this.router.navigate(['establecimiento']);
            }
        });
        return this.profileObj;
    }
    getProfileForMyDashboard(id) {
        this.profileObj = this.af.object('users/' + id);
        return this.profileObj.snapshotChanges();
    }
    getProfileId(id) {
        this.profileObj = this.af.object('users/' + id);
        return this.profileObj;
        //return this.veladaEdit = this.storage.object('veladas/' + id).valueChanges();
    }
    updateProfile(id, profile) {
        this.profileObj.update({
            uid: id,
            name: profile.name,
            direccion: profile.direccion,
            email: profile.email,
            emailVerified: profile.emailVerified,
            telefono: profile.telefono,
            image: profile.image
        });
        this.router.navigate(['mydashboard'])
            .catch(error => { this.errorMgmt(error); });
    }
    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
            localStorage.removeItem('user');
            this.isLoggedIn = false;
            this.name = null;
            this.direccion = null;
            this.router.navigate(['login']);
        });
    }
    errorMgmt(error) {
        console.log(error);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let ProductService = class ProductService {
    constructor(database, authService) {
        this.database = database;
        this.authService = authService;
    }
    getAll() {
        this.listAll = this.database.list('users/');
        return this.listAll;
    }
    getAllProducts(id) {
        this.productsAll = this.database.list('users/' + id + '/carta');
        return this.productsAll;
    }
    getProductsPerCategory(id) {
        console.log(id);
        this.productsPerCat = this.database.list('users/' + this.authService.userId + '/carta/' + id + '/products/');
        return this.productsPerCat;
    }
    getProductsPerCategoryForUser(idPlace, catId) {
        this.productsPerCat = this.database.list('users/' + idPlace + '/carta/' + catId + '/products/');
        return this.productsPerCat;
    }
    getAllCategories(id) {
        this.categoryAll = this.database.list('users/' + id + '/carta');
        return this.categoryAll;
    }
    getCat(id) {
        this.catRef = this.database.object('users/' + this.authService.userId + '/carta/' + id);
        return this.catRef;
    }
    updateCat(id, catValue) {
        this.database.object('users/' + this.authService.userId + '/carta/' + id).update({
            category: catValue.category
        }).catch(error => {
            this.errorMgmt(error);
        });
        return;
    }
    getProduct(id, catId) {
        this.prodRef = this.database.object('users/' + this.authService.userId + '/carta/' + catId + '/products/' + id);
        return this.prodRef;
    }
    updateProduct(id, productValue, catId) {
        this.database.object('users/' + this.authService.userId + '/carta/' + catId + '/products/' + id).update({
            title: productValue.title,
            description: productValue.description,
            price: productValue.price,
            image: productValue.image
        }).catch(error => {
            this.errorMgmt(error);
        });
        return;
    }
    newProduct(data, catId, catCat) {
        const newProduct = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref().child('users/' + this.authService.userId + '/carta/' + catId + '/products/').push().key;
        const product = {
            id: newProduct,
            categoryId: catId,
            category: catCat,
            title: data.title,
            description: data.description,
            price: data.price,
            image: data.image
        };
        const updates = {};
        updates['users/' + this.authService.userId + '/carta/' + catId + '/products/' + newProduct] = product;
        return firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref().update(updates);
    }
    newCategory(cat) {
        const newCategory = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref().child('users/' + this.authService.userId + '/carta').push().key;
        const categoryStructure = {
            id: newCategory,
            category: cat.category
        };
        const updates = {};
        updates['users/' + this.authService.userId + '/carta/' + newCategory] = categoryStructure;
        return firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref().update(updates);
    }
    deleteCategory(id) {
        this.categoryRef = this.database.object('users/' + this.authService.userId + '/carta/' + id);
        this.categoryRef.remove()
            .catch(error => {
            console.log(error);
        });
    }
    deleteProduct(id, productId) {
        this.productRef = this.database.object('users/' + this.authService.userId + '/carta/' + id + '/products/' + productId);
        this.productRef.remove()
            .catch(error => {
            console.log(error);
        });
    }
    errorMgmt(error) {
        console.log(error);
    }
};
ProductService.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBrh2la_UWVSepIO-UCK21sILR27LP2LXk',
        authDomain: 'cartasbar-ad70c.firebaseapp.com',
        databaseURL: 'https://cartasbar-ad70c.firebaseio.com',
        projectId: 'cartasbar-ad70c',
        storageBucket: 'cartasbar-ad70c.appspot.com',
        messagingSenderId: '954510398095',
        appId: '1:954510398095:web:72650a996fdd376d38d6fa',
        measurementId: 'G-W0WQTT3YS1'
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alinlazar/Desktop/aaaaaaa/barapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map