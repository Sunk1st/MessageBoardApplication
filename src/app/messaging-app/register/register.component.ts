import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from './../authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading = false;

  constructor(public authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authorizationService.createUser(form.value.email, form.value.password);
  }

}
