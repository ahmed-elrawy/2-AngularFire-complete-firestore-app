import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componenets
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
//module
import { MaterialModule } from './material/material.module';
import { RouterModule, Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//fire base 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { appRouts } from './router';
import { environment } from 'src/environments/environment';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SuperSecretComponent } from './components/super-secret/super-secret.component';
import { PostsComponent } from './components/posts/posts.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    SuperSecretComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
