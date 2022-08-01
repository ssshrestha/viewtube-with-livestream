import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void { }


  navigateToLogin() {
    this.route.navigate(['account/login']);
  }

  registerUser(registeredUser: NgForm) {

    let registeredUserDetails = registeredUser.value;

    if (registeredUser.value.confirmPassword === registeredUser.value.password) {
      this.loginService.registerUser(registeredUserDetails.email, registeredUserDetails.password, registeredUserDetails.allowStream);
      this.navigateToLogin();
    }
    else {
      window.alert("Password and Confirm Password does not Match.");
    }

    registeredUser.reset();
  }

}
