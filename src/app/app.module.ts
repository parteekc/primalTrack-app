import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ConnectionComponent } from './connection/connection.component';
import { HealthReportComponent } from './health-report/health-report.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ChatComponent } from './chat/chat.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const config ={
  apiKey: "AIzaSyDBkiE7P2deQCKJz4Jo8cwZ2f5hG8Ug-cI",
  authDomain: "primaltrack-app.firebaseapp.com",
  databaseURL: "https://primaltrack-app.firebaseio.com",
  projectId: "primaltrack-app",
  storageBucket: "primaltrack-app.appspot.com",
  messagingSenderId: "305464807958",
  appId: "1:305464807958:web:48b1f37e95a169c19e9b37",
  measurementId: "G-R6672P9CPF"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    ConnectionComponent,
    HealthReportComponent,
    AchievementsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
