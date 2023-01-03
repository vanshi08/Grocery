import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { GrocerypageComponent } from './grocerypage/grocerypage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'aboutUs', component:AboutusComponent},
  {path:'contact', component:ContactComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'grocery/:id', component:GrocerypageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'checkout', component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
