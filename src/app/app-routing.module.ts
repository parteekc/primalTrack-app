import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConnectionComponent } from './connection/connection.component';
import { HealthReportComponent } from './health-report/health-report.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'health', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: 'connection', component: ConnectionComponent
  },
  {
    path: 'health', component: HealthReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
