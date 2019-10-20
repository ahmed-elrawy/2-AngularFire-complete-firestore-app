import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { User } from 'src/app/core/user.model';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth: AuthService) { }
}