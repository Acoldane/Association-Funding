import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  eventForm !: FormGroup;
  email: string | null = '';
  signUpFromRedirection: boolean = false;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createFormEvent();
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.email = params.email;
          if(this.email != null){
            this.signUpFromRedirection = true;
          }
        }
      );

    if(this.signUpFromRedirection){
      this.createFormEventDisabled();}
    else{
      this.createFormEvent();
    }
  }

  createFormEvent() {
    this.eventForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      userType: new FormControl('USER'),
    });
  }
  createFormEventDisabled() {
    this.eventForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      email: new FormControl({value: this.email, disabled: true}, Validators.compose([Validators.email, Validators.required])),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      userType: new FormControl('USER'),
    });
  }

  submitItem(): void {
    if(this.signUpFromRedirection){
      this.eventForm.value.userType = 'ASSOC';
      this.eventForm.value.email = this.email;
      this.loginService.createAssoAccount(this.eventForm.value).subscribe(res => {
        this.router.navigate(['/']);
      });
    }else {
      this.loginService.create(this.eventForm.value).subscribe(data => {
        this.router.navigate(['/']);
      });
    }

    }



}
