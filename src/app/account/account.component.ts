import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
