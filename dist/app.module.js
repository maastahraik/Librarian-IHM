"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app.component");
var book_component_1 = require("./components/book/book.component");
var menu_component_1 = require("./components/menu/menu.component");
var primeng_1 = require("primeng/primeng");
var router_1 = require("@angular/router");
var bookAdd_component_1 = require("./components/book/bookAdd.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, primeng_1.MenuModule, primeng_1.DropdownModule,
            primeng_1.SpinnerModule, primeng_1.InputTextModule, primeng_1.InputMaskModule,
            primeng_1.ButtonModule, http_1.HttpModule, forms_1.FormsModule,
            primeng_1.DataTableModule, router_1.RouterModule.forRoot([
                {
                    path: 'book',
                    component: book_component_1.BookComponent
                }
            ])],
        declarations: [app_component_1.AppComponent, book_component_1.BookComponent, menu_component_1.MenuLibrarianComponent, bookAdd_component_1.BookAddComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map