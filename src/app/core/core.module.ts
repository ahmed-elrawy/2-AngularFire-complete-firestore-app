import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { CanReadGuard } from './can-read-guard.service';
import { AdminGuard } from './admin-guard.service';



@NgModule({
  imports: [
    CommonModule
  ],

  providers: [AuthService, AdminGuard, CanReadGuard]

})
export class CoreModule { }
