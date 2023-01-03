import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { GrocerypageComponent } from './grocerypage/grocerypage.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    TagsComponent,
    CartPageComponent,
    GrocerypageComponent,
    NotFoundComponent,
    CheckoutComponent,
    ContactComponent,
    AboutusComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
