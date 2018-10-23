import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagingAppComponent } from './messaging-app/messaging-app.component';
import { HeaderComponent } from './messaging-app/header/header.component';
import { PostCreateComponent } from './messaging-app/post-create/post-create.component';
import { PostListComponent } from './messaging-app/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagingAppComponent,
    HeaderComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
