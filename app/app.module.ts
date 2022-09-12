import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ContentComponent } from './components/template/content/content.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { BannerComponent } from './components/template/banner/banner.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { PreviewCheckoutComponent } from './components/template/preview-checkout/preview-checkout.component';
import { FooterComponent } from './components/template/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    CatalogComponent,
    BannerComponent,
    ContactComponent,
    HomeComponent,
    PreviewCheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports : [
    PreviewCheckoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
