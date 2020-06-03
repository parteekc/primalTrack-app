import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'signin', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'signin', component: SignInComponent
  },
  // {
  //   path: 'login', component: LoginComponent
  // },
  // {
  //   path: 'register', component: RegisterComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
