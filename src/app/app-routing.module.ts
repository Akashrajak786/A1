import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { OurProjectComponent } from './Pages/our-project/our-project.component';
import { EmiComponent } from './Staticpage/emi/emi.component';
import { JanakpurimoreComponent } from './janakpurimore/janakpurimore.component';
import { SudhamoreComponent } from './sudhamore/sudhamore.component';
import { CoralwoodmoreComponent } from './coralwoodmore/coralwoodmore.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'ourproject',component:OurProjectComponent},
  {path:'emi',component:EmiComponent},
  {path:'janakpurimore',component:JanakpurimoreComponent},
  {path:'SudhamoreComponent',component:SudhamoreComponent},
  {path:'Coralwoodmore',component:CoralwoodmoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
