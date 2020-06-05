import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData;

  constructor(public auth: AuthService, public router: Router) { 
    document.title = "Home";
    auth.user$.subscribe(data => {
      if(data){
        this.userData = data;
        console.log("on home", data);
      }
      if(!data)
        this.router.navigate(['/']);
    })
  }

  ngOnInit() {
    console.log("on init home"); 
  }
  clickSignOut(){
    this.auth.signOut();
  }

}
