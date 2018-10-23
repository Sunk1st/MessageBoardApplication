import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './messaging-app/post-list/post-list.component';
import { PostCreateComponent } from './messaging-app/post-create/post-create.component';

const appRoutes: Routes = [
  { path: '', component: PostListComponent},
  { path: 'list', component: PostListComponent},
  { path: 'create', component: PostCreateComponent},
  { path: 'edit/:postId', component: PostCreateComponent}
];

@NgModule({
  exports: [ RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
