import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserLoggedIn: boolean = false;

  registeredEmail!: string;
  registeredPassword!: string;
  streamingEnabled !: boolean;

  registerUser(email: string, password: string, streamStatus: boolean) {
    this.registeredEmail = email;
    this.registeredPassword = password;
    this.streamingEnabled = streamStatus;
  }

  validateUser(email: string, password: string) {
    if (this.registeredEmail === email && this.registeredPassword === password) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
      window.alert("Incorrect Email and Password.")
    }
  }
}
