import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  signupForm: FormGroup;
  detailForm: FormGroup;
  user$: Observable<User> = this.auth.user$

  constructor(public fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {
    // First Step
    this.signupForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
      ]
      ],
      'userName': ['']
    });

  }

  // Using getters will make your code look pretty
  get email() { return this.signupForm.get('email') }
  get password() { return this.signupForm.get('password') }

  get catchPhrase() { return this.signupForm.get('userName') }


  // Step 1
  signup() {
    return this.auth.emailSignUp(this.email.value, this.password.value, this.signupForm.value);

  }


}