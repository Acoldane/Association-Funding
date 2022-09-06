import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from "../../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  eventForm !: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
    this.createFormEvent();
  }

  ngOnInit(): void {
  }

  createFormEvent() {
    this.eventForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submitItem(): void {
    this.loginService.connect(this.eventForm.value).subscribe(data => {
      this.router.navigate(['/']);
    });
    }
}
