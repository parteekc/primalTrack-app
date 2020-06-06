import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  createSignInForm;
  errExist = false;
  errMsg = '';
  submitted = false;
  constructor(public auth: AuthService, private router: Router) {
    document.title = "Sign in";
    auth.user$.subscribe(data => {
      if(data)
        this.router.navigate(['/']);
    })
   }

  ngOnInit() {
    this.createSignInForm = new FormGroup({
      signin_email: new FormControl('', [Validators.required]),
      signin_password: new FormControl('', [Validators.required]),
    });

  }

  async googleSignIn(){
    await this.auth.googleSignin();
  }

    /**
   * for adding new tournament
   * @param {object} form_data 
   */
  emailSignIn(form_data){

    this.submitted = true;
    console.log("data", form_data);
    if(this.createSignInForm.invalid){
      return
    }

    this.auth.emailSignin(form_data.signin_email, form_data.signin_password)
        .catch(err => {
          console.log(err);
          if("auth/user-not-found" === err.code){ 
            this.errExist = true;
            this.errMsg = 'User Does not exist';
          }
          if("auth/wrong-password" === err.code){ 
            this.errExist = true;
            this.errMsg = 'Password is incorrect or you may have logged in from Google';
          }   
        });
  }

  get fc() {
    return this.createSignInForm.controls;
  }

}
