import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConnectionComponent } from './connection/connection.component';
import { HealthReportComponent } from './health-report/health-report.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: 'connection', component: ConnectionComponent, canActivate: [AuthGuard]
  },
  {
    path: 'health', component: HealthReportComponent, canActivate: [AuthGuard]
  },
  {
    path: 'achievements', component: AchievementsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'chat', component: ChatComponent, canActivate: [AuthGuard]
  },



  {
    path: '**', redirectTo: 'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
