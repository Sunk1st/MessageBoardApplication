import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './messaging-app/post-list/post-list.component';
import { PostCreateComponent } from './messaging-app/post-create/post-create.component';
import { LoginComponent } from './messaging-app/login/login.component';
import { RegisterComponent } from './messaging-app/register/register.component';
import { AuthGuard } from './messaging-app/auth.guard';

const appRoutes: Routes = [
  { path: '', component: PostListComponent},
  { path: 'list', component: PostListComponent},
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard]},
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  exports: [ RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
