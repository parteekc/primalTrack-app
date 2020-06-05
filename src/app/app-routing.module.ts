import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConnectionComponent } from './connection/connection.component';
import { HealthReportComponent } from './health-report/health-report.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ChatComponent } from './chat/chat.component';


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
  {
    path: 'connection', component: ConnectionComponent
  },
  {
    path: 'health', component: HealthReportComponent
  },
  {
    path: 'achievements', component: AchievementsComponent
  },
  {
    path: 'chat', component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
