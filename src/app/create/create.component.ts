import {Component, OnInit} from '@angular/core';
import {AssoService} from '../services/item.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  itemForm !: FormGroup;

  constructor(private assoService: AssoService, private formBuilder: FormBuilder, private router: Router) {
    this.createFormItem();
  }

  ngOnInit(): void {
  }

  createFormItem() {
    this.assoService = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      etat: new FormControl(false),
    });
  }

  submitItem(): void {
    this.assoService.create(this.itemForm.value)
      .subscribe(res => {
          this.router.navigate(['/items']);
        },
        error => {
          console.log(error);
        });
  }
}
