import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { OurProjectComponent } from './Pages/our-project/our-project.component';
import { NavbarComponent } from './StaticPage/navbar/navbar.component';
import { FooterComponent } from './StaticPage/footer/footer.component';
import { OurPromotorsComponent } from './our-promotors/our-promotors.component';
import { EmiComponent } from './Staticpage/emi/emi.component';
import { JanakpurimoreComponent } from './janakpurimore/janakpurimore.component';
import { SudhamoreComponent } from './sudhamore/sudhamore.component';
import { CoralwoodmoreComponent } from './coralwoodmore/coralwoodmore.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OurProjectComponent,
    NavbarComponent,
    FooterComponent,
    OurPromotorsComponent,
    EmiComponent,
    JanakpurimoreComponent,
    SudhamoreComponent,
    CoralwoodmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
