import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EvenementService} from "../services/evenement.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  eventForm !: FormGroup;

  constructor(private evenementService: EvenementService, private formBuilder: FormBuilder, private router: Router) {
    this.createFormEvent();
  }

  ngOnInit(): void {
  }

  createFormEvent() {
    this.eventForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      etat: new FormControl(false),
      targetAmount: new FormControl('', Validators.required),
      accountInfo: new FormControl('', Validators.required)
    });
  }

  submitItem(): void {
    this.evenementService.create(this.eventForm.value).subscribe(data => {
      this.router.navigate(['/']);
    });
    }
}
