import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {

  validUser: boolean = false;

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginUser(loginDetails: NgForm){
    let loginUserDetails = loginDetails.value;

    this.loginService.validateUser(loginUserDetails.email, loginUserDetails.password)

    loginDetails.reset();

    if(this.loginService.isUserLoggedIn){
      this.validUser = true;
      this.route.navigate(['studio/upload'])
    }
  }

  navigateToRegister() {
    this.route.navigate(['account/register']);
  }
}
