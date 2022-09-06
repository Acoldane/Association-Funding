import { Component, OnInit } from '@angular/core';
import {User, UserType} from "../models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user?: User
  userType = UserType

  constructor() { }

  ngOnInit(): void {
  }

}
