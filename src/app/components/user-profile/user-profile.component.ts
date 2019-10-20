import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    console.log(this.auth.user$)
  }

}
