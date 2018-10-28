import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MessagingAppComponent } from './messaging-app/messaging-app.component';
import { HeaderComponent } from './messaging-app/header/header.component';
import { PostCreateComponent } from './messaging-app/post-create/post-create.component';
import { PostListComponent } from './messaging-app/post-list/post-list.component';
import { RegisterComponent } from './messaging-app/register/register.component';
import { LoginComponent } from './messaging-app/login/login.component';
import { AuthInterceptor } from './messaging-app/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MessagingAppComponent,
    HeaderComponent,
    PostCreateComponent,
    PostListComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule, MatPaginatorModule, FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
