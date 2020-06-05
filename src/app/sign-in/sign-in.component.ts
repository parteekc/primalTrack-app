import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
    document.title = "Sign in";
    auth.user$.subscribe(data => {
      if(data)
        this.router.navigate(['/']);
    })
   }

  ngOnInit() {
  }

  async googleSignIn(){
    await this.auth.googleSignin();
  }

}
