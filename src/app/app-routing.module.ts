import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlistComponent } from './components/blist/blist.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
 

const routes: Routes = [
  { path : '', component : BlistComponent },
  { path : 'about' , component : AboutComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'login' , component : LoginComponent },
  { path : 'dashboard', component : DashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
