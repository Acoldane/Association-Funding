import {Component, OnInit} from '@angular/core';
import {AssoService} from '../services/asso.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EventService} from "../services/event.service";
import {EvenementService} from "../services/evenement.service";

@Component({
  selector: 'app-create-assoc',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateAssocComponent implements OnInit {

  assocForm !: FormGroup;

  constructor(private assocService: AssoService, private formBuilder: FormBuilder, private router: Router) {
    this.createFormEvent();
  }

  ngOnInit(): void {
  }

  createFormEvent() {
    this.assocForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      etat: new FormControl(false),
    });
  }

  submitItem(): void {
    this.assocService.create(this.assocForm.value)
      .subscribe(res => {
          this.router.navigate(['/demandes']);
        },
        error => {
          console.log(error);
        });
  }
}
