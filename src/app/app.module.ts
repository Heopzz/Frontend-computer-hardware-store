
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSearchModule, NbButtonModule, NbCardHeaderComponent, NbTreeGridModule, NbAccordionModule, NbMenuModule, NbSidebarModule, NbCardModule, NbSelectModule,NbDialogModule, NbWindowModule, NbIconModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './components/home/home.component';
import { CradGoodsComponent } from './components/crad-goods/crad-goods.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NbListModule } from '@nebular/theme';
import { CartComponent } from './components/cart/cart.component';
import { CurrencyPipe } from '@angular/common';
import { AddProductDialogComponent } from './components/add-product-dialog/add-product-dialog.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CradGoodsComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    AddProductDialogComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSearchModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbSelectModule,
    HttpClientModule,
    FormsModule,
    NbListModule,
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbSidebarModule.forRoot(),
    RouterModule,
    NbWindowModule,
    CurrencyPipe,
    NbIconModule,








  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
