import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  submitted: Boolean = false;
  errExist = false;
  errMsg = '';

  createSignUpForm;

  constructor(public auth: AuthService, private router: Router) {
    document.title = "Sign Up";
    auth.user$.subscribe(data => {
      if(data)
        this.router.navigate(['/']);
    })
   }

  ngOnInit() {
    this.createSignUpForm = new FormGroup({
      signup_name: new FormControl('', [Validators.required]),
      signup_email: new FormControl('', [Validators.required, Validators.email]),
      signup_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  /**
   * for adding new tournament
   * @param {object} form_data 
   */
  emailSignUp(form_data){
    this.submitted = true;
    if(this.createSignUpForm.invalid){
      console.log(this.fc);      
      return
    }
    console.log("data", form_data);
    this.auth.emailSignUp(form_data.signup_name, form_data.signup_email, form_data.signup_password)
        .catch((err)=>{
          if("auth/email-already-in-use" === err.code){ 
            this.errExist = true;
            this.errMsg = 'Email account already registered';
          }
        });
  }

  get fc() {
    return this.createSignUpForm.controls;
  }


}
