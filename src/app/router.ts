import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';
import { SuperSecretComponent } from './components/super-secret/super-secret.component';
import { CanReadGuard } from './core/can-read-guard.service';
import { PostsComponent } from './components/posts/posts.component';
import { AdminGuard } from './core/admin-guard.service';

export const appRouts: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'secret', component: SuperSecretComponent, canActivate: [AdminGuard] },
    { path: 'posts', component: PostsComponent, canActivate: [CanReadGuard] },

]