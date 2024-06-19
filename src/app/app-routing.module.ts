import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './components/auth/AuthGuard';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'goods', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'admin', component:AdminComponent, canActivate: [AuthGuard], data: {roles: ['ADMIN']}},
  {path:'cart', component: CartComponent},
  {path: '', redirectTo: 'goods', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
