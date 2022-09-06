import { Component, OnInit } from '@angular/core';
import {Asso} from '../../../models/asso.model';
import {ActivatedRoute} from '@angular/router';
import {AssoService} from '../../../services/asso.service';

@Component({
  selector: 'app-assoc-details',
  templateUrl: './assoc-details.component.html',
  styleUrls: ['./assoc-details.component.css']
})
export class AssocDetailsComponent implements OnInit {

  assoId: number = Number(this.router.snapshot.paramMap.get('id'));
  association?: Asso;

  constructor(private router: ActivatedRoute, private assocService: AssoService) { }

  ngOnInit(): void {
    this.assocService.getAssoById(this.assoId).subscribe(res => {
      this.association = res;
    });
  }

}
