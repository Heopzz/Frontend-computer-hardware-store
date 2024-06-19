"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var theme_1 = require("@nebular/theme");
var eva_icons_1 = require("@nebular/eva-icons");
var home_component_1 = require("./components/home/home.component");
var header_component_1 = require("./components/header/header.component");
var categories_component_1 = require("./components/categories/categories.component");
var crad_goods_component_1 = require("./components/crad-goods/crad-goods.component");
var search_module_component_1 = require("./components/search-module/search-module.component");
var sort_module_component_1 = require("./components/sort-module/sort-module.component");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var register_component_1 = require("./components/register/register.component");
var login_component_1 = require("./components/login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                categories_component_1.CategoriesComponent,
                crad_goods_component_1.CradGoodsComponent,
                search_module_component_1.SearchModuleComponent,
                sort_module_component_1.SortModuleComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                theme_1.NbThemeModule.forRoot({ name: 'default' }),
                theme_1.NbLayoutModule,
                eva_icons_1.NbEvaIconsModule,
                theme_1.NbSearchModule,
                theme_1.NbButtonModule,
                theme_1.NbSidebarModule.forRoot(),
                theme_1.NbSidebarModule,
                theme_1.NbMenuModule.forRoot(),
                theme_1.NbCardModule,
                theme_1.NbSelectModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
